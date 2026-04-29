"use client";

import React, { useState, type ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const BUSINESS = {
  name: "Spill The Beans",
  subtitle: "Urban Essentials Coffee Cafe",
  yelpUrl: "#",
  googleUrl: "#",
  directionsUrl: "#",
  phoneDisplay: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  addressLine1: "123 Main Street",
  addressLine2: "Anytown, ST 12345",
  hours: "7:00 AM – 6:00 PM",
  days: "Everyday",
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    /* Soft readability overlay only. The real background image comes from page.tsx */
    <div className="min-h-screen max-w-full text-[#080a1e] bg-black/45">
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
                <p className="text-xs font-black uppercase leading-none tracking-[0.22em] text-[#b4d7e7]">
                  Spill The Beans
                </p>
                <p className="mt-1 text-xs text-[#90a8b9]">
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
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#0b2032]">
                  Spill The Beans
                </p>
                <p className="text-xs text-[#364d5f]">{BUSINESS.subtitle}</p>
              </div>
            </a>

            <nav className="flex items-center gap-7 text-sm font-medium text-[#152636]">
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
                className="rounded-full border border-[#2e74b3]/70 px-5 py-2.5 font-semibold text-[#0b3d81] transition hover:bg-[#2e74b3]/10">
                Call Now
              </a>
            </nav>
          </header>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 md:pb-20 md:pt-8">
          <div className="grid items-center gap-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[#274f75]/30 bg-[#c5dbe7]/70 px-4 py-2 text-xs font-semibold text-[#0f2b43] shadow-lg shadow-black/20 backdrop-blur sm:text-sm">
                Coffee • Cocoa • Culture
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                A coffeehouse that smells like comfort and conversation.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#1a2b38] sm:text-lg md:text-xl md:leading-8">
                Spill The Beans is a Black-owned coffee shop rooted in warmth,
                craft, and community. Come for rich espresso, soft cocoa notes,
                and a welcoming space made for real conversation.
              </p>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap ">
                <a
                  href={BUSINESS.directionsUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2e74b3] px-5 py-3 text-sm font-black text-[#ddeaf2] shadow-xl shadow-black/30 transition hover:-translate-y-0.5 sm:px-6 sm:text-base">
                  <MapPinIcon />
                  Get Directions
                </a>

                <a
                  href="#menu"
                  className="text-white inline-flex items-center justify-center rounded-2xl border border-[#2e74b3]/50 bg-black/20 px-5 py-3 text-sm font-bold shadow-lg shadow-black/40 backdrop-blur transition hover:bg-white/10 sm:px-6 sm:text-base">
                  View Menu
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-1 py-3 text-sm font-bold text-[#f4c27e] underline decoration-[#d18b4c] decoration-2 underline-offset-8 transition hover:text-white sm:text-base">
                  <PhoneIcon />
                  Call Now
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5">
              <section className="rounded-[1.75rem] border border-[#274f75]/20 bg-[#dfeaf2]/85 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2e74b3]">
                      Loved by locals
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      Reviews
                    </h2>
                  </div>

                  <div className="rounded-full bg-[#2e74b3]/15 px-3 py-1 text-sm font-bold text-[#0b3d81]">
                    Top rated
                  </div>
                </div>

                <div className="mt-6 divide-y divide-[#274f75]/15 border-y border-[#274f75]/15">
                  <ReviewRow
                    platform="Yelp"
                    rating="4.9"
                    url={BUSINESS.yelpUrl}
                    accent="text-[#ff5a5f]"
                  />
                  <ReviewRow
                    platform="Google"
                    rating="4.8"
                    url={BUSINESS.googleUrl}
                    accent="text-[#4285f4]"
                  />
                </div>

                <p className="mt-5 rounded-2xl border border-[#274f75]/10 bg-white/[0.04] p-4 text-sm leading-6 text-[#182c3c]">
                  See what guests are sharing on Yelp and Google — photos,
                  reviews, and neighborhood love, all linked back to the
                  original platforms.
                </p>
              </section>

              <section
                id="visit"
                // className="rounded-[1.75rem] border border-[#274f75]/20 bg-[#d9e9f0]/85 p-5 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-6">
                className="sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2e74b3]">
                  Visit today
                </p>

                <h2 className="mt-2 text-2xl font-black text-white">
                  Make the stop easy
                </h2>

                <div className="mt-6 space-y-4">
                  <InfoRow
                    icon={<ClockIcon />}
                    label="Hours"
                    value={BUSINESS.hours}
                    detail={BUSINESS.days}
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

                <a
                  href={BUSINESS.directionsUrl}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0b2032] px-5 py-3 text-sm font-black text-[#d5e8f0] transition hover:-translate-y-0.5 sm:w-auto">
                  Get directions
                  <ArrowRightIcon />
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section
        id="menu"
        className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#274f75] sm:text-sm">
              Featured Menu
            </p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Comfort in every cup and bite
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-[#2a3e4c] sm:text-base">
            Built around deep roast aromas, smooth chocolate accents, and the
            kind of menu that makes people stay a little longer.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {[
            {
              name: "Brown Sugar Cold Brew",
              price: "$5.75",
              desc: "Slow-steeped and mellow, finished with a silky brown sugar cream.",
            },
            {
              name: "Cocoa Cinnamon Latte",
              price: "$6.25",
              desc: "Espresso layered with steamed milk, dark cocoa, and a warm cinnamon finish.",
            },
            {
              name: "Midnight Mocha Muffin",
              price: "$4.50",
              desc: "Soft, rich, and chocolate-forward with a bakery-style crumb.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-[1.75rem] border border-white/10 bg-[#e4edf2]/75 p-5 shadow-xl shadow-black/20 backdrop-blur-md sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-black text-white sm:text-2xl">
                  {item.name}
                </h3>

                <span className="w-fit rounded-full bg-[#2e74b3] px-3 py-1 text-sm font-black text-[#d9e9f0]">
                  {item.price}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#243846] sm:text-base sm:leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="story"
        className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#e4edf2]/75 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#274f75] sm:text-sm">
              Our Story
            </p>

            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl md:text-4xl">
              More than a café. A place to gather, create, and exhale.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-[#1c2b36] sm:text-lg sm:leading-8">
              Spill The Beans was imagined as a neighborhood staple with
              personality — where roasted beans and chocolate feel instantly
              familiar, and every detail invites people to slow down and
              connect.
            </p>
          </div>

          <div
            id="vibe"
            className="rounded-[2rem] border border-[#274f75]/15 bg-[#dbeaf0]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#274f75] sm:text-sm">
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
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#2e74b3]" />
                  <p className="text-sm leading-6 text-[#172835] sm:text-base">
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
        <div className="rounded-[2rem] border border-white/10 bg-[#e4edf2]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#274f75] sm:text-sm">
                Stay Connected
              </p>

              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Follow the aroma
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#2a3e4c] sm:text-base">
                Get updates, café moments, and more guest-shared photos through
                the official social pages.
              </p>
            </div>

            <div className="grid w-full max-w-xl gap-3 sm:grid-cols-3">
              <SocialButton
                href="https://www.instagram.com/urban_essentials_coffeecafe/"
                icon={<InstagramIcon />}
                label="Instagram"
              />
              <SocialButton
                href="https://x.com"
                icon={<XIcon />}
                label="X"
              />
              <SocialButton
                href="https://www.facebook.com"
                icon={<FacebookIcon />}
                label="Facebook"
              />
            </div>

            <p className="text-center text-xs text-[#576a7f]">
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
      } flex shrink-0 items-center justify-center rounded-full border border-[#2e74b3]/35 bg-[#c5dee8] font-black leading-none text-[#0b2032] shadow-lg shadow-black/25`}>
      <span className="text-center">SB</span>
    </div>
  );
}

function ReviewRow({
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
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[92px_1fr] items-center gap-4 py-4 transition hover:bg-white/[0.03] sm:grid-cols-[110px_1fr]">
      <div className={`text-2xl font-black ${accent}`}>{platform}</div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xl font-black text-white">{rating}</span>
          <span className="tracking-[0.12em] text-[#2e74b3]">★★★★★</span>
        </div>

        <p className="mt-1 text-sm font-semibold text-[#152636] underline decoration-[#2e74b3]/60 underline-offset-4 group-hover:text-white">
          See reviews on {platform} →
        </p>
      </div>
    </a>
  );
}

function InfoRow({
  icon,
  label,
  value,
  detail,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  detail: string;
  href?: string;
}) {
  const content = (
    <div className="grid grid-cols-[34px_1fr] gap-3 border-t border-[#274f75]/15 pt-4 first:border-t-0 first:pt-0">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2e74b3]/10 text-[#2e74b3]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-[#0b2032]">{label}</p>
        <p className="mt-1 font-semibold text-white">{value}</p>
        <p className="text-sm text-[#324757]">{detail}</p>
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

function SocialButton({
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

function MapPinIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 10.5a2 2 0 100-4 2 2 0 000 4z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3 5.5C3 4.12 4.12 3 5.5 3h2.1c.5 0 .94.33 1.08.8l.95 3.18a1.3 1.3 0 01-.33 1.3l-1.2 1.2a13.5 13.5 0 006.42 6.42l1.2-1.2a1.3 1.3 0 011.3-.33l3.18.95c.47.14.8.58.8 1.08v2.1A2.5 2.5 0 0118.5 21h-.5C9.72 21 3 14.28 3 6v-.5z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 8v5l3 2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M13 5l7 7-7 7"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <FontAwesomeIcon
      icon={faInstagram}
      className="h-6 w-6"
    />
  );
}

function XIcon() {
  return (
    <FontAwesomeIcon
      icon={faXTwitter}
      className="h-6 w-6"
    />
  );
}

function FacebookIcon() {
  return (
    <FontAwesomeIcon
      icon={faFacebook}
      className="h-6 w-6"
    />
  );
}
