"use client";

import React, { useState, type ReactNode } from "react";
import Image from "next/image";

import InfoRow from "./utility/InfoRow";
import ReviewRow from "./utility/ReviewRow";
import SocialButton from "./utility/SocialButton";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  ArrowRightIcon,
  TikTokIcon,
  InstagramIcon,
  FacebookIcon,
} from "./utility/Icons";

import BUSINESS from "./utility/Business";

type LandingPageProps = {
  onOpenMenu: () => void;
};

export default function LandingPage({ onOpenMenu }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [directionsOpen, setDirectionsOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const encodedAddress = encodeURIComponent(BUSINESS.fullAddress);
  const encodedName = encodeURIComponent(BUSINESS.name);

  const directionLinks = {
    apple: `https://maps.apple.com/?q=${encodedName}&address=${encodedAddress}&ll=${BUSINESS.latitude},${BUSINESS.longitude}`,
    google: `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
    waze: `https://waze.com/ul?ll=${BUSINESS.latitude},${BUSINESS.longitude}&navigate=yes`,
  };

  return (
    /* Soft readability overlay only. The real background image comes from page.tsx */
    <div className="min-h-screen max-w-full text-[#f7ede1] bg-linear-to-b from-black/70 via-black/55 to-black/75">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 " />

        {/* Mobile Header Banner */}
        <div className="fixed left-0 right-0 top-0 z-50 border-b border-[#152636]/20 bg-[#080a1e] text-[#e4edf2] shadow-lg shadow-black/10 md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <a
              href="#top"
              className="flex items-center gap-2"
              onClick={closeMobileMenu}>
              <LogoMark small />
              <div>
                <p className="text-xs font-black uppercase leading-none tracking-[0.22em] text-[#f4c27e]">
                  Spill The Beans
                </p>
                <p className="mt-1 text-xs text-[#e7d3c3]">
                  {BUSINESS.subtitle}
                </p>
              </div>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl p-2 transition hover:bg-[#152636]/60"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}>
              <svg
                className="h-6 w-6 text-[#e4edf2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="border-t border-[#b4d7e7]/10 bg-[#080a1e]">
              <div className="flex flex-col px-4 py-3 text-sm font-semibold text-[#b4d7e7]">
                <a
                  href="#menu"
                  className="rounded-xl px-2 py-3 hover:bg-[#152636]/60"
                  onClick={closeMobileMenu}>
                  Menu
                </a>
                <a
                  href="#story"
                  className="rounded-xl px-2 py-3 hover:bg-[#152636]/60"
                  onClick={closeMobileMenu}>
                  Our Story
                </a>
                <a
                  href="#visit"
                  className="rounded-xl px-2 py-3 hover:bg-[#152636]/60"
                  onClick={closeMobileMenu}>
                  Visit
                </a>
                <a
                  href="#social"
                  className="rounded-xl px-2 py-3 hover:bg-[#152636]/60"
                  onClick={closeMobileMenu}>
                  Social
                </a>
              </div>
            </nav>
          )}
        </div>

        {/* Desktop Header */}
        <div
          id="top"
          className="relative mx-auto hidden max-w-7xl px-6 py-8 md:block">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-black/25 px-5 py-3 backdrop-blur-md">
            <a
              href="#top"
              className="flex items-center gap-3">
              <LogoMark />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f4c27e]">
                  Spill The Beans
                </p>
                <p className="text-xs text-[#e7d3c3]">{BUSINESS.subtitle}</p>
              </div>
            </a>

            <nav className="flex items-center gap-7 text-sm font-medium text-[#f4c27e]">
              <a
                href="#menu"
                className="transition hover:text-white">
                Menu
              </a>
              <a
                href="#story"
                className="transition hover:text-white">
                Our Story
              </a>
              <a
                href="#visit"
                className="transition hover:text-white">
                Visit
              </a>
              <a
                href="#social"
                className="transition hover:text-white">
                Social
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="rounded-full border border-[#f4c27e]/50 px-5 py-2.5 font-semibold text-[#f4c27e] transition hover:bg-[#f4c27e]/10">
                Call Now
              </a>
            </nav>
          </header>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 md:pb-20 md:pt-8">
          <div
            id="menus-container"
            className="grid items-center gap-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:gap-14">
            <div className="">
              <div className="mb-5 inline-flex items-center rounded-full border border-[#d18b4c]/30 bg-[#d18b4c]/15 px-4 py-2 text-xs font-semibold text-[#f4c27e] shadow-lg shadow-black/20 backdrop-blur sm:text-sm">
                Coffee • Cocoa • Culture
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl ">
                <span className="text-[#f4c27e] ">Welcome</span> to the smell of
                comfort.
              </h1>

              {/* <p className="mt-6 max-w-2xl text-base leading-7 text-[#1a2b38] sm:text-lg md:text-xl md:leading-8"> */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#f4c27e]  sm:text-lg md:text-xl md:leading-8">
                Come for rich espresso, soft cocoa notes, and a welcoming space
                made for real conversation.
              </p>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap ">
                <button
                  type="button"
                  onClick={() => setDirectionsOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d18b4c] px-5 py-3 text-sm font-black text-white shadow-xl shadow-black/30 transition hover:-translate-y-0.5 sm:px-6 sm:text-base">
                  <MapPinIcon />
                  Get Directions
                </button>

                <button
                  type="button"
                  onClick={onOpenMenu}
                  className="inline-flex items-center justify-center rounded-2xl border border-[#d18b4c]/50 bg-black/20 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/40 backdrop-blur transition hover:bg-white/10 sm:px-6 sm:text-base">
                  View Menu
                </button>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-1 py-3 text-sm font-bold text-[#f4c27e] underline decoration-[#d18b4c] decoration-2 underline-offset-8 transition hover:text-white sm:text-base">
                  <PhoneIcon />
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5">
              <section
                id="visit"
                className="rounded-[1.75rem] border border-white/10 bg-[#080a1e]/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4c27e]">
                  Visit today
                </p>

                <h2 className="mt-2 text-2xl font-black text-white">
                  Make the stop easy
                </h2>

                <div className="mt-6 space-y-4">
                  <InfoRow
                    icon={<ClockIcon />}
                    label="Hours"
                    value={
                      <ul className="mt-1 space-y-1">
                        {BUSINESS.hours.map((hours, day) => (
                          <li
                            key={day}
                            className="whitespace-pre text-sm text-white">
                            <span className="font-semibold text-white">
                              {BUSINESS.days[day]}:
                            </span>{" "}
                            {hours}
                          </li>
                        ))}
                      </ul>
                    }
                    detail="Stop by and see us!"
                  />
                  <InfoRow
                    icon={<MapPinIcon />}
                    label="Address"
                    value={BUSINESS.addressLine1}
                    detail={BUSINESS.addressLine2}
                  />
                  <InfoRow
                    icon={<PhoneIcon />}
                    label="Call"
                    value={BUSINESS.phoneDisplay}
                    detail="Tap to call from your phone"
                    href={BUSINESS.phoneHref}
                  />
                </div>
                <br />
                <button
                  type="button"
                  onClick={() => setDirectionsOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d18b4c] px-5 py-3 text-sm font-black text-white shadow-xl shadow-black/30 transition hover:-translate-y-0.5 sm:px-6 sm:text-base">
                  <MapPinIcon />
                  Get Directions
                  <ArrowRightIcon />
                </button>
              </section>
              <section className="rounded-[1.75rem] border border-white/10 bg-[#080a1e]/80 text-white p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4c27e]">
                      Loved by locals
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      Reviews
                    </h2>
                  </div>

                  <div className="rounded-full bg-[#d18b4c]/20 px-3 py-1 text-sm font-bold text-[#f4c27e]">
                    Top rated
                  </div>
                </div>

                <div className="mt-6 divide-y divide-[#274f75]/15 border-y border-[#274f75]/15">
                  <ReviewRow
                    platform="Yelp"
                    rating={BUSINESS.socialProof.yelp.yelpRating}
                    url={BUSINESS.yelpUrl}
                    accent="text-[#ff5a5f]"
                  />
                  <ReviewRow
                    platform="Google"
                    rating={BUSINESS.socialProof.google.googleRating}
                    url={BUSINESS.googleUrl}
                    accent="text-[#4285f4]"
                  />
                </div>

                <p className="mt-5 rounded-2xl border border-[#274f75]/10 bg-white/4 p-4 text-sm leading-6 text-[#e7d3c3]">
                  See what guests are sharing on Yelp and Google — photos,
                  reviews, and neighborhood love, all linked back to the
                  original platforms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section
        id="menu"
        className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 ">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4c27e] sm:text-sm">
              Featured Menu
            </p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Comfort in every cup and bite
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 sm:text-base text-white">
            Deep roast aromas, smooth chocolate accents. Something sweet,
            something savory. The kind of menu that makes people stay a little
            longer.
          </p>
        </div>

        {/* Menu Display */}
        <div className="flex justify-center mt-20">
          <button
            type="button"
            onClick={onOpenMenu}
            className="group w-full flex justify-center">
            <Image
              src="/assets/STB/Menu-1.png"
              alt="Menu display showcasing featured items"
              width={1200}
              height={800}
              className="w-10/12 rounded-2xl border border-white/10 object-cover shadow-lg shadow-black/20"
              onClick={onOpenMenu}
            />
          </button>
        </div>
      </section>
      <section
        id="story"
        className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-4xl border border-white/10 bg-[#1b120d]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4c27e] sm:text-sm">
              Our Story
            </p>

            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl md:text-4xl">
              More than a café. A place to gather, create, and exhale.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-[#e7d3c3] sm:text-lg sm:leading-8">
              Spill The Beans was imagined as a neighborhood staple with
              personality — where roasted beans and chocolate feel instantly
              familiar, and every detail invites people to slow down and
              connect.
            </p>
          </div>

          <div
            id="vibe"
            className="rounded-4xl border border-white/10 bg-[#1b120d]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4c27e] sm:text-sm">
              Atmosphere
            </p>

            <div className="mt-5 space-y-4">
              {[
                "Notes of roasted coffee, cocoa, and warm sugar in the air",
                "Deep mocha tones, soft amber lighting, and cozy corners",
                "A modern Black-owned brand presence with neighborhood soul",
                "Perfect for casual meetings, journaling, and real conversation",
              ].map((line) => (
                <div
                  key={line}
                  className="flex gap-3 rounded-2xl border border-[#d18b4c]/20 bg-[#d18b4c]/10 p-4">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d18b4c]" />
                  <p className="text-sm leading-6 text-[#e7d3c3] sm:text-base">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="social"
        className="relative mx-auto max-w-7xl px-4 py-10 pb-16 sm:px-6 md:py-16">
        <div className="rounded-4xl border border-white/10 bg-[#1b120d]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4c27e] sm:text-sm">
                Stay Connected
              </p>

              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Follow the aroma
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#e7d3c3] sm:text-base">
                Get updates, café moments, and more guest-shared photos through
                the official social pages.
              </p>
            </div>

            {/* <div className="grid w-full max-w-xl gap-3 sm:grid-cols-3"> */}
            <div className="flex flex-row justify-center w-full max-w-xl gap-3 ">
              <SocialButton
                href="https://www.https://www.tiktok.com/@urbanessentialscafe/"
                icon={<TikTokIcon />}
                label="TikTok"
              />
              <SocialButton
                href="https://www.instagram.com/urban_essentials_coffeecafe/"
                icon={<InstagramIcon />}
                label="Instagram"
              />
              <SocialButton
                href="https://www.facebook.com/UrbanEssentialCoffeeCafe"
                icon={<FacebookIcon />}
                label="Facebook"
              />
            </div>

            <p className="text-center text-xs text-[#a89878]">
              © 2026 Spill The Beans. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function LogoMark({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`${
        small ? "h-9 w-9 text-[10px]" : "h-11 w-11 text-xs"
      } flex shrink-0 items-center justify-center rounded-full border border-[#d18b4c]/35 bg-[#d18b4c]/20 font-black leading-none text-[#f4c27e] shadow-lg shadow-black/25`}>
      <span className="text-center">SB</span>
    </div>
  );
}
