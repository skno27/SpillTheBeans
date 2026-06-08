import React from "react";

type ItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    price: string;
    category?: string;
    description: string;
  } | null;
};

export default function ItemModal({ isOpen, onClose, item }: ItemModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="item-modal-title"
      onClick={onClose}>
      <div
        className="relative max-h-[88vh] w-full max-w-md overflow-y-auto rounded-4xl border border-white/10 bg-[#080a1e]/95 p-5 text-[#f7ede1] shadow-2xl shadow-black/50 sm:p-6"
        onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/4 text-xl font-black text-[#f7ede1] transition hover:bg-white/10"
          onClick={onClose}
          aria-label="Close item details">
          &times;
        </button>

        {item.category && (
          <p className="pr-12 text-xs font-black uppercase tracking-[0.24em] text-[#d18b4c]">
            {item.category}
          </p>
        )}

        <h2
          id="item-modal-title"
          className="mt-2 pr-12 text-3xl font-black leading-tight text-white">
          {item.name}
        </h2>

        <p className="mt-4 text-sm leading-6 text-[#cdb8a8]">
          {item.description}
        </p>

        <div className="mt-5 flex aspect-4/3 items-center justify-center rounded-3xl border border-white/10 bg-white/4 text-center text-sm font-semibold text-[#cdb8a8]">
          Image of {item.name}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
          <span className="text-sm font-bold text-[#cdb8a8]">Price</span>
          <span className="text-2xl font-black text-[#d18b4c]">
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
}
