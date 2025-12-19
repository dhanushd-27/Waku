import React from "react";

export const AppHeader: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between rounded-full border border-[#929AAB]/30 bg-white px-10 py-3 shadow-sm">
      <h1 className="text-xl font-semibold text-[#393E46]">Waku</h1>
      <div className="flex items-center gap-2">
        <div className="relative group">
          <a
            href="https://github.com/dhanushd-27/Waku"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#929AAB]/60 bg-white text-[#393E46] transition hover:border-[#393E46] hover:bg-[#F5F7FB]"
            aria-label="View on GitHub"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-[#393E46]"
            >
              <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.74 3.438 22.0975 8.205 23.6475C8.805 23.7575 9.025 23.3925 9.025 23.0725C9.025 22.7825 9.015 22.0475 9.01 21.0475C5.6725 21.7725 4.9675 19.3575 4.9675 19.3575C4.4225 17.9475 3.6325 17.5725 3.6325 17.5725C2.545 16.8325 3.715 16.8475 3.715 16.8475C4.9225 16.9325 5.555 18.0925 5.555 18.0925C6.625 19.9225 8.365 19.3925 9.045 19.0825C9.155 18.3025 9.455 17.7825 9.785 17.4825C7.13 17.1825 4.34 16.1525 4.34 11.4925C4.34 10.1825 4.805 9.1125 5.57 8.2725C5.445 7.9725 5.04 6.7325 5.685 5.0525C5.685 5.0525 6.685 4.7325 9.005 6.2725C9.955 6.0025 10.965 5.8675 11.975 5.8625C12.985 5.8675 13.995 6.0025 14.945 6.2725C17.265 4.7325 18.265 5.0525 18.265 5.0525C18.91 6.7325 18.505 7.9725 18.38 8.2725C19.145 9.1125 19.61 10.1825 19.61 11.4925C19.61 16.1625 16.815 17.1775 14.155 17.4725C14.565 17.8325 14.935 18.5625 14.935 19.7025C14.935 21.2725 14.92 22.6725 14.92 23.0625C14.92 23.3775 15.135 23.7475 15.745 23.6275C20.565 22.0825 24 17.7375 24 12.5C24 5.87 18.63 0.5 12 0.5Z" />
            </svg>
          </a>
          <div className="absolute right-0 top-full mt-2 px-3 py-2 text-xs text-white bg-[#393E46] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none whitespace-nowrap">
            View on GitHub
            <div className="absolute -top-1 right-4 w-2 h-2 bg-[#393E46] rotate-45"></div>
          </div>
        </div>
        <div className="relative group">
          <button
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#929AAB]/60 bg-white text-[#393E46] transition hover:border-[#393E46] hover:bg-[#F5F7FB]"
            aria-label="Information"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-[#393E46]"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </button>
          <div className="absolute right-0 top-full mt-2 w-64 px-3 py-2 text-xs text-white bg-[#393E46] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
            Upload an image. Choose a platform. Download a perfect fit.
            <div className="absolute -top-1 right-4 w-2 h-2 bg-[#393E46] rotate-45"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

