import HakkimizdaContent from "@/components/sections/urunSingle/Content";
import Hero from "@/components/sections/urunSingle/Hero";
import Slogan from "@/components/sections/urunSingle/Slogan";
import HakkimizdaTitle from "@/components/sections/urunSingle/Title";
import bg from "@/public/images/homepage/hero/bosem_background.jpg";

const UrunSinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <div className="w-full h-full">
      <Hero bg={bg} alt="Bosem Tarım" title={slug} />
      <Slogan />
      <HakkimizdaTitle />
      <HakkimizdaContent productName={slug} />
    </div>
  );
};

export default UrunSinglePage;
