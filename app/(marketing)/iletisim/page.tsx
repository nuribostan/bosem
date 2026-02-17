import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim & Şubelerimiz",
  description:
    "Bosem Tarım Rize Merkez ofis ve depo iletişim bilgileri. Toptan ve perakende ucuz kömür, gübre siparişi için bize ulaşın. Hızlı teslimat.",
  keywords: [
    "rize kömür firmaları",
    "bosem tarım iletişim",
    "rize gübre bayileri",
    "toptan kömür rize",
  ],
};

export default function İletisimPage() {
  return (
    <main className="min-h-screen bg-[#eef3ee] pb-24">
      <section className="w-full bg-[#1a1814] pt-40 pb-20 px-6 relative rounded-b-[3rem] shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Bizimle <span className="text-[#cca24a]">İletişime Geçin</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl font-light">
            Rize{`'`}de kömür, pelet ve gübre ihtiyaçlarınız için uzman
            ekibimizle her zaman yanınızdayız. Size bir telefon kadar yakınız.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-stone-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-stone-900 mb-2">
                Bize Ulaşın
              </h3>
              <a
                href="tel:+904642121200"
                className="text-lg text-stone-600 hover:text-[#cca24a] transition-colors block mb-1"
              >
                Telefon: 0464 212 12 00
              </a>
              <a
                href="mailto:bosemtarim@gmail.com"
                className="text-lg text-stone-600 hover:text-[#cca24a] transition-colors block"
              >
                E-posta: bosemtarim@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-stone-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-serif text-stone-900 mb-1">
                  Merkez Ofis
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Bağdatlı Caddesi, Kaçkar Fırın Yanı No:125/A
                  <br />
                  Rize Merkez / Rize
                </p>
              </div>
              <div className="w-full h-px bg-stone-100"></div>
              <div>
                <h3 className="text-xl font-serif text-stone-900 mb-1">
                  Merkez Depo
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Müftü Mahallesi, 108. Sokak No:12
                  <br />
                  Rize Merkez / Rize
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-stone-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="w-full">
              <h3 className="text-2xl font-serif text-stone-900 mb-4">
                Çalışma Saatleri
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-stone-600 font-medium">
                  Haftanın Her Günü
                </span>
                <span className="text-stone-900 font-bold text-lg">
                  08:00 - 19:00
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative w-full h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src="/images/bosem_tarim.jpg"
            alt="Bosem Tarım Dükkan ve Depo"
            fill
            className="object-contain transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-white text-2xl font-serif mb-2">
              Rize Merkez Mağazamız
            </h3>
            <p className="text-stone-300 text-sm">
              Geniş ürün yelpazemizi yakından görmek için haftanın her günü
              mağazamıza davetlisiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
        <div className="w-full bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-stone-100">
          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6 px-2">
            Haritada Biz
          </h2>
          <div className="w-full h-[400px] md:h-[550px] rounded-2xl overflow-hidden bg-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d752.4588947218803!2d40.54908926966257!3d41.028853009910726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAxJzQzLjkiTiA0MMKwMzInNTkuMCJF!5e0!3m2!1str!2str!4v1771243965337!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bosem Tarım Google Haritası"
              className="w-full h-full grayscale-20 contrast-125 hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
