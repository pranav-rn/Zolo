import { useState } from "react";
import { User } from "lucide-react";
import GeminiChat from "../GeminiChat";
import zoloImage from "../../assets/Zolo.png";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Dashboard = () => {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Zolo, your friendly AI companion. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-blue-600">Zolo</h2>
          <p className="text-sm text-gray-600">Your AI Friend</p>
        </div>
        <div className="border-t border-gray-200">
          <div className="p-4">
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              New Chat
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                  <User className="w-5 h-5 text-blue-600" />
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
                    message.sender === "user"
                      ? "text-blue-100"
                      : "text-gray-500"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          <GeminiChat />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
