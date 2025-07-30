import React, { useState } from 'react';
import axios from 'axios';
import { FiCode, FiZap } from 'react-icons/fi';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // ← Switch to light theme

const CodeGenerationPage = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerateCode = async () => {
    try {
      const res = await axios.post('http://localhost:3002/code', { prompt });
      setGeneratedCode(res.data.code);
    } catch (err) {
      console.error(err);
      alert('Code generation failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl border border-gray-300">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2 tracking-tight">
          <FiCode className="w-6 h-6 text-blue-600" />
          Code Generator
        </h2>

        <textarea
          className="border border-gray-300 rounded-lg p-4 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-gray-50 text-gray-800 placeholder-gray-500"
          placeholder="Describe what you want the code to do..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-blue-600 active:scale-95 transition"
          onClick={handleGenerateCode}
        >
          <FiZap className="w-5 h-5" />
          Generate Code
        </button>

        {generatedCode && (
          <div className="mt-6 border border-gray-300 rounded-lg overflow-auto bg-gray-50">
            <h3 className="text-lg font-semibold text-blue-700 bg-blue-100 px-4 py-2 rounded-t-lg border-b border-gray-300">
              🧩 Generated Code:
            </h3>
            <SyntaxHighlighter
              language="javascript"
              style={atomOneLight}
              customStyle={{
                borderRadius: '0 0 0.5rem 0.5rem',
                padding: '1rem',
                marginTop: '-1px',
                background: '#f9f9f9',
              }}
              wrapLines={true}
              showLineNumbers={true}
            >
              {generatedCode}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeGenerationPage;