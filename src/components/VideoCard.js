const VideoCard = ({ info, layout }) => {
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

  if (layout === "horizontal") {
    return (
      <div className="flex items-center w-full bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
        {thumbnails?.medium?.url && (
          <img
            className="w-36 h-24 rounded-lg object-cover flex-shrink-0"
            src={thumbnails.medium.url}
            alt="Video Thumbnail"
          />
        )}
        <div className="ml-6 flex-grow">
          <h1 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {title || "No title available"}
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            {channelTitle || "No channel info"}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {formatViews(viewCount)} views
          </p>
        </div>
      </div>
    );
  }

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
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        </div>
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
