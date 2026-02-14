import Image, { StaticImageData } from "next/image";

const Hero = ({ bg, alt }: { bg: StaticImageData; alt: string }) => {
  return (
    <section
      id="Hero"
      className="sticky top-0 left-0 w-full h-svh flex items-center justify-center overflow-hidden z-0 rounded-b-[60px]"
    >
      <div className="hero-content w-full h-full relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bg}
            alt={alt}
            fill
            className="object-cover w-full h-full"
            priority
            quality={90}
          />

          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
          <h1 className="text-white font-serif text-[8vw] leading-tight drop-shadow-lg">
            Soğuk günlerin <br /> sıcak dostu.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
