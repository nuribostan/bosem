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
  return (
    <div
      id="navigation"
      className={`w-full h-full fixed top-0 left-0 z-50 bg-white flex flex-col items-center justify-between py-10 ${isOpen ? "translate-x-0 opacity-100 transition-all duration-500 ease-in-out" : "translate-x-full opacity-0"} transition-all duration-500 ease-in-out`}
    >
      {/* Logo */}
      <div className="nav-logo flex items-center gap-2">
        <Image
          src="/images/logo/bosem_altin_logo.png"
          alt="Bosem Tarım"
          width={120}
          height={40}
          priority
          quality={90}
          className="w-10 h-auto object-contain max-sm:w-6"
        />
        <h1 className="text-4xl font-semibold text-black font-serif max-sm:text-2xl">
          BOSEM TARIM
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links flex flex-col items-start gap-6 w-full px-20 max-sm:px-6 my-auto">
        <Link
          href="/"
          className="text-5xl font-medium text-black hover:text-orange-600 transition-colors max-sm:text-2xl uppercase font-serif border-b border-black/10 pb-2 w-full"
        >
          Ana Sayfa
        </Link>
        <Link
          href="/hakkimizda"
          className="text-5xl font-medium text-black hover:text-orange-600 transition-colors max-sm:text-2xl uppercase font-serif border-b border-black/10 pb-2 w-full"
        >
          Hakkımızda
        </Link>
        <Link
          href="/urunler"
          className="text-5xl font-medium text-black hover:text-orange-600 transition-colors max-sm:text-2xl uppercase font-serif border-b border-black/10 pb-2 w-full"
        >
          Ürünlerimiz
        </Link>
        <Link
          href="/iletisim"
          className="text-5xl font-medium text-black hover:text-orange-600 transition-colors max-sm:text-2xl uppercase font-serif border-b border-black/10 pb-2 w-full"
        >
          İletişim
        </Link>
      </nav>

      <Marquee
        speed={10}
        direction="left"
        pauseOnHover={true}
        className="py-8 w-full"
        backgroundColor="bg-orange-600"
        textColor="text-white"
        separator="🌾"
      >
        <span className="text-3xl font-semibold uppercase whitespace-nowrap max-sm:text-lg">
          Gübre sezonumuz açılmıştır - En uygun fiyatlardan haberdar olmak için
          bizimle iletişime geçin. (0464 212 12 00)
        </span>
      </Marquee>

      <div
        className="close-menu absolute top-15 right-6 text-xl font-semibold text-black cursor-pointer max-sm:top-11 max-sm:right-4"
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        <CloseSVG />
      </div>
    </div>
  );
};

export default Navigation;
