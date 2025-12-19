import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Platform } from "@/components/dropdown-controls/platform-aspect-config";

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