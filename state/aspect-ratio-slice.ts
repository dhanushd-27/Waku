import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AspectRatioId = "1:1" | "4:5" | "9:16" | "16:9" | "4:3" | "3:4" | "custom";

type AspectRatio = AspectRatioId;

type AspectRatioState = {
  aspectRatio: AspectRatio;
};

const initialState: AspectRatioState = {
  aspectRatio: "1:1",
};

const aspectRatioSlice = createSlice({
  name: "aspectRatio",
  initialState,
  reducers: {
    setAspectRatio(state, action: PayloadAction<AspectRatio>) {
      state.aspectRatio = action.payload;
    },
  },
});

export const { setAspectRatio } = aspectRatioSlice.actions;
export default aspectRatioSlice.reducer;
