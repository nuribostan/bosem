import Image, { StaticImageData } from "next/image";

const Hero = ({
  bg,
  alt,
  title,
}: {
  bg: StaticImageData;
  alt: string;
  title: string;
}) => {
  if (title === "komur") {
    title = "Kömür";
  } else if (title === "gubre") {
    title = "Gübre";
  } else if (title === "pelet") {
    title = "Pelet";
  } else if (title === "tarim-kireci") {
    title = "Tarım Kireci";
  } else if (title === "odun") {
    title = "Odun";
  }

  return (
    <section
      id="Hero"
      className="sticky top-0 left-0 w-full h-svh flex items-center justify-center overflow-hidden z-0 rounded-b-[40px] md:rounded-b-[60px]"
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
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4 md:px-8">
          <h1 className="text-white font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-tight drop-shadow-2xl">
            Tüm {title} Ürünlerimiz
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
