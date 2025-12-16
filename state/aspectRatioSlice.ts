import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AspectRatio = "1:1" | "4:5" | "16:9" | "9:16";

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

