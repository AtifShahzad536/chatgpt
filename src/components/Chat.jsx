import React, { useState } from 'react';
import axios from 'axios';
import { FiSend } from 'react-icons/fi';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
 const check11=localStorage.getItem('userID')
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('https://chatgpt-backend-vfx0.onrender.com/openapi', { prompt: input,check11 });
      const botMessage = { role: 'assistant', content: res.data.content };
      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'assistant', content: '❌ Error getting response.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-100 text-gray-900 flex items-center justify-center px-4 py-10 mt-16">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6 flex flex-col h-[85vh] border border-gray-300">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6 tracking-wide">
          💬 ChatGPT Clone
        </h1>

        <div className="flex-1 overflow-y-auto space-y-4 px-1 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`px-4 py-3 rounded-2xl text-sm max-w-xs break-words shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-blue-100 text-blue-800 rounded-br-none'
                    : 'bg-green-100 text-green-800 rounded-bl-none'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <p className="text-sm italic text-blue-500 text-center">Thinking...</p>
          )}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 bg-gray-100 text-gray-800 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 ring-blue-400 placeholder-gray-500 transition"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 p-3 rounded-xl text-white transition active:scale-95"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;