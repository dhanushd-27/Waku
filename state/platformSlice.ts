import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Platform = "x" | "whatsapp" | "instagram"

type PlatformState = {
  platform: Platform
}

const initialState: PlatformState = {
  platform: "instagram"
}

const PlatformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    setPlatform(state, action: PayloadAction<Platform>) {
      state.platform = action.payload;
    }
  }
})

export const { setPlatform } = PlatformSlice.actions
export default PlatformSlice.reducer; 