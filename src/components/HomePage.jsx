import React from 'react';
import ChatbotComponent from './ChatbotComponent';

const HomePage = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-4">
        <img src="/src/assets/banner.jpg" alt="Home" className="w-full h-auto" />
        <ChatbotComponent />
      </div>
    </div>
  );
}

export default HomePage;


