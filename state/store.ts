import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import platformReducer from "./platformSlice";
import aspectRatioReducer from "./aspectRatioSlice";
import imageTypeReducer from "./imageTypeSlice";
import imageReducer from "./imageSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    platform: platformReducer,
    aspectRatio: aspectRatioReducer,
    imageType: imageTypeReducer,
    image: imageReducer,
  },
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
