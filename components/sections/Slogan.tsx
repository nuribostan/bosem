import Image from "next/image";

const Slogan = () => {
  return (
    <div className="slogan-section relative w-full flex flex-col">
      <div
        className="relative w-full h-fit -mt-[85vh] pointer-events-none z-20 max-sm:-mt-[20vh] max-lg:-mt-[50vh] max-xl:-mt-[60vh] max-2xl:-mt-[60vh]"
        style={{ mixBlendMode: "screen" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-bottom"
        >
          <source src="/videos/hero/bosem_duman.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-0 w-full h-64 bg-linear-to-t from-white to-transparent" />
      </div>

      <div className="relative z-20 w-full min-h-[80vh] bg-white flex flex-col items-center justify-center gap-4 rounded-b-[60px]">
        <h1 className="text-6xl text-black  font-extralight  text-center w-1/3 max-md:w-11/12 max-md:text-4xl leading-px-tight max-lg:w-3/4 max-xl:w-2/3 max-2xl:w-1/2">
          Kaliteyi ön planda tutuyoruz
        </h1>
        <p className="text-2xl text-black font-light mt-6 w-2/5 text-center  max-md:w-11/12 max-md:text-lg max-lg:w-3/4 max-xl:w-2/3 max-2xl:w-1/2">
          Doğanın gücünü evinize ve toprağınıza taşıyoruz. Isınma ve tarıma
          yönelik odun, kömür ve gübre ürünlerinde kaliteyi ön planda tutuyoruz.
        </p>
        <Image
          src="/images/logo/bosem_altin_logo.png"
          alt="Bosem Tarım"
          width={120}
          height={40}
          priority
          quality={90}
          className=" w-16 h-auto object-contain relative max-sm:w-6 mt-8"
        />
      </div>
    </div>
  );
};

export default Slogan;
