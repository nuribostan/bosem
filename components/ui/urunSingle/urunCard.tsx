"use client";

import { useState } from "react";
import { SubProduct } from "@/types/product";
import Image from "next/image";


const UrunCard = (product: SubProduct) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative w-full h-[400px] sm:h-[450px] perspective-[1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 transform-3d shadow-lg rounded-2xl ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        } md:group-hover:transform-[rotateY(180deg)]`}
      >
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <Image
            src={product.image}
            alt={product.alt || product.title}
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute bottom-0 left-0 w-full p-5 bg-linear-to-t from-black/70 to-transparent rounded-b-2xl">
            <h3 className="text-white text-xl font-medium tracking-wide flex flex-col">
              <span className="text-sm text-gray-300 font-light mb-1">{product.brand}</span>
              {product.title}
            </h3>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] bg-bizlere-ulasin-background text-bizlere-ulasin-foreground rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-bizlere-ulasin-foreground/20">
          <h3 className="text-2xl font-bold mb-4">{product.title}</h3>

          <p className="text-sm md:text-base font-light mb-8 line-clamp-5">
            {product.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrunCard;