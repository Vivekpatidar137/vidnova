const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col w-80 bg-white rounded-lg shadow-md m-4 animate-pulse"
          >
            {/* Thumbnail */}
            <div className="w-full h-48 bg-gray-300 rounded-t-lg"></div>

            {/* Content */}
            <div className="flex p-4">
              {/* Channel Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full"></div>

              {/* Text */}
              <div className="ml-4 flex-grow space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
