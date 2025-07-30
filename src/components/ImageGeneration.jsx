import React, { useState } from "react";
import axios from "axios";
import { FiImage, FiZap } from "react-icons/fi";

function ImageGeneration() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return alert("Please enter a prompt");

    setLoading(true);
    setImageUrl("");

    try {
      const res = await axios.post("http://localhost:3002/image", { prompt });
      setImageUrl(res.data.image);
      alert(res.error);
    } catch (err) {
      console.error(err.response.data.error);
      alert(err.response.data.error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-800 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-gray-300">
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-6 text-blue-600 tracking-tight">
          <FiImage className="w-7 h-7 text-blue-500" />
          Image Generation Intro
        </h1>

        <input
          type="text"
          placeholder="Describe your image idea..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4 border border-gray-300"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition disabled:opacity-50 active:scale-95"
        >
          <FiZap className="w-5 h-5" />
          {loading ? "Generating..." : "Generate Image"}
        </button>

        {imageUrl && (
          <div className="mt-10 text-center">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">🎨 Your Generated Image:</h2>
            <img
              src={imageUrl}
              alt="Generated"
              className="w-[400px] rounded-lg shadow-md border border-gray-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageGeneration;