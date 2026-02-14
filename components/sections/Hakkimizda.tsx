"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 1800;
const Hakkimizda = () => {
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
    <section
      id="hakkimizda"
      className={`-mt-24 rounded-b-[60px] bg-footer-background sticky bottom-0 left-0  w-full h-svh flex flex-col gap-10 items-center justify-center pt-20 overflow-hidden max-2xl:gap-6 ${isScrolled ? "z-3 " : "-z-10"} max-sm:-mt-10`}
    >
      <video
        className="w-full h-full object-cover absolute top-0 left-0 -z-10 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero/yanan_komur.mp4" type="video/mp4" />
      </video>

      <div className="title max-w-324 mx-auto w-full flex flex-col gap-10 justify-center items-center max-2xl:gap-6">
        <h1 className="text-[120px] text-bizlere-ulasin-foreground font-light  max-sm:text-5xl  max-2xl:text-8xl max-md:text-6xl">
          Hakkımızda
        </h1>

        <p className="text-2xl text-bizlere-ulasin-foreground font-light w-3/4 mx-auto text-center max-sm:text-lg max-md:w-full max-2xl:text-xl max-md:text-lg">
          Kaliteli ve uygun fiyatlarla ürünler sunmayı amaçlayan ve 40 yıldır bu
          işi yapan bir firmayız. Müşteri memnuniyetini ön planda tutarak, geniş
          ürün yelpazemizle her ihtiyaca cevap veriyoruz.
        </p>
      </div>

      <div className="adres flex justify-between items-center w-full max-w-324 mx-auto mt-20 ">
        <div className="adres-item flex flex-col items-center justify-center gap-4">
          <div className="adres-item-title flex flex-col justify-center items-center gap-2">
            <h1 className="text-white text-xl font-semibold uppercase max-2xl:text-lg">
              Adres
            </h1>
            <h2 className="text-gray-300 text-xs font-semibold uppercase">
              Merkez ofis
            </h2>
          </div>

          <p className="text-white text-[16px] font-normal text-center w-3/4 leading-5! max-2xl:text-sm">
            Bağdatlı Caddesi, Kaçkar Fırın Yanı No:125/A Rize | Bosem Tarım,
          </p>
        </div>

        <div className="adres-item flex flex-col items-center justify-center gap-4">
          <div className="adres-item-title flex flex-col justify-center items-center gap-2">
            <h1 className="text-white text-xl font-semibold uppercase max-2xl:text-lg">
              Adres
            </h1>
            <h2 className="text-gray-300 text-xs font-semibold uppercase">
              Merkez Depo
            </h2>
          </div>

          <p className="text-white text-[16px] font-normal text-center w-3/4 leading-5! max-2xl:text-sm">
            Müftü Mahallesi, 108. Sokak No:12 Rize | Bosem Tarım,
          </p>
        </div>
      </div>

      <div className="iletisim w-full max-w-324 mx-auto flex flex-col items-center justify-center gap-6">
        <div className="title flex flex-col justify-center items-center gap-2">
          <h1 className="text-white text-xl font-semibold uppercase max-2xl:text-lg">
            iletişim
          </h1>
          <h2 className="text-gray-300 text-xs font-semibold uppercase">
            bosem tarım
          </h2>
        </div>

        <div className="title flex flex-col justify-center items-center gap-1">
          <p className="text-white text-[16px] font-normal text-center  leading-5! max-2xl:text-sm">
            Telefon: +90 464 212 34 56
          </p>
          <p className="text-white text-[16px] font-normal text-center leading-5! max-2xl:text-sm">
            E-posta:bosemtarim@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hakkimizda;
