// src/components/GeminiChat.tsx
import { useState } from "react";
import { getGeminiResponse } from "../services/gemini";

export default function GeminiChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await getGeminiResponse(prompt);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-xl bg-white shadow max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded-md"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Gemini anything..."
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          type="submit"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-3 border bg-gray-100 rounded">{response}</div>
      )}
    </div>
  );
}
