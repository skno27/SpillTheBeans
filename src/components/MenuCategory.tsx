import React from "react";

export default function MenuCategory({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: [string, string][];
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[#080a1e]/80 p-5 shadow-xl shadow-black/25 backdrop-blur-md">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d18b4c]">
        {title}
      </p>

      {subtitle && (
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#cdb8a8]">
          {subtitle}
        </p>
      )}

      <div className="mt-5 space-y-3">
        {items.map(([name, price]) => (
          <div
            key={`${title}-${name}`}
            className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
            <span className="text-sm font-bold text-white sm:text-base">
              {name}
            </span>

            <span className="shrink-0 text-sm font-black text-[#d18b4c] sm:text-base">
              {price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
