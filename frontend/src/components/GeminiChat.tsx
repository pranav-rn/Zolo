// src/components/GeminiChat.tsx
import { useState } from "react";
import { getGeminiResponse } from "../services/gemini";
import { Send } from "lucide-react";
import zoloImage from "../assets/Zolo.png";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function GeminiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");
    setLoading(true);

    try {
      // Get Gemini response
      const response = await getGeminiResponse(newMessage);

      // Add bot message
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting Gemini response:", error);
      // Add error message
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I apologize, but I encountered an error. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Messages */}
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-2 ${
              message.sender === "user"
                ? "flex-row-reverse space-x-reverse"
                : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${
                message.sender === "user" ? "bg-blue-100" : ""
              }`}
            >
              {message.sender === "user" ? (
                <Send className="w-5 h-5 text-blue-600" />
              ) : (
                <img
                  src={zoloImage}
                  alt="Zolo"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div
              className={`max-w-lg rounded-lg p-3 ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white shadow-md"
              }`}
            >
              <p>{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "user" ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="mt-4 flex space-x-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ask Gemini anything..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
        >
          <span>{loading ? "Thinking..." : "Send"}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
