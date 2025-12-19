import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AspectRatioId } from "@/components/dropdown-controls/platform-aspect-config";

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
