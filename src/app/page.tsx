"use client";

import Image from "next/image";
import LandingPage from "../components/LandingPage";
import Menu from "../components/Menu";
import React, { useState } from "react";

type ViewName = "home" | "menu";

export default function Home() {
  const [activeView, setActiveView] = useState<ViewName>("home");

  const openMenu = () => {
    setActiveView("menu");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMenu = () => {
    setActiveView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Mobile / Small screens bg */}
      <Image
        src="/assets/STB/jazz_cellar_web_background_4x_upscaled.webp"
        alt="Garleen's Jazz Cellar, a painting reminiscent of the Sugar Shack"
        sizes="100vw"
        fill
        quality={75}
        className="object-cover object-[40%_0%] block md:hidden"
        priority
      />

      {/* Desktop / Medium and up bg */}
      <Image
        src="/assets/stb_Main_wall_1.png"
        alt="Background Image, a shot of the bar area"
        sizes="100vw"
        fill
        className="object-cover object-[78%_18%] hidden md:block"
        priority
      />
      <div className="relative z-10">
        {activeView === "home" && <LandingPage onOpenMenu={openMenu} />}
        {activeView === "menu" && <Menu onBack={closeMenu} />}
      </div>
    </div>
  );
}
