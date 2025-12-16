import React from "react";
import Dropdown from "./Dropdown";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setImageType } from "@/state/imageTypeSlice";

export const ImageTypeDropdown: React.FC = () => {
  const imageType = useAppSelector((state) => state.imageType.imageType);
  const dispatch = useAppDispatch();

  const options = [
    { value: "blur", label: "Blur effect" },
    { value: "colour-bar", label: "Colour bar" },
    { value: "auto-pick", label: "Auto pick from image" },
  ];

  return (
    <Dropdown
      label="Type of Image"
      value={imageType}
      onChange={(value) => dispatch(setImageType(value as "blur" | "colour-bar" | "auto-pick"))}
      options={options}
      placeholder="Pick an effect"
    />
  );
};

export default ImageTypeDropdown;

