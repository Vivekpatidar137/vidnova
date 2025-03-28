import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { VIDEO_SUGGESTIONS, API_KEY } from "../utils/constant";
import { Link } from "react-router-dom";

const VideoSuggestions = ({ videoId }) => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async () => {
    try {
      const response = await fetch(
        `${VIDEO_SUGGESTIONS}${videoId}&key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch video suggestions");
      }
      const json = await response.json();
      setSuggestions(json.items || []);
    } catch (error) {
      console.error("Error fetching video suggestions:", error);
    }
  };

  useEffect(() => {
    if (videoId) {
      getSuggestions();
    }
  }, [videoId]);

  return (
    <div className="flex flex-col gap-4">
      {suggestions.map((video) => (
        <Link
          key={video.id.videoId}
          to={{
            pathname: "/watch",
            search: `?v=${video.id.videoId}`,
            state: { videoInfo: video },
          }}
          className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200"
        >
          <VideoCard info={video} layout="horizontal" />
        </Link>
      ))}
    </div>
  );
};

export default VideoSuggestions;
