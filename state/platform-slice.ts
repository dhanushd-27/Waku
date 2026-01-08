import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Platform = "instagram" | "whatsapp" | "x" | "linkedin" | "threads" | "custom";

type PlatformState = {
  platform: Platform;
};

const initialState: PlatformState = {
  platform: "instagram",
};

const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    setPlatform(state, action: PayloadAction<Platform>) {
      state.platform = action.payload;
    },
  },
});

export const { setPlatform } = platformSlice.actions;
export default platformSlice.reducer;