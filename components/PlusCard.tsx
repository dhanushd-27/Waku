import React from "react";
import BasePanel from "./BasePanel";

export const PlusCard: React.FC = () => {
  return (
    <BasePanel>
      <div className="flex h-full items-center justify-center">
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-[#929AAB] bg-white text-[#393E46] transition hover:border-[#393E46] hover:bg-[#EEEEEE]"
          aria-label="Upload image"
        >
          <span className="text-3xl leading-none">+</span>
        </button>
      </div>
    </BasePanel>
  );
};

export default PlusCard;

