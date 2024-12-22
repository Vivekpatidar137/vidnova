import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsList from "./CommentsList";
import commentsData from "../utils/commentsData";
import VideoSuggestions from "./VideoSuggestions";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParam.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
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
        </div>
        <div className="mt-6 max-w-screen-lg mx-auto">
          <h2 className="font-semibold text-xl sm:text-2xl mb-4">Comments:</h2>
          <CommentsList comments={commentsData} />
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="lg:w-[450px] w-full lg:ml-6 mt-6">
        <h2 className="font-semibold text-xl mb-6">Up Next</h2>
        <VideoSuggestions videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
