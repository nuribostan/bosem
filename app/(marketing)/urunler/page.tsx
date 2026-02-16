import HakkimizdaContent from "@/components/sections/urunler/Content";
import Hero from "@/components/sections/urunler/Hero";
import Slogan from "@/components/sections/urunler/Slogan";
import HakkimizdaTitle from "@/components/sections/urunler/Title";
import bg from "@/public/images/homepage/hero/bosem_background.jpg";

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
