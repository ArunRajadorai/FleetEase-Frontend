import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { CiMinimize1 } from "react-icons/ci";
import './ChatPopup.scss'; // Add your styles here
import apiConfig from '../../configs';
const ChatPopup = ({ sellerId, onClose }) => {

        const [messages, setMessages] = useState([]);
        const [newMessage, setNewMessage] = useState('');
        const [isMinimized, setIsMinimized] = useState(false);
        const [socket, setSocket] = useState(null);
        let buyerId = parseInt(sessionStorage.getItem('userId'), 10);

        console.log("SellerID :: ",{sellerId})
        useEffect(() => {
          // let buyerId = parseInt(sessionStorage.getItem('userId'), 10);
          // buyerId=10;
          // Initialize WebSocket connection
          const ws = new WebSocket(`${apiConfig.CHAT_API}?client_id=${buyerId}`);
          setSocket(ws);

          // Handle incoming messages
          ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data)
            setMessages(prevMessages => [
              ...prevMessages,
              { from: data.from, text: data.message }
            ]);
          };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
          // Clean up WebSocket on component unmount
          return () => {
            ws.close();
          };
        }, []);

        const handleSendMessage = (e) => {
          e.preventDefault();
          if (socket && newMessage.trim()) {
            // const buyerId = parseInt(sessionStorage.getItem('userId'), 10);

          const messageData = {
            type: 'message',
            targetUserId: sellerId, // Seller ID is sent here
            from: buyerId,
            message: newMessage
          };

          // Log the message data to the console
          console.log('Sending message data:', messageData);

          // Send the message through the WebSocket
          socket.send(JSON.stringify(messageData));

            setMessages(prevMessages => [
              ...prevMessages,
              { from: 'me', text: newMessage }
            ]);
            setNewMessage('');
          }
        };

  return (
    <div className={`chat-popup ${isMinimized ? 'minimized' : ''}`}>
      <div className="chat-header">
        <h5 className="chat-title">Chat with Seller</h5>
        <div className="chat-controls">
          <button onClick={() => setIsMinimized(!isMinimized)}>
            <CiMinimize1 />
          </button>
          <button onClick={onClose}>
            <IoClose />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="chat-body">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.from === 'me' ? 'chat-message-sent' : 'chat-message-received'}`}>
                  {msg.text}
                </div>
              ))
            ) : (
              <p className="chat-placeholder">No messages yet</p>
            )}
          </div>

          <div className="chat-footer">
            <form onSubmit={handleSendMessage}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button className="send-button" type="submit">Send</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatPopup;
