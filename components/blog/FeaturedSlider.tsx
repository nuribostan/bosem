"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blogData";

export default function FeaturedSlider({ posts }: { posts: BlogPost[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 624 : 320;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group w-full">
      <button
        onClick={() => slide("left")}
        className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 text-stone-900 border border-stone-200 flex items-center justify-center rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#cca24a] hover:text-white  md:flex"
        aria-label="Sola Kaydır"
      >
        <span className="text-2xl">←</span>
      </button>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-6 hide-scrollbar scroll-smooth"
      >
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="snap-center shrink-0 w-[85vw] md:w-[600px] lg:w-[800px] h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden group/card shadow-xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#cca24a] text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-gray-300 text-sm">{post.date}</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-serif text-white mb-4 group-hover/card:text-[#cca24a] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-300 line-clamp-2 md:line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={() => slide("right")}
        className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 text-stone-900 border border-stone-200 flex items-center justify-center rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#cca24a] hover:text-white  md:flex"
        aria-label="Sağa Kaydır"
      >
        <span className="text-2xl">→</span>
      </button>
    </div>
  );
}
