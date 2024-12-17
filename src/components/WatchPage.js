import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsList from "./CommentsList";
import commentsData from "../utils/commentsData";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="absolute">
      <div className="p-2 m-2">
        <iframe
          width="1200"
          height="600"
          src={
            "https://www.youtube.com/embed/" +
            searchParam.get("v") +
            "?autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="mt-2 font-bold text-2xl">
          Comments:
          <CommentsList comments={commentsData}/>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
