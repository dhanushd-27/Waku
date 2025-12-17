import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ImageState = {
  previewUrl: string | null;
  suggestedColors: string[];
};

const initialState: ImageState = {
  previewUrl: null,
  suggestedColors: [],
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImagePreview(state, action: PayloadAction<string | null>) {
      state.previewUrl = action.payload;
    },
    setSuggestedColors(state, action: PayloadAction<string[]>) {
      state.suggestedColors = action.payload;
    },
    clearImage(state) {
      state.previewUrl = null;
      state.suggestedColors = [];
    },
  },
});

export const { setImagePreview, setSuggestedColors, clearImage } = imageSlice.actions;
export default imageSlice.reducer;


