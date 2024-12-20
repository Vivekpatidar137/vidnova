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
    <div className="flex flex-row p-4">
      {/* Video Section */}
      <div className="flex-1 pr-4">
        <iframe
          width="100%"
          height="600"
          src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="mt-4 font-bold text-2xl">
          Comments:
          <CommentsList comments={commentsData} />
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="w-[350px]">
        <VideoSuggestions videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
