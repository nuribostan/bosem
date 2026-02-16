import UrunList from "@/components/ui/urunSingle/urunList";

const HakkimizdaContent = ({ productName }: { productName: string }) => {
  return (
    <section className="content flex flex-col justify-start items-center products-list w-full bg-bizlere-ulasin-background pb-20 text-bizlere-ulasin-foreground h-full relative  z-10 rounded-b-[60px]">
      <div className="max-w-324 mx-auto px-5 md:px-10 flex flex-col items-center justify-center gap-12 md:gap-16 w-full h-full">
        <UrunList productName={productName} />
      </div>
    </section>
  );
};

export default HakkimizdaContent;
