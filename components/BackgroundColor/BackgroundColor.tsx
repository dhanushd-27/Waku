import React, { useMemo, useState } from "react";
import BasePanel from "../BasePanel";
import { ColorBarSlider } from "./ColorBarSlider";
import { HexInput } from "./HexInput";
import { OpacityControl } from "./OpacityControl";
import { hexToHue, hslToHex, normalizeHex } from "./utils";

export const BackgroundColor: React.FC = () => {
  const [hue, setHue] = useState(0);
  const [hex, setHex] = useState("#ff0000");
  const [opacity, setOpacity] = useState(100);

  const previewColor = useMemo(() => hex, [hex]);
  const previewOpacity = useMemo(() => opacity / 100, [opacity]);

  const handleHueChange = (value: number) => {
    setHue(value);
    setHex(hslToHex(value));
  };

  const handleHexChange = (value: string) => {
    setHex(value);
    const normalized = normalizeHex(value);
    const hueFromHex = normalized ? hexToHue(normalized) : null;
    if (hueFromHex !== null) setHue(hueFromHex);
  };

  const handleOpacityChange = (value: number) => {
    setOpacity(value);
  };

  return (
    <BasePanel title="Background Color">
      <div className="space-y-4">
        <ColorBarSlider hue={hue} onChange={handleHueChange} />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <OpacityControl opacity={opacity} onChange={handleOpacityChange} />
          <HexInput
            hex={hex}
            onChange={handleHexChange}
            previewColor={previewColor}
            previewOpacity={previewOpacity}
          />
        </div>
      </div>
    </BasePanel>
  );
};

export default BackgroundColor;
