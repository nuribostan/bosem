// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import FeaturedSlider from "@/components/blog/FeaturedSlider";

export const metadata = {
  title: "Blog & Haberler | BOSEM TARIM",
  description:
    "Tarım, ısınma sistemleri, gübreleme ve kömür kullanımı hakkında güncel bilgiler, uzman tavsiyeleri ve haberler.",
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const currentPage = resolvedSearchParams.page
    ? parseInt(resolvedSearchParams.page as string)
    : 1;

  const POSTS_PER_PAGE = 9;

  const featuredPosts = blogPosts.slice(0, 3);

  const remainingPosts = blogPosts.slice(3);

  const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = remainingPosts.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-[#eef3ee] pb-24">
      <section className="w-full bg-[#1a1814] pt-40 pb-20 px-6 relative rounded-b-[3rem] shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Blog & <span className="text-[#cca24a]">Haberler</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl font-light">
            Tarım sektöründeki yenilikler, doğru gübreleme teknikleri ve verimli
            ısınma rehberleri ile yanınızdayız.
          </p>
        </div>
      </section>

      {currentPage === 1 && (
        <section className="max-w-[1400px] mx-auto px-6 mt-16 md:mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              Öne Çıkanlar
            </h2>
            <span className="text-stone-500 hidden md:block">
              Kaydırmak için oklara tıklayın
            </span>
            <span className="text-stone-500 block md:hidden">
              Kaydırmak için sürükleyin →
            </span>
          </div>

          <FeaturedSlider posts={featuredPosts} />
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 mt-12 md:mt-16">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 border-b border-stone-300 pb-4">
          {currentPage === 1
            ? "Tüm Yazılar"
            : `Tüm Yazılar (Sayfa ${currentPage})`}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {currentPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-[#cca24a] text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <span className="text-stone-400 text-sm mb-3 block">
                  {post.date}
                </span>
                <h2 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-stone-600 font-light mb-8 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="text-orange-600 font-medium flex items-center gap-2 mt-auto">
                  Devamını Oku
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {totalPages > 1 && (
        <section className="max-w-7xl mx-auto px-6 mt-20 flex justify-center items-center gap-2 md:gap-4">
          {currentPage > 1 ? (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="px-6 py-3 border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white transition-colors font-medium text-stone-700"
            >
              ← Önceki
            </Link>
          ) : (
            <span className="px-6 py-3 border border-stone-200 rounded-full text-stone-400 cursor-not-allowed font-medium">
              ← Önceki
            </span>
          )}

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <Link
                key={num}
                href={`/blog?page=${num}`}
                className={`w-12 h-12 flex items-center justify-center rounded-full font-medium transition-colors ${
                  currentPage === num
                    ? "bg-[#cca24a] text-stone-900"
                    : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
                }`}
              >
                {num}
              </Link>
            ))}
          </div>

          {currentPage < totalPages ? (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="px-6 py-3 border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white transition-colors font-medium text-stone-700"
            >
              Sonraki →
            </Link>
          ) : (
            <span className="px-6 py-3 border border-stone-200 rounded-full text-stone-400 cursor-not-allowed font-medium">
              Sonraki →
            </span>
          )}
        </section>
      )}
    </main>
  );
}
