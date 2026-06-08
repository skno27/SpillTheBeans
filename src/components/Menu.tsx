"use client";

import React, { useState } from "react";
import MenuCategory, { type MenuItem } from "./MenuCategory";
import ItemModal from "./ItemModal";

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
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <main className="min-h-screen bg-linear-to-b from-black/80 via-[#080a1e]/90 to-black/90 px-4 py-6 text-[#f7ede1] sm:px-6 md:py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 rounded-4xl border border-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-6">
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

        <section className="mt-6 flex flex-wrap justify-center gap-4">
          <MenuCategory
            title="Coffee"
            onSelectItem={setSelectedItem}
            items={[
              [
                "Hot / Iced Coffee",
                "$4.00",
                "A classic brewed coffee, available hot or iced.",
              ],
              [
                "Frappuccino / Cappuccino",
                "$5.00",
                "A blended coffee drink with a creamy texture.",
              ],
              [
                "Latte",
                "$5.00",
                "Hazelnut, Caramel, Vanilla, Honey, Cinnamon, Brown Sugar, Strawberry, Peppermint. Classic.",
              ],
              [
                "Espresso Shot",
                "$3.75",
                "A concentrated shot of espresso for a... boost.",
              ],
              [
                "Specialty Coffee Beans / Ground (1 lb)",
                "$20.00",
                "High-quality coffee beans or ground coffee, perfect for home brewing.",
              ],
            ]}
          />

          <MenuCategory
            title="Breakfast Sandwich"
            subtitle="Sausage or Bacon"
            onSelectItem={setSelectedItem}
            items={[
              [
                "Sausage",
                "$6.75",
                "A hearty breakfast sandwich with savory sausage.",
              ],
              [
                "Turkey",
                "$6.75",
                "A juicy breakfast sandwich with tender turkey.",
              ],
            ]}
          />

          <MenuCategory
            title="Wraps"
            onSelectItem={setSelectedItem}
            items={[
              [
                "Chicken",
                "$10.50",
                "A delicious wrap filled with seasoned chicken. Cheese, tomato, spinach, colored peppers, onion, black beans, corn, jerk or cajun sauce.",
              ],
              [
                "Shrimp / Salmon",
                "$12.50",
                "A flavorful wrap filled with fresh shrimp or salmon. Cheese, tomato, spinach, colored peppers, onion, black beans, corn, jerk or cajun sauce.",
              ],
            ]}
          />

          <MenuCategory
            title="Tacos"
            subtitle="Chicken, turkey, steak"
            onSelectItem={setSelectedItem}
            items={[
              [
                "Single Taco",
                "$3.50",
                "A single taco filled with your choice of protein and toppings. Chicken, turkey, or steak?",
              ],
              [
                "$10 Holla",
                "$10.00",
                "Taco Combo, 3 tacos with chips. Lettuce, cheese, tomato, spinach, colored peppers, onion.",
              ],
            ]}
          />

          <MenuCategory
            title="Baked Potato"
            onSelectItem={setSelectedItem}
            items={[
              [
                "Chicken",
                "$11.00",
                "A hearty baked potato topped with seasoned chicken. Cheese, tomato, spinach, colored peppers, onion, corn, jerk or cajun sauce.",
              ],
              [
                "Shrimp / Salmon",
                "$13.00",
                "A hearty baked potato topped with seasoned shrimp or salmon. Cheese, tomato, spinach, colored peppers, onion, corn, jerk or cajun sauce.",
              ],
            ]}
          />

          <MenuCategory
            title="Drinks"
            onSelectItem={setSelectedItem}
            items={[
              [
                "Teas",
                "$5.00",
                "Matcha, Hey Hazel, Green Tea, Lemon Ginger, Wellness, Chai",
              ],
              [
                "Refreshers",
                "$6.00",
                "Mango Pineapple, Strawberry Watermelon, Ginger Berry",
              ],
              [
                "Smoothies",
                "$7.00",
                "Mango, Wild Berry, Strawberry, Banana, Pineapple",
              ],
            ]}
          />

          <MenuCategory
            title="Snacks & Treats"
            onSelectItem={setSelectedItem}
            items={[
              [
                "Poundcake / Cookies",
                "$4.50",
                "Baked in-house, or sourced from local bakeries.",
              ],
              ["Soda Bottle", "$2.00", ""],
              ["Soda Can", "$1.00", ""],
              ["Gatorade / Powerade", "$2.00", ""],
              ["Monster Can", "$3.00", ""],
              ["Chips / Candy", "$1.00", ""],
            ]}
          />
        </section>

        <ItemModal
          isOpen={selectedItem !== null}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
        />
      </div>
    </main>
  );
}
