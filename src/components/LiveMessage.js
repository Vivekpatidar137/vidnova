const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex items-start space-x-3 animate-fade-in">
      {/* Profile Picture */}
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm text-white font-bold shadow-md">
        {name.charAt(0).toUpperCase()}
      </div>

      {/* Message Content */}
      <div className="flex-1">
        <div className="text-sm font-semibold text-gray-800">{name}</div>
        <div className="text-sm text-gray-600 mt-1 bg-gray-100 p-2 rounded-lg shadow-sm">
          {message}
        </div>
      </div>
    </div>
  );
};

export default LiveMessage;
