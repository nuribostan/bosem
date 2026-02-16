import Image, { StaticImageData } from "next/image";

const HomepageProductCard = ({
  image,
  alt,
  title,
  description,
  product,
  types,
}: {
  image: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  product: string;
  types: string[];
}) => {
  return (
    <div className="productCard w-full flex flex-col lg:flex-row lg:even:flex-row-reverse items-center justify-center gap-8 lg:gap-20">
      
      <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-4/3 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Metin Alanı */}
      <div className="productInfo flex flex-col gap-4 w-full lg:w-1/2">
        <h3 className="text-2xl md:text-3xl text-products-foreground font-semibold uppercase">
          {title}
        </h3>
        <p className="text-base md:text-lg text-products-foreground/90 leading-relaxed">
          {description}
        </p>
        
        <div className="product-types mt-4 flex flex-col gap-3">
          <h4 className="text-lg md:text-xl text-products-foreground font-medium uppercase tracking-wider border-b border-products-foreground/20 pb-2 inline-block w-fit">
            {product} Çeşitleri
          </h4>
          <ul className="list-none grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-2">
            {types.map((type, index) => (
              <li
                key={index}
                className="text-xs md:text-sm text-products-foreground bg-[#d6e8e4] px-3 py-2 rounded-full text-center font-medium transition-colors hover:bg-[#b5d3cb]"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomepageProductCard;