import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { user: 'Bot', text: 'Welcome to ChatApp!' }
  ]);
  const [input, setInput] = useState('');
  const messageEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() === '') return;
    const newMessage = { user: 'You', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    // Simulated bot reply
    setTimeout(() => {
      const botReply = { user: 'Bot', text: `You said: ${newMessage.text}` };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <h2>💬 Chat App</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`msg ${msg.user === 'You' ? 'you' : 'bot'}`}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
