import React from "react";
import Dropdown from "./dropdown";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setAspectRatio } from "@/state/aspect-ratio-slice";
import {
  PLATFORM_ASPECT_OPTIONS,
  type AspectRatioId,
} from "./platform-aspect-config";

export const AspectRatioDropdown: React.FC = () => {
  const aspectRatio = useAppSelector((state) => state.aspectRatio.aspectRatio);
  const platform = useAppSelector((state) => state.platform.platform);
  const dispatch = useAppDispatch();

  const options = React.useMemo(
    () => PLATFORM_ASPECT_OPTIONS[platform],
    [platform],
  );

  // Ensure aspect ratio is always valid for the current platform
  React.useEffect(() => {
    const isValid = options.some((option) => option.value === aspectRatio);
    if (!isValid && options.length > 0) {
      dispatch(setAspectRatio(options[0].value));
    }
  }, [aspectRatio, options, dispatch]);

  return (
    <Dropdown
      label="Aspect ratio"
      helperText="Shape of the final canvas"
      value={aspectRatio}
      onChange={(value) => dispatch(setAspectRatio(value as AspectRatioId))}
      options={options}
      placeholder="Select ratio"
    />
  );
};

export default AspectRatioDropdown;
