import React from "react";
import { CreatorHeader } from "./creator-header";
import { CreatorAvatar } from "./creator-avatar";
import { CreatorProfileInfo } from "./creator-profile-info";
import { CreatorSocialLinks } from "./creator-social-links";

export const CreatorBadge: React.FC = () => {
  return (
    <div className="flex w-full flex-col rounded-2xl border border-[#E5E7EB] bg-white/95 overflow-hidden text-sm shadow-md shadow-black/10">
      {/* Header with background image */}
      <div className="relative mx-4 mt-4">
        <CreatorHeader />
        <CreatorAvatar />
      </div>

      {/* Profile info section */}
      <div className="px-4 relative">
        <div
          className="
            grid 
            grid-cols-2 
            grid-rows-2 
            items-start 
          "
        >
          {/* Row 1, Column 2: CreatorProfileInfo */}
          <div className="col-start-2 row-start-1 flex">
            <CreatorProfileInfo />
          </div>

          {/* Row 2, spanning both columns: CreatorSocialLinks */}
          <div className="col-span-2 row-start-2">
            <CreatorSocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorBadge;


