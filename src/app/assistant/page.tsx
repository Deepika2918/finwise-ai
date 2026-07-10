"use client";

import { useState } from "react";

export default function AssistantPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    if (!question.trim()) return;

    setResponse(
      "FinWise AI: Based on current market trends, diversification and long-term investing are generally considered important strategies."
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        🤖 FinWise AI Assistant
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl max-w-3xl">
        <input
          type="text"
          placeholder="Ask FinWise AI anything about finance..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-4 rounded-lg bg-slate-800 outline-none"
        />

        <button
          onClick={handleAsk}
          className="mt-4 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Ask AI
        </button>

        {response && (
          <div className="mt-6 bg-slate-800 p-4 rounded-lg">
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}