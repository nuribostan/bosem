import HakkimizdaContent from "@/components/sections/urunler/Content";
import Hero from "@/components/sections/urunler/Hero";
import Slogan from "@/components/sections/urunler/Slogan";
import HakkimizdaTitle from "@/components/sections/urunler/Title";
import bg from "@/public/images/homepage/hero/bosem_background.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünlerimiz - Kömür, Pelet ve Gübre Çeşitleri",
  description:
    "En iyi ithal kömürler, sobalık ve kaloriferlik yakıtlar, yüksek verimli çay gübreleri (25-5-10 vb.) ve kaliteli peletler. Uygun fiyat ve taksit imkanıyla.",
  keywords: [
    "taksitli kömür",
    "en iyi kömür markaları",
    "sibirya kömürü",
    "ceviz kömür",
    "portakal kömür",
    "en iyi çay gübresi",
    "npk kompoze gübre",
    "ucuz pelet",
  ],
};

const UrunlerPage = () => {
  return (
    <div>
      <Hero bg={bg} alt="Bosem Tarım" />
      <Slogan />
      <HakkimizdaTitle />
      <HakkimizdaContent />
    </div>
  );
};

export default UrunlerPage;
