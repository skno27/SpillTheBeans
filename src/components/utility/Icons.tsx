import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

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

function TikTokIcon() {
  return (
    <FontAwesomeIcon
      icon={faTiktok}
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

export {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  ArrowRightIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
};
