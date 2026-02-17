import Hero from "@/components/sections/hakkimizda/Hero";
import Slogan from "@/components/sections/hakkimizda/Slogan";
import bg from "@/public/images/homepage/hero/bosem_background.jpg";
import HakkimizdaTitle from "@/components/sections/hakkimizda/Title";
import HakkimizdaContent from "@/components/sections/hakkimizda/Content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Yılların tecrübesiyle Rize'de tarım ve ısınma sektöründe güvenin adresi. Müşteri memnuniyeti, kaliteli ürün ve uygun fiyat politikamızla hizmetinizdeyiz.",
};

const HakkimizdaPage = () => {
  return (
    <div className="relative w-full min-h-[300vh] bg-transparent">
      <Hero bg={bg} alt="Bosem Tarım" />
      <Slogan />
      <HakkimizdaTitle />
      <HakkimizdaContent />
    </div>
  );
};

export default HakkimizdaPage;
