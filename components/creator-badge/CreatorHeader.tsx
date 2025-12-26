import React from "react";
import Image from "next/image";

export const CreatorHeader: React.FC = () => {
  return (
    <div className="w-full h-14 rounded-lg overflow-hidden">
      <Image
        src="/bg.jpeg"
        alt="Background"
        fill
        className="object-cover rounded-lg"
      />
    </div>
  );
};

