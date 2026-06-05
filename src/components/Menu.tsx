"use client";
import React from "react";
import Image from "next/image";
import MenuCategory from "./MenuCategory";

type MenuPageProps = {
  onBack: () => void;
};

const BUSINESS = {
  name: "Spill The Beans",
  subtitle: "Urban Essentials Coffee Cafe",
  phoneDisplay: "(773) 887-5310",
  phoneHref: "tel:+17738875310",
  addressLine1: "5300 W. Chicago Ave",
  addressLine2: "Chicago, IL 60651",
};

export default function MenuPage({ onBack }: MenuPageProps) {
  return (
    <main className="min-h-screen bg-linear-to-b from-black/80 via-[#080a1e]/90 to-black/90 px-4 py-6 text-[#f7ede1] sm:px-6 md:py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 rounded-4xl border border-white/10  p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d18b4c]">
              {BUSINESS.subtitle}
            </p>

            <h1 className="mt-1 text-3xl font-black text-white sm:text-5xl">
              Menu
            </h1>

            <p className="mt-2 text-sm text-[#cdb8a8]">
              Coffee • Breakfast • Wraps • Tacos • Drinks • Snacks
            </p>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-black text-white transition hover:bg-white/8">
            ← Back to Home
          </button>
        </header>

        {/* <section className="overflow-hidden rounded-4xl border border-white/10 bg-[#11131f]/85 shadow-2xl shadow-black/40 backdrop-blur-md">
          <div className="relative aspect-video w-full bg-black">
            <Image
              src="/assets/stb-menu-feature.png"
              alt="Full Spill The Beans menu board"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </section> */}

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <MenuCategory
            title="Coffee"
            items={[
              ["Hot / Iced Coffee", "$4.00"],
              ["Frappuccino / Cappuccino", "$5.00"],
              ["Latte", "$5.00"],
              ["Espresso Shot", "$3.75"],
              ["Specialty Coffee Beans / Ground", "$20.00"],
            ]}
          />

          <MenuCategory
            title="Breakfast Sandwich"
            subtitle="Sausage or bacon"
            items={[
              ["Sausage", "$6.75"],
              ["Turkey", "$6.75"],
            ]}
          />

          <MenuCategory
            title="Wraps"
            items={[
              ["Chicken", "$10.50"],
              ["Shrimp / Salmon", "$12.50"],
            ]}
          />

          <MenuCategory
            title="Tacos"
            subtitle="Chicken, turkey, steak"
            items={[
              ["Single Taco", "$3.50"],
              ["$10 Holla", "$10.00"],
            ]}
          />

          <MenuCategory
            title="Baked Potato"
            items={[
              ["Chicken", "$11.00"],
              ["Shrimp / Salmon", "$13.00"],
            ]}
          />

          <MenuCategory
            title="Drinks"
            items={[
              ["Teas", "$5.00"],
              ["Refreshers", "$6.00"],
              ["Smoothies", "$7.00"],
            ]}
          />

          <MenuCategory
            title="Snacks & Treats"
            items={[
              ["Poundcake / Cookies", "$4.50"],
              ["Soda Bottle", "$2.00"],
              ["Soda Can", "$1.00"],
              ["Gatorade / Powerade", "$2.00"],
              ["Monster Can", "$3.00"],
              ["Chips / Candy", "$1.00"],
            ]}
          />
        </section>
      </div>
    </main>
  );
}
