import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: { videoLive: false },
  reducers: {
    setVideoLive: (state, action) => {
      state.videoLive = action.payload;
    },
  },
});

export const { setVideoLive } = videoSlice.actions;
export default videoSlice.reducer;
