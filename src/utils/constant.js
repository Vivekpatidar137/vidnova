export const YouTUBE_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=";

export const YOUTUBE_SEARCH_API =
  "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_SUGGESTIONS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

export const SEARCH_LIST =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";

export const API_KEY = process.env.REACT_APP_API_KEY;
