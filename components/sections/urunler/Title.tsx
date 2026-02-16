"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD_DESKTOP = 800;
const SCROLL_THRESHOLD_MOBILE = 500;

const HakkimizdaTitle = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1024) {
        if (window.scrollY > SCROLL_THRESHOLD_DESKTOP) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }

      if (window.innerWidth < 1024) {
        if (window.scrollY > SCROLL_THRESHOLD_MOBILE) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="productsPage"
      className={`sticky bottom-0 left-0 bg-bizlere-ulasin-background text-bizlere-ulasin-foreground w-full h-[60vh] max-lg:h-[65vh]  flex flex-col gap-40 items-center justify-start pt-20 overflow-hidden ${isScrolled ? "z-10 " : "-z-10"} -mt-24`}
    >
      <div className="products-content transform translate-y-50   flex flex-col items-center justify-center text-center gap-6">
        <h2 className="text-[120px] text-bizlere-ulasin-foreground font-extralight z-20 max-sm:text-5xl">
          Ürünlerimiz
        </h2>
        <p className="text-xl text-bizlere-ulasin-foreground font-extralight mt-4 w-3/4">
          Kalite ve uygun fiyatlarla ihtiyacınıza uygun ürünlerimizden
          yararlanabilirsiniz
        </p>
      </div>
    </section>
  );
};

export default HakkimizdaTitle;
