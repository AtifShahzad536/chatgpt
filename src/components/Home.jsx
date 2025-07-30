import React from 'react';
import { Link } from 'react-router-dom';
import { FiMessageSquare, FiImage, FiCode, FiFileText } from 'react-icons/fi';

const Home = () => {
  const tools = [
    {
      label: 'Chat',
      icon: <FiMessageSquare className="w-7 h-7 text-blue-500" />,
      path: '/chat',
      bg: 'from-blue-100 to-blue-200',
    },
    {
      label: 'Image Generation',
      icon: <FiImage className="w-7 h-7 text-purple-500" />,
      path: '/image-gen',
      bg: 'from-purple-100 to-purple-200',
    },
    {
      label: 'Code Generation',
      icon: <FiCode className="w-7 h-7 text-green-500" />,
      path: '/code-gen',
      bg: 'from-green-100 to-green-200',
    },
    {
      label: 'Summarize',
      icon: <FiFileText className="w-7 h-7 text-yellow-500" />,
      path: '/summarize',
      bg: 'from-yellow-100 to-yellow-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">
        {tools.map((tool) => (
          <Link to={tool.path} key={tool.label}>
            <div
              className={`bg-gradient-to-br ${tool.bg} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.03] active:scale-95 border border-gray-200`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-200">
                  {tool.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-700">{tool.label}</h2>
                <p className="text-sm text-gray-500">Explore {tool.label.toLowerCase()} capabilities</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;