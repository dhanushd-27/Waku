import React from "react";

type SocialLink = {
  href: string;
  label: string;
  text: string;
  className: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://x.com/orcatwt",
    label: "Dhanush on Twitter",
    text: "Twitter",
    className:
      "text-[10px] text-muted transition hover:text-primary",
  },
  {
    href: "https://www.linkedin.com/in/dhanushd-27",
    label: "Dhanush on LinkedIn",
    text: "LinkedIn",
    className:
      "text-[10px] text-muted transition hover:text-[color:var(--color-brand-orange)]",
  },
  {
    href: "https://dhanushd.me",
    label: "Dhanush portfolio website",
    text: "Portfolio",
    className:
      "text-[10px] text-muted transition hover:text-[color:var(--color-brand-orange)]",
  },
];

export const CreatorSocialLinks: React.FC = () => {
  return (
    <div className="flex items-end justify-between gap-4 px-6 py-2">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className={link.className} 
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

