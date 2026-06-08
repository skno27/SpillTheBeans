import React from "react";

export type MenuItem = {
  name: string;
  price: string;
  category: string;
  description: string;
};

export default function MenuCategory({
  title,
  subtitle,
  items,
  onSelectItem,
}: {
  title: string;
  subtitle?: string;
  items: [string, string, string][];
  onSelectItem: (item: MenuItem) => void;
}) {
  return (
    <div className="w-full flex-none rounded-[1.75rem] border border-white/10 bg-[#080a1e]/80 p-5 shadow-xl shadow-black/25 backdrop-blur-md md:w-[calc((100%-1rem)/2)] xl:w-[calc((100%-2rem)/3)]">
      {" "}
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d18b4c]">
        {title}
      </p>
      {subtitle && (
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#cdb8a8]">
          {subtitle}
        </p>
      )}
      <div className="mt-5 space-y-3">
        {items.map(([name, price, description]) => (
          <button
            type="button"
            key={`${title}-${name}`}
            className="flex w-full items-baseline justify-between gap-4 rounded-xl px-2 py-3 text-left transition hover:border-[#d18b4c]/40 hover:bg-white/3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d18b4c]"
            onClick={() =>
              onSelectItem({
                name,
                price,
                category: title,
                description,
              })
            }>
            <span className="text-sm font-bold text-white sm:text-base">
              {name}
            </span>

            <span className="shrink-0 text-sm font-black text-[#d18b4c] sm:text-base">
              {price}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
