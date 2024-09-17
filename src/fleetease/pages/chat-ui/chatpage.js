import React, { useState, useEffect } from 'react';
import ChatPopup from './../../components/chat/ChatPopup'; // Assuming ChatPopup is the component you've created
import apiConfig from '../../configs';
import './chatpage.scss';
import axios from 'axios';
import PageHeader from '../../../layouts/page-header/PageHeader';
import { Container, Card } from 'react-bootstrap'; // Import Card from react-bootstrap

const ChatPage = () => {
    const [chats, setChats] = useState([]); // List of chat conversations
    const [activeChat, setActiveChat] = useState(null); // Currently active chat
    const [socket, setSocket] = useState(null);
    const buyerId = sessionStorage.getItem('userId');
    console.log("SessionId :",buyerId)
    //const buyerId = 10; // Hardcoded buyerId for now

    useEffect(() => {
        // Fetch the list of chats for the buyer from the server using Axios
        axios.get(`${apiConfig.API_BASE_URL}/communicate/chats/${buyerId}`)
            .then(response => {
                console.log("Data", response.data.data)
                setChats(response.data);
            })
            .catch(error => {
                console.error('Error fetching chats:', error);
            });

        // Initialize WebSocket connection for real-time messages
        const ws = new WebSocket(`${apiConfig.CHAT_API}`);
        setSocket(ws);

        // Handle incoming messages
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('Incoming message:', data);
            // Update the relevant chat with the new message
            setChats(prevChats => prevChats.map(chat =>
                chat.seller_id === data.from || chat.buyer_id === data.from
                    ? { ...chat, messages: [...chat.messages, { from: data.from, text: data.message }] }
                    : chat
            ));
        };

        return () => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };
    }, [buyerId]);

        const openChat = (chat) => {
            setActiveChat(chat);
        };
        const getSellerId = () => {
                    if (activeChat) {
                        console.log("ID SESSION  BUYER SELLER", activeChat.buyer_id, buyerId, activeChat.seller_id);
                        return activeChat.seller_id === buyerId ? activeChat.buyer_id : activeChat.seller_id;
                    }
                    return null;
                };
    return (
        <div className="site-content">
            <PageHeader
                title="Chat Page"
                breadCrumbItems={[
                    { label: 'Home', path: '/' },
                    { label: 'Chat', path: '/chat', active: true },
                ]}
            />
            <div className="content-wrapper">
                <section className="blog section-ptb">
                    <Container>
                        <Card className="chat-content-card">
                            <Card.Body>
                                <div className="chat-content">
                                    <div className="chat-list">
                                        <h3>Your Chats</h3>
                                        {chats.length > 0 ? (
                                            chats.map(chat => (
                                                <div key={chat.seller_id} className="chat-list-item" onClick={() => openChat(chat)}>
                                                    <h6>Chat with Seller ID: {chat.seller_id}</h6>
                                                    <p>Last message: {chat.last_message || 'No messages yet'}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No chats available</p>
                                        )}
                                    </div>
                                    <div className="chat-container">
                                        {activeChat ? (
                                            <ChatPopup
                                                sellerId={getSellerId()} // Pass the opposite ID
                                                onClose={() => setActiveChat(null)}
                                            />
                                        ) : (
                                            <p>Select a chat to start messaging</p>
                                        )}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Container>
                </section>
            </div>
        </div>
    );
};

export default ChatPage;
