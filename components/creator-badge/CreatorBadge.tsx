import React from "react";
import { CreatorHeader } from "./CreatorHeader";
import { CreatorAvatar } from "./CreatorAvatar";
import { CreatorProfileInfo } from "./CreatorProfileInfo";
import { CreatorSocialLinks } from "./CreatorSocialLinks";

/**
 * CreatorBadge
 * ----------------
 * Displays creator profile information including header background,
 * avatar, profile details, and social links. Uses a grid layout
 * to organize profile information and social links.
 */
export const CreatorBadge: React.FC = () => {
  return (
    <div className="flex w-full flex-col rounded-2xl border overflow-hidden text-sm shadow-md shadow-black/10 bg-[color:var(--color-primary-white)] border-[color:rgba(167,167,167,0.25)]">
      <div className="relative mx-4 mt-4">
        <CreatorHeader />
        <CreatorAvatar />
      </div>

      <div className="px-4 relative">
        <div
          className="
            grid 
            grid-cols-2 
            grid-rows-2 
            items-start 
          "
        >
          <div className="col-start-2 row-start-1 flex">
            <CreatorProfileInfo />
          </div>

          <div className="col-span-2 row-start-2">
            <CreatorSocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

