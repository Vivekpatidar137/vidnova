const VideoCard = ({ info, layout }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, liveBroadcastContent } =
    snippet || {};
  const { viewCount } = statistics || {}; // Safely destructure viewCount

  const formatViews = (views) => {
    if (views >= 1e9) return (views / 1e9).toFixed(1) + "B";
    if (views >= 1e6) return (views / 1e6).toFixed(1) + "M";
    if (views >= 1e3) return (views / 1e3).toFixed(1) + "K";
    return views;
  };

  // Check if the video is live based on the broadcast content
  const isVideoLive = liveBroadcastContent === "live";

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
          {viewCount && (
            <p className="text-sm text-gray-500 mt-1">
              {formatViews(viewCount)} views
            </p>
          )}
          {isVideoLive && (
            <div className="flex items-center bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-2 w-fit shadow-lg ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 animate-pulse"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" fill="red" />
                <circle cx="12" cy="12" r="6" fill="white" />
                <circle cx="12" cy="12" r="4" fill="red" />
              </svg>
              LIVE
            </div>
          )}
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
          {viewCount && (
            <p className="text-sm text-gray-500">
              {formatViews(viewCount)} views
            </p>
          )}

          {isVideoLive && (
            <div className="flex bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mt-2 w-fit shadow-lg -ml-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 animate-pulse"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" fill="red" />
                <circle cx="12" cy="12" r="6" fill="white" />
                <circle cx="12" cy="12" r="4" fill="red" />
              </svg>
              LIVE
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
