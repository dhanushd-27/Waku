import React from "react";

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
    <section className="flex flex-1 flex-col px-6 py-12 overflow-clip relative rounded-b-3xl" id="home">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <p className="mt-2 text-base">{subheading}</p>
      <p className="mt-4 text-sm text-(--text-secondary)">{body}</p>
      {/* Mobile & Tablet: Full-width gradient bar */}
      <div className="lg:hidden absolute inset-x-0 bottom-0 h-[60vh] z-10
        dark:bg-[linear-gradient(to_top,#D9C3AB_0%,#F16001_25%,#C10801_50%,#000000_100%)]
        blur-xl
      ">
      </div>
      {/* Desktop: Circle gradient */}
      <div className="hidden lg:block absolute rounded-full w-[150vw] h-[150vw] -bottom-[122vw] -left-3/12 z-10 dark:bg-black border-0 blur-[1px]
        dark:shadow-[0_-0.2px_100px_0.5px_#D9C3AB,inset_0_2px_70px_70px_#D9C3AB,inset_0_70px_100px_80px_#F16001,inset_0_120px_150px_120px_#C10801]
      ">
      </div>
    </section>
  );
};


