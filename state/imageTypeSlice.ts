import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ImageType = "blur" | "colour-bar" | "auto-pick";

type ImageTypeState = {
  imageType: ImageType;
};

const initialState: ImageTypeState = {
  imageType: "blur",
};

const imageTypeSlice = createSlice({
  name: "imageType",
  initialState,
  reducers: {
    setImageType(state, action: PayloadAction<ImageType>) {
      state.imageType = action.payload;
    },
  },
});

export const { setImageType } = imageTypeSlice.actions;
export default imageTypeSlice.reducer;
