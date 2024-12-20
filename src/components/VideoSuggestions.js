import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { VIDEO_SUGGESTIONS, API_KEY } from "../utils/constant";

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
        <VideoCard key={video.id.videoId} info={video} />
      ))}
    </div>
  );
};

export default VideoSuggestions;
