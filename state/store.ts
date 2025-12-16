import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import platformReducer from "./platformSlice";
import aspectRatioReducer from "./aspectRatioSlice";
import imageTypeReducer from "./imageTypeSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    platform: platformReducer,
    aspectRatio: aspectRatioReducer,
    imageType: imageTypeReducer,
  },
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
