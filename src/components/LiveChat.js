import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateName } from "../utils/helper";
import { RiSendPlaneFill, RiEmojiStickerLine } from "react-icons/ri"; // Icons for send and emoji
import Picker from "emoji-picker-react"; // Emoji picker

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
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
      setShowEmojiPicker(false); // Close emoji picker after sending
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };

  return (
    <div className="lg:w-[450px] w-full lg:ml-6 mt-6 bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col h-[500px] p-4 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Live Chat
        </h3>
        <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Live
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <LiveMessage
            key={index}
            name={message.name}
            message={message.message}
            timestamp={new Date().toLocaleTimeString()} // Add timestamp
          />
        ))}
      </div>

      {/* Input */}
      <form className="mt-4 flex items-center relative" onSubmit={handleSubmit}>
        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="absolute bottom-12 left-0 z-10">
            <Picker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        {/* Emoji Button */}
        <button
          type="button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="p-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
        >
          <RiEmojiStickerLine className="w-5 h-5" />
        </button>

        {/* Input Field */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="w-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />

        {/* Send Button */}
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <RiSendPlaneFill className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
