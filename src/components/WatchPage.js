import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsList from "./CommentsList";
import commentsData from "../utils/commentsData";
import VideoSuggestions from "./VideoSuggestions";
import LiveChat from "./LiveChat";
import VideoInteractionControls from "./VideoInteractionControls";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const videoId = searchParam.get("v");
  const videoInfo = location.state?.videoInfo;

  const isVideoLive = videoInfo?.snippet?.liveBroadcastContent === "live";

  // Reset scroll position to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 relative bg-white dark:bg-gray-900">
      {/* Video Section */}
      <div className="flex-1">
        <div className="max-w-screen-lg mx-auto">
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* Video Interaction Controls */}
          <VideoInteractionControls videoId={videoId} />
        </div>
        <div className="mt-6 max-w-screen-lg mx-auto">
          <h2 className="font-semibold text-xl sm:text-2xl mb-4 text-gray-800 dark:text-white">
            Comments:
          </h2>
          <CommentsList comments={commentsData} />
        </div>
      </div>

      {/* Conditional Rendering based on live status */}
      {isVideoLive ? (
        <div className="mr-6">
          <h2 className="font-semibold text-xl mb-6 text-gray-800 dark:text-white">
            Live
          </h2>
          <LiveChat />
        </div>
      ) : (
        <div className="lg:w-[450px] w-full lg:ml-6 mt-6">
          <h2 className="font-semibold text-xl mb-6 text-gray-800 dark:text-white">
            Up Next
          </h2>
          <VideoSuggestions videoId={videoId} />
        </div>
      )}
    </div>
  );
};

export default WatchPage;
