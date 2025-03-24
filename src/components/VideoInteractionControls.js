import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaShare, FaBookmark, FaEllipsisH } from "react-icons/fa";

const VideoInteractionControls = ({ videoId, initialLikes = 12540, initialDislikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count.toString();
  };

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
      if (disliked) {
        setDisliked(false);
        setDislikes(dislikes - 1);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikes(dislikes - 1);
    } else {
      setDisliked(true);
      setDislikes(dislikes + 1);
      if (liked) {
        setLiked(false);
        setLikes(likes - 1);
      }
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = () => {
    // Copy video URL to clipboard
    const videoUrl = `https://youtube.com/watch?v=${videoId}`;
    navigator.clipboard.writeText(videoUrl)
      .then(() => {
        alert("Video link copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy link: ", err);
      });
  };

  return (
    <div className="flex flex-wrap items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2 md:space-x-4">
        <button 
          onClick={handleLike}
          className={`flex items-center space-x-1 px-3 py-2 rounded-full ${
            liked 
              ? "bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400" 
              : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          <FaThumbsUp className={`w-5 h-5 ${liked ? "text-blue-600 dark:text-blue-400" : ""}`} />
          <span className="font-medium">{formatCount(likes)}</span>
        </button>
        
        <button 
          onClick={handleDislike}
          className={`flex items-center space-x-1 px-3 py-2 rounded-full ${
            disliked 
              ? "bg-gray-200 dark:bg-gray-700 text-red-600 dark:text-red-400" 
              : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          <FaThumbsDown className={`w-5 h-5 ${disliked ? "text-red-600 dark:text-red-400" : ""}`} />
          <span className="font-medium">{formatCount(dislikes)}</span>
        </button>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
        <button 
          onClick={handleShare}
          className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        >
          <FaShare className="w-5 h-5" />
          <span className="font-medium hidden sm:inline">Share</span>
        </button>
        
        <button 
          onClick={handleSave}
          className={`flex items-center space-x-1 px-3 py-2 rounded-full ${
            saved 
              ? "bg-gray-200 dark:bg-gray-700 text-purple-600 dark:text-purple-400" 
              : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          <FaBookmark className={`w-5 h-5 ${saved ? "text-purple-600 dark:text-purple-400" : ""}`} />
          <span className="font-medium hidden sm:inline">{saved ? "Saved" : "Save"}</span>
        </button>
        
        <button className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
          <FaEllipsisH className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default VideoInteractionControls;