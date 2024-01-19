// ChatBox.js
import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <div className="chat-box">

      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
            {message.text}
          </div>
        ))}

      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
