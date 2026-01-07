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
      <h3
        className={`
          mt-4
          font-bold
          leading-[1.2]
          tracking-[-0.02em]
          font-[Figtree]
          text-[2rem]             // mobile h3 (2rem)
          max-w-[20rem]           // mobile max-width (20rem)
          sm:text-[3rem]          // tablet h2 (3rem)
          sm:max-w-[30rem]        // tablet max-width (30rem)
          md:text-[4rem]          // desktop h2 (4rem)
          md:max-w-[40rem]        // desktop max-width (40rem)
        `}
      >
        {heading}
      </h3>
      <p
        className={`
          mt-2
          font-normal
          leading-normal
          font-[Figtree]
          text-sm
          md:text-md
          max-w-lg
          md:max-w-xl
        `}
      >
        {subheading}
      </p>
      {body && (
        <p className="mt-4 text-sm md:text-md text-(--text-secondary)">
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
        className="bottom-0 -left-10 absolute -z-10 w-[120%] h-full blur-2xl dark:hidden"
        style={{
          background: "linear-gradient(to top, #000000 0%, #C10801 12%, #F16001 28%, #D9C3AB 50%, #F9F9F9 75%)"
        }}
      >
      </div>
      {/* Desktop: Dark Mode Circle gradient */}
      <div className="hidden lg:block absolute rounded-full w-[150vw] h-[150vw] -bottom-[124vw] -left-3/12 -z-10 
      dark:bg-black border-0 blur-[0.5px]
        dark:shadow-[inset_0_2px_70px_70px_#D9C3AB,inset_0_70px_100px_80px_#F16001,inset_0_120px_150px_120px_#C10801]
      ">
      </div>
    </section>
  );
};


