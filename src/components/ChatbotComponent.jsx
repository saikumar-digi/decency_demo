import React, { useEffect, useRef } from 'react';

const ChatbotComponent = () => {
  const chatbotRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/thub-embed/dist/web.js';
    script.onload = () => {
      if (window.Chatbot) {
        window.Chatbot.init({
          chatflowid: '55596367-3ce8-4d9d-9b78-3d2d1636de3c',
          apiHost: 'https://demo.thub.tech',
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={chatbotRef}></div>;
};

export default ChatbotComponent;
