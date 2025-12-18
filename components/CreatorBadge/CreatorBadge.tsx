import React from "react";
import { CreatorAvatar } from "./CreatorAvatar";
import { CreatorSocialLinks } from "./CreatorSocialLinks";

export const CreatorBadge: React.FC = () => {
  return (
    <div className="flex w-full flex-col rounded-2xl border border-[#E5E7EB] bg-white/95 px-4 py-3 text-sm text-[#F9FAFB] shadow-md shadow-black/10">
      {/* Top row: avatar + text */}
      <CreatorAvatar />

      {/* Bottom row: social icons */}
      <CreatorSocialLinks />
    </div>
  );
};

export default CreatorBadge;


