import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { API_KEY, YouTUBE_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const searchResults = useSelector((state) => state.search.searchResults);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const fetchVideos = async (pageToken = "") => {
    const isInitialLoad = pageToken === "";
    if (isInitialLoad) {
      setLoading(true);
    } else {
      setIsFetchingMore(true);
    }

    try {
      const url = new URL(YouTUBE_URL + API_KEY);
      url.searchParams.set("part", "snippet,contentDetails,statistics");
      url.searchParams.set("chart", "mostPopular");
      url.searchParams.set("maxResults", 50);
      url.searchParams.set("regionCode", "US");
      if (pageToken) {
        url.searchParams.set("pageToken", pageToken);
      }
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setVideos((prevVideos) => [...prevVideos, ...data.items]);
      setNextPageToken(data.nextPageToken || ""); // Update or clear token
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      if (isInitialLoad) {
        setLoading(false);
      } else {
        setIsFetchingMore(false);
      }
    }
  };

  useEffect(() => {
    fetchVideos(); // Fetch initial videos
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 500 &&
        !loading &&
        !isFetchingMore &&
        nextPageToken
      ) {
        fetchVideos(nextPageToken);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, isFetchingMore, nextPageToken]);

  const videoData = searchResults.length > 0 ? searchResults : videos;

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="col-span-11 w-full max-w-screen overflow-hidden mt-20">
      <div
        className={`grid gap-x-4 gap-y-8 px-4 ${
          isMenuOpen
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
        }`}
      >
        {videoData.map((video, index) => {
          const videoId = video.id?.videoId || video.id;
          const uniqueKey = videoId
            ? `${videoId}-${index}`
            : `fallback-${index}`;

          return (
            <Link
              to={{
                pathname: "/watch",
                search: `?v=${videoId}`,
              }}
              state={{ videoInfo: video }}
              key={uniqueKey}
              className="min-w-0"
            >
              <VideoCard info={video} />
            </Link>
          );
        })}
      </div>

      {/* Reuse Shimmer component with reduced count */}
      {isFetchingMore && (
        <div className="px-4 mt-4">
          <Shimmer count={4} />
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
