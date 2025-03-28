const LiveMessage = ({ name, message, timestamp }) => {
  return (
    <div className="flex items-start space-x-3 animate-fade-in">
      {/* Profile Picture */}
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm text-white font-bold shadow-md">
        {name.charAt(0).toUpperCase()}
      </div>

      {/* Message Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-800 dark:text-white">
            {name}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {timestamp}
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg shadow-sm">
          {message}
        </div>
      </div>
    </div>
  );
};

export default LiveMessage;
