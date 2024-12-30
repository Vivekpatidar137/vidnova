import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateName } from "../utils/helper";

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
    <div className="lg:w-[450px] w-full lg:ml-6 mt-6 bg-white rounded-lg shadow-lg flex flex-col h-[500px] p-4 border border-gray-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Live Chat</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 bg-gray-100 rounded-lg p-3 flex flex-col-reverse">
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
          className="w-full bg-gray-100 text-sm text-gray-800 rounded-l-lg p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
