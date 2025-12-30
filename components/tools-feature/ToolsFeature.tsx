import React, { useCallback, useMemo, useState } from "react";
import { BasePanel } from "@/components/base-panel";
import {
  clamp,
  hslToRgb,
  rgbToHex,
  hexToRgb,
  rgbToHsl,
} from "../../utils/color";
import { ColorSquare } from "./ColorSquare";
import { HueBar } from "./HueBar";
import { OpacityBar } from "./OpacityBar";
import { ColorControlsRow } from "./ColorControlsRow";
import { AutoPickedColors } from "./AutoPickedColors";
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

/**
 * ToolsFeature
 * ----------------
 * Provides color manipulation tools including HSL color picker,
 * opacity control, and color format conversion (HEX, HSL, RGBA).
 * Manages color state, input parsing, and clipboard operations.
 * 
 * Side effects:
 * - Dispatches Redux actions for color state updates
 * - Syncs input value with display value via useEffect
 * - Uses clipboard API for color value copying
 */
export const ToolsFeature: React.FC = () => {
  const dispatch = useAppDispatch();
  const { hue, saturation, lightness, opacity, mode, inputValue } = useAppSelector(
    (state) => state.color,
  );
  const suggestedColors = useAppSelector((state) => state.image.suggestedColors);
  const [copied, setCopied] = useState(false);

  const colorsToDisplay = suggestedColors.length > 0 ? suggestedColors : DEFAULT_COLORS;

  const baseRgb = useMemo(
    () => hslToRgb(hue, saturation, lightness),
    [hue, saturation, lightness],
  );

  const hex = useMemo(() => rgbToHex(baseRgb), [baseRgb]);
  const displayValue = useMemo(() => {
    if (mode === "HEX") return hex;
    if (mode === "HSL") {
      const sPercent = Math.round(saturation * 100);
      const lPercent = Math.round(lightness * 100);
      return `${Math.round(hue)}, ${sPercent}%, ${lPercent}%`;
    }
    // RGBA
    return `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, ${opacity.toFixed(2)})`;
  }, [mode, hex, baseRgb, hue, saturation, lightness, opacity]);

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
    if (mode === "HEX") {
      const hasHashPrefix = value.trim().startsWith("#");
      const hexBody = value.replace("#", "").replace(/[^0-9a-fA-F]/g, "").slice(0, 6);
      const normalized = (hasHashPrefix ? "#" : "#") + hexBody;

      dispatch(setInputValue(normalized));

      if (hexBody.length !== 6) return;

      const rgb = hexToRgb(normalized);
      if (rgb) {
        const { h, s, l } = rgbToHsl(rgb);
        dispatch(setHue(h));
        dispatch(setSaturation(s));
        dispatch(setLightness(l));
      }
      return;
    }

    dispatch(setInputValue(value));

    const trimmed = value.trim();

    if (!trimmed) return;

    if (mode === "HSL") {
      const hslMatch = trimmed.match(
        /^(-?\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?$/i,
      );
      if (!hslMatch) return;
      const [, hStr, sStr, lStr] = hslMatch;
      let h = Number(hStr);
      let s = Number(sStr);
      let l = Number(lStr);
      if ([h, s, l].some((v) => Number.isNaN(v))) return;

      h = ((h % 360) + 360) % 360;
      s = clamp(s / 100, 0, 1);
      l = clamp(l / 100, 0, 1);

      dispatch(setHue(h));
      dispatch(setSaturation(s));
      dispatch(setLightness(l));
      return;
    }

    if (mode === "RGBA") {
      let rgbaPart = trimmed;
      const funcMatch = trimmed.match(
        /^rgba?\s*\((.+)\)$/i,
      );
      if (funcMatch) {
        rgbaPart = funcMatch[1];
      }
      const parts = rgbaPart.split(/[\s,]+/).filter(Boolean);
      if (parts.length !== 4) return;
      const [rStr, gStr, bStr, aStr] = parts;
      const r = Number(rStr);
      const g = Number(gStr);
      const b = Number(bStr);
      let a = Number(aStr);
      if ([r, g, b, a].some((v) => Number.isNaN(v))) return;

      const rgb = {
        r: clamp(r, 0, 255),
        g: clamp(g, 0, 255),
        b: clamp(b, 0, 255),
      };
      a = clamp(a, 0, 1);

      const normalized = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a.toFixed(2)})`;
      dispatch(setInputValue(normalized));

      const { h, s, l } = rgbToHsl(rgb);
      dispatch(setHue(h));
      dispatch(setSaturation(s));
      dispatch(setLightness(l));
      dispatch(setOpacity(a));
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1100);
    } catch {
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
      <div className="space-y-4 text-sm text-primary">

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

        <AutoPickedColors colors={colorsToDisplay} onSelect={handleSwatchClick} />
      </div>
    </BasePanel>
  );
};


