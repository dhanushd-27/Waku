import React, { useCallback, useMemo, useState } from "react";
import BasePanel from "../BasePanel";
import { clamp, hslToRgb, rgbToHex, hexToRgb, type RGB } from "../../utils/color";
import { ColorSquare } from "./ColorSquare";
import { HueBar } from "./HueBar";
import { OpacityBar } from "./OpacityBar";
import { ColorControlsRow } from "./ColorControlsRow";
import { AutoPickedColors } from "./AutoPickedColors";

type ColorMode = "HEX" | "RGB";

const DEFAULT_HEX = "#3FA9F5";

const AUTO_PICKED_COLORS = [
  "#FF6B6B",
  "#FFB347",
  "#FFE66D",
  "#4ECDC4",
  "#36CFC9",
  "#3FA9F5",
  "#6366F1",
  "#A855F7",
  "#EC4899",
  "#4B5563",
  "#F97316",
  "#22C55E",
];

export const Tools: React.FC = () => {
  const [hue, setHue] = useState(220); // 0–360
  const [saturation, setSaturation] = useState(0.6); // 0–1
  const [lightness, setLightness] = useState(0.5); // 0–1
  const [opacity, setOpacity] = useState(1); // 0–1
  const [mode, setMode] = useState<ColorMode>("HEX");
  const [inputValue, setInputValue] = useState<string>(DEFAULT_HEX);
  const [copied, setCopied] = useState(false);

  const baseRgb = useMemo(
    () => hslToRgb(hue, saturation, lightness),
    [hue, saturation, lightness],
  );

  const hex = useMemo(() => rgbToHex(baseRgb), [baseRgb]);
  const rgbaString = useMemo(
    () => `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, ${opacity.toFixed(2)})`,
    [baseRgb, opacity],
  );

  const displayValue = useMemo(() => {
    if (mode === "HEX") return hex;
    return `${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}`;
  }, [mode, hex, baseRgb]);

  // sync input when color changes (unless user is actively typing)
  React.useEffect(() => {
    setInputValue(displayValue);
  }, [displayValue]);

  const handleHueRatioChange = useCallback((ratio: number) => {
    setHue(clamp(ratio, 0, 1) * 360);
  }, []);

  const handleOpacityRatioChange = useCallback((ratio: number) => {
    setOpacity(clamp(ratio, 0, 1));
  }, []);

  const handleModeChange = (nextMode: ColorMode) => {
    setMode(nextMode);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);

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
    setInputValue(value.toUpperCase());
  };

  return (
    <BasePanel title="Tools">
      <div className="space-y-4 text-sm text-slate-900">
        <ColorSquare hue={hue} />

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

        <AutoPickedColors colors={AUTO_PICKED_COLORS} onSelect={handleSwatchClick} />
      </div>
    </BasePanel>
  );
};

export default Tools;
