import React from "react";
import Dropdown from "./Dropdown";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setAspectRatio } from "@/state/aspectRatioSlice";

export const AspectRatioDropdown: React.FC = () => {
  const aspectRatio = useAppSelector((state) => state.aspectRatio.aspectRatio);
  const dispatch = useAppDispatch();

  const options = [
    { value: "1:1", label: "1:1 (Square)" },
    { value: "4:5", label: "4:5 (Portrait)" },
    { value: "16:9", label: "16:9 (Landscape)" },
    { value: "9:16", label: "9:16 (Vertical)" },
  ];

  return (
    <Dropdown
      label="Aspect Ratio"
      value={aspectRatio}
      onChange={(value) => dispatch(setAspectRatio(value as "1:1" | "4:5" | "16:9" | "9:16"))}
      options={options}
      placeholder="Select ratio"
    />
  );
};

export default AspectRatioDropdown;

