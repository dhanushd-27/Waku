import React from "react";

import { SectionLabel } from "@/components/ui/section-label";

type HomeSectionProps = {
  body: string;
  heading: string;
  subheading: string;
};

/**
 * HomeSection
 * ----
 * Renders the landing page "Home" anchor section targeted by the header navigation.
 */
export const HomeSection: React.FC<HomeSectionProps> = ({ body, heading, subheading }) => {
  return (
    <section className="flex flex-1 flex-col items-center text-center px-6 py-12 overflow-clip relative rounded-b-3xl" id="home">
      <SectionLabel label="Home" />
      <h1 className="text-h1 mt-4 max-w-80 sm:max-w-120 md:max-w-160">
        {heading}
      </h1>
      <p className="text-subtitle mt-2 max-w-xs sm:max-w-md md:max-w-lg text-(--text-secondary)">
        {subheading}
      </p>
      {body && (
        <p className="text-paragraph mt-4 text-(--text-muted)">
          {body}
        </p>
      )}
      {/* Mobile & Tablet: Full-width gradient bar */}
      <div className="lg:hidden absolute inset-x-0 bottom-0 h-[60vh] -z-10
        dark:bg-[linear-gradient(to_top,#D9C3AB_0%,#F16001_25%,#C10801_50%,#000000_100%)]
        blur-xl
      ">
      </div>
      {/* Desktop: Light Mode Gradient */}
      <div
        className="lg:hidden bottom-0 -left-10 absolute -z-10 w-[120%] h-full blur-2xl dark:hidden"
        style={{
          background: "linear-gradient(to top, #000000 0%, #C10801 12%, #F16001 28%, #D9C3AB 50%, #F9F9F9 75%)"
        }}
      >
      </div>
      {/* Desktop: Dark Mode Circle gradient */}
      <div className="hidden lg:block absolute rounded-full w-[150vw] h-[150vw] -bottom-[118vw] xl:-bottom-[122vw] 2xl:-bottom-[124vw] -left-3/12 -z-10 
      bg-black border-0 blur-[0.5px]
        shadow-[inset_0_2px_70px_70px_#D9C3AB,inset_0_70px_100px_80px_#F16001,inset_0_120px_150px_120px_#C10801]
        dark:shadow-[inset_0_2px_70px_70px_#D9C3AB,inset_0_70px_100px_80px_#F16001,inset_0_120px_150px_120px_#C10801]
      ">
      </div>
    </section>
  );
};


