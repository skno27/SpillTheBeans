import React, { ReactNode } from "react";

export default function SocialButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // className="text-7xl flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-4 text-white transition hover:border-[#2e74b3]/60 hover:bg-[#2e74b3]/10 hover:text-[#2e74b3]"
      className="text-7xl flex items-center justify-center  text-white transition hover:text-[#2e74b3]"
      aria-label={label}>
      {icon}
    </a>
  );
}
