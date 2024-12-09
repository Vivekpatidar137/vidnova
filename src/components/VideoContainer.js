import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { API_KEY, YouTUBE_URL } from "../utils/constant";
import ButtonList from "./ButtonList";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
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
  return (
    <div className="col-span-11 w-full max-w-screen overflow-hidden">
      <ButtonList />
      {!videos.length ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {videos.map((video) => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
