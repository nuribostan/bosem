"use client";

import MenuSVG_WHITE from "@/public/images/icons/MenuSVG_WHITE";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import { useEffect, useState } from "react";

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
    <header
      id="header"
      className={`fixed top-0 left-0 w-full h-20 bg-transparent flex justify-center items-center z-50 ${isScrolled ? "backdrop-blur-xl" : ""}`}
    >
      <div className="header-logo flex items-center gap-2 relative">
        <Image
          src="/images/logo/bosem_altin_logo.png"
          alt="Bosem Tarım"
          width={120}
          height={40}
          priority
          quality={90}
          className=" w-10 h-auto object-contain relative max-sm:w-6"
        />

        <h1 className="text-[42px] font-medium text-black  max-sm:text-2xl">
          BOSEM TARIM
        </h1>
      </div>

      <div
        className="header-menu absolute right-20 top-1/2 transform -translate-y-1/2 cursor-pointer max-sm:right-6 w-6 h-6"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <MenuSVG_WHITE />
      </div>

      <Navigation isOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </header>
  );
};

export default Header;
