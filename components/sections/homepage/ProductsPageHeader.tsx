"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD_DESKTOP = 800;
const SCROLL_THRESHOLD_MOBILE = 500;

const ProductsPageHeader = () => {
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
      className={`sticky bottom-0 left-0 bg-products-background w-full h-[60vh] max-lg:h-[65vh]  flex flex-col gap-40 items-center justify-start py-20 overflow-hidden ${isScrolled ? "z-10 " : "-z-10"} -mt-24`}
    >
      <div className="products-content transform translate-y-40   flex flex-col items-center justify-center text-center gap-6">
        <h2 className="text-[120px] text-products-foreground font-light z-20 max-sm:text-5xl">
          Ürünlerimiz
        </h2>
        <p className="text-xl text-products-foreground font-light mt-4 w-3/4">
          Güvenilir ısınma ve tarım çözümleri için geniş ürün yelpazemizle
          hizmetinizdeyiz.
        </p>
      </div>
    </section>
  );
};

export default ProductsPageHeader;
