import React, { useState } from 'react';
import axios from 'axios';
import { FiSend } from 'react-icons/fi';

const SummarizationPage = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    try {
      const res = await axios.post('https://chatgpt-backend-vfx0.onrender.com/summary', { text });
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      alert('Summarization failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-800 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl border border-gray-300 transition-all">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 tracking-tight">
          🧠 Smart Text Summarizer
        </h2>
        <textarea
          className="border border-gray-300 rounded-lg p-4 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-gray-50 text-gray-800 placeholder:text-gray-500"
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-blue-600 active:scale-95 transition"
          onClick={handleSummarize}
        >
          <FiSend className="w-5 h-5" />
          Summarize
        </button>

        {summary && (
          <div className="mt-6 bg-gray-50 border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">📝 Summary:</h3>
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummarizationPage;