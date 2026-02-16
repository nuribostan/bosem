import Image from "next/image";
import Link from "next/link";
import Marquee from "../ui/Marquee";
import CloseSVG from "@/public/images/icons/closeSVG";

const Navigation = ({
  isOpen,
  setIsNavOpen,
}: {
  isOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}) => {
  const navLinks = [
    { title: "Ana Sayfa", href: "/" },
    { title: "Hakkımızda", href: "/hakkimizda" },
    { title: "Ürünlerimiz", href: "/urunler" },
    { title: "İletişim", href: "/iletisim" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <div
      id="navigation"
      // Arka planı kesinlikle beyaz/kırık beyaz yapıyoruz ve z-[99] ile en üste alıyoruz.
      className={`fixed inset-0 z-99 flex flex-col bg-stone-50 transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* 1. HEADER Alanı */}
      <div className="flex items-center justify-between px-6 py-6 md:px-12 md:py-10 w-full">
        <Link
          href="/"
          onClick={() => setIsNavOpen(false)}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/logo/bosem_altin_logo.png"
            alt="Bosem Tarım Logo"
            width={120}
            height={40}
            priority
            quality={90}
            className="w-8 md:w-12 h-auto object-contain"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-stone-900 font-serif tracking-wide">
            BOSEM TARIM
          </span>
        </Link>

        <button
          className="p-2 text-stone-900 hover:text-orange-600 transition-all transform hover:rotate-90 duration-300"
          onClick={() => setIsNavOpen(false)}
          aria-label="Menüyü Kapat"
        >
          <CloseSVG />
        </button>
      </div>

      {/* 2. MENÜ LİNKLERİ */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-24">
        <nav className="flex flex-col gap-6 md:gap-12 w-full max-w-full mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsNavOpen(false)}
              // Mobilde text-3xl, küçük tablette 4xl, bilgisayarda 6xl/7xl yaparak taşmayı önledik
              className="group relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-800 uppercase tracking-wider w-fit"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-orange-600">
                {link.title}
              </span>
              <span className="absolute left-0 bottom-0 md:-bottom-5 w-0 h-1 md:h-2 bg-orange-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* 3. MARQUEE (Kayan Yazı) */}
      <div className="w-full mt-auto relative z-10">
        <Marquee
          speed={30}
          direction="left"
          pauseOnHover={true}
          className="py-4 md:py-6 w-full"
          backgroundColor="bg-orange-600"
          textColor="text-white"
          separator="🌾"
        >
          <span className="text-sm sm:text-lg md:text-2xl font-medium uppercase whitespace-nowrap px-4">
            Gübre sezonumuz açılmıştır - En uygun fiyatlardan haberdar olmak
            için bizimle iletişime geçin. (0464 212 12 00)
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default Navigation;
