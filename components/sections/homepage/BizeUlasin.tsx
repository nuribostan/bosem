"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 1800;
const BizeUlasin = () => {
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
    <div
      className={`-mt-24 rounded-b-[60px] bg-bizlere-ulasin-background sticky bottom-0 left-0  w-full h-[60vh] flex flex-col gap-10 items-center justify-center pt-20 overflow-hidden max-2xl:gap-6 ${isScrolled ? "z-4" : "-z-10"}`}
    >
      <h1 className="text-[120px] text-bizlere-ulasin-foreground font-light  max-sm:text-5xl max-w-324 pt-30 mx-auto max-sm:pt-10 max-xl:text-8xl">
        Bizlere Ulaşın
      </h1>

      <p className="text-2xl text-bizlere-ulasin-foreground font-light max-w-324 w-1/2 mx-auto text-center max-sm:text-sm max-md:w-full max-xl:text-xl max-sm:leading-2 ">
        Ürünlerimiz hakkında daha fazla bilgi almak veya sipariş vermek için
        bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
      </p>
    </div>
  );
};

export default BizeUlasin;
