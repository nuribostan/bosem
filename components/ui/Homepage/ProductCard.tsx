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
    <div className="productCard w-full h-full flex items-center justify-center gap-20 even:flex-row-reverse max-lg:flex-col max-lg:even:flex-col max-lg:gap-4">
      <Image
        src={image}
        alt={alt}
        width={500}
        height={500}
        className="w-[800px] h-[400px] object-cover rounded-2xl max-sm:w-full max-sm:h-full"
      />
      <div className="productInfo flex flex-col gap-4 w-2/5 max-lg:w-full max-lg:max-w-[800px]">
        <h3 className="text-3xl text-products-foreground font-normal uppercase">
          {title}
        </h3>
        <p className="text-lg text-products-foreground">{description}</p>
        <div className="product-types mt-2 flex flex-col gap-2">
          <h4 className="text-xl text-products-foreground font-medium mb-2 uppercase">
            {product} çeşitleri
          </h4>
          <ul className="list-none grid grid-cols-2 gap-1">
            {types.map((type, index) => (
              <li
                key={index}
                className="text-sm text-products-foreground bg-[#d6e8e4] px-2 py-1 rounded-2xl text-center"
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
