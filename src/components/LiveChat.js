import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateName } from "../utils/helper";
import { RiSendPlaneFill } from "react-icons/ri";

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const chatMessages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({ name: generateName(), message: generateMessage(30) })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(addMessage({ name: "Vivek", message }));
      setMessage("");
    }
  };

  return (
    <div className="lg:w-[450px] w-full lg:ml-6 mt-6 bg-white rounded-xl shadow-2xl flex flex-col h-[500px] p-4 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Live Chat</h3>
        <span className="flex items-center text-sm text-gray-500">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Live
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 bg-gray-50 rounded-lg p-3 flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <LiveMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>

      {/* Input */}
      <form className="mt-4 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="w-full bg-gray-100 text-sm text-gray-800 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 flex items-center justify-center"
        >
          <RiSendPlaneFill className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
