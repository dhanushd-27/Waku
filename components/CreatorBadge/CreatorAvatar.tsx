import React from "react";
import Image from "next/image";

export const CreatorAvatar: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#E5E7EB] bg-[#F3F4F6]">
        <Image
          src="/dev.jpeg"
          alt="Dhanush"
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-[0.16em] text-[#D1D5DB]">
          Built by
        </span>
        <span className="text-xl font-semibold tracking-tight text-[#111827]">
          Dhanush
        </span>
      </div>
    </div>
  );
};

export default CreatorAvatar;


