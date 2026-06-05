import React, { ReactNode } from "react";

export default function InfoRow({
  icon,
  label,
  value,
  detail,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string | ReactNode;
  detail?: string;
  href?: string;
}) {
  const content = (
    <div className="grid grid-cols-[34px_1fr] gap-3 border-t border-[#274f75]/15 pt-4 first:border-t-0 first:pt-0">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d18b4c]/15 text-[#f4c27e]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-[#f4c27e]">{label}</p>
        {typeof value === "string" && (
          <p className="mt-1 font-semibold text-white">{value}</p>
        )}
        {typeof value !== "string" && value}
        <p className="text-sm text-[#a89878]">{detail}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-2xl transition hover:bg-white/3">
        {content}
      </a>
    );
  }

  return content;
}
