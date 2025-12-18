import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ColorMode = "HEX" | "HSL" | "RGBA";

export type ColorState = {
  hue: number; // 0–360
  saturation: number; // 0–1
  lightness: number; // 0–1
  opacity: number; // 0–1
  mode: ColorMode;
  inputValue: string;
};

const DEFAULT_HEX = "#FFFFFF";

const initialState: ColorState = {
  hue: 0,
  saturation: 0,
  lightness: 1,
  opacity: 1,
  mode: "RGBA",
  inputValue: DEFAULT_HEX,
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setHue(state, action: PayloadAction<number>) {
      state.hue = action.payload;
    },
    setSaturation(state, action: PayloadAction<number>) {
      state.saturation = action.payload;
    },
    setLightness(state, action: PayloadAction<number>) {
      state.lightness = action.payload;
    },
    setOpacity(state, action: PayloadAction<number>) {
      state.opacity = action.payload;
    },
    setMode(state, action: PayloadAction<ColorMode>) {
      state.mode = action.payload;
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
  },
});

export const {
  setHue,
  setSaturation,
  setLightness,
  setOpacity,
  setMode,
  setInputValue,
} = colorSlice.actions;

export default colorSlice.reducer;


