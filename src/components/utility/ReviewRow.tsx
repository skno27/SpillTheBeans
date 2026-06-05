import React from "react";

export default function ReviewRow({
  platform,
  rating,
  url,
  accent,
}: {
  platform: string;
  rating: string;
  url: string;
  accent: string;
}) {
  //   const starCount = Math.round(parseFloat(rating));
  const ratingPercent = (parseFloat(rating) / 5) * 100;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[92px_1fr] items-center gap-4 py-4 transition hover:bg-white/3 sm:grid-cols-[110px_1fr]">
      <div className={`text-2xl font-black ${accent}`}>{platform}</div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xl font-black text-white">{rating}</span>
          {/* <span className="tracking-[0.12em] text-[#f4c27e]">
            {"★".repeat(starCount)}
          </span> */}
          <span className="relative inline-block text-[#6b5a4d]">
            <span>★★★★★</span>

            <span
              className="absolute left-0 top-0 overflow-hidden whitespace-nowrap text-[#f4c27e]"
              style={{ width: `${ratingPercent}%` }}>
              ★★★★★
            </span>
          </span>
        </div>

        <p className="mt-1 text-sm font-semibold text-[#e7d3c3] underline decoration-[#d18b4c]/60 underline-offset-4 group-hover:text-white">
          See reviews on {platform} →
        </p>
      </div>
    </a>
  );
}
