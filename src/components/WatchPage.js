import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));
  return (
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
    </div>
  );
};

export default WatchPage;
