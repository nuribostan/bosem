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
      className={`-mt-24 bg-footer-background sticky bottom-0 left-0  w-full h-[25vh] flex flex-col gap-0 items-center justify-center pt-20 overflow-hidden max-2xl:gap-6 ${isScrolled ? "-z-5" : "-z-10"}`}
    >
      <div className="flex justify-center items-center gap-2 pt-5">
        <p className="text-[16px] text-[#FFFFFFB3] font-light">Telefon</p>
        <span className="h-px w-4 bg-white"></span>
        <Link href="tel:04642121300" className="text-[16px] text-[#FFFFFFB3] font-light">
          0464 212 13 00
        </Link>
      </div>

      <div className="flex justify-center items-center gap-2">
        <p className="text-[16px] text-[#FFFFFFB3] font-light">Email</p>
        <span className="h-px w-4 bg-white"></span>
        <Link
          href="mailto:bosemtarim@gmail.com"
          className="text-[16px] text-[#FFFFFFB3] font-light"
        >
          bosemtarim@gmail.com
        </Link>
      </div>

      <div className="flex justify-center items-center gap-2">
        <p className="text-[16px] text-[#FFFFFFB3] font-light">Tarafından geliştirildi</p>
        <span className="h-px w-4 bg-white"></span>
        <Link href="https://nuribostan.com" className="text-[16px] text-[#FFFFFFB3] font-light">
          nuribostan.com | 2026
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
