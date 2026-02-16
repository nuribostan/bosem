// app/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

// Dinamik meta etiketleri oluşturma (SEO için)
// Tip tanımlamamızı güncelledik (Next.js 15 uyumlu)
type Props = {
  params: Promise<{ slug: string }>;
};

// 1. generateMetadata'yı async yaptık ve params'ı beklettik
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) return { title: "Yazı Bulunamadı | BOSEM TARIM" };

  return {
    title: `${post.title} | BOSEM TARIM Blog`,
    description: post.excerpt,
  };
}

// 2. BlogPost bileşenini async yaptık ve params'ı beklettik
export default async function BlogPost({ params }: Props) {
  // params'ın yüklenmesini bekle (Next.js 15+ için zorunlu)
  const resolvedParams = await params;

  // Terminalde hatayı yakalamak için log ekleyelim
  console.log("URL'den gelen slug:", resolvedParams.slug);

  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    console.log("Bu slug ile eşleşen yazı bulunamadı!");
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 pb-24">
      {/* Makale Başlık / Hero Alanı */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        {/* Yazının okunması için karanlık overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
          <div className="flex items-center justify-center gap-4 mb-6 text-sm md:text-base">
            <span className="bg-[#cca24a] text-black px-4 py-1 rounded-full font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-300">{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Makale İçeriği */}
      <section className="max-w-3xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl">
          {/* Geri Dön Butonu */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 mb-10 transition-colors font-medium"
          >
            <span>←</span> Tüm Yazılara Dön
          </Link>

          {/* İçerik (HTML render edilir) */}
          <article
            className="prose prose-stone max-w-none w-full
                       prose-headings:font-serif prose-headings:text-stone-900
                       prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-2
                       prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                       prose-p:text-stone-700 prose-p:leading-relaxed prose-p:mb-6
                       prose-li:text-stone-700 prose-li:leading-relaxed
                       prose-strong:text-stone-900 prose-strong:font-bold
                       
                       /* MOBİL LİSTE SIKIŞMASINI ÇÖZEN KODLAR */
                       [&_li.flex]:flex-col [&_li.flex]:md:flex-row [&_li.flex]:gap-2 [&_li.flex]:md:gap-0
                       [&_li_span.font-bold]:block [&_li_span.font-bold]:md:inline [&_li_span.font-bold]:mb-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Makale Sonu İletişim Çağrısı */}
          <div className="mt-16 pt-8 border-t border-stone-200 text-center">
            <p className="text-stone-500 mb-4">
              Ürünlerimiz hakkında daha fazla bilgi almak ister misiniz?
            </p>
            <Link
              href="/iletisim"
              className="inline-block px-8 py-3 bg-stone-900 text-[#cca24a] font-medium rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-300"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
