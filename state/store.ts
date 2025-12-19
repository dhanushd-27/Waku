import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import platformReducer from "./platform-slice";
import aspectRatioReducer from "./aspect-ratio-slice";
import imageTypeReducer from "./imageTypeSlice";
import imageReducer from "./imageSlice";
import colorReducer from "./colorSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    platform: platformReducer,
    aspectRatio: aspectRatioReducer,
    imageType: imageTypeReducer,
    image: imageReducer,
    color: colorReducer,
  },
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
