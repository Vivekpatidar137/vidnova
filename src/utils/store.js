import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import searchSliceReducer from "./searchSlice";
import chatSliceReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
    search: searchSliceReducer,
    chat: chatSliceReducer,
  },
});

export default store;
