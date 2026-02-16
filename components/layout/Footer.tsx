"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 1800;

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`-mt-24 bg-footer-background sticky bottom-0 left-0  w-full h-[25vh] max-sm:h-[55vh] flex flex-col gap-0 items-center justify-center pt-20 overflow-hidden max-2xl:gap-6 ${isScrolled ? "-z-5" : "-z-10"}`}
    >
      <div className="flex justify-center items-center gap-2 pt-5">
        <p className="text-[16px] text-[#FFFFFFB3] font-light max-sm:text-xs">
          Telefon
        </p>
        <span className="h-px w-4 bg-white"></span>
        <Link
          href="tel:04642121300"
          className="text-[16px] text-[#FFFFFFB3] font-light max-sm:text-xs"
        >
          0464 212 13 00
        </Link>
      </div>

      <div className="flex justify-center items-center gap-2">
        <p className="text-[16px] text-[#FFFFFFB3] font-light max-sm:text-xs">
          Email
        </p>
        <span className="h-px w-4 bg-white"></span>
        <Link
          href="mailto:bosemtarim@gmail.com"
          className="text-[16px] text-[#FFFFFFB3] font-light max-sm:text-xs "
        >
          bosemtarim@gmail.com
        </Link>
      </div>

      <div className="flex justify-center items-center gap-2 ">
        <p className="text-[16px] text-[#FFFFFFB3] font-light max-sm:text-xs">
          Tarafından geliştirildi
        </p>
        <span className="h-px w-4 bg-white"></span>
        <Link
          href="https://nuribostan.com"
          className="text-[16px] text-[#FFFFFFB3] font-light max-sm:text-xs"
        >
          bosyn.io | 2026
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
