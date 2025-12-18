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
    { value: "linkedin", label: "LinkedIn" },
    { value: "x", label: "X" },
    { value: "whatsapp", label: "WhatsApp" },
  ];

  return (
    <Dropdown
      label="Target platform"
      helperText="Where you’ll post the image"
      value={platform}
      onChange={(value) =>
        dispatch(setPlatform(value as "x" | "whatsapp" | "instagram" | "linkedin"))
      }
      options={options}
      placeholder="Choose platform"
    />
  );
};

export default PlatformDropdown;

