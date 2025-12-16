import React from "react";
import Dropdown from "./Dropdown";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setPlatform } from "@/state/platformSlice";

export const PlatformDropdown: React.FC = () => {
  const platform = useAppSelector((state) => state.platform.platform);
  const dispatch = useAppDispatch();

  const options = [
    { value: "instagram", label: "Instagram" },
    { value: "x", label: "X" },
    { value: "whatsapp", label: "Whatsapp" },
  ];

  return (
    <Dropdown
      label="Platform"
      value={platform}
      onChange={(value) => dispatch(setPlatform(value as "x" | "whatsapp" | "instagram"))}
      options={options}
      placeholder="Choose platform"
    />
  );
};

export default PlatformDropdown;

