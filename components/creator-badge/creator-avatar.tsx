import React from "react";
import Image from "next/image";

export const CreatorAvatar: React.FC = () => {
  return (
    <div className="absolute left-4 bottom-0 translate-y-1/2 z-20">
      <div className="h-[64px] w-[64px] overflow-hidden rounded-full border-2 border-white bg-accent-900">
        <Image
          src="/dev.jpeg"
          alt="Dhanush"
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default CreatorAvatar;


