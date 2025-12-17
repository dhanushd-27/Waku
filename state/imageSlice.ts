import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ImageState = {
  previewUrl: string | null;
};

const initialState: ImageState = {
  previewUrl: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImagePreview(state, action: PayloadAction<string | null>) {
      state.previewUrl = action.payload;
    },
    clearImage(state) {
      state.previewUrl = null;
    },
  },
});

export const { setImagePreview, clearImage } = imageSlice.actions;
export default imageSlice.reducer;


