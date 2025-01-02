import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { API_KEY, YouTUBE_URL } from "../utils/constant";
import ButtonList from "./ButtonList";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const searchResults = useSelector((state) => state.search.searchResults);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    try {
      const response = await fetch(YouTUBE_URL + API_KEY);
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const json = await response.json();
      setVideos(json.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const videoData = searchResults.length > 0 ? searchResults : videos;

  return (
    <div className="col-span-11 w-full max-w-screen overflow-hidden">
      <ButtonList />
      {!videoData.length ? (
        <Shimmer />
      ) : (
        <div
          className={`grid gap-4 ${
            isMenuOpen
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5"
          }`}
        >
          {videoData.map((video) => (
            <Link
              to={{
                pathname: "/watch",
                search: `?v=${video.id?.videoId || video.id}`,
              }}
              state={{ videoInfo: video }} // Pass video data as state
              key={video.id?.videoId || video.id}
              className="min-w-0"
            >
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
