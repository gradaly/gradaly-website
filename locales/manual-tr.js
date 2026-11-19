window.GRADALY_MANUAL_I18N = window.GRADALY_MANUAL_I18N || {};
window.GRADALY_MANUAL_I18N.tr = {
    badge_manual: "Kullanım Kılavuzu (2'si 1 Arada)",
    back_home: "Web Sitesine Dön",
    download_btn: "Gradaly'yi İndir",
    hero_pill: "2'si 1 Arada Masaüstü Uygulaması • Kapsamlı Kullanım Kılavuzu v5.0.0",
    hero_title: "Gradaly Kullanım Kılavuzu",
    hero_subtitle: "Daha İyi Değerlendirin, Daha İyi Yetiştirin. Gradaly iki bağımsız iş akışı sunan 2'si 1 arada bir uygulamadır: (1) öğretim elemanı tarafından yürütülen Sınav ve Deneme Sınavı Değerlendirmesi (gerçek sınav koşullarında biçimlendirici deneme sınavları veya resmî sınavlar için) ve (2) öğrencinin akıllı telefonunda gerçekleştirdiği QR Öz Değerlendirme Alıştırması. Aşağıdan iş akışınıza uygun kılavuzu seçin:",
    search_placeholder: "Tüm kılavuzlarda arayın (örn. sınav, deneme sınavı, QR alıştırma, değerlendirme ölçeği, OCR, API anahtarı, SSS)...",
    card_exam_badge: "Ürün 1 • Öğretim Elemanı Değerlendirmesi",
    card_exam_chapters: "Bölüm E1–E9",
    card_exam_title: "Kılavuz 1: Sınav ve Deneme Sınavı Modu (Öğretim Elemanı Tarafından)",
    card_exam_desc: "Resmî sınavlar, ara sınavlar veya dönem içinde gerçek sınav koşullarında uygulanan biçimlendirici deneme sınavları için: öğrenci kitapçıklarını tarayın, OCR ile %100 çevrimdışı kimlik eşleştirmesi yapın, manuel veya yapay zekâ/ekip iş birliğiyle değerlendirin ve açıklamalı sınav kâğıtlarını paylaşın.",
    card_practice_badge: "Ürün 2 • Öğrenci Öz Değerlendirmesi",
    card_practice_chapters: "Bölüm P1–P5",
    card_practice_title: "Kılavuz 2: QR Alıştırma ve Öz Değerlendirme Modu (Öğrenci Tarafından)",
    card_practice_desc: "Problem setleri, uygulama dersleri ve bireysel çalışma yaprakları için: öğrencilerin kâğıt üzerinde çözüp akıllı telefonlarıyla okutarak anında biçimlendirici yapay zekâ geri bildirimi alabilmesi amacıyla alıştırma PDF'inize QR kodları yerleştirin.",
    filter_label: "Görünüm:",
    filter_exam: "1. Sınav Kılavuzu (E1–E9)",
    filter_practice: "2. QR Alıştırma Kılavuzu (P1–P5)",
    filter_all: "Tüm Bölümleri Göster",
    filter_hint: "Her kılavuz %100 kendi içinde bütünlüklüdür — ikisini birden okumanıza gerek yoktur!",
    switch_guide_kicker: "İkinci Gradaly İş Akışını Keşfedin",
    btn_go_practice: "Kılavuz 2'yi Aç: QR Alıştırma Modu",
    btn_go_exam: "Kılavuz 1'i Aç: Sınav Değerlendirme Modu",
    toc_title: "İçindekiler",
    sidebar_exam_mode: "Sınav Modu",
    sidebar_practice_mode: "QR Alıştırma",
    screenshot_badge: "EN Arayüzü",
    privacy_box_title: "%100 Yerel Öğrenci Gizliliği",
    privacy_box_text: "Öğrenci listeleri, kimlik alanları, OCR eşleştirmeleri ve proje dosyaları bilgisayarınızda yerel olarak Documents/Gradaly klasöründe saklanır. Bulut portalları ve ekip bağlantıları istemci taraflı AES-256-GCM Zero-Knowledge şifreleme kullanır.",
    sections: [
        // =========================================================================
        // GUIDE 1: EXAM GRADING MODE (E1 to E9) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "exam-getting-started",
            guide: "exam",
            stepNumber: "E1",
            partHeader: "Kılavuz 1 — Sınav ve Deneme Sınavı Modu (Öğretim Elemanı)",
            partColor: "indigo",
            partBanner: {
                kicker: "Kılavuz 1 • Ürün 1: Sınav ve Deneme Sınavı Değerlendirmesi",
                title: "Öğretim Elemanı Tarafından Sınav ve Deneme Sınavı Değerlendirmesi İçin Kapsamlı Rehber (%100 İnsan Odaklı, Yapay Zekâ Destekli ve Ekip Modu)",
                desc: "İster resmî bir sınav ister dönem içinde gerçek sınav koşullarında yapılan biçimlendirici bir deneme sınavı olsun, taranmış öğrenci sınav kâğıtlarını değerlendirmek için kendi içinde bütünlüklü rehber."
            },
            tag: "Sınav Modu • Adım 1 — Sınav Projesi Oluşturma",
            badge: "%100 İnsan Odaklı veya Yapay Zekâ Destekli",
            shortTitle: "Sınav Projesi Oluşturma",
            title: "Sınav Projesi Oluşturma ve %100 İnsan Odaklı ile Yapay Zekâ İş Akışları",
            subtitle: "Taranmış öğrenci sınav kitapçıklarını bilgisayarınızda değerlendirmek için yeni bir Sınav projesi başlatın (veya 20 kâğıtlık Sınav Demosunu açın).",
            paragraphs: [
                "<strong>Sınav Projesi (<code>Sınav</code> rozeti) nedir?</strong> Sınav projesi; öğretim elemanının öğrenci kâğıtlarını topladığı, PDF olarak taradığı ve tüm sınıfı değerlendirdiği her türlü ölçme-değerlendirme etkinliği için tasarlanmıştır — buna <strong>resmî ara sınavlar ve dönem sonu sınavları</strong> kadar dönem içinde gerçek sınav koşullarında uygulanan <strong>biçimlendirici deneme sınavları</strong> da dahildir. Dönem sonu sınavınızı kâğıt üzerinde elle okumayı tercih etseniz bile Sınav Modu, dönem ortasında bir deneme sınavı düzenleyerek her öğrenciye gerçek sınav koşullarında ayrıntılı ve bireyselleştirilmiş geri bildirim sunmak için ideal bir yoldur. Üst çubukta <strong>6 özel iş akışı sekmesi</strong> sunar: <code>1. Şablon ve Sorular</code>, <code>2. Öğrenciler</code>, <code>3. Sınav Kâğıtları</code>, <code>4. Eşleştirme</code>, <code>5. Değerlendirme</code> ve <code>6. Özet</code>.",
                "<strong>%100 İnsan Modu veya Yapay Zekâ Destekli Mod:</strong> Gradaly'de sınav değerlendirmek için yapay zekâ API anahtarına ihtiyacınız <strong>yoktur</strong>. Gradaly kutudan çıktığı haliyle hızlı klavye kısayolları (ölçütleri işaretlemek için <code>1–9</code>, öğrenciler arasında gezinmek için <code>J</code>/<code>K</code>), ölçüt ağırlıklarını değiştirdiğinizde tüm sınıf genelinde dinamik puan yeniden hesaplaması ve zengin Markdown ve KaTeX geri bildirimiyle <strong>%100 İnsan Modunda</strong> çalışır. Dilediğiniz zaman bir yapay zekâ API anahtarı bağlayarak nihai insan kararını her zaman korurken <strong>Yapay Zekâ Değerlendirme Ölçeği Asistanı</strong> ve <strong>Çok Modlu Yapay Zekâ Ön Değerlendirmesi</strong> özelliklerini etkinleştirebilirsiniz.",
                "<strong>Arayüz dilinden bağımsız özel Proje Dili:</strong> Yeni bir proje oluştururken <strong>Proje Dilini</strong> (Türkçe, İngilizce, Fransızca, Almanca vb.) açıkça seçin; üst çubuktaki proje adının yanındaki bayrak rozetinden veya <strong>Proje Yapay Zekâ Ayarları</strong> üzerinden dilediğiniz zaman görüntüleyip değiştirebilirsiniz. Masaüstü arayüzünüz başka bir dilde olsa bile bu ayar; üretilen ölçekleri, yapay zekâ değerlendirme yönergelerini, öğrenci geri bildirimlerini ve tüm dışa aktarımları (açıklamalı PDF'ler, Excel, Moodle CSV, QR fişleri, Web Portalı ve QR Alıştırma modu) yönetir.",
                "<strong>Karşılama Ekranından</strong> <strong>Yeni proje</strong> düğmesine tıklayıp <strong>Sınav Projesi (Taranmış Kâğıt Değerlendirmesi)</strong> seçeneğini belirleyin ya da 20 el yazısı öğrenci kâğıdı ve bir Örnek Çözüm içeren eksiksiz bir Fizik sınavını incelemek için <strong>Demo projesi oluştur → Demo Sınav</strong> seçeneğine tıklayın."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Karşılama Ekranı: Sınav projeleri çivit mavisi 'Exam' rozetiyle tanımlanır ve yerel olarak Documents/Gradaly içinde saklanır"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Demo Oluşturma Penceresi: Puanlanmış 20 kâğıt içeren çevrimdışı bir demo oluşturmak için 'Exam Project' seçeneğini belirleyin"
                }
            ],
            callouts: [
                {
                    title: "Özel 6 Sekmeli Sınav Çalışma Alanı",
                    desc: "Şablon ve Sorular → Öğrenciler → Sınav Kâğıtları → Çevrimdışı OCR Eşleştirme → 3 Bölmeli Değerlendirme Konsolu → Sınıf İstatistikleri ve Dışa Aktarımlar."
                },
                {
                    title: "%100 Çevrimdışı ve Manuel Çalışır",
                    desc: "Klavye kısayollarıyla yüksek hızda manuel değerlendirme yapın veya yapay zekâ ön değerlendirmesini insan onayıyla birleştirin."
                },
                {
                    title: "Yerleşik 20 Kâğıtlık Sınav Demosu",
                    desc: "Yerleşik İngilizce veya Fransızca Sınav Demosunu kullanarak hiçbir belge taramadan tüm sınav iş akışını hemen deneyin."
                },
                {
                    title: "Documents/Gradaly İçinde %100 Yerel Dosyalar",
                    desc: "Tüm PDF'ler, öğrenci listeleri ve değerlendirmeler sade klasörler halinde bilgisayarınızda kalır — zorunlu bulut depolama yoktur."
                }
            ]
        },
        {
            id: "exam-canvas-and-rubric",
            guide: "exam",
            stepNumber: "E2",
            partColor: "indigo",
            tag: "Sınav Modu • Adım 2 — Şablon, Kimlik Alanı ve Değerlendirme Ölçeği",
            badge: "Doğru Puanlama İçin Temel Adım",
            shortTitle: "Şablon, Kimlik Alanı ve Ölçütler",
            title: "Öğrenci Kimlik Alanı, Soru Alanları, Puanlama Politikası ve Örnek Çözüm Tanımlama",
            subtitle: "Boş sınav PDF'inizi içe aktarın, çevrimdışı OCR için Öğrenci Kimlik üst bilgisini çerçeveleyin ve sorularınız ile değerlendirme ölçeğinizi tanımlayın.",
            paragraphs: [
                "Bir Sınav projesinin <strong>1. Şablon ve Sorular</strong> sekmesinde işe boş sınav PDF'ini (<code>Şablon</code>) içe aktararak başlayın. Ardından PDF sayfaları üzerinde iki tür dikdörtgen alan çizeceksiniz:",
                "<strong>1. Öğrenci Kimlik Alanını (<code>ID</code>) Çizin:</strong> Sol paneldeki <strong>Öğrenci Kimlik Alanı (Ad / Numara)</strong> düğmesine tıklayın ve 1. Sayfada öğrencilerin adlarını ve öğrenci numaralarını yazdıkları yere bir dikdörtgen çizin. Gradaly daha sonra sınıf listenize karşı <strong>%100 çevrimdışı OCR eşleştirmesi</strong> çalıştırmak üzere her kâğıtta tam olarak bu alanı kırpacaktır.",
                "<strong>2. Her Soru Alanını Çizin ve Yapay Zekâ Soru Metni Kaynağını Seçin (<code>Öğrenci Kâğıdı</code> veya <code>Şablon</code>):</strong> Bir öğrencinin kâğıdında yapay zekâ değerlendirmesini başlattığınızda Gradaly, ilgili soru için çizdiğiniz dikdörtgen alanı kırpar ve değerlendirme ölçütlerinizle birlikte seçtiğiniz Görsel Yapay Zekâ modeline gönderir.<br>• <strong>Tek Birleşik Alan (Varsayılan):</strong> Sayfa düzeni elverdiği sürece hem basılı soru kökünü hem de öğrencinin yanıt kutusunu tek bir dikdörtgen içine alın. Varsayılan olarak (<code>Yapay Zekâ Soru Metni: Öğrenci Kâğıdı</code>), Gradaly bu dikdörtgeni <strong>doğrudan öğrencinin kendi sınav kâğıdından (<code>copies/copie_XXX.pdf</code>)</strong> kırpar; böylece her öğrencinin kâğıdında bireyselleştirilmiş sayısal değerler varsa yapay zekâ o öğrencinin kendi parametrelerini ve yanıtını görür.<br>• <strong>Soru Metni ve Yanıtı Ayırma (<code>Soru metni / yanıtı ayır</code>) ve <code>Yapay Zekâ Soru Metni</code> Seçicisi:</strong> Soru metni ve yanıt kutusu farklı sayfalardaysa veya aralarında başka içerik varsa iki ayrı alan (<code>Soru Metni</code> ve <code>Kâğıt Yanıtı</code>) tanımlamak için <strong>Soru metni / yanıtı ayır</strong> düğmesine tıklayın ve soru metni bölümünün nereden kırpılacağını seçin:<br>&nbsp;&nbsp;– <strong><code>Öğrenci Kâğıdı</code> (<code>Copie étudiant</code>):</strong> Hem soru metni alanı hem de yanıt alanı <strong>her öğrencinin kendi kâğıdından</strong> kırpılır ve dikey olarak birleştirilir (kâğıtlarda öğrenciye özgü sayısal değerler veya bireyselleştirilmiş sorular bulunduğunda zorunludur).<br>&nbsp;&nbsp;– <strong><code>Şablon</code> (<code>Canevas</code>):</strong> Soru metni alanı boş şablondan (<code>canvas.pdf</code>) kırpılır ve öğrencinin yanıt alanının üstüne eklenir (öğrenciler basılı soruyu tekrarlamayan ayrı cevap kâğıtlarına yazdığında idealdir).",
                "<strong>3. Taban Puan (<code>Note de base</code>), Azami Puan (<code>Score max</code>), Sınırlandırma ve <code>Azami olası</code> Kavramlarını Anlayın:</strong><br>• <strong>Puan formülü:</strong> Gradaly sorunun <strong>Taban Puanından</strong> başlar, işaretlenen tüm ölçütlerin puanlarını ekler (<code>Ham Puan = Taban Puan + Σ işaretli ölçütler</code>) ve <strong>nihai soru puanını <code>0</code> ile <code>Azami Puan</code> arasında sınırlandırır</strong>.<br>• <strong>Tamamen Eklemeli VEYA Tamamen Düşmeli Puanlama Düzeni:</strong> <strong>Eklemeli düzen</strong> için <code>Taban Puan = 0</code> ayarlayın ve yalnızca pozitif ölçütler (<code>+1</code>, <code>+1.5</code>) kullanın. <strong>Düşmeli / kesintili düzen</strong> için <code>Taban Puan = Azami Puan</code> ayarlayın ve yalnızca negatif ölçütler (<code>-0.5</code>, <code>-1</code>) kullanın. <strong>Aynı soru içinde pozitif ve negatif puanları karıştırmaktan kaçının</strong> — saf bir düzen hem yapay zekâ hem de öğrenci için çok daha anlaşılırdır.<br>• <strong><code>Azami olası</code> yardımcısı:</strong> Ölçüt ağırlıklarınızın toplamının <code>Azami Puan</code> değerine eşit olup olmadığını anında fark edebilmeniz için <code>Taban Puan + Σ (pozitif ölçütler)</code> değerini gösterir.",
                "<strong>4. Alt Genel Yönergeler Alanı (<code>Değerlendirme Yönergeleri ve Mantığı / Yapay Zekâ İstem Metni</code>):</strong> Uç durumların (örneğin hata taşıma / gidiş yolu puanı, eşdeğer cebirsel ifadeler) nasıl ele alınacağını belirtmek için her sorunun altındaki metin kutusunu kullanın; basılı soru metni kırpılan kutunun dışındaysa soru metnini düz metin olarak buraya yapıştırın.",
                "<strong>5. Örnek Çözümünüzü (<code>Cevap Anahtarı</code> / <code>⭐ Örnek Çözüm</code>) İçe Aktarın ve Test Edin:</strong> Model çözüm PDF'inizi içe aktarmak için PDF görüntüleyicinin üst kısmındaki <strong>Soru Metni (Şablon) / Örnek Çözüm</strong> geçiş düğmesini kullanın. Bu belge, Değerlendirme sekmesinin en üstünde <strong><code>⭐ Örnek Çözüm</code></strong> olarak görünür: kendi Örnek Çözümünüzün her soruda <strong>tam puan (<code>Azami/Azami</code>)</strong> aldığını mutlaka doğrulayın!",
                "<strong>6. Karşılıklı dışlayıcı ölçütler (<code>OR</code> / <code>VEYA</code> grupları), araya ekleme sürükle-bırak ve <code>Render / Edit</code> düğmesi:</strong><br>• <strong>Karşılıklı dışlayıcı <code>OR</code> ölçütleri:</strong> Ardışık iki pozitif ölçütü (örn. kısmi puan <em>VEYA</em> tam puan kademeleri) ya da negatif ceza ölçütlerini tek seçimli grup yapmak için aralarındaki <strong><code>OR</code></strong> bağlantısına tıklayın (Yapay Zekâ Ölçek Asistanı tarafından da desteklenir). Gruptan bir ölçüt seçildiğinde diğerleri otomatik temizlenir; <code>Max possible</code> / <code>Min possible</code> sınırları her gruptan yalnızca en güçlü seçeneği hesaba katar ve <code>OR</code> grupları açıklamalı PDF'ler ile web portallarında açıkça gösterilir.<br>• <strong>Araya eklemeli sürükle-bırak:</strong> Soruları, sayfaları, tekil ölçütleri veya tüm bir <code>OR</code> grubunu net ekleme çizgisi eşliğinde blok olarak yeniden sıralayın.<br>• <strong>Birleşik <code>Render / Edit</code> düğmesi:</strong> Ölçüt açıklamaları, soru yönergeleri ve proje istemlerinde canlı Markdown + KaTeX görünümü ile kaynak düzenleme arasında tek tıkla geçiş yapın."
            ],
            screenshots: [
                {
                    filePrefix: "02_questions",
                    caption: "Sınav Modu — Şablon ve Sorular Sekmesi: Öğrenci Kimlik Alanı düğmesi, Taban/Azami/Azami-olası puanlar, işaretlenebilir ölçütler, alt yapay zekâ yönergeleri ve Soru Metni / Örnek Çözüm geçişi"
                }
            ],
            callouts: [
                {
                    title: "Çevrimdışı OCR İçin Öğrenci Kimlik Alanı",
                    desc: "1. Sayfadaki üst bilgi kutusunu bir kez çerçeveleyin; Gradaly yerel ad/öğrenci numarası tanıma işlemi için tüm taranmış kâğıtlarda bu alanı çıkaracaktır."
                },
                {
                    title: "Tamamen Eklemeli veya Düşmeli Ölçek",
                    desc: "0'dan başlayıp +puan ekleyin veya Azami Puandan başlayıp −puan düşün. Nihai soru puanları her zaman [0, Azami Puan] aralığında sınırlandırılır."
                },
                {
                    title: "Soru Metnini Çerçeveye Dahil Edin",
                    desc: "Hem basılı soru metnini hem de öğrencinin yanıt kutusunu birlikte çerçeveleyin (veya soru metnini alttaki yönergeler alanına yapıştırın)."
                },
                {
                    title: "Örnek Çözüm (⭐) Tutarlılık Kontrolü",
                    desc: "Örnek çözüm PDF'inizi içe aktarın ve her soruda tam puan (Azami/Azami) aldığını tek tıklamayla doğrulayın."
                }
            ]
        },
        {
            id: "exam-ai-rubric-assistant",
            guide: "exam",
            stepNumber: "E3",
            partColor: "indigo",
            tag: "Sınav Modu • Adım 3 — Yapay Zekâ Değerlendirme Ölçeği Asistanı",
            badge: "Etkileşimli Sohbet ve Kalibrasyon",
            shortTitle: "Yapay Zekâ Ölçek Asistanı",
            title: "Yapay Zekâ Asistanı ile Sınav Değerlendirme Ölçütlerini Birlikte Tasarlama ve Kalibre Etme",
            subtitle: "Soru ve örnek çözüm PDF'inden değerlendirme ölçeğinizi oluşturun veya geliştirin, sohbet yoluyla iyileştirin ve gerçek öğrenci kâğıtlarından ekran görüntüleri yapıştırın.",
            paragraphs: [
                "<strong>Şablon ve Sorular</strong> sekmesindeki herhangi bir soruda etkileşimli <strong>Yapay Zekâ Değerlendirme Ölçeği Asistanını</strong> açmak için <strong>Yapay Zekâ ile Tasarla / Düzenle</strong> (<code>Concevoir / Modifier avec l'IA</code>) düğmesine tıklayın.",
                "<strong>1. Değerlendirme Ölçeği Tercihlerinizi Yapılandırın:</strong> Sorunun <code>Azami Puan</code> değerini belirtin, <strong>Eklemeli</strong> veya <strong>Düşmeli</strong> bir politika seçin ve hedef <strong>ölçüt sayınızı</strong> (3, 4, 5 veya serbest) belirleyin. Bir <code>Örnek Çözüm</code> PDF'i yüklediyseniz yapay zekânın hem soruyu hem de model çözümünüzü incelemesi için <em>\"Örnek çözüm yanıtını referans olarak kullan\"</em> seçeneğini işaretleyin.",
                "<strong>2. Sohbet Modunda Geliştirin ve Öğrenci Ekran Görüntüleri Yapıştırın (<code>Cmd+V</code> / <code>Ctrl+V</code>):</strong> Sağ tarafta önerilen ölçütleri doğal dilde iyileştirin. Daha da iyisi: gerçek bir öğrencinin el yazısı yanıtının ekran görüntüsünü alın, <strong>doğrudan sohbete yapıştırın</strong> ve şöyle yazın: <em>\"Bu öğrenci yanıtının tam puanı hak ettiğini düşünüyorum; lütfen ölçütleri ve değerlendirme yönergelerini buna göre uyarlayın.\"</em>",
                "<strong>3. Uygulayın ve Birkaç Kâğıt Üzerinde Kalibre Edin:</strong> <strong>Onayla ve soruya uygula</strong> düğmesine tıklayın, ardından tüm sınıf için toplu değerlendirme başlatmadan önce Değerlendirme sekmesinde ölçeği <code>⭐ Örnek Çözümünüz</code> ve 2–3 öğrenci kâğıdı üzerinde test edin."
            ],
            screenshots: [
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "Yapay Zekâ Değerlendirme Ölçeği Asistanı Penceresi: Solda önerilen ölçütler ve PROMPT_TEXT, sağda (ekran görüntüsü yapıştırmayı destekleyen) etkileşimli iyileştirme sohbeti"
                }
            ],
            callouts: [
                {
                    title: "Hem Şablonu Hem Örnek Çözümü Okur",
                    desc: "Tam matematiksel veya kavramsal çözüm adımlarınızla uyumlu, yapılandırılmış değerlendirme ölçütleri ve puan ağırlıkları üretir."
                },
                {
                    title: "Gerçek Öğrenci Yanıtlarını Yapıştırın (Cmd+V)",
                    desc: "Ölçüt açıklamalarını otomatik olarak uyarlamak için sınır durumlardaki öğrenci yanıtlarının ekran görüntülerini sohbete yapıştırın."
                }
            ]
        },
        {
            id: "exam-roster-and-matching",
            guide: "exam",
            stepNumber: "E4",
            partColor: "indigo",
            tag: "Sınav Modu • Adım 4 — Öğrenci Listesi, Kâğıtlar ve Çevrimdışı OCR",
            badge: "%100 Yerel ve Çevrimdışı",
            shortTitle: "Öğrenci Listesi, Kâğıtlar ve OCR Eşleştirme",
            title: "Öğrenci Listesi (CSV), PDF Bölme ve %100 Çevrimdışı OCR Eşleştirme",
            subtitle: "Sınıf listenizi içe aktarın, toplu tarayıcı PDF'lerini bireysel kitapçıklara bölün ve hiçbir bulut yüklemesi olmadan öğrenci kimliklerini yerel olarak eşleştirin.",
            paragraphs: [
                "<strong>2. Öğrenciler</strong> sekmesinde sınıf listenizi bir CSV veya Excel dosyasından (Moodle, Canvas, öğrenci işleri sistemi vb.) içe aktarın. Gradaly; <strong>Öğrenci Numarası</strong>, <strong>Soyad</strong>, <strong>Ad</strong>, <strong>E-posta</strong> ve <strong>Grup/Şube</strong> sütunlarını eşleştirir.",
                "<strong>3. Sınav Kâğıtları</strong> sekmesinde ister bireysel öğrenci PDF'lerini ister fotokopi tarayıcısından alınan <strong>tek bir çok oyunculu/toplu PDF belgesini</strong> içe aktarın. Toplu taramayı <code>copie_01.pdf</code>, <code>copie_02.pdf</code> vb. dosyalara bölmek için kitapçık başına sayfa sayısını (örneğin öğrenci başına 4 sayfa) belirtin. Tarayıcınız yüksek çözünürlüklü ağır dosyalar (<strong>&gt; 220 DPI</strong>) ürettiyse Gradaly bunu içe aktarma sırasında otomatik olarak algılar ve <strong>200 DPI'a tek tıkla yerel optimizasyon</strong> sunar (daha hızlı paylaşım ve bulut senkronizasyonu için proje boyutunu 4 kata kadar küçültür). Ayrıca baş aşağı (180°), yeri değişmiş veya eksik sayfaları tek tıkla PDF onarımıyla tespit etmek için <strong>isteğe bağlı Sınav Kâğıdı Bütünlük Denetimini</strong> çalıştırabilirsiniz.",
                "<strong>4. Eşleştirme</strong> sekmesinde <strong>Otomatik OCR Eşleştirmesini Başlat</strong> düğmesine tıklayın. Gradaly her kâğıdın 1. sayfasındaki Öğrenci Kimlik Alanını kırpar, <strong>bilgisayarınızda %100 çevrimdışı çalışan gömülü WebAssembly OCR motorunu</strong> yürütür ve bulanık eşleştirme (fuzzy matching) kullanarak el yazısı adları/numaraları öğrenci listenizle eşleştirir. Her eşleştirmeyi yan yana saniyeler içinde gözden geçirip onaylayın."
            ],
            screenshots: [
                {
                    filePrefix: "04_students",
                    caption: "Öğrenciler Sekmesi: Öğrenci Numarası, Ad-Soyad, E-posta ve Grup bilgilerini içeren yerel öğrenci listesi"
                },
                {
                    filePrefix: "05_copies",
                    caption: "Sınav Kâğıtları Sekmesi: Toplu PDF taramalarını bölün ve bireysel sınav kitapçıklarını önizleyin"
                },
                {
                    filePrefix: "06_matching",
                    caption: "Eşleştirme Sekmesi: Kırpılan el yazısı kimlik alanının öğrenci listesiyle yan yana görsel doğrulaması"
                }
            ],
            callouts: [
                {
                    title: "Mutlak Yerel Gizlilik (Sıfır Bulut OCR)",
                    desc: "Öğrenci adları, numaraları, e-postaları ve üst bilgi kesitleri bilgisayarınızdan asla çıkmaz — OCR masaüstü uygulamasının içinde %100 çevrimdışı çalışır."
                },
                {
                    title: "Eşleşmeyen Filtresi ve Anında Arama",
                    desc: "Belirsiz el yazılarını saniyeler içinde çözmek için 'Eşleşmeyenler' veya 'Düşük Güven' ölçütüne göre filtreleyin."
                }
            ]
        },
        {
            id: "exam-grading-console",
            guide: "exam",
            stepNumber: "E5",
            partColor: "indigo",
            tag: "Sınav Modu • Adım 5 — Değerlendirme Konsolu",
            badge: "%100 İnsan Odaklı, Standart YZ veya Esnek Toplu İşlem (-%50)",
            shortTitle: "Manuel ve Yapay Zekâ Destekli Değerlendirme",
            title: "3 Bölmeli Değerlendirme Konsolu: Manuel Hız, Yapay Zekâ Kalibrasyonu ve Toplu İşlem Modu",
            subtitle: "Sınıf genelinde soru bazında gezinin, 3 renkli durum kodunu anlayın, tekil kâğıtlar üzerinde kalibre edin ve Toplu Yapay Zekâ ön değerlendirmesini çalıştırın.",
            paragraphs: [
                "<strong>5. Değerlendirme</strong> sekmesi birbiriyle senkronize üç bölmeden oluşur: solda <strong>Öğrenci Listesi</strong> (en üstte sabitlenmiş <code>⭐ Örnek Çözüm</code> ile birlikte), ortada <strong>Etkileşimli PDF Görüntüleyici</strong> ve sağda <strong>Soru ve Değerlendirme Ölçütleri Çalışma İstasyonu</strong>.",
                "<strong>1. Soru Daireleri ve 2B Klavye Gezintisi:</strong> Bir sorudan diğerine geçmek için sağ üstteki numaralı soru dairelerinden (<code>1</code>, <code>2</code>, <code>3</code>...) herhangi birine tıklayın veya <code>←</code> / <code>→</code> (ya da <code>H</code> / <code>L</code>) tuşlarına basın. Aynı soruda öğrenciler arasında ilerlemek için <code>↑</code> / <code>↓</code> (veya <code>K</code> / <code>J</code>) tuşlarını kullanın, <code>1–9</code> tuşlarıyla #1–#9 numaralı değerlendirme ölçütlerini işaretleyin/kaldırın, <code>V</code> ile manuel olarak onaylayın ve yerleşik klavye kısayolları rehberini görüntülemek için istediğiniz an <code>?</code> tuşuna basın (veya üst çubuktaki <code>⌨️</code> simgesine tıklayın).",
                "<strong>2. 3 Renkli Durum Kodu:</strong><br>• 🟢 <strong>Yeşil (<code>IA</code>):</strong> Yapay zekâ tarafından ön değerlendirmesi yapıldı (insan incelemenizi bekliyor).<br>• 🔵 <strong>Mavi (<code>İnsan</code>):</strong> Öğretim elemanı tarafından manuel olarak puanlandı, düzenlendi veya açıkça onaylandı.<br>• ⚪ <strong>Gri (<code>Değerlendirilecek</code>):</strong> Henüz puanlanmadı.",
                "<strong>3. Tek Kâğıt Üzerinde Kalibrasyon, Yapay Zekâ Sorgusunu İnceleme ve Tüm Sınıf İçin Toplu Yapay Zekâ Başlatma:</strong><br>• <strong>Tek Soru Kalibrasyonu ve Anında Durdurma (<code>✕ Durdur</code>):</strong> Değerlendirme ölçeğinizi yalnızca mevcut öğrenci üzerinde denemek için sağ alttaki <strong>Bu soru için yapay zekâyı yeniden çalıştır</strong> düğmesine tıklayın. Akıl yürütme modeli çok uzun sürerse değerlendirmeyi derhal iptal etmek için dönen simgenin hemen yanındaki kırmızı <strong><code>✕ Durdur</code> (<code>Interrompre</code>)</strong> düğmesine tıklayın.<br>• <strong>Canlı Yapay Zekâ Sorgu ve Görsel Denetleyicisi (<code>👁️ YZ Sorgusu</code> / <code>Requête IA</code>):</strong> Etkileşimli <strong>Yapay Zekâ Sorgu Denetleyicisi Penceresini</strong> açmak için tek soru değerlendirme düğmesinin yanındaki <strong><code>👁️ YZ Sorgusu</code></strong> düğmesine tıklayın. Bu pencere size gerçek zamanlı olarak şunları gösterir: (1) Görsel modele gönderilen <strong>tam kırpılmış/birleştirilmiş JPEG görüntüsü</strong> ve soru metni kısmının <strong>Öğrenci Kâğıdından</strong> mı yoksa <strong>Boş Şablondan (<code>canvas.pdf</code>)</strong> mı geldiği (ikisi arasında geçiş yapmak için tek tıklamalı anahtarla birlikte), (2) eksiksiz <strong>Sistem İstemi ve Kullanıcı İstemi</strong> ve (3) <strong>tam HTTP JSON İstek Yükü (Payload) yapısı</strong> (<code>code_execution</code> gibi etkin araçlar ve JSON yanıt şeması dahil).<br>• <strong>Çoklu Kâğıt Toplu Başlatma (<code>▶ YZ Değerlendirmesi</code>):</strong> Seçili kâğıtları ve soruları değerlendirmek için sol üstteki <strong>▶ YZ Değerlendirmesi</strong> düğmesine tıklayın. <strong>⚡ Standart Mod</strong> (paylaşımlı PDF önbelleklemesiyle soru düzeyinde <code>(kâğıt, soru)</code> paralel iş parçacıkları) ile doğrudan Gemini, OpenAI veya Anthropic anahtarlarıyla tüm sınıflar için önerilen <strong>🌿 Esnek / Asenkron Toplu İşlem Modu (%50 maliyet indirimi)</strong> arasında seçim yapın.<br>• <strong>İsteğe Bağlı Değerlendirme Anomalisi Tespiti (<code>⚠️ Anomaliler</code>):</strong> Yapay Zekâ Ayarlarında varsayılan olarak etkinleştirilen bu özellikle yapay zekâ, puanlama sırasında fiziksel veya görsel anomalileri (kutunun dışına yazılmış yanıt, üzeri çizilmiş/belirsiz çalışma, okunaksız el yazısı veya eşleşmeyen sayfa) otomatik olarak işaretler; böylece <code>⚠️ Anomaliler</code> ölçütüne göre filtreleyebilir ve her uyarıyı tek tıklamayla çözebilir veya kapatabilirsiniz.",
                "<strong>4. <code>Render / Edit</code> önizlemesi ve Çok Modelli Benchmark / Regresyon Paketleri:</strong><br>• <strong>Birleşik <code>Render / Edit</code> düğmesi:</strong> Doğrudan <em>Yapay Zekâ Gerekçesi</em> ve <em>Öğrenci Geri Bildirimi</em> alanlarında Markdown + KaTeX önizleme ve düzenleme arasında geçiş yapın.<br>• <strong>Çok Modelli Benchmark ve Regresyon Paketleri (<code>⭐</code>):</strong> İnsan tarafından doğrulanmış yanıtları yeniden kullanılabilir test paketlerine kaydedin ve Karşılama Ekranındaki <strong>Benchmark</strong> alanından modeller arası karşılaştırma kampanyaları başlatın (Gemini, GPT, Claude, OpenRouter, üniversite sunucusu, yerel Ollama). Rehberli açılır listelerden model seçin, zorunlu Görüntü ve Python sanal alan ön kontrollerini geçin, canlı ilerleme çubuğuyla <code>1–16</code> paralel iş parçacığı çalıştırın (yerel Ollama için VRAM korumasıyla), MAE, tam eşleşme, ölçüt bazlı F1, gecikme ve jeton metriklerini karşılaştırın veya paketi tam bir Gradaly projesi olarak açın."
            ],
            screenshots: [
                {
                    filePrefix: "07_grading",
                    caption: "Değerlendirme Konsolu Görünümü: Solda öğrenci listesi (⭐ Örnek Çözüm, durum noktaları, soru puanı ve toplam puan ile), ortada soru alanına otomatik odaklanan PDF ve sağda değerlendirme ölçeği istasyonu"
                },
                {
                    filePrefix: "07b_grading_single_ai",
                    caption: "Sağ Bölmenin Alt Kısmı: Yapay Zekâ Gerekçesi, Öğrenci Geri Bildirimi (Markdown + KaTeX), Üzerine yazma koruması kutuları ve 'Bu soru için yapay zekâyı yeniden çalıştır'"
                },
                {
                    filePrefix: "07c_grading_launch_modal",
                    caption: "Yapay Zekâ Değerlendirmesini Başlat Penceresi: Hedef kâğıtları, soruları, üzerine yazma kurallarını ve Standart veya Esnek Asenkron Toplu İşlem Modunu (-%50) seçin"
                }
            ],
            callouts: [
                {
                    title: "%100 İnsan Odaklı 2B Klavye Hızı",
                    desc: "↑/↓ (K/J) ile kâğıtlar arasında gezinin, ←/→ (H/L) ile soruları değiştirin, 1–9 ile ölçütleri işaretleyin, V ile onaylayın, Esc ile metin alanlarından çıkın ve kısayol rehberi için ? tuşuna basın."
                },
                {
                    title: "Önerilen Esnek Toplu İşlem Modu (-%50)",
                    desc: "%50 indirimli asenkron sınıf ön değerlendirmesi için doğrudan Gemini, OpenAI ve Anthropic anahtarlarıyla kullanılabilir."
                }
            ]
        },
        {
            id: "exam-collaborative-sharing",
            guide: "exam",
            stepNumber: "E6",
            partColor: "indigo",
            tag: "Sınav Modu • Adım 6 — Ekip Halinde Değerlendirme (Gradaly Pro)",
            badge: "İş Birlikçi Paylaşım ve Birleştirme • PRO",
            shortTitle: "Ekip Paylaşımı ve Birleştirme (PRO)",
            title: "İş Birlikçi Proje Paylaşımı ve Soru Bazlı Seçici Birleştirme",
            subtitle: "Sınav değerlendirmesini .gradaly arşivleri veya uçtan uca şifreli Bulut bağlantıları aracılığıyla meslektaşlarınız veya araştırma görevlileri arasında paylaştırın (Gradaly Pro).",
            paragraphs: [
                "Bir sınavı meslektaşlarınız veya araştırma görevlileriyle birlikte okurken <strong>Gradaly Pro</strong>, eksiksiz bir projeyi veya hafif bir alt kümeyi yerel bir <code>.gradaly</code> arşivi ya da <strong>AES-256-GCM Şifreli Bulut Bağlantısı</strong> (7, 14 veya 30 gün geçerli) aracılığıyla paylaşmanıza olanak tanır.",
                "Meslektaşlarınız <strong>İçe Aktar / Birleştir</strong> seçeneğine tıkladığında Gradaly, sınav şablonu PDF'inin SHA-256 parmak izini doğrular ve arşivi ister <strong>yeni bir proje</strong> olarak içe aktarmalarına ister birleştirme öncesi otomatik yedeklemelerle <strong>değerlendirme ölçeklerini ve/veya puanlamaları soru bazında seçici olarak birleştirmelerine</strong> (örneğin 1. araştırma görevlisinin S1–S2 puanlamalarıyla 2. araştırma görevlisinin S3–S4 puanlamalarını birleştirme) olanak tanır."
            ],
            screenshots: [
                {
                    filePrefix: "09_share_modal",
                    caption: "Projeyi Paylaş / Dışa Aktar Penceresi (Gradaly Pro): Paylaşım ön ayarları, soru bazlı filtre ve AES-256 Şifreli Bulut Bağlantısı"
                },
                {
                    filePrefix: "10_import_merge_modal",
                    caption: "İçe Aktar / Seçici Birleştirme Penceresi (Gradaly Pro): SHA-256 şablon doğrulaması ve soru bazlı Değerlendirme Ölçeği/Puanlama birleştirme"
                }
            ],
            callouts: [
                {
                    title: "Uçtan Uca Şifreli Bulut Bağlantıları",
                    desc: "Projelerinizi istemci taraflı AES-256-GCM şifrelemeyle öğretim ekibinizle paylaşın (#k=... anahtarı sunucuya asla ulaşmaz)."
                },
                {
                    title: "Soru Bazlı Seçici Birleştirme",
                    desc: "Manuel düzenlemeleri koruyup otomatik yedek kaydederken birden fazla değerlendiricinin puanlamalarını temiz bir şekilde birleştirin."
                }
            ]
        },
        {
            id: "exam-analytics-and-exports",
            guide: "exam",
            stepNumber: "E7",
            partColor: "indigo",
            tag: "Sınav Modu • Adım 7 — İstatistikler ve Sonuç Paylaşımı",
            badge: "Excel • Moodle CSV • Açıklamalı PDF'ler • Web Portalı",
            shortTitle: "İstatistikler, Moodle, PDF ve Web Portalı",
            title: "Sınıf İstatistikleri, Moodle Dışa Aktarımı, Açıklamalı PDF'ler ve Öğrenci İnceleme Portalı",
            subtitle: "Puan dağılımlarını analiz edin, notları ve kişisel inceleme bağlantılarını Moodle'a aktarın ve öğrencilerinize zengin bireysel geri bildirim sunun.",
            paragraphs: [
                "<strong>6. Özet</strong> sekmesi gerçek zamanlı sınıf istatistiklerini hesaplar: ortalama, medyan, standart sapma, en düşük/en yüksek puan, belirsizlik içermeyen <code>[a, b[</code> histogramları ve ölçüt bazlı başarı oranları.",
                "Değerlendirilmiş sınavları öğrencilere ulaştırmak için (Ücretsiz modda 1 kâğıt önizlemesi; Gradaly Pro'da tüm sınıf) dört kanaldan birini seçin:<br>1) <strong>Çok Sayfalı Excel Not Çizelgesi</strong> (genel özet + her soru için 1 sekme; tüm kâğıtlar veya seçili bir alt küme için).<br>2) <strong>Moodle Dışa Aktarımı (Not Defteri CSV ve Ödev Değerlendirme Çizelgesi)</strong>: <em>Moodle Not Defteri → İçe Aktar → CSV dosyası</em> için standart bir UTF-8 CSV oluşturun veya bir <em>Moodle Ödevinden</em> indirilen çevrimdışı değerlendirme çizelgesini (Öğrenci Numarası veya E-posta ile eşleştirerek) otomatik olarak doldurun; üstelik hem ölçeklendirilmiş notu (ham puan, <code>/20</code> veya <code>/100</code>) hem de her öğrencinin tıklanabilir <strong>kişisel şifreli inceleme bağlantısını</strong> doğrudan Moodle <em>Geri Bildirim</em> sütununa yerleştirin!<br>3) <strong>Özelleştirilebilir Dosya Adı Biçimine Sahip Bireysel Açıklamalı PDF'ler (ZIP veya Tek Kâğıt)</strong>: özet kapak sayfasını öğrencinin el yazısı sayfalarıyla birleştirir ve esnek yer tutucular (<code>{nom}</code>, <code>{prenom}</code>, <code>{id}</code>, <code>{projet}</code>, <code>{copie}</code>, <code>{groupe}</code> — örn. <code>{nom}_{prenom}_{projet}.pdf</code>) ile canlı dosya adı önizlemesi kullanarak dışa aktarılan PDF dosya adı kalıbını özelleştirmenizi sağlar.<br>4) <strong>Zero-Knowledge Öğrenci İnceleme Web Portalı</strong>: şifreli sınav kâğıtlarını yüksek hızda çevrimiçi yayımlayın ve senkronize edin (donanım uyumlu çok çekirdekli CPU hattı + 10 paralel HTTP/2 ikili akışı), öğrencileri ister <strong>Doğrudan Bulut E-postası (<code>@gradaly.io</code>)</strong> ile ister kullanıma hazır Excel <code>.xlsx</code> tablosu veya <code>.csv</code> dosyası kullanarak <strong>Adres Mektup Birleştirme Dışa Aktarımı (<code>Publipostage</code> — Outlook Web / Microsoft 365, Word + Masaüstü Outlook veya Thunderbird'deki kendi üniversite e-posta adresiniz)</strong> ile bilgilendirin, doğrudan <strong>Moodle</strong> için dışa aktarın ya da sınıfta dağıtmak üzere <strong>kesilebilir bireysel QR kod fişleri</strong> yazdırın."
            ],
            screenshots: [
                {
                    filePrefix: "08_stats",
                    caption: "Özet Sekmesi (Sınav Modu): Sınıf temel göstergeleri, puan dağılımı histogramları, ölçüt bazlı başarı oranları ve Dışa Aktarım Merkezi"
                }
            ],
            callouts: [
                {
                    title: "Excel Not Çizelgesi ve Açıklamalı PDF'ler",
                    desc: "Ayrıntılı ölçüt dökümleri ve KaTeX matematiksel ifadeleriyle resmî üniversite not çizelgelerini ve bireysel PDF sınav kâğıtlarını dışa aktarın."
                },
                {
                    title: "Moodle CSV Dışa Aktarımı ve Çevrimiçi Bağlantılar",
                    desc: "Notları ve tıklanabilir kişisel inceleme bağlantılarını doğrudan Moodle'a aktarın (Not Defteri CSV içe aktarımı veya Ödev çevrimdışı değerlendirme çizelgesi)."
                },
                {
                    title: "Şifreli Öğrenci İnceleme Portalı",
                    desc: "Öğrenciler puanlanmış kâğıtlarını, işaretlenmiş ölçütleri ve kişiselleştirilmiş geri bildirimleri Moodle, e-posta sihirli bağlantısı veya bireysel QR fişiyle görüntüler."
                }
            ]
        },
        {
            id: "exam-ai-settings",
            guide: "exam",
            stepNumber: "E8",
            partColor: "indigo",
            tag: "Sınav Modu • Adım 8 — Yapay Zekâ Yapılandırması (İsteğe Bağlı)",
            badge: "OpenRouter • Gemini • GPT • Claude • Yerel",
            shortTitle: "API Anahtarları ve Model Seçimi",
            title: "API Anahtarınızı Ayarlama ve Doğru Yapay Zekâ Modelini Seçme",
            subtitle: "Gradaly'yi %100 İnsan Modunda kullanıyorsanız bu bölümü atlayabilirsiniz. Yapay Zekâ Değerlendirme Ölçeği Asistanını ve Yapay Zekâ Ön Değerlendirmesini etkinleştirmek için Ayarlar (⚙️) menüsünden API anahtarınızı yapılandırın.",
            paragraphs: [
                "<strong>Değerlendirme kalitesi doğrudan seçtiğiniz yapay zekâ modeline bağlıdır:</strong> El yazısıyla yanıtlanmış üniversite sınavları (matematik, fizik, mühendislik, iktisat, beşeri bilimler) üzerindeki karşılaştırmalı testlerimizde <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong> ve <strong><code>Mistral-Large 4.0</code></strong> modelleriyle <strong>mükemmel sonuçlar</strong> elde ediyoruz — dersinizin alanına göre birkaç farklı modeli denemekten çekinmeyin!",
                "<strong>Doğrudan Sağlayıcı Anahtarları ve OpenRouter Karşılaştırması:</strong> Doğrudan <strong>Google Gemini</strong>, <strong>OpenAI</strong> veya <strong>Anthropic</strong> üzerinden bir API anahtarı oluşturabilir (%50 indirimli asenkron <strong>Toplu İşlem / Esnek mod</strong> olanağını açar) ya da tek bir birleşik hesap üzerinden <strong>tek bir API anahtarıyla tüm sağlayıcıların modellerine</strong> (Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama) erişim sağlayan <strong>OpenRouter</strong> platformunu kullanabilirsiniz.",
                "<strong>%0 Komisyon ve Tescilli 'Yapay Zekâ Kredisi' Yok:</strong> Sizi tek bir modele mahkûm eden ve yüksek kâr marjıyla 'yapay zekâ kredi paketleri' satan ticari bulut platformlarının aksine Gradaly, yapay zekâ kullanımı üzerinden <strong>sıfır komisyon</strong> alır. Yalnızca sağlayıcının gerçek jeton (token) maliyetini ödersiniz — hatta <strong>üniversiteniz ücretsiz bir kurumsal LLM sunucusu sağlıyorsa veya Ollama aracılığıyla yerel bir model çalıştırıyorsanız 0 € ödersiniz</strong>.",
                "<strong>Gelişmiş Ayarlar — Yerel Python Kod Yürütme (<code>code_execution</code> / <code>code_interpreter</code>):</strong> <em>Ayarlar (⚙️) → Gelişmiş Ayarlar</em> altından isteğe bağlı <strong>Python Kod Yürütme</strong> aracını etkinleştirebilirsiniz (varsayılan olarak kapalıdır). Etkinleştirildiğinde yapay zekâ modeli hem değerlendirme ölçeği tasarımı hem de sınav kâğıdı puanlaması sırasında sunucu tarafındaki güvenli bir yalıtılmış ortamda (Google Gemini üzerinde <code>code_execution</code>, OpenAI <code>/v1/responses</code> üzerinde <code>code_interpreter</code> ve Anthropic <code>/v1/messages</code> üzerinde <code>code_execution_20250825</code>) Python kodu yazıp çalıştırabilir; bu özellik sayısal hesaplamalar, üstel ifadeler, trigonometri veya algoritma izleme içeren fen ve mühendislik sınavları için idealdir. Yerleşik <strong>Modelin kod yürütmeyi destekleyip desteklemediğini test et</strong> düğmesi, seçtiğiniz modelin Python ortamını gerçekten çalıştırıp çalıştırmadığını tek tıklamayla doğrular.",
                "<strong>Gelişmiş Ayarlar — Gelişmiş Yapay Zekâ Hata Ayıklama Modu (<code>.debug/grading/inspect.html</code>):</strong> <strong>Yapay Zekâ Hata Ayıklama Modunu</strong> etkinleştirmek, her yapay zekâ değerlendirmesi için <code>.debug/grading/</code> klasörü içine eksiksiz bir tanılama paketi kaydeder; bu paket yapay zekâya gönderilen tam görüntüyü, soru metninin öğrencinin kâğıdından mı yoksa boş şablondan mı geldiğini (<code>image_source.json</code>), Sistem ve Kullanıcı istemlerini (<code>prompt.txt</code>), tam HTTP JSON istek yapısını (<code>request_payload.json</code>), model tarafından yürütülen Python kodunu ve konsol çıktısını, ayrıca ham API yanıtını (<code>raw_api_response.json</code>) gösteren bağımsız bir görsel HTML raporu (<strong><code>inspect.html</code></strong> ve <code>latest_inspect.html</code>) içerir.",
                "<strong>Yerel Yapay Zekâ Jeton Günlüğü, Zaman Grafikleri ve Özel Fiyatlandırma (<code>Yapay Zekâ Kullanımı ve Maliyetler</code>):</strong> Her yapay zekâ çağrısı (tekil/toplu değerlendirme, Ölçek Asistanı, istem denetimi, tanılama ve benchmark kampanyaları), girdi ve çıktı/akıl yürütme jetonlarını, tarih, sağlayıcı ve model bilgisiyle birlikte <code>~/.gradaly_ai_usage.jsonl</code> dosyasına (sıfır kişisel öğrenci verisiyle) yerel olarak kaydeder. Üst çubuktaki veya <em>Ayarlar (⚙️)</em> içindeki <strong>Madeni Para (Coins)</strong> simgesine tıklayarak günlük/aylık ve birikimli grafikleri inceleyin, CSV dışa aktarın, günlüğü sıfırlayın ve yalnızca daha önce kullandığınız sağlayıcı/modeller için kendi <code>$ / 1M</code> jeton fiyatlarınızı tanımlayın."
            ],
            screenshots: [
                {
                    filePrefix: "11_settings_ai",
                    caption: "Yapay Zekâ Ayarları Penceresi (⚙️): Sağlayıcınızı seçin (Google Gemini, OpenRouter, OpenAI, Anthropic veya Yerel / Üniversite Sunucusu), modelinizi belirleyin ve bağlantıyı test edin"
                }
            ],
            providerGuides: [
                {
                    name: "OpenRouter (Çoklu Sağlayıcı Ağ Geçidi)",
                    tag: "Tek Anahtarda Tüm Modeller",
                    icon: "fas fa-network-wired",
                    desc: "<strong>Özel avantajı:</strong> Birden fazla faturalandırma hesabı yönetmeye gerek kalmadan tek bir hesap ve API anahtarıyla <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, <code>Mistral-Large 4.0</code> ve yüzlerce başka modeli test etmenizi sağlar (not: asenkron Toplu İşlem modu OpenRouter üzerinde mevcut değildir).",
                    steps: [
                        "<strong>openrouter.ai</strong> adresine gidin ve giriş yapın (veya ücretsiz bir hesap oluşturun).",
                        "<strong>Credits</strong> bölümünü açın ve küçük bir ön ödemeli bakiye ekleyin (örneğin 5 $ veya 10 $ — binlerce sınav sayfası için yeterlidir).",
                        "<strong>Keys</strong> bölümünü açın → <strong>Create Key</strong> düğmesine tıklayın, anahtara <code>Gradaly</code> adını verin ve <code>sk-or-v1-...</code> ile başlayan anahtarı kopyalayın.",
                        "Gradaly'de <strong>Ayarlar (⚙️)</strong> menüsünü açın, <strong>OpenRouter</strong> seçeneğini belirleyin, anahtarı yapıştırın ve istediğiniz modeli seçin."
                    ],
                    url: "https://openrouter.ai/keys",
                    linkLabel: "OpenRouter API Anahtarları Konsolunu Aç"
                },
                {
                    name: "Google Gemini (Google AI Studio)",
                    tag: "Hızlı ve Ekonomik",
                    icon: "fas fa-bolt",
                    desc: "%50 indirimli asenkron Toplu İşlem (Batch) moduna yerel destekle Google'ın çok modlu <code>Gemini 3.8 Flash</code> ve Pro modellerine doğrudan erişim.",
                    steps: [
                        "Google hesabınızla <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>) platformuna giriş yapın.",
                        "Sol menüdeki <strong>Get API key</strong> seçeneğine ve ardından <strong>Create API key</strong> düğmesine tıklayın.",
                        "Oluşturulan anahtarı (<code>AIzaSy...</code> ile başlayan) kopyalayın. Daha yüksek hız sınırlarını açmak isterseniz Kullandıkça Öde (Pay-as-you-go) faturalandırmasını etkinleştirin.",
                        "Gradaly'de <strong>Ayarlar (⚙️)</strong> menüsünü açın, <strong>Google Gemini</strong> seçeneğini belirleyin ve anahtarınızı yapıştırın."
                    ],
                    url: "https://aistudio.google.com/app/apikey",
                    linkLabel: "Google AI Studio API Anahtarlarını Aç"
                },
                {
                    name: "OpenAI (GPT Modelleri)",
                    tag: "Yüksek Mantıksal Kesinlik",
                    icon: "fas fa-brain",
                    desc: "Adım adım hesaplamaları denetlemekte mükemmel olan <code>GPT 5-4 mini</code> gibi OpenAI çok modlu modellerine %50 indirimli Toplu İşlem moduyla doğrudan erişim.",
                    steps: [
                        "<strong>platform.openai.com</strong> adresine giriş yapın (bireysel ChatGPT Plus aboneliğinden ayrıdır).",
                        "<strong>Settings → Billing</strong> bölümüne gidin ve küçük bir ön ödemeli bakiye yükleyin (örneğin 5 $).",
                        "<strong>Dashboard → API keys</strong> sayfasını açın, <strong>+ Create new secret key</strong> düğmesine tıklayın ve anahtarı (<code>sk-proj-...</code>) kopyalayın.",
                        "Gradaly'de <strong>Ayarlar (⚙️)</strong> menüsünü açın, <strong>OpenAI</strong> seçeneğini belirleyin, anahtarı yapıştırın ve modelinizi seçin."
                    ],
                    url: "https://platform.openai.com/api-keys",
                    linkLabel: "OpenAI Platform API Anahtarlarını Aç"
                },
                {
                    name: "Anthropic (Claude Modelleri)",
                    tag: "İspatlar ve İncelikli Anlatım",
                    icon: "fas fa-feather-alt",
                    desc: "El yazısı matematiksel ispatları çözümlemesi ve ayrıntılı pedagojik geri bildirimler yazmasıyla tanınan Anthropic <code>Claude-Sonnet-5.5</code> ve Opus modellerine doğrudan erişim.",
                    steps: [
                        "<strong>Anthropic Console</strong> (<code>console.anthropic.com</code>) platformuna giriş yapın.",
                        "<strong>Settings → Billing</strong> bölümünden ön ödemeli kredi bakiyesi etkinleştirin.",
                        "<strong>API Keys</strong> bölümünde <strong>Create Key</strong> düğmesine tıklayın ve gizli anahtarı (<code>sk-ant-...</code>) kopyalayın.",
                        "Gradaly'de <strong>Ayarlar (⚙️)</strong> menüsünü açın, <strong>Anthropic</strong> seçeneğini belirleyin ve anahtarınızı yapıştırın."
                    ],
                    url: "https://console.anthropic.com/settings/keys",
                    linkLabel: "Anthropic Console API Anahtarlarını Aç"
                }
            ],
            callouts: [
                {
                    title: "Üniversite Sunucusu veya %100 Yerel Ollama",
                    desc: "Üniversiteniz OpenAI uyumlu bir yapay zekâ sunucusu sağlıyorsa veya Ollama (<code>http://localhost:11434/v1</code>) üzerinden yerel bir model çalıştırıyorsanız 0 € jeton maliyeti için Ayarlar'da 'Yerel / Özel Sunucu' seçeneğini belirleyin."
                },
                {
                    title: "Tek Tıkla Bağlantı Tanılama",
                    desc: "API anahtarınızın geçerliliğini ve modelin yanıt hızını doğrulamak için istediğiniz zaman üst çubuktaki yapay zekâ durum rozetine tıklayın."
                },
                {
                    title: "Python Kod Yürütme Ortamı (İsteğe Bağlı)",
                    desc: "Gemini, OpenAI ve Anthropic üzerinde yüksek hassasiyetli sayısal doğrulama için Gelişmiş Ayarlar'da tek tıkla uyumluluk testiyle yerel Python kod yürütmeyi etkinleştirin."
                },
                {
                    title: "Görsel Yapay Zekâ Sorgu ve Hata Ayıklama Denetleyicisi",
                    desc: "Tam kırpılmış görüntüyü, Şablon / Öğrenci Kâğıdı kaynağını, istemleri ve JSON yükünü incelemek için Değerlendirme sekmesinde '👁️ YZ Sorgusu' düğmesine tıklayın veya .debug/grading/inspect.html dosyasını açın."
                }
            ]
        },
        {
            id: "exam-faq",
            guide: "exam",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "indigo",
            tag: "Sıkça Sorulan Sorular (SSS)",
            badge: "Mimari, Gizlilik ve İyi Uygulamalar",
            shortTitle: "Sıkça Sorulan Sorular",
            title: "Sıkça Sorulan Sorular (SSS)",
            subtitle: "Yapay zekâ değerlendirmesinin nasıl çalıştığı, biçimlendirici deneme sınavları ile resmî sınavlar, Documents/Gradaly içindeki yerel depolama, API anahtarı güvenliği, Zero-Knowledge Bulut şifrelemesi ve destek hakkındaki yaygın soruların yanıtları.",
            paragraphs: [
                "Aşağıda Gradaly'nin Sınav ve Deneme Sınavı Modu hakkında en sık sorulan teknik, pedagojik ve gizlilikle ilgili soruların ayrıntılı yanıtlarını bulabilirsiniz."
            ],
            faqs: [
                {
                    q: "Gradaly'nin yapay zekâ değerlendirmesi arka planda nasıl çalışır ve soru görüntüsü öğrencinin kâğıdından mı yoksa boş şablondan mı alınır?",
                    a: "<p>Yapay zekâdan bir öğrencinin sınav kâğıdındaki bir soruyu değerlendirmesini istediğinizde Gradaly, ilgili soru için çizdiğiniz <strong>dikdörtgen alanın kırpılmış görüntüsünü</strong> çıkarır ve değerlendirme ölçütlerinizi (<code>CRITERIA</code>) ile genel puanlama yönergelerinizi (<code>PROMPT_TEXT</code>) içeren yapılandırılmış bir istemle birlikte seçtiğiniz Görsel Yapay Zekâ modeline gönderir.</p><p><strong>Soru metni öğrencinin kâğıdından mı yoksa boş şablondan mı alınır?</strong><ul><li><strong>Tek birleşik alan (varsayılan):</strong> Soru başına tek bir alan çizdiğinizde Gradaly bu alanı <strong>tamamen öğrencinin sınav kâğıdından (<code>copies/copie_XXX.pdf</code>)</strong> kırpar. Boş şablon (<code>canvas.pdf</code>) kullanılmaz; dolayısıyla her öğrencinin kâğıdında farklı sayısal değerler basılıysa yapay zekâ o öğrencinin kendi sayılarını ve yanıtını görür.</li><li><strong>Ayrıştırılmış alanlar (<code>Soru metni / yanıtı ayır</code>) ve <code>Yapay Zekâ Soru Metni</code> seçeneği:</strong> <em>1. Şablon ve Sorular</em> sekmesindeki <strong><code>Yapay Zekâ Soru Metni: [Öğrenci Kâğıdı] / [Şablon]</code></strong> seçicisi, soru metni kısmının her bir <strong>Öğrenci Kâğıdından</strong> mı (kâğıtlar öğrenciler arasında bireyselleştirildiğinde zorunludur) yoksa <strong>Boş Şablondan (<code>canvas.pdf</code>)</strong> mı (öğrenciler basılı sorunun bulunmadığı ayrı cevap kâğıtlarına yazdığında kullanışlıdır) alınacağını seçmenize olanak tanır.</li></ul></p><p><strong>Tam görüntüyü ve JSON sorgusunu inceleme:</strong> <em>5. Değerlendirme</em> sekmesinde istediğiniz zaman <em>Bu soru için yapay zekâyı yeniden çalıştır</em> düğmesinin yanındaki <strong><code>👁️ YZ Sorgusu</code> (<code>Requête IA</code>)</strong> düğmesine tıklayarak (veya <code>.debug/grading/inspect.html</code> dosyasını açmak üzere <em>Ayarlar → Gelişmiş Ayarlar</em> altından <em>Yapay Zekâ Hata Ayıklama Modunu</em> etkinleştirerek) yapay zekâya gönderilen tam JPEG görüntüsünü, kaynak dağılımını, Sistem ve Kullanıcı istemlerini, tam HTTP JSON yük yapısını ve model tarafından çalıştırılan Python kodunu görüntüleyebilirsiniz.</p>"
                },
                {
                    q: "Yapay zekâ değerlendirmesine güvenmeli miyim, yoksa onu biçimlendirici deneme sınavları için mi kullanmalıyım?",
                    a: "<p><strong>Hem evet hem hayır — başlangıçta asla körü körüne güvenmeyin!</strong> İlk aşamada değerlendirme ölçeğiniz çok katı veya muğlak olabilir ya da seçtiğiniz yapay zekâ modeli belirli bir problemi çözmekte zorlanabilir veya alışılmadık bir matematiksel gösterimi yanlış okuyabilir.</p><p><strong>Biçimlendirici deneme sınavları ve resmî sınavlar:</strong> Pek çok öğretim elemanı resmî dönem sonu sınavını kâğıt üzerinde elle okumayı (veya Gradaly'yi %100 İnsan Modunda kullanmayı) tercih ederken, dönem içinde öğrencilere gerçek sınav koşullarında zengin ve bireyselleştirilmiş geri bildirim sunmak amacıyla düzenlenen <strong>biçimlendirici deneme sınavlarında</strong> Gradaly'nin yapay zekâ ön değerlendirmesini büyük bir rahatlıkla kullanmaktadır.</p><p><strong>İnsan incelemesi ve onayı esastır:</strong> Gradaly <strong>not amaçlı veya yüksek riskli (resmî) sınavlar</strong> için kullanıldığında, <strong>yapay zekâ çıktılarını mutlaka okuyup manuel olarak onaylamanızı</strong> önemle tavsiye ederiz. Gradaly, her bir öğrenci yanıtını ve geri bildirim öğesini gözden geçirmenize, düzeltmenize ve manuel olarak onaylamanıza olanak tanıyacak şekilde özel olarak tasarlanmıştır — en doğru uygulama her zaman budur.</p><p><strong>Öğrenci şeffaflığı ve not itirazları:</strong> Gradaly, öğrencilere kendi kâğıtlarına uygulanan ölçütler konusunda tam şeffaflık sunduğundan (açıklamalı PDF'ler veya Öğrenci Web Portalı aracılığıyla), öğrencilere değerlendirilmiş kâğıtlarını inceleme ve gerektiğinde belirli değerlendirme ölçütlerinin uygulanmasına itiraz etme olanağı tanımanızı da güçlü biçimde öneririz.</p>"
                },
                {
                    q: "Yapay zekâ ile bir sınavı değerlendirmenin maliyeti ne kadardır?",
                    a: "<p>Tek bir sabit fiyat yoktur; çünkü maliyet öğrenci kâğıdı sayısına, soru sayısına ve seçtiğiniz yapay zekâ modelinin büyüklüğü ile fiyatlandırma kademesine bağlıdır (her API sağlayıcısı milyon girdi/çıktı jetonu başına tam fiyatını yayımlar).</p><p>Gerçek dünyadan somut bir ölçüt vermek gerekirse: testlerimizde olağanüstü başarı gösteren <strong><code>Gemini 3.8 Flash</code></strong> gibi mükemmel bir model kullanarak, <strong>400 öğrencinin 6 ila 7 sayfalık el yazısı yanıtlarından oluşan karmaşık üniversite istatistik sınavlarını esnek/toplu işlem modunda toplam yaklaşık 5 $ ila 7 $ API maliyetiyle</strong> değerlendirdik (üstelik unutmayın: Gradaly sağlayıcınızın jeton fiyatının üzerine %0 komisyon ekler). Sağlayıcı tarifeleri zamanla değişebildiği için Gradaly, her çağrıda kesin girdi ve çıktı/akıl yürütme jetonlarını yerel olarak <strong>Yapay Zekâ Kullanımı ve Maliyetler</strong> (üst çubuktaki veya Ayarlardaki madeni para simgesi) panelinde kaydeder; burada grafikleri inceleyebilir, CSV dışa aktarabilir ve güncel <code>$ / 1M</code> fiyatlarınızı girebilirsiniz.</p>"
                },
                {
                    q: "Zaten ücretli bir ChatGPT Plus (OpenAI), Claude Pro veya Gemini Advanced aboneliğim var — neden API anahtarı yerine bunu kullanamıyorum?",
                    a: "<p><strong>1. Yapay zekâ sağlayıcılarında birbirinden tamamen ayrı iki ürün:</strong> OpenAI, Anthropic ve Google bünyesinde bireysel sohbet abonelikleri (aylık ~20 $ tutarındaki ChatGPT Plus, Claude Pro, Gemini Advanced) ile <strong>API erişimi</strong> birbirinden tamamen bağımsız faturalandırma sistemleridir. Bireysel abonelikler yalnızca web/mobil sohbet arayüzüne manuel erişim hakkı tanır ve Gradaly gibi üçüncü taraf yazılımların otomatik istekler çalıştırmasına teknik olarak izin vermez (Hizmet Koşulları da bunu aşmayı kesin olarak yasaklar).</p><p><strong>2. Paralel toplu değerlendirme ve daha güçlü veri gizliliği:</strong> Düzinelerce veya yüzlerce sınav kâğıdını paralel olarak ön değerlendirmeden geçirmek ve yapılandırılmış değerlendirme verileri (işaretlenmiş değerlendirme ölçütleri, öğretim elemanı gerekçeleri ve öğrenci geri bildirimi) almak için Gradaly'nin resmî geliştirici API'si üzerinden iletişim kurması gerekir. Üstelik <strong>API trafiği çok daha sıkı gizlilik güvencelerine sahiptir</strong>: varsayılan bireysel web sohbetlerinin aksine, ticari API üzerinden gönderilen sınav yanıtları <strong>sözleşmesel olarak OpenAI, Google veya Anthropic tarafından yapay zekâ modellerini eğitmek amacıyla kullanılmaz</strong>.</p><p><strong>3. Çok düşük kullandıkça öde maliyeti (ek aylık abonelik yok):</strong> API anahtarı aylık abonelik gerektirmez — yalnızca kullandığınız gerçek jetonlar kadar ödeme yaparsınız (Gradaly'den %0 komisyonla <em>kullandıkça öde</em>), bu da genellikle <strong>birkaç yüz öğrencilik tüm bir sınıfı değerlendirmek için yalnızca birkaç dolar</strong> tutar (hatta Google test amacıyla Gemini API üzerinde ücretsiz kullanım kotası da sunar). Tüm modeller (OpenAI, Claude, Gemini, Mistral) için tek bir birleşik bakiye tercih ederseniz <strong>OpenRouter</strong> platformunu veya üniversitenizin kurumsal yapay zekâ sunucusunu kullanabilirsiniz.</p>"
                },
                {
                    q: "Yapay zekâ ile sınavımı değerlendirmek ne kadar sürer?",
                    a: "<p>İşlem süresi soru alanı sayısına, kâğıt sayısına ve yapay zekâ modeli için akıl yürütme görevinin karmaşıklığına bağlıdır. Uygulamada, esnek modda <strong>400 öğrenci kâğıdı, 5 soru ve yaklaşık on sayfalık el yazısı yanıttan</strong> oluşan bir sınavın tamamını genellikle <strong>yaklaşık 10 dakika içinde</strong> ön değerlendirmeden geçiriyoruz.</p><p><strong>İşlemi hızlandırma ipucu:</strong> <strong>Ayarlar (⚙️)</strong> menüsündeki <strong>paralel iş parçacığı (worker) sayısını</strong> artırmaktan çekinmeyin — API sağlayıcınızın hız sınırları izin verdiği sürece daha fazla paralel iş parçacığı çalıştırmak toplam değerlendirme süresini önemli ölçüde kısaltır.</p>"
                },
                {
                    q: "Öğrenci kâğıtlarını tararken hangi çözünürlüğü (DPI) kullanmalıyım?",
                    a: "<p><strong>Net biçimde okunaklı kalan mümkün olan en hafif dosyaları</strong> hedefleyin: hem insan okuması hem de görsel yapay zekâ modelleri için ideal aralık <strong><code>150 DPI</code> ile <code>200 DPI</code></strong> arasıdır.</p><p><strong>Neden 300 veya 600 DPI ile taramamalısınız:</strong> Çok yüksek çözünürlüklerde tarama yapmak yapay zekâ değerlendirme doğruluğuna sıfır katkı sağlarken (görsel modeller görüntüleri zaten dahili olarak yeniden boyutlandırır) PDF dosyalarınızı 4 ila 10 kat ağırlaştırır; bu da PDF bölmeyi, sayfa gezintisini ve şifreli Bulut yüklemelerini gereksiz yere yavaşlatır.</p><p><strong>Renkli taramayı açık tutun:</strong> Sert siyah-beyaz (1-bit) mod yerine <strong>Renkli (standart JPEG/PDF sıkıştırmasıyla 150–200 DPI)</strong> tarama yapmanızı öneririz. Renkli tarama; silik kurşun kalem izlerini, öğrencilerin diyagramlarda kullandığı renkli kalemleri ve ince matematiksel alt indisleri çok daha sadık biçimde korur.</p>"
                },
                {
                    q: "Gradaly dosyaları bilgisayarımda nerede saklanır?",
                    a: "<p>Tüm sınav projeleriniz yerel olarak bilgisayarınızın <strong><code>Documents/Gradaly/</code></strong> klasöründe (örneğin macOS/Linux üzerinde <code>~/Documents/Gradaly/</code> veya Windows üzerinde <code>C:\\Users\\Adiniz\\Documents\\Gradaly\\</code>), her proje için ayrı bir alt klasör olacak şekilde saklanır.</p><p>Her proje klasörünün içinde her şey standart ve şeffaf biçimlerde tutulur:<ul><li><strong>PDF dosyaları:</strong> boş sınav şablonu (<code>canvas.pdf</code>), isteğe bağlı örnek çözüm (<code>solution.pdf</code>) ve <code>copies/</code> içindeki bireysel öğrenci kâğıtları (<code>copie_01.pdf</code>, <code>copie_02.pdf</code> vb.).</li><li><strong>Düz metin JSON dosyaları:</strong> soru alanları ve değerlendirme ölçeği (<code>config.json</code>), adlar, öğrenci numaraları ve e-postaları içeren öğrenci listesi (<code>students.json</code>), OCR öğrenci-kâğıt eşleştirme tablosu (<code>matching.json</code>) ve <code>gradings/</code> içindeki her kâğıdın değerlendirmesi ile geri bildirimi (<code>copie_01.json</code> vb.).</li></ul></p><p><strong>⚠️ Önemli tavsiye:</strong> Bu açık yapı <code>Documents/Gradaly</code> klasörünüzü (Time Machine, Nextcloud, OneDrive vb. ile) yedeklemeyi kolaylaştırsa da, manuel değişiklikler dahili referansları bozup projeye zarar verebileceğinden <strong>proje klasörü içindeki dosyaları manuel olarak düzenlememenizi, yeniden adlandırmamanızı veya taşımamanızı önemle tavsiye ederiz</strong>.</p>"
                },
                {
                    q: "API anahtarlarım nerede saklanır ve bu güvenli midir?",
                    a: "<p>Yapay zekâ API anahtarlarınız (Gemini, OpenRouter, OpenAI, Anthropic), kullanıcı ana dizininizde bulunan gizli yapılandırma dosyası <code>.gradaly_settings.json</code> içinde (macOS/Linux üzerinde <code>~/.gradaly_settings.json</code> veya Windows üzerinde <code>C:\\Users\\Adiniz\\.gradaly_settings.json</code>) <strong>kesinlikle yerel olarak kendi bilgisayarınızda</strong> saklanır.</p><p><strong>Güvenlik güvenceleri:</strong><ul><li>API anahtarlarınız <strong>asla hiçbir Gradaly sunucusuna gönderilmez</strong> ve meslektaşlarınızla bir <code>.gradaly</code> proje arşivini dışa aktardığınızda veya paylaştığınızda <strong>arşive asla dahil edilmez</strong>.</li><li>Yapay zekâ ölçek tasarımını veya ön değerlendirmesini başlattığınızda bilgisayarınız, seçtiğiniz sağlayıcının resmî API uç noktasıyla (Google, OpenRouter, OpenAI, Anthropic veya üniversite sunucunuz) <strong>şifreli HTTPS (TLS 1.3) üzerinden doğrudan</strong> iletişim kurar.</li><li>API anahtarınızı istediğiniz zaman sağlayıcınızın kontrol panelinden iptal edebilir, yenileyebilir veya aylık harcama sınırı belirleyebilirsiniz.</li></ul></p>"
                },
                {
                    q: "Bir sınavı Bulutta yayımladığımda veya Bulut paylaşım bağlantısı oluşturduğumda veriler nerede saklanır? Bunlara kim erişebilir?",
                    a: "<p>Bir sınavı <strong>Öğrenci Web Portalında</strong> yayımladığınızda veya <strong>İş Birlikçi Bulut Paylaşım Bağlantısı</strong> oluşturduğunuzda, <strong>bilgisayarınızdan tek bir bayt bile çıkmadan önce her dosya yerel olarak bilgisayarınızda <code>AES-256-GCM</code> kullanılarak şifrelenir</strong>. Avrupa bulut depolama alanımıza (otomatik süre sonuyla AB'de barındırılır) yalnızca okunamaz şifreli ikili veri blokları (<code>.enc</code>) yüklenir.</p><p>Gizli şifre çözme anahtarı (<code>#k=...</code>), URL parçasının (fragment) içine <code>#</code> simgesinden sonra yerleştirilir. Web standardı (RFC 3986) gereği tarayıcılar <strong><code>#</code> işaretinden sonraki URL parçasını sunucuya asla iletmez</strong>. Dolayısıyla <strong>Gradaly'nin geliştiricileri bile bulutta saklanan dosyalarınızı asla okuyamaz ve bulut platformunu ele geçiren bir saldırgan bile hiçbir şey göremez</strong> — çünkü saklanan her şey şifrelidir ve anahtara yalnızca siz (ve oluşturulan web bağlantısını gönderdiğiniz alıcılar) sahipsinizdir.</p>"
                },
                {
                    q: "Gradaly neden bir web aracı değil de masaüstü uygulamasıdır? Gradaly'nin vizyonu nedir?",
                    a: "<p> İki temel nedenden dolayı yerel masaüstü mimarisini (macOS, Windows, Linux) seçtik:</p><p>1) <strong>Anında Veri Egemenliği:</strong> Yalnızca sınavınızı düzenlemek ve eşleştirmek için şifrelenmemiş öğrenci listelerini veya sınav taramalarını üçüncü taraf bir SaaS veritabanına yüklemek zorunda kalmazsınız.</p><p>2) <strong>Uzun Vadeli Vizyonumuz (%100 Bağımsız Yerel Yapay Zekâ):</strong> Yapay zekâ donanımları ve açık ağırlıklı (open-weights) çok modlu modeller hızla gelişiyor. <strong>Gradaly'nin vizyonu, önümüzdeki birkaç yıl içinde yüksek yetenekli görsel-dil modellerinin doğrudan bir öğretim elemanının dizüstü bilgisayarında</strong> (veya yerel bir bölüm sunucusunda) <strong>çalışacağıdır</strong>. Gradaly yerleşik yerel uç nokta desteğine (Ollama / vLLM / kurumsal sunucular) sahip doğal bir masaüstü uygulaması olduğundan, eğitimciler <strong>%100 bağımsız</strong> hale gelecek; sıfır bulut bağımlılığı ve sıfır jeton maliyetiyle çevrimdışı sınav değerlendirebilecektir.</p>"
                },
                {
                    q: "Geleneksel web tabanlı değerlendirme platformları veya bulut yapay zekâ puanlayıcılarıyla farkları nelerdir?",
                    a: "<p><strong>Geleneksel web tabanlı değerlendirme platformlarıyla karşılaştırıldığında:</strong> Tarayıcı tabanlı değerlendirme platformlarının belirli iş akışları için gerçek avantajları vardır — dosya birleştirmeden eşzamanlı gerçek zamanlı tarayıcı iş birliği, çoktan seçmeli optik formlar için gelişmiş destek ve otomatik yanıt kümeleme gibi. Ancak açık uçlu el yazısı muhakeme soruları için çok modlu yapay zekâ ön değerlendirmesi içermezler, değerlendirme ölçeğini birlikte tasarlamak için bir yapay zekâ asistanı sunmazlar ve (üçüncü taraf sunucularda düz metin olarak saklanan) öğrenci verileriniz üzerinde size daha az kontrol tanırlar. Gradaly, aynı temel değerlendirme ölçeği iş akışıyla <strong>%100 İnsan Modunda</strong> kullanılabilirken buna isteğe bağlı yapay zekâ ölçek tasarımı, yapay zekâ ön değerlendirmesi ve %100 yerel veri kontrolünü ekler.</p><p><strong>Yeni nesil Bulut Yapay Zekâ Puanlayıcılarıyla karşılaştırıldığında:</strong> Bu tür platformlar genellikle tek bir kara kutu yapay zekâ modelini dayatır ve tescilli 'Yapay Zekâ Kredi Paketleri' satarak yüksek kâr marjı uygular. Gradaly ise size <strong>yapay zekâ modeli üzerinde tam kontrol</strong> (Gemini, GPT, Claude, Mistral, OpenRouter veya ücretsiz üniversite/yerel sunucu) verir ve <strong>yapay zekâ kullanımından %0 komisyon alır</strong>.</p>"
                },
                {
                    q: "Hızlı değerlendirme ve gezinme için hangi klavye kısayolları mevcuttur?",
                    a: "<p>Gradaly, fareye dokunmadan tüm sınıf genelinde gezinebilmeniz ve değerlendirme yapabilmeniz için tasarlanmıştır. Uygulama içi Klavye Kısayolları rehberini açmak için istediğiniz an <strong><code>?</code></strong> tuşuna basın (veya üst çubuktaki <strong><code>⌨️</code></strong> simgesine tıklayın):</p><ul><li><strong><code>↑</code> / <code>↓</code> (veya <code>K</code> / <code>J</code>):</strong> Önceki / sonraki öğrenci kâğıdı (<em>Öğrenciler</em>, <em>Sınav Kâğıtları</em>, <em>Eşleştirme</em> ve <em>Değerlendirme</em> sekmelerinde çalışır).</li><li><strong><code>←</code> / <code>→</code> (veya <code>H</code> / <code>L</code>):</strong> Önceki / sonraki soru (<em>Şablon ve Sorular</em> ile <em>Değerlendirme</em> sekmelerinde) veya önceki / sonraki PDF sayfası (<em>Sınav Kâğıtları</em> sekmesinde).</li><li><strong><code>Shift + ←</code> / <code>Shift + →</code> (veya <code>PageUp</code> / <code>PageDown</code>):</strong> Etkin soruyu değiştirmeden <em>Değerlendirme</em> sekmesi içinde PDF sayfalarını çevirin.</li><li><strong><code>1</code> ila <code>9</code> (üst sıra veya Sayısal Tuş Takımı):</strong> Etkin sorunun #1 ila #9 numaralı değerlendirme ölçütünü işaretleyin / kaldırın.</li><li><strong><code>V</code>:</strong> Etkin soruda manuel insan onayını açın / kapatın.</li><li><strong><code>Esc</code>:</strong> Ok ve rakam kısayollarını anında yeniden etkinleştirmek için herhangi bir metin alanından (Geri Bildirim, Gerekçe veya Arama çubuğu) çıkın.</li><li><strong><code>Cmd/Ctrl + +</code> / <code>-</code> / <code>0</code>:</strong> Arayüz metin boyutunu büyütün / küçültün / sıfırlayın.</li></ul>"
                },
                {
                    q: "Notları ve öğrenci inceleme bağlantılarını Moodle'a nasıl aktarırım?",
                    a: "<p>Gradaly, Moodle'ın iki resmî içe aktarma iş akışını destekleyen özel bir <strong>🎓 Moodle Dışa Aktarımı (CSV)</strong> aracı (hem <strong>Çevrimiçi Web Portalı</strong> penceresinden hem de ana <strong>Dışa Aktar</strong> merkezinden erişilebilir) içerir:</p><p><strong>1. Doğrudan Moodle Not Defteri CSV İçe Aktarımı:</strong><ul><li>Gradaly'de <strong>1. Moodle Not Defteri (Doğrudan CSV)</strong> seçeneğini belirleyin, puan ölçeğinizi (ham sınav toplamı, <code>/20</code> veya <code>/100</code>) ve geri bildirim içeriğinizi (<code>portal.gradaly.io</code> üzerindeki şifreli öğrenci kâğıdına tıklanabilir bağlantı + soru bazlı puan dökümü) seçin ve UTF-8 CSV dosyasını dışa aktarın.</li><li>Moodle dersinizde <strong>Notlar</strong> (Grades) sekmesini açın, sol üstteki açılır menüye (<strong>Değerlendirici raporu / Grader report</strong>) → <strong>İçe aktar</strong> (Import) → <strong>CSV dosyası</strong> seçeneğine tıklayın ve CSV'yi yükleyin.</li><li><em>Kullanıcıyı tanımlama ölçütü</em> altında <code>Kimlik numarası</code> (Öğrenci Numarası) alanını <code>Kimlik numarası</code> ile (veya <code>E-posta adresi</code> alanını <code>E-posta adresi</code> ile) eşleştirin. <em>Not öğesi eşleştirmeleri</em> altında <code>Not</code> sütununu not öğenizle (veya <em>Yeni not öğesi</em> ile) ve <code>Geri bildirim</code> sütununu ilgili <strong>Geri bildirimler</strong> alanıyla eşleştirin.</li></ul></p><p><strong>2. Moodle Ödev Çevrimdışı Değerlendirme Çizelgesi (Sıfır Sütun Eşleştirme):</strong><ul><li>Moodle <em>Ödev</em> (Assignment) ayarlarınızda <em>Geri bildirim türleri</em> altından <em>Çevrimdışı değerlendirme çizelgesi</em> ve <em>Geri bildirim yorumları</em> seçeneklerini etkinleştirin, ardından <em>Tüm gönderimleri görüntüle → Değerlendirme eylemi: Değerlendirme çizelgesini indir</em> menüsünden CSV değerlendirme çizelgesini indirin.</li><li>Gradaly'de <strong>2. Moodle Ödev Çizelgesini Tamamla</strong> seçeneğini belirleyin ve bu CSV'yi seçin: Gradaly tüm öğrencileri kimlik numarası veya e-posta ile otomatik olarak eşleştirir ve doğrudan Moodle'a geri yükleyebilmeniz için <code>Not</code> ile <code>Geri bildirim yorumları</code> sütunlarını yerinde doldurur!</li></ul></p>"
                },
                {
                    q: "Adres Mektup Birleştirme (Mail Merge) kullanarak kendi üniversite e-posta adresimden (Outlook Web, Word + Outlook, Thunderbird) öğrenci bildirim e-postaları gönderebilir miyim?",
                    a: "<p><strong>Evet!</strong> Çevrimiçi Web Portalının <strong>✉️ E-posta ile Bilgilendir</strong> penceresinde ikinci sekmeye geçin: <strong>📊 Adres Mektup Birleştirme (E-posta İstemcim)</strong>. Konunuzu ve iletinizi (<code>{prenom}</code>, <code>{nom}</code>, <code>{matricule}</code>, <code>{note}</code>, <code>{max}</code>, <code>{lien}</code> gibi isteğe bağlı değişkenler kullanarak) özelleştirebilir ve 3 özel biçimde dışa aktarabilirsiniz: <strong>Word Veri Kaynağı <code>.docx</code></strong> (Microsoft Word + Outlook Adres Mektup Birleştirme için), <strong>Excel <code>.xlsx</code> çalışma kitabı</strong> (Microsoft 365 / Power Automate için <code>Publipostage</code> adlı resmî bir Excel Tablosu içerir) veya <strong>UTF-8 <code>.csv</code> dosyası</strong> (Thunderbird için).</p><p><strong>Gradaly'nin Adres Mektup Birleştirme dışa aktarımı neden bu kadar pratiktir?</strong> Çünkü bireysel sütunlara (<code>EMAIL</code>, <code>PRENOM</code>, <code>NOM</code>, <code>MATRICULE</code>, <code>NOTE</code>, <code>MAX</code>, <code>NOTE_SUR_MAX</code>, <code>LIEN_COPIE</code>) ek olarak dışa aktarılan dosya <strong>her öğrenci için önceden birleştirilmiş gönderime hazır sütunlar</strong> da içerir: <code>SUJET_PRET</code> (konu), <code>MESSAGE_TEXTE_PRET</code> (tam düz metin e-posta) ve <code>MESSAGE_HTML_PRET</code> (tam HTML e-posta). Adres mektup birleştirme aracınıza yalnızca bu tek alanı eklemeniz yeterlidir:</p><ul><li><strong>💼 Microsoft Word + Klasik Masaüstü Outlook (Windows ve Mac):</strong> Gradaly'de <strong>Word için Dışa Aktar (<code>.docx</code>)</strong> düğmesine tıklayın. Word'de <em>Postalar → Alıcıları Seç → Varolan Listeyi Kullan…</em> menüsünü açın ve dışa aktarılan <code>.docx</code> dosyasını seçin (macOS üzerindeki <code>.xlsx</code> dosyalarının aksine, yerel Word <code>.docx</code> tablosu eski Excel dönüştürücü güvenlik uyarısını veya yalıtım alanı hatalarını tetiklemeden anında açılır). <code>«MESSAGE_TEXTE_PRET»</code> birleştirme alanını ekleyin, ardından <em>Bitir ve Birleştir → E-posta İletileri Gönder…</em> (Kime: <code>EMAIL</code>) seçeneğine tıklayın.</li><li><strong>🌐 Power Automate aracılığıyla Outlook Web (tarayıcıda Microsoft 365):</strong> <strong>Excel olarak Dışa Aktar (<code>.xlsx</code>)</strong> düğmesine tıklayın ve dosyayı üniversite OneDrive alanınıza yükleyin. Microsoft Power Automate (<code>make.powerautomate.com</code>) içinde 2 adımlı anlık bir bulut akışı oluşturun: <em>Excel Online (Business) → Tablodaki satırları listele</em> (dosyanızı ve <code>Publipostage</code> tablosunu seçerek) ve ardından <code>Kime = EMAIL</code>, <code>Konu = SUJET_PRET</code> ve <code>Gövde = MESSAGE_HTML_PRET</code> ayarlarıyla <em>Office 365 Outlook → E-posta gönder (V2)</em>. Küçük gruplar veya bireysel yeniden gönderimler için <code>outlook.office.com</code> üzerinde önceden doldurulmuş bir ileti oluşturma sekmesi açmak üzere Gradaly'deki (veya Excel sayfasındaki) herhangi bir öğrenci satırında doğrudan <strong>Outlook Web</strong> düğmesine de tıklayabilirsiniz!</li><li><strong>🦅 Mozilla Thunderbird (Windows, macOS, Linux):</strong> Ücretsiz <em>Mail Merge</em> eklentisini kullanarak <em>Kime</em> alanına <code>{{EMAIL}}</code>, <em>Konu</em> alanına <code>{{SUJET_PRET}}</code> ve gövdeye <code>{{MESSAGE_TEXTE_PRET}}</code> yazarak yeni bir e-posta oluşturun, ardından dışa aktarılan <code>.csv</code> dosyasıyla <em>Mail Merge → CSV</em> işlemini başlatın.</li></ul>"
                },
                {
                    q: "Önerilerimi ve hata bildirimlerimi nereye iletebilirim?",
                    a: "<p>Tüm geri bildirimlerinizi, özellik fikirlerinizi ve hata bildirimlerinizi memnuniyetle karşılıyoruz! Doğrudan GitHub sorun takipçimiz üzerinden kayıt açabilirsiniz: <a href=\"https://github.com/gradaly/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/gradaly/gradaly-website/issues</a>.</p>"
                }
            ]
        },

        // =========================================================================
        // GUIDE 2: PRACTICE & SELF-ASSESSMENT QR MODE (P1 to P5) — 100% SELF-CONTAINED
        // =========================================================================
        {
            id: "practice-getting-started",
            guide: "practice",
            stepNumber: "P1",
            partHeader: "Kılavuz 2 — QR Alıştırma ve Öz Değerlendirme Modu (Öğrenci)",
            partColor: "teal",
            partBanner: {
                kicker: "Kılavuz 2 • Ürün 2: Biçimlendirici QR Alıştırma Modu",
                title: "Yazdırılabilir QR Çalışma Yaprakları Aracılığıyla Bağımsız Öğrenci Öz Değerlendirmesi İçin Kapsamlı Rehber",
                desc: "%100 kendi içinde bütünlüklü rehber: öğrencilerin kâğıt üzerinde çözüp akıllı telefonlarıyla okutarak anında biçimlendirici yapay zekâ geri bildirimi alabilmesi için gömülü QR kodlu PDF alıştırma yaprağı tasarlayın (portal.gradaly.io üzerinde API anahtarı gerekmez veya isteğe bağlı kişisel Gemini anahtarı kullanılabilir)."
            },
            tag: "QR Alıştırma Modu • Adım 1 — Kavram ve Proje Oluşturma",
            badge: "Biçimlendirici • Bağımsız Öğrenci Çalışması",
            shortTitle: "Kavram ve Alıştırma Projesi Oluşturma",
            title: "QR Alıştırma Modu Nasıl Çalışır ve Alıştırma Projesi Oluşturma",
            subtitle: "Tek bir kâğıt toplamadan veya öğretim elemanı API anahtarınızı paylaşmadan öğrencilerinize akıllı telefonda anında yapay zekâ geri bildirimiyle kâğıt üzerinde sınırsız alıştırma olanağı sunun.",
            paragraphs: [
                "<strong>QR Alıştırma Modunun Pedagojik Amacı (<code>Alıştırma</code> rozeti):</strong> Bir ara sınav veya dönem sonu sınavı öncesinde öğrencilerin problemleri kâğıt üzerinde el yazısıyla çözerek pratik yapmaları gerekir (uygulama dersleri, problem setleri, ödevler, geçmiş sınav soruları). Ancak öğretim elemanlarının her hafta yüzlerce alıştırma kâğıdını toplayıp değerlendirecek vakti nadiren olur. <strong>QR Alıştırma Modu, herhangi bir PDF alıştırma yaprağını etkileşimli bir öz değerlendirme rehberine dönüştürür:</strong><br>1. <strong>Öğretim Elemanı</strong> PDF alıştırma yaprağını hazırlar, değerlendirme ölçütlerini (ve isteğe bağlı Örnek Çözüm <code>Cevap Anahtarı</code> belgesini) tanımlar, PDF üzerine QR kodları yerleştirir ve şifreli statik bir web portalı yayımlar.<br>2. <strong>Öğrenci</strong> PDF çalışma yaprağını yazdırır (veya tablet/ekranda görüntüler), matematiksel türetmelerini veya açık uçlu yanıtını kâğıda yazar, <strong>sorunun QR kodunu akıllı telefonuyla okutur</strong>, el yazısı çalışmasının fotoğrafını çeker ve <strong>anında ölçüt bazlı biçimlendirici yapay zekâ geri bildirimi</strong> alır!",
                "<strong>Öğretim Elemanı API Anahtarı Açığa Çıkmaz — Yerleşik Gradaly Yapay Zekâ Rölesi veya İsteğe Bağlı Öğrenci Anahtarı:</strong> Öğretim elemanının toplanan kâğıtlar üzerinde yapay zekâ değerlendirmesi çalıştırdığı Sınav Modunun aksine, Alıştırma Modunda <strong>yayımlanan portalda öğrenci listesi, taranmış kâğıtlar ve öğretim elemanı API anahtarı bulunmaz</strong>. Proje <code>portal.gradaly.io</code> üzerinde yayımlandığında öğrenciler, yerleşik Gradaly yapay zekâ rölesi sayesinde (18 yaş altı öğrenciler dahil tüm öğrenciler için idealdir) <strong>hiçbir API anahtarı kurulumu yapmadan anında</strong> el yazısı yanıtlarını değerlendirebilir veya isteğe bağlı olarak telefon tarayıcılarına kendi kişisel Google AI Studio (Gemini) API anahtarlarını girebilirler.",
                "<strong>Sadeleştirilmiş 3 Sekmeli Arayüz:</strong> Karşılama Ekranında <strong>Yeni proje → Öğrenci Öz Değerlendirmesi (QR Kod)</strong> seçeneğine tıklayın (veya Fransızca ya da İngilizce eksiksiz bir Trigonometri çalışma yaprağını incelemek için <strong>Demo projesi oluştur → Demo Alıştırma</strong> seçeneğine tıklayın). Bir Alıştırma projesi sade bir <strong>3 sekmeli çalışma alanı</strong> açar: <code>1. Şablon ve Sorular</code>, <code>2. QR Kod Yerleşimi</code> ve <code>3. Web Yayımı</code>."
            ],
            screenshots: [
                {
                    filePrefix: "01_welcome",
                    caption: "Karşılama Ekranı: Alıştırma projeleri, Sınav projelerinizin yanında deniz mavisi 'Practice' rozetiyle tanımlanır"
                },
                {
                    filePrefix: "12_demo_types_modal",
                    caption: "Demo Oluşturma Penceresi: Test etmeye hazır bir QR alıştırma yaprağı açmak için 'Practice Project (QR Self-Assessment)' seçeneğini belirleyin"
                }
            ],
            callouts: [
                {
                    title: "Kâğıt + Akıllı Telefon İş Akışı",
                    desc: "Öğrenciler kâğıt üzerinde gerçek el yazısıyla matematiksel ifadeler, ispatlar ve diyagramlar yazmaya devam ederken akıllı telefon kamerasıyla anında yapay zekâ rehberliği alır."
                },
                {
                    title: "Toplanacak Kâğıt Yok, Öğrenci Listesi Yok",
                    desc: "Alıştırma projesinde öğrenci listesi veya kâğıtlar sekmesi bulunmaz — %100 bağımsız biçimlendirici çalışmaya ayrılmıştır."
                },
                {
                    title: "portal.gradaly.io Üzerinde Sıfır Anahtar Kurulumu",
                    desc: "Öğrenciler portal.gradaly.io üzerinde kutudan çıktığı haliyle anında yapay zekâ değerlendirmesi alır (veya isteğe bağlı olarak kendi kişisel Gemini API anahtarlarını girebilir)."
                },
                {
                    title: "Anında Yerleşik Alıştırma Demosu",
                    desc: "Eksiksiz 10 soruluk bir QR çalışma yaprağını ve Örnek Çözümü incelemek için Karşılama Ekranından yerleşik Alıştırma Demosunu başlatın."
                }
            ]
        },
        {
            id: "practice-canvas-and-rubric",
            guide: "practice",
            stepNumber: "P2",
            partColor: "teal",
            tag: "QR Alıştırma Modu • Adım 2 — Çalışma Yaprağı, Örnek Çözüm ve Ölçek",
            badge: "%100 Kendi İçinde Bütünlüklü Rehber",
            shortTitle: "Çalışma Yaprağı PDF'i, Çözüm ve Ölçütler",
            title: "Alıştırma PDF'inizi ve Örnek Çözümü İçe Aktarma ve Biçimlendirici Ölçütler Tasarlama",
            subtitle: "Boş PDF üzerindeki her alıştırmayı çerçeveleyin, Örnek Çözümünüzü (Cevap Anahtarı) yükleyin ve manuel olarak veya Yapay Zekâ Asistanıyla net öz değerlendirme ölçütleri oluşturun.",
            paragraphs: [
                "Alıştırma projenizin <strong>1. Şablon ve Sorular</strong> sekmesinde (üstteki sadeleştirilmiş 3 sekmeli başlığa ve herhangi bir Öğrenci Kimlik alanının bulunmadığına dikkat edin), bir öğrencinin akıllı telefon fotoğrafını değerlendirirken yapay zekâya rehberlik edecek alıştırmaları ve değerlendirme ölçütlerini tanımlarsınız:",
                "<strong>1. Boş Alıştırma PDF'ini (<code>Şablon</code>) İçe Aktarın ve Her Soruyu Çerçeveleyin:</strong> PDF çalışma yaprağınızı içe aktarın ve her alıştırmanın (<code>Q1</code>, <code>Q2</code>, ...) etrafına bir dikdörtgen çizin. <strong>Önemli:</strong> basılı alıştırma metnini mutlaka dikdörtgenin içine dahil edin! Alıştırma Modunda Gradaly, <strong>alıştırma metnini öğrencinin akıllı telefon ekranında göstermek</strong> ve yapay zekâya tam görsel bağlam sunmak için tam olarak bu dikdörtgeni kırpar.",
                "<strong>2. İsteğe Bağlı Örnek Çözüm PDF'ini (<code>Cevap Anahtarı</code>) İçe Aktarın:</strong> Adım adım çözümlü model yanıtlarınızı içeren PDF'i içe aktarmak için PDF görüntüleyicinin üst kısmındaki <strong>Soru Metni (Şablon) / Örnek Çözüm</strong> geçiş düğmesini kullanın. Çözüm PDF'iniz boş çalışma yaprağıyla aynı sayfa düzenine sahipse soru alanları otomatik olarak uygulanır; sayfa düzeni farklıysa <em>Örnek Çözüm</em> görünümüne geçip her soru için ilgili çözüm alanını çizin. Alıştırma Modunda Örnek Çözüm üç amaca hizmet eder:<br>• <strong>Yapay Zekâ Değerlendirme Ölçeği Asistanının</strong> doğru ölçütler üretmesine yardımcı olmak.<br>• Öğrencinin fotoğrafını değerlendirirken <strong>yapay zekâya referans matematiksel çözümü sunmak</strong>.<br>• Öğrenci en az bir el yazısı deneme gönderdikten sonra <strong>akıllı telefonunda görsel model çözümün kilidini açmak</strong>!",
                "<strong>3. Puanlama Kurallarını ve Ölçütleri Tanımlayın (Tamamen Eklemeli veya Tamamen Düşmeli):</strong><br>• Gradaly puanı <code>0</code> ile <code>Azami Puan</code> arasında sınırlandırarak <code>Puan = Taban Puan + Σ (onaylanan ölçütler)</code> formülüyle hesaplar.<br>• İster <strong>tamamen eklemeli bir değerlendirme ölçeği</strong> (<code>Taban Puan = 0</code>, her geçerli adım için pozitif ölçütler <code>+1</code>, <code>+2</code>) ister <strong>tamamen düşmeli bir değerlendirme ölçeği</strong> (<code>Taban Puan = Azami Puan</code>, negatif kesintiler <code>-0.5</code>, <code>-1</code>) seçin. Aynı soruda pozitif ve negatif ağırlıkları karıştırmaktan kaçının. Ayrıca ardışık seçenekleri karşılıklı dışlayıcı <strong><code>OR</code> grupları</strong> halinde bağlayabilir ve birleşik <strong>Render / Edit</strong> düğmesiyle KaTeX önizleme ile düzenleme arasında geçiş yapabilirsiniz.<br>• Pedagojik yönlendirmeleri belirtmek veya gerekirse soru metnini düz metin olarak yapıştırmak için alttaki alanı (<strong>Genel Yapay Zekâ Yönergeleri / İstem</strong>) kullanın.",
                "<strong>4. Yapay Zekâ Değerlendirme Ölçeği Asistanını Kullanın (<code>Yapay Zekâ ile Tasarla / Düzenle</code>):</strong> Alıştırma metni ve Örnek Çözümden yararlanarak biçimlendirici değerlendirme ölçeğinizi yapay zekânın otomatik olarak taslak haline getirmesi ve sohbet modunda iyileştirmesi için ölçüt listesinin üzerindeki <strong>Yapay Zekâ ile Tasarla / Düzenle</strong> düğmesine tıklayın."
            ],
            screenshots: [
                {
                    filePrefix: "13a_practice_questions",
                    caption: "Alıştırma Modu — 1. Şablon ve Sorular Sekmesi: Sadeleştirilmiş 3 sekmeli üst çubuk (Şablon ve Sorular | QR Kod Yerleşimi | Web Yayımı), soru alanları, biçimlendirici ölçütler ve Soru Metni / Örnek Çözüm geçişi"
                },
                {
                    filePrefix: "03_rubric_assistant",
                    caption: "Yapay Zekâ Değerlendirme Ölçeği Asistanı: Hem alıştırma metnini hem de Örnek Çözümünüzü kullanarak biçimlendirici ölçütleri ve yönergeleri birlikte tasarlayın"
                }
            ],
            callouts: [
                {
                    title: "Akıllı Telefonda Gösterilen Soru Metni Kesiti",
                    desc: "Şablon PDF üzerinde çizdiğiniz alan otomatik olarak kırpılır ve öğrencinin telefon ekranının üst kısmında görüntülenir."
                },
                {
                    title: "Örnek Çözüm (Cevap Anahtarı)",
                    desc: "Değerlendirme sırasında yapay zekâya rehberlik eder ve öğrencinin ilk el yazısı denemesinden sonra otomatik olarak açılabilir."
                },
                {
                    title: "Tamamen Eklemeli veya Düşmeli Ölçütler",
                    desc: "Net, adım adım ölçütler öğrencilerin çözümlerinin hangi bölümünün başarılı olduğunu veya yeniden gözden geçirilmesi gerektiğini tam olarak anlamalarını sağlar."
                },
                {
                    title: "Yapay Zekâ Değerlendirme Ölçeği Asistanı Dahil",
                    desc: "Alıştırma PDF'inizden ve örnek çözümünüzden saniyeler içinde eksiksiz bir biçimlendirici değerlendirme ölçeği oluşturun."
                }
            ]
        },
        {
            id: "practice-qr-placement",
            guide: "practice",
            stepNumber: "P3",
            partColor: "teal",
            tag: "QR Alıştırma Modu • Adım 3 — QR Kod Yerleşimi ve Yazdırılabilir PDF",
            badge: "Ücretsiz ve Pro Sürüme Dahil",
            shortTitle: "QR Yerleşimi ve Yazdırılabilir PDF",
            title: "PDF Üzerine QR Kodları Konumlandırma ve Yazdırılabilir Çalışma Yaprağını İndirme",
            subtitle: "PDF üzerindeki her alıştırma kutusunun içine Genel bir QR kodu (tüm yaprak) ve/veya Soru Bazlı QR kodları yerleştirin.",
            paragraphs: [
                "Öz değerlendirme QR kodlarının alıştırma yaprağınızın neresinde görüneceğini seçmek için <strong>2. QR Kod Yerleşimi</strong> sekmesini açın:",
                "<strong>1. Genel QR Kodu ve Soru Bazlı QR Kodları:</strong><br>• <strong>Genel QR Kodu (Tüm Çalışma Yaprağı):</strong> Varsayılan olarak 1. Sayfanın üst kısmına yerleştirilir. Okutulduğunda mobil portalı tüm alıştırmaların listesiyle açar.<br>• <strong>Soru Bazlı QR Kodları (<code>QR Q1</code>, <code>QR Q2</code>, ...):</strong> PDF üzerindeki her sorunun kutusunun içine doğrudan gömülür. Bir öğrenci telefon kamerasıyla <code>QR Q1</code> kodunu okuttuğunda akıllı telefonu <strong>doğrudan 1. Soru üzerinde</strong> (<code>?q=Q1</code>) yanıtının fotoğrafını çekmeye hazır şekilde açılır!",
                "<strong>2. Etkileşimli Sürükle-Bırak ve Tek Tıkla Köşe Hizalama:</strong> Herhangi bir sorunun sayfasına gitmek için soldaki listeden soruya tıklayın. Formülleri veya diyagramları kapatmaması için herhangi bir QR rozetini PDF sayfası üzerinde doğrudan farenizle sürükleyin ya da <code>Sağ Üst Köşe</code>, <code>Sol Üst Köşe</code> veya <code>Sağ Alt Köşe</code> düğmesine tıklayın. Göz simgesiyle tekil QR kodlarını açıp kapatın.",
                "<strong>3. Gömülü QR Kodlu Yazdırılabilir PDF'i İndirin:</strong> <strong>QR Kodlu Yazdırılabilir PDF Çalışma Yaprağını İndir</strong> düğmesine tıklayın. Gradaly, sınıfta yazdırmaya veya Moodle/Canvas'a yüklemeye hazır şekilde tüm etkin QR kodlarının tam konumlarına işlendiği net bir vektörel PDF üretir."
            ],
            screenshots: [
                {
                    filePrefix: "13_practice_qr",
                    caption: "Alıştırma Modu — 2. QR Kod Yerleşimi Sekmesi: Solda Genel ve Soru Bazlı QR listesi, köşeye hizalama düğmeleri ve 2. Sayfada etkileşimli sürükle-bırak yerleşimi (QR Q1 ve QR Q2)"
                }
            ],
            callouts: [
                {
                    title: "Soru Bazlı Doğrudan Bağlantı (?q=Q1)",
                    desc: "Bir sorunun QR kodunu okutmak, hiçbir gezinmeye gerek kalmadan öğrencinin akıllı telefonunda doğrudan ilgili alıştırmayı açar."
                },
                {
                    title: "Ölçek Güncellemelerinde Kalıcı QR Kodları",
                    desc: "Daha sonra değerlendirme ölçütlerinizi iyileştirip çevrimiçi yayımı güncelleseniz bile basılı QR kodları %100 geçerli kalır!"
                }
            ]
        },
        {
            id: "practice-publish-and-student",
            guide: "practice",
            stepNumber: "P4",
            partColor: "teal",
            tag: "QR Alıştırma Modu • Adım 4 — Web Sitesi Yayımı (Gradaly Pro) ve Öğrenci Uygulaması",
            badge: "Yayım İçin Gradaly Pro Gerekir",
            shortTitle: "Web Sitesi Yayımı (Pro) ve Öğrenci Uygulaması",
            title: "Öğrenci Alıştırma Web Sitesini Yayımlama (Gradaly Pro) ve Öğrenci Deneyimi",
            subtitle: "Ücretsiz sürüm projenizi oluşturmanıza ve QR kodlu PDF'inizi tasarlamanıza olanak tanırken, Gradaly Pro Öğrenci Alıştırma Web Sitesinin (çevrimiçi veya .zip) yayımlanmasını açar.",
            paragraphs: [
                "<strong>3. Web Yayımı</strong> sekmesinde mobil uygulamanın pedagojik davranışını yapılandırır ve Öğrenci Alıştırma Web Sitesini yayımlarsınız:",
                "<strong>1. Pedagojik Görünürlük Seçenekleri:</strong><br>• <strong>1. denemeden önce değerlendirme ölçütlerini göster:</strong> Öğrencilerin beklenen adımları baştan görmesine izin verin veya ilk fotoğraflarını gönderene kadar ölçütleri gizli tutun.<br>• <strong>Ayrıntılı yapay zekâ değerlendirme gerekçesini göster:</strong> Biçimlendirici geri bildirimin yanında ölçüt bazlı açıklamaları görüntüleyin.<br>• <strong>En az bir denemeden sonra Örnek Çözümü (<code>Cevap Anahtarı</code>) göster:</strong> Öğrenci ilk el yazısı denemesini gönderene kadar çözümlü model yanıtınızı kilitli tutun!",
                "<strong>2. Yerleşik Akıllı Telefon Simülatöründe Önizleyin:</strong> Mobil arayüzü Gradaly içinde önizlemek için üst şeridin sağ üst kısmındaki <strong>Öğrenci Web Uygulamasını Test Et (Simülatör)</strong> düğmesine tıklayın.",
                "<strong>3. Öğrenci Alıştırma Web Sitesini Çevrimiçi Yayımlayın veya Statik <code>.zip</code> Olarak Dışa Aktarın (Gradaly Pro):</strong> Ücretsiz sürüm Alıştırma projenizi oluşturmanıza ve QR kodlu PDF'inizi tasarlamanıza olanak tanırken, <strong>Gradaly Pro</strong> Öğrenci Alıştırma Web Sitesini yayımlama erişimi sunar: <strong>portal.gradaly.io üzerinde tek tıkla yayımla</strong> düğmesine tıklayın (istemci tarafında <strong>AES-256-GCM</strong> ile şifrelenir; <strong>60 gün</strong>, <strong>180 gün / 1 dönem</strong> veya <strong>365 gün / 1 akademik yıl</strong> saklama süresi seçilebilir) ya da kendi üniversite sunucunuzda barındırmak için <strong>Bağımsız statik web sitesi (.zip) olarak dışa aktar</strong> düğmesine tıklayın.",
                "<strong>4. Akıllı Telefonda Adım Adım Öğrenci Deneyimi:</strong><br>• Öğrenci kâğıt çalışma yaprağındaki QR kodu okutur.<br>• Uygulama <code>portal.gradaly.io</code> üzerinde barındırıldığında yapay zekâ değerlendirmesi (yerleşik Gradaly yapay zekâ rölesi aracılığıyla) <strong>hiçbir API anahtarı girmeden anında</strong> çalışır. İsteğe bağlı olarak — veya bağımsız bir <code>.zip</code> sunucusunda barındırıldığında — öğrenci kendi <strong>Google AI Studio (Gemini) API anahtarını</strong> (telefon tarayıcısında yerel olarak kaydedilir) yapıştırmak için <strong>Kişisel Anahtar</strong> düğmesine dokunabilir.<br>• Öğrenci <strong>Çalışmamın fotoğrafını çek</strong> düğmesine dokunur, kâğıt üzerindeki el yazısı çözümünün fotoğrafını çeker ve puanı, onaylanan ölçütleri, LaTeX matematiksel geri bildirimi ve kilidi açılan Örnek Çözümü almak için <strong>Yanıtımı yapay zekâ ile değerlendir</strong> düğmesine dokunur!",
                "<strong>5. Canlı Etkileşimli Örnek (Yazdırılabilir PDF Çalışma Yaprağı ve Öğrenci Portalı):</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">QR Kodlu Yazdırılabilir PDF Çalışma Yaprağını Gör (Demo EN)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Canlı Öğrenci Alıştırma Portalını Aç (Demo EN)</a>"
            ],
            screenshots: [
                {
                    filePrefix: "14_practice_publish",
                    caption: "Alıştırma Modu — 3. Web Yayımı Sekmesi: Pedagojik seçenekler, 1. denemeden sonra Örnek Çözüm kilidi açma, saklama süresi (60/180/365 gün) ve Gradaly Pro tek tıkla Bulut / ZIP yayımı"
                },
                {
                    filePrefix: "15_practice_student_portal",
                    caption: "Yerleşik Öğrenci Akıllı Telefon Simülatörü: Öğrencilerin kâğıt çalışmalarının fotoğrafını çekip anında biçimlendirici yapay zekâ geri bildirimi aldıkları mobil web uygulamasını önizleyin"
                }
            ],
            callouts: [
                {
                    title: "Yerleşik Akıllı Telefon Simülatörü (Ücretsiz)",
                    desc: "Yayımlamadan önce alıştırma yaprağınızı, ölçütlerinizi ve mobil öğrenci deneyimini Gradaly içinde ücretsiz olarak test edin."
                },
                {
                    title: "Tek Tıkla Bulut veya Statik ZIP (Gradaly Pro)",
                    desc: "İstemci taraflı AES-256-GCM şifrelemeyle portal.gradaly.io üzerinde (60/180/365 gün) yayımlayın veya bağımsız bir .zip dışa aktarın."
                },
                {
                    title: "Yerleşik Yapay Zekâ Rölesi veya Kişisel Anahtar",
                    desc: "portal.gradaly.io üzerinde öğrenciler API anahtarı kurulumu olmadan anında öz değerlendirme yapabilir veya isteğe bağlı ücretsiz Gemini anahtarlarını girebilir."
                },
                {
                    title: "Çabadan Sonra Açılan Örnek Çözüm",
                    desc: "Öğretim elemanının Örnek Çözümü gösterilmeden önce öğrencilerin kâğıt üzerindeki ilk denemelerinin fotoğrafını çekip göndermeleri gerekir."
                }
            ]
        },
        {
            id: "practice-faq",
            guide: "practice",
            isFaq: true,
            stepNumber: "FAQ",
            partColor: "teal",
            tag: "Sıkça Sorulan Sorular (SSS)",
            badge: "Şifreleme, Erişim, Yapay Zekâ Rölesi ve Gizlilik",
            shortTitle: "Sıkça Sorulan Sorular",
            title: "Sıkça Sorulan Sorular (SSS)",
            subtitle: "Alıştırma web sitesinin neden şifrelendiği, kimlerin erişebileceği, öğrenci fotoğraflarının ve API anahtarlarının nasıl işlendiği ve öğretim elemanının öğrenci kullanımını izleyip izlemediği hakkındaki yaygın soruların yanıtları.",
            paragraphs: [
                "Aşağıda Gradaly'nin QR Alıştırma ve Öz Değerlendirme Modu hakkında en sık sorulan soruların yanıtlarını bulabilirsiniz."
            ],
            faqs: [
                {
                    q: "Alıştırma web sitesi neden şifrelidir?",
                    a: "<p><strong>Öğretim elemanının fikrî mülkiyetini korumak için:</strong> Ne Gradaly ne de bir başkası yayımlanan içeriğe — yani öğretim elemanının alıştırma yaprağına (soru kâğıdı), çözümlü Örnek Çözümüne (<code>Cevap Anahtarı</code>) ya da değerlendirme ölçütleri ve yönergelerine — erişebilir. Tüm bu materyaller <strong>öğretim elemanının fikrî mülkiyetidir</strong>.</p><p><code>portal.gradaly.io</code> adresine tek bir bayt bile yüklenmeden önce Gradaly, tüm alıştırma paketini öğretim elemanının bilgisayarında yerel olarak <strong><code>AES-256-GCM</code></strong> ile şifreler. Şifre çözme anahtarı (<code>#k=...</code>) yalnızca web tarayıcılarının sunucuya asla iletmediği <code>#</code> simgesinden sonraki URL parçasının (ve QR kodlarının) içine gömülür. Sunucu yalnızca okunamaz şifreli ikili veri bloklarını barındırır.</p>"
                },
                {
                    q: "Alıştırma uygulamasına kimler erişebilir?",
                    a: "<p><strong>Yalnızca öğretim elemanının bağlantıyı veya QR kodlarını paylaşmaya karar verdiği kişiler</strong> uygulamaya erişebilir ve tarayıcılarında alıştırmaların şifresini çözebilir.</p><p>Böylece öğretim elemanı yazdırılabilir PDF çalışma yaprağını (veya bağlantıyı) alıştırmalar ya da çözümler internette herkese açık hale gelmeden <strong>öğrencileriyle tam bir gizlilik içinde</strong> (örneğin Moodle/Canvas gibi kapalı bir ders sayfasında veya sınıfta basılı olarak) paylaşabilir. Elbette erişim bağlantıya veya QR koduna sahip olmaya dayandığından, söz konusu bağlantı veya QR kodu dışarıda paylaşılırsa uygulama sınıf dışındaki kişilerce de erişilebilir hale gelir.</p>"
                },
                {
                    q: "Öğrencinin bir API anahtarına ihtiyacı var mıdır ve öğrencinin el yazısı çalışmasının fotoğrafına ne olur?",
                    a: "<p>Öğrencinin Alıştırma portalını nasıl kullandığına bağlı olarak her ikisi de <strong>%100 anonimlik ve sıfır görüntü depolama</strong> güvencesi sunan iki çalışma modu vardır:</p><p><strong>1. <code>portal.gradaly.io</code> Üzerinde Varsayılan Mod (Öğrenci API anahtarı gerekmez):</strong><ul><li>Alıştırma projesi <code>portal.gradaly.io</code> üzerinde yayımlandığında ve öğrenci kişisel bir API anahtarı girmediğinde değerlendirme işlemi <strong>güvenli Gradaly yapay zekâ rölesini</strong> kullanır (böylece 18 yaş altı öğrenciler dahil tüm öğrenciler hiçbir hesap oluşturmadan anında erişebilir).</li><li>Bu modda öğrencinin el yazısı yanıtının fotoğrafı (sorunun değerlendirme istemiyle birlikte) yalnızca Gemini Flash tarafından değerlendirilmek üzere <strong>Gradaly röle sunucusu üzerinden geçer</strong>.</li><li><strong>Kesin depolamama güvencesi:</strong> Görüntü <strong>asla diske veya buluta kaydedilmez</strong>, <strong>%100 anonim</strong> kalır ve yapay zekâ geri bildirimi öğrencinin telefonuna iletilir iletilmez <strong>sunucu belleğinden derhal silinir</strong>.</li></ul></p><p><strong>2. Kişisel API Anahtarı Modu (<code>portal.gradaly.io</code> üzerinde isteğe bağlı veya bağımsız <code>.zip</code> web sitesinde):</strong><ul><li>Öğrenci <em>Kişisel Anahtar</em> düğmesi aracılığıyla kendi Google Gemini API anahtarını girerse bu anahtar <strong>kesinlikle yerel olarak öğrencinin kendi cihazındaki tarayıcı <code>localStorage</code> alanında</strong> saklanır (asla hiçbir Gradaly sunucusuna gönderilmez ve öğretim elemanı tarafından asla görülmez).</li><li>Kişisel API anahtarı kullanıldığında öğrencinin tarayıcısı Gradaly sunucusundan hiç geçmeden <strong>şifreli HTTPS üzerinden doğrudan Google'ın resmî Gemini API uç noktasıyla</strong> iletişim kurar.</li></ul></p>"
                },
                {
                    q: "Öğretim elemanı bir öğrencinin uygulamayı kullanıp kullanmadığını bilir mi?",
                    a: "<p><strong>Hayır — QR Alıştırma Modu %100 anonim ve bağımsızdır.</strong> Öğrenci girişi, öğrenci listesi ve öğretim elemanına geri gönderilen herhangi bir izleme veya raporlama yoktur.</p><p>Öğretim elemanı hangi öğrencinin QR kodu okuttuğunu, bir öğrencinin kaç deneme yaptığını veya hangi puanı aldığını bilmez. Bu bilinçli tasarım, öğrencilerin sınav öncesinde kâğıt üzerinde özgürce pratik yapabileceği, hata yapabileceği ve anlayışlarını diledikleri kadar sınayabileceği <strong>güvenli, yargılamadan uzak biçimlendirici bir öğrenme ortamı</strong> yaratır.</p>"
                },
                {
                    q: "QR Alıştırma Modunda Ücretsiz (Pro olmayan) sürüm Gradaly Pro'ya kıyasla nelere izin verir?",
                    a: "<p><strong>Ücretsiz (Pro olmayan) sürüm:</strong> Alıştırma projenizi oluşturmanıza, alıştırma PDF'inizi ve Örnek Çözümünüzü içe aktarmanıza, biçimlendirici ölçütlerinizi (manuel olarak veya Yapay Zekâ Değerlendirme Ölçeği Asistanıyla) tasarlayıp kalibre etmenize, QR kodlarını konumlandırmanıza, <strong>gömülü QR kodlu yazdırılabilir PDF'i</strong> indirmenize ve tüm iş akışını yerleşik <strong>Akıllı Telefon Simülatörü</strong> içinde test etmenize olanak tanır.</p><p><strong>Gradaly Pro:</strong> <strong>Öğrenci Alıştırma Web Sitesinin yayımlanması</strong> kilidini açar — ister tek tıklamayla şifreli <code>portal.gradaly.io</code> bulutuna (60, 180 veya 365 gün boyunca) ister kendi üniversite sunucunuzda barındırmak üzere bağımsız statik bir <code>.zip</code> web sitesi olarak.</p>"
                },
                {
                    q: "PDF çalışma yaprağını yazdırdıktan veya dağıttıktan sonra değerlendirme ölçütlerimi düzenlersem ne olur?",
                    a: "<p><strong>Basılı QR kodlarınız %100 geçerli kalır!</strong> Her Alıştırma projesi kalıcı bir yayım tanımlayıcısını ve şifreleme anahtarını korur. Kâğıt çalışma yaprağını dağıttıktan sonra Gradaly'de bir yazım hatası fark eder veya bir ölçütü iyileştirirseniz <em>3. Web Yayımı</em> sekmesindeki <strong>portal.gradaly.io üzerindeki yayımı güncelle</strong> düğmesine tıklamanız yeterlidir: elindeki aynı basılı QR kodlarını okutan öğrenciler güncellenmiş değerlendirme ölçeğinden anında yararlanır.</p>"
                }
            ]
        }
    ]
};
