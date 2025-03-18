const VideoCard = ({ info, layout }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, liveBroadcastContent } =
    snippet || {};
  const { viewCount } = statistics || {};

  const formatViews = (views) => {
    if (!views) return "";
    if (views >= 1e9) return (views / 1e9).toFixed(1) + "B views";
    if (views >= 1e6) return (views / 1e6).toFixed(1) + "M views";
    if (views >= 1e3) return (views / 1e3).toFixed(1) + "K views";
    return `${views} views`;
  };

  const isVideoLive = liveBroadcastContent === "live";
  const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));

  if (layout === "horizontal") {
    return (
      <div className="flex items-start w-full rounded-xl p-2">
        <div className="relative flex-shrink-0">
          <img
            className="w-40 h-24 rounded-xl object-cover"
            src={thumbnails?.medium?.url}
            alt="thumbnail"
          />
          {isVideoLive && (
            <div className="absolute bottom-1 left-1 bg-red-600 text-white text-xs px-2 py-1 rounded-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1 animate-pulse"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" fill="red" />
                <circle cx="12" cy="12" r="6" fill="white" />
                <circle cx="12" cy="12" r="4" fill="red" />
              </svg>
              LIVE
            </div>
          )}
        </div>
        <div className="ml-3 flex-grow min-w-0">
          <h3 className="text-base font-medium line-clamp-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {channelTitle}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {formatViews(viewCount)}
          </div>
        </div>
      </div>
    );
  }

  // Vertical layout
  return (
    <div className="flex flex-col w-full rounded-xl p-2">
      <div className="relative">
        <img
          className="w-full rounded-xl aspect-video object-cover"
          src={thumbnails?.high?.url}
          alt="thumbnail"
        />
        {isVideoLive && (
          <div className="absolute bottom-1 left-1 bg-red-600 text-white text-xs px-2 py-1 rounded-md flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1 animate-pulse"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="red" />
              <circle cx="12" cy="12" r="6" fill="white" />
              <circle cx="12" cy="12" r="4" fill="red" />
            </svg>
            LIVE
          </div>
        )}
      </div>
      <div className="flex mt-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
          <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
            {randomLetter}
          </span>
        </div>
        <div className="flex-grow min-w-0 ml-3">
          <h3 className="text-base font-medium line-clamp-2 mb-1 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {channelTitle}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {formatViews(viewCount)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
