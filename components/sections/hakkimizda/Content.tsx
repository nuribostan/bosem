const HakkimizdaContent = () => {
  return (
    <section className="content flex flex-col justify-start items-center products-list w-full bg-bizlere-ulasin-background pb-20 text-bizlere-ulasin-foreground h-full relative  z-10 rounded-b-[60px]">
      <div className="max-w-5xl mx-auto px-5 md:px-10 flex flex-col items-center justify-center gap-12 md:gap-16">
        {/* Giriş Metni */}
        <p className="w-full text-base md:text-lg lg:text-xl text-center font-light leading-relaxed">
          1980’lerin sonunda kurulan ve bugün 30 yılı aşkın tecrübesiyle
          faaliyet gösteren firmamız, odun, kömür, gübre ve pelet gibi temel
          enerji ve tarım ürünlerinde güvenilir bir tedarikçi olarak sektörde
          yerini almıştır. Kuruluşumuzdan bu yana en büyük önceliğimiz;
          müşterilerimize kaliteli, sürdürülebilir ve rekabetçi çözümler sunmak
          olmuştur. Yıllar içinde edindiğimiz bilgi birikimi ve sahadaki
          tecrübemiz, bizi hem bölgesel pazarda hem de sektörde saygı duyulan
          bir iş ortağı haline getirmiştir.
        </p>

        {/* Tarihçe ve Deneyim */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <h2 className="text-3xl md:text-4xl font-medium text-center border-b border-bizlere-ulasin-foreground/30 pb-3 md:pb-4">
            Tarihçe ve Deneyim
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed">
            Kurulduğumuz ilk günden itibaren müşteri memnuniyetini ve uzun
            vadeli ilişkileri merkeze koyduk. Ailemizin küçük bir işletmeyle
            başladığı yolculuk, titiz kalite anlayışı, güvenilir lojistik ve
            dürüst ticaret ilkeleri sayesinde yıllar içinde büyüdü. Bugün, aynı
            dürüstlük ve emek ruhunu koruyarak hem bireysel tüketicilere hem de
            kurumsal müşterilere hizmet veriyoruz. 30 yılı aşkın süre boyunca
            edindiğimiz pratik bilgiler, mevsimsel ihtiyaçları doğru tespit
            etmemizi ve hızlı çözümler üretmemizi sağlıyor.
          </p>
        </div>

        {/* Ürünlerimiz - Kart Yapısı (Grid) */}
        <div className="w-full flex flex-col gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl font-medium text-center border-b border-bizlere-ulasin-foreground/30 pb-3 md:pb-4">
            Ürünlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Odun Kartı */}
            <div className="p-6 rounded-2xl border border-bizlere-ulasin-foreground/20 hover:bg-bizlere-ulasin-foreground/5 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3">🔥 Odun</h3>
              <p className="text-base font-light leading-relaxed">
                Isıtma ve şömine kullanımına uygun, doğal kurutma süreçlerinden
                geçirilmiş kaliteli odun seçenekleri sunuyoruz. Ürünlerimiz
                temiz, çabuk tutuşan ve uzun süre yanma performansı sağlayacak
                şekilde hazırlanır.
              </p>
            </div>

            {/* Gübre Kartı */}
            <div className="p-6 rounded-2xl border border-bizlere-ulasin-foreground/20 hover:bg-bizlere-ulasin-foreground/5 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3">🌱 Gübre</h3>
              <p className="text-base font-light leading-relaxed">
                Tarım üreticilerine yönelik, toprağı destekleyen; verim artırıcı
                gübre portföyümüzle, bölge çiftçilerine mevsimsel ve hedefe
                yönelik çözümler sunuyoruz.
              </p>
            </div>

            {/* Kömür Kartı */}
            <div className="p-6 rounded-2xl border border-bizlere-ulasin-foreground/20 hover:bg-bizlere-ulasin-foreground/5 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3">⚫ Kömür</h3>
              <p className="text-base font-light leading-relaxed">
                Evsel ve sanayi amaçlı farklı kömür çeşitleri tedarik ediyoruz;
                güvenli depolama ve hızlı sevkiyat ile hizmet veriyoruz.
              </p>
            </div>

            {/* Pelet Kartı */}
            <div className="p-6 rounded-2xl border border-bizlere-ulasin-foreground/20 hover:bg-bizlere-ulasin-foreground/5 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3">🔥 Pelet</h3>
              <p className="text-base font-light leading-relaxed">
                Modern yakma teknolojilerine uygun, yüksek enerji verimli pelet
                ürünlerimiz ile hem çevre dostu hem ekonomik ısıtma çözümleri
                sağlıyoruz.
              </p>
            </div>
          </div>

          <p className="text-center text-sm md:text-base italic font-light opacity-80 mt-2">
            * Her bir ürün kategorisinde kalite kontrol süreçleri uygular,
            sevkiyat öncesi kontrollerle müşterilerimize tutarlı bir ürün
            deneyimi garanti ederiz.
          </p>
        </div>

        {/* Kalite & Sürdürülebilirlik */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <h2 className="text-3xl md:text-4xl font-medium text-center border-b border-bizlere-ulasin-foreground/30 pb-3 md:pb-4">
            Kalite & Sürdürülebilirlik
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed text-center md:text-left">
            Doğaya ve gelecek nesillere karşı sorumluluğumuzun farkındayız.
            Kaynaklarımızı verimli kullanmak, atıkları azaltmak ve mümkün
            olduğunca çevre dostu üretim/tedarik süreçleri uygulamak
            önceliklerimiz arasındadır. Malzeme seçiminden paketlemeye kadar
            işletme içi prosedürlerimiz, hem ürün kalitesini korumayı hem de
            çevresel etkiyi minimize etmeyi hedefler. Ayrıca tedarik ağımızı
            şeffaf tutar, üretim süreçleri hakkında müşterilerimizi
            bilgilendiririz.
          </p>
        </div>

        {/* Müşteri Odaklı Hizmet */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <h2 className="text-3xl md:text-4xl font-medium text-center border-b border-bizlere-ulasin-foreground/30 pb-3 md:pb-4">
            Müşteri Odaklı Hizmet
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed text-center md:text-left">
            Bizim için en değerli şey güven ve sürekliliktir. Satış öncesi
            danışmanlık, hızlı lojistik, satış sonrası destek ve gerektiğinde
            teknik bilgi paylaşımıyla müşterilerimizin yanında oluruz.
            İhtiyacınıza uygun ürün seçimi, doğru miktar planlaması ve zamanında
            teslimat konularında deneyimli ekibimizle sorunsuz bir iş akışı
            sağlıyoruz. Geri bildirimleri yakından takip eder, hizmet kalitemizi
            sürekli iyileştiririz.
          </p>
        </div>

        {/* Vizyonumuz ve Taahhüdümüz */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          <h2 className="text-3xl md:text-4xl font-medium text-center border-b border-bizlere-ulasin-foreground/30 pb-3 md:pb-4">
            Vizyonumuz ve Taahhüdümüz
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed text-center md:text-left">
            Gelecek vizyonumuz; kaliteli ürünleri, sürdürülebilir yöntemlerle ve
            müşteri memnuniyetini esas alarak sunmaya devam etmek; aynı zamanda
            yenilikçi yaklaşımlarla sektörümüzde lider ve örnek bir kuruluş
            olmaktır. 30 yıla sığdırdığımız bilgi ve tecrübe ile daha verimli,
            daha çevreci ve daha güvenilir çözümler üretmeye kararlıyız.
          </p>
        </div>

        {/* Bize Ulaşın (Call to Action) */}
        <div className="w-full mt-4 bg-bizlere-ulasin-foreground/10 p-8 rounded-3xl flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-medium">Bize Ulaşın</h2>
          <p className="text-base md:text-lg font-light">
            İhtiyaçlarınızı dinlemek ve size özel çözümler sunmak için
            buradayız. Ürünlerimiz, toplu alımlar, fiyat teklifi veya teknik
            sorular için lütfen bizimle iletişime geçin — memnuniyetle yardımcı
            oluruz.
          </p>
          {/* İsterseniz buraya bir buton ekleyebilirsiniz: */}
          {/* <button className="mt-4 px-8 py-3 bg-bizlere-ulasin-foreground text-bizlere-ulasin-background font-medium rounded-full hover:opacity-90 transition-opacity">İletişime Geç</button> */}
        </div>
      </div>
    </section>
  );
};

export default HakkimizdaContent;
