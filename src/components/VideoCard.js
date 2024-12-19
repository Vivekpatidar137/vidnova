const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet || {};
  const { viewCount } = statistics || {}; // Safely destructure viewCount

  const formatViews = (views) => {
    if (!views) return "N/A"; // Handle cases where viewCount is not available
    if (views >= 1e9) return (views / 1e9).toFixed(1) + "B";
    if (views >= 1e6) return (views / 1e6).toFixed(1) + "M";
    if (views >= 1e3) return (views / 1e3).toFixed(1) + "K";
    return views;
  };

  return (
    <div className="flex flex-col w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 m-4">
      {thumbnails?.high?.url && (
        <img
          className="w-full h-48 rounded-t-lg object-cover"
          src={thumbnails.high.url}
          alt="Video Thumbnail"
        />
      )}
      <div className="flex p-4">
        {/* Channel Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        </div>

        {/* Video Info */}
        <div className="ml-4 flex-grow">
          <h1 className="text-base font-semibold text-gray-900 line-clamp-2">
            {title || "No title available"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {channelTitle || "No channel info"}
          </p>
          <p className="text-sm text-gray-500">
            {formatViews(viewCount)} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
