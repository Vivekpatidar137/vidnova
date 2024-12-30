import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import searchSliceReducer from "./searchSlice";
import chatSliceReducer from "./chatSlice";
import videoSliceReducer from "./videoSlice";
const store = configureStore({
  reducer: {
    app: appSliceReducer,
    search: searchSliceReducer,
    chat: chatSliceReducer,
    video: videoSliceReducer,
  },
});

export default store;
