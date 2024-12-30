const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex items-start space-x-2">
      {/* Profile Picture */}
      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm text-white">
        {name.charAt(0).toUpperCase()}
      </div>

      {/* Message Content */}
      <div className="flex-1">
        <div className="text-sm font-semibold text-gray-800">{name}</div>
        <div className="text-sm text-gray-600 mt-1">{message}</div>
      </div>
    </div>
  );
};

export default LiveMessage;
