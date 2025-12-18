import React from "react";

type SocialLink = {
  href: string;
  label: string;
  className: string;
  icon: React.ReactNode;
};

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
    <path
      d="M18.25 3H21l-6.5 7.43L21.5 21H15l-4-6-4.5 6H2.75L9 13.27 3 3h6l3.5 5.5L18.25 3Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
    <path
      d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.32 8.16H4.7V24H.32V8.16zM8.35 8.16h4.19v2.15h.06c.58-1.1 2-2.26 4.12-2.26 4.41 0 5.22 2.9 5.22 6.67V24h-4.38v-8.08c0-1.93-.03-4.41-2.69-4.41-2.7 0-3.11 2.11-3.11 4.28V24H8.35V8.16z"
      fill="currentColor"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
    <path
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c1.2 0 2.3.34 3.25.93A13.9 13.9 0 0 0 13 9H9.53A11.9 11.9 0 0 1 12 4Zm-4.2 1.36A7.96 7.96 0 0 0 4.7 11H7.9c.2-2.04.86-3.9 1.9-5.64Zm-1.1 9.64H4.7A7.96 7.96 0 0 0 7.8 18.64 11.9 11.9 0 0 1 7.7 15Zm1.83 0H13c-.26 1.86-.93 3.57-2.25 4.93A11.9 11.9 0 0 1 9.53 15Zm4.94 0h3.21a7.96 7.96 0 0 1-3.1 4.64A13.9 13.9 0 0 0 14.47 15Zm.13-2A11.9 11.9 0 0 0 15.9 9h3.21a7.96 7.96 0 0 1-3.1 4.64ZM11 9h2.94A11.9 11.9 0 0 1 13 4 10 10 0 0 0 11 9Zm0 6a10 10 0 0 0 2 5 11.9 11.9 0 0 1-.94-5H11Z"
      fill="currentColor"
    />
  </svg>
);

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://x.com/orcatwt",
    label: "Dhanush on Twitter",
    className:
      "flex h-8 w-8 items-center justify-center text-neutral-500 transition hover:text-black",
    icon: <XIcon />,
  },
  {
    href: "https://www.linkedin.com/in/dhanushd-27",
    label: "Dhanush on LinkedIn",
    className:
      "flex h-8 w-8 items-center justify-center text-[#111827] transition hover:text-[#0A66C2]",
    icon: <LinkedInIcon />,
  },
  {
    href: "https://dhanushd.me",
    label: "Dhanush portfolio website",
    className:
      "flex h-8 w-8 items-center justify-center text-[#111827] transition hover:text-[#4F46E5]",
    icon: <GlobeIcon />,
  },
];

export const CreatorSocialLinks: React.FC = () => {
  return (
    <div className="mt-2 flex items-center justify-end gap-4">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className={link.className}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default CreatorSocialLinks;


