import React, { useCallback, useMemo, useState } from "react";
import BasePanel from "../BasePanel";
import { clamp, hslToRgb, rgbToHex, hexToRgb, rgbToHsl } from "../../utils/color";
import { ColorSquare } from "./ColorSquare";
import { HueBar } from "./HueBar";
import { OpacityBar } from "./OpacityBar";
import { ColorControlsRow } from "./ColorControlsRow";
import { SuggestedColors } from "./AutoPickedColors";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  setHue,
  setOpacity,
  setMode,
  setInputValue,
  setSaturation,
  setLightness,
  type ColorMode,
} from "@/state/colorSlice";

const DEFAULT_COLORS = ["#000000", "#FFFFFF"];

export const Tools: React.FC = () => {
  const dispatch = useAppDispatch();
  const { hue, saturation, lightness, opacity, mode, inputValue } = useAppSelector(
    (state) => state.color,
  );
  const suggestedColors = useAppSelector((state) => state.image.suggestedColors);
  const [copied, setCopied] = useState(false);
  
  // Use extracted colors if available, otherwise use default colors
  const colorsToDisplay = suggestedColors.length > 0 ? suggestedColors : DEFAULT_COLORS;

  const baseRgb = useMemo(
    () => hslToRgb(hue, saturation, lightness),
    [hue, saturation, lightness],
  );

  const hex = useMemo(() => rgbToHex(baseRgb), [baseRgb]);
  const displayValue = useMemo(() => {
    if (mode === "HEX") return hex;
    if (mode === "RGB") return `${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}`;
    if (mode === "HSL") {
      const sPercent = Math.round(saturation * 100);
      const lPercent = Math.round(lightness * 100);
      return `${Math.round(hue)}, ${sPercent}%, ${lPercent}%`;
    }
    // RGBA
    return `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, ${opacity.toFixed(2)})`;
  }, [mode, hex, baseRgb, hue, saturation, lightness, opacity]);

  // sync input when color changes (unless user is actively typing)
  React.useEffect(() => {
    dispatch(setInputValue(displayValue));
  }, [dispatch, displayValue]);

  const handleHueRatioChange = useCallback((ratio: number) => {
    const value = clamp(ratio, 0, 1) * 360;
    dispatch(setHue(value));
  }, [dispatch]);

  const handleOpacityRatioChange = useCallback((ratio: number) => {
    const value = clamp(ratio, 0, 1);
    dispatch(setOpacity(value));
  }, [dispatch]);

  const handleSquareChange = useCallback(
    (nextSaturation: number, nextLightness: number) => {
      dispatch(setSaturation(clamp(nextSaturation, 0, 1)));
      dispatch(setLightness(clamp(nextLightness, 0, 1)));
    },
    [dispatch],
  );

  const handleModeChange = (nextMode: ColorMode) => {
    dispatch(setMode(nextMode));
  };

  const handleInputChange = (value: string) => {
    dispatch(setInputValue(value));

    if (mode === "HEX") {
      const rgb = hexToRgb(value);
      if (rgb) {
        // future: sync sliders from HEX
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1100);
    } catch {
      // ignore clipboard failures
    }
  };

  const handleSwatchClick = (value: string) => {
    const rgb = hexToRgb(value);
    if (!rgb) return;

    const { h, s, l } = rgbToHsl(rgb);
    dispatch(setHue(h));
    dispatch(setSaturation(s));
    dispatch(setLightness(l));
    dispatch(setOpacity(1));
    dispatch(setInputValue(value.toUpperCase()));
  };

  return (
    <BasePanel title="Tools">
      <div className="space-y-4 text-sm text-slate-900">
        <ColorSquare
          hue={hue}
          saturation={saturation}
          lightness={lightness}
          onChange={handleSquareChange}
        />

        <HueBar hue={hue} onChange={handleHueRatioChange} />

        <OpacityBar
          opacity={opacity}
          baseRgb={baseRgb}
          onChange={handleOpacityRatioChange}
        />

        <ColorControlsRow
          mode={mode}
          inputValue={inputValue}
          copied={copied}
          onModeChange={handleModeChange}
          onInputChange={handleInputChange}
          onCopy={handleCopy}
        />

        <SuggestedColors colors={colorsToDisplay} onSelect={handleSwatchClick} />
      </div>
    </BasePanel>
  );
};

export default Tools;
