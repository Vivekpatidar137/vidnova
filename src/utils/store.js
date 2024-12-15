import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import searchSliceReducer from "./searchSlice";
const store = configureStore({
  reducer: {
    app: appSliceReducer,
    search: searchSliceReducer,
  },
});

export default store;
