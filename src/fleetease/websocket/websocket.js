// WebSocketContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import apiConfig from '../../fleetease/configs'
const WebSocketContext = createContext(null);


export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    console.log(apiConfig.CHAT_API)
    const ws = new WebSocket(apiConfig.CHAT_API);

    ws.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'message') {
        // Handle incoming messages here
        console.log('Received message:', data);
      }
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};
