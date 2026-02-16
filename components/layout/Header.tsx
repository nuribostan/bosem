"use client";

import MenuSVG_WHITE from "@/public/images/icons/MenuSVG_WHITE";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const SCROLL_THRESHOLD = 900;

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="header"
        // z-index değerini 50 tuttuk
        className={`fixed top-0 left-0 w-full h-20 bg-transparent flex justify-center items-center z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-xl bg-black/10" : ""
        }`}
      >
        <Link href="/" className="header-logo flex items-center gap-2 relative">
          <Image
            src="/images/logo/bosem_altin_logo.png"
            alt="Bosem Tarım"
            width={120}
            height={40}
            priority
            quality={90}
            className="w-10 h-auto object-contain relative max-sm:w-6"
          />

          <h1 className="text-[42px] font-medium text-[#cca24a] max-sm:text-2xl font-serif">
            BOSEM TARIM
          </h1>
        </Link>

        <div
          className="header-menu absolute right-20 top-1/2 transform -translate-y-1/2 cursor-pointer max-sm:right-6 w-6 h-6 hover:scale-110 transition-transform"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <MenuSVG_WHITE />
        </div>
      </header>

      {/* Navigation'ı Header etiketinin DIŞINA aldık */}
      <Navigation isOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};

export default Header;