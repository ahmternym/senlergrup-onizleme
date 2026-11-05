/* Ortak içerik — yalnızca huseyinsen.com'da yer alan bilgilerden derlendi.
   Görseller ../img/ altında. Durum (satışta / teslim edildi) sitede yok; müşteriden teyit bekleniyor. */

const SIRKET = {
  ad: "Şenler Grup İnşaat",
  kisa: "Şenler Grup İnşaat",
  grup: "Şenler Grup",
  kurulus: 2008,
  adres: "Yaşamkent Mah. 3294. Cad. No: 5/A, Çankaya / Ankara",
  adresKisa: "Yaşamkent, Çankaya / Ankara",
  telefon: "0312 241 90 09",
  telefonHref: "tel:+903122419009",
  eposta: "senlergrupinsaat@gmail.com",
  instagram: [
    { ad: "@senlergrupinsaat", url: "https://www.instagram.com/senlergrupinsaat/" },
    { ad: "@rhgrandeofficial", url: "https://www.instagram.com/rhgrandeofficial/" }
  ],
  harita: "https://www.google.com/maps?q=Ya%C5%9Famkent+Mah.+3294.+Cad.+5%2FA+%C3%87ankaya+Ankara&output=embed"
};

const DANISMANLAR = [
  { ad: "Deniz", tel: "0532 412 44 00", href: "tel:+905324124400" },
  { ad: "Tuba", tel: "0535 440 77 30", href: "tel:+905354407730" }
];

const RAKAMLAR = [
  { v: "2008", l: "Kuruluş" },
  { v: "13", l: "Proje" },
  { v: "Ticari + Konut", l: "Grande Projeler" } // 5 Kasım 2026 müşteri isteği: "1.355 konut" yerine
];

const KATEGORILER = [
  { id: "tum", ad: "Tümü" },
  { id: "konut", ad: "Konut" },
  { id: "tatil", ad: "Tatil" },
  { id: "bahce", ad: "Bahçe" },
  { id: "yurtdisi", ad: "Yurt dışı" }
];

const PROJELER = [
  {
    id: "yasamkent", ad: "Grande Yaşamkent", konum: "Yaşamkent, Ankara", sehir: "Ankara",
    kat: "konut", katAd: "Konut", one: "1.355 konut",
    kapak: "yasamkent-g01", galeri: g("yasamkent", 22),
    ozet: "Şehrin değer kazanan noktasında, beş bloklu bir yaşam alanı. Ferah planlar, gün ışığı alan geniş balkonlar, sosyal donatılar ve ticari alanlar.",
    aciklama: [
      "Grande Yaşamkent, 20 dönümlük arazi üzerinde beş bloktan oluşuyor ve toplam 1.355 konut barındırıyor. Daireler 1+1 ve 2+1 tiplerinde.",
      "Sosyal donatıları ve ticari alanlarıyla günlük ihtiyaçların tamamı site içinde karşılanıyor. Konum hem merkeze yakın hem de sakin."
    ],
    kunye: [["Arazi","20 dönüm"],["Blok","5"],["Konut","1.355"],["1+1","45 m² brüt · 40 m² net"],["2+1","70 m² brüt · 62 m² net"],["Donatı","Sosyal ve ticari alanlar"]],
    planlar: [["yasamkent-1-1","1+1","45 m² brüt · 40 m² net"],["yasamkent-2-1","2+1","70 m² brüt · 62 m² net"]],
    videolar: ["yasamkent-1","yasamkent-2","yasamkent-3"]
  },
  {
    id: "ayvalik", ad: "Grande Ayvalık", konum: "Altınova, Ayvalık", sehir: "Balıkesir",
    kat: "tatil", katAd: "Rezidans", one: "Denize sıfır",
    kapak: "ayvalik-g01", galeri: g("ayvalik", 11),
    ozet: "Ayvalık Altınova'da, kendi beyaz kumlu plajıyla denize sıfır 1+1 ve 2+1 rezidanslar. On iki ay kullanım için tasarlandı.",
    aciklama: [
      "Grande Ayvalık, Ayvalık'ın gözde tatil bölgesinde denize sıfır konumda yer alıyor. Projenin kendine ait beyaz kumlu plajı var.",
      "1+1 ve 2+1 rezidanslar deniz manzaralı; ortak havuz ve açık otopark proje içinde. Daireler yalnızca yaz ayları için değil, yılın her döneminde kullanılacak şekilde planlandı.",
      "Ayvalık merkeze 10 km, Cunda Adası'na 20 km, Bergama'ya 35 km."
    ],
    kunye: [["Tip","1+1 · 2+1 rezidans"],["Konum","Denize sıfır"],["Plaj","Özel beyaz kumlu plaj"],["Donatı","Ortak havuz · açık otopark"],["Ayvalık merkez","10 km"],["Kullanım","12 ay"]],
    planlar: [],
    videolar: []
  },
  {
    id: "lokasyon", ad: "Grande Lokasyon", konum: "Temelli, Ankara", sehir: "Ankara",
    kat: "konut", katAd: "Konut", one: "309 daire · 13 dükkân",
    kapak: "lokasyon-g01", galeri: g("lokasyon", 14),
    ozet: "Temelli'de Eskişehir Yolu'na cepheli, Kuğu Gölü ve TSE'ye komşu. Üç blokta 1+1, 2+1 ve 3+1 daireler ile cadde dükkânları.",
    aciklama: [
      "Grande Lokasyon, Temelli'de Eskişehir Yolu'na cepheli konumda. A, B ve C bloklarda 155 adet 1+1, 126 adet 2+1 ve 28 adet 3+1 daire bulunuyor.",
      "Cadde üzerinde 13 dükkân, geniş park, peyzaj ve otopark alanları projenin parçası. Çocuk oyun alanları, yürüyüş yolları, 7/24 güvenlik ve kamera sistemi var.",
      "Temelli Göleti'ne 2 dakika, Kuğu Gölü'ne 5 dakika, Çankaya Üniversitesi'ne 18 dakika, Polatlı'ya 20 dakika."
    ],
    kunye: [["Blok","A · B · C"],["1+1","155 daire · 45 m² brüt"],["2+1","126 daire · 70 m² brüt"],["3+1","28 daire · 100 m² brüt"],["Ticari","13 cadde dükkânı"],["Güvenlik","7/24 · kamera"]],
    planlar: [["lokasyon-1-1","1+1","45 m² brüt · 40 m² net"],["lokasyon-2-1","2+1","70 m² brüt · 62 m² net"],["lokasyon-3-1","3+1","100 m² brüt · 85 m² net"]],
    videolar: ["lokasyon-1"]
  },
  {
    id: "protokol", ad: "Grande Protokol", konum: "Pursaklar, Ankara", sehir: "Ankara",
    kat: "konut", katAd: "Konut", one: "Havalimanına 10 dk",
    kapak: "protokol-g01", galeri: g("protokol", 20),
    ozet: "Pursaklar'da protokol yoluna cepheli, Endemik Vadi ile Endemik Park arasında. 1+1 daireler ve 2+1 loft daireler.",
    aciklama: [
      "Grande Protokol, Ankara'nın değer kazanan bölgesinde, Pursaklar'da protokol yoluna cepheli konumda. Endemik Vadi ile Endemik Park'ın ortasında yer alıyor.",
      "50 m² teraslı ve terassız 1+1 daireler ile 100 m² 2+1 loft dairelerden oluşuyor. Çocuk oyun alanı, yeşil alan, otopark ve güvenlik site içinde.",
      "Esenboğa Havalimanı'na 10 dakika; şehrin ana arterlerine yakın."
    ],
    kunye: [["1+1","50 m² · teraslı / terassız"],["2+1 loft","100 m²"],["Havalimanı","10 dk"],["Donatı","Oyun alanı · yeşil alan · otopark"],["Çevre","Endemik Vadi · Endemik Park"]],
    planlar: [["protokol-1-1-tip1","1+1","Tip 1"],["protokol-1-1-tip2","1+1","Tip 2"]],
    videolar: ["protokol-1","protokol-2"]
  },
  {
    id: "goksu", ad: "Grande Göksu", konum: "Susuz, Yenimahalle / Ankara", sehir: "Ankara",
    kat: "konut", katAd: "Konut", one: "60 daire · 1+1",
    kapak: "goksu-g01", galeri: g("goksu", 5),
    ozet: "İstanbul Yolu üzerinde, Göksu Parkı'na üç dakika. Ankara'nın batıya büyüme aksında 1+1 daireler.",
    aciklama: [
      "Grande Göksu, Susuz Mahallesi'nde İstanbul Yolu üzerinde yer alıyor. Zemin + 9 katlı yapıda 45–50 m² 1+1 toplam 60 daire var.",
      "Yatırımcılara önce arsa payı tapusu, ardından kat irtifakı tapusu veriliyor. Daire teslimleri 20–24 ay içinde yapılacak.",
      "Göksu Parkı'na 3 dakika, metroya 5 km, Kaşmir AVM'ye 4 km, Çakırlar'a 5 km, Metromall AVM'ye 7 km. Proje, ortak şirketimiz RH Grande İnşaat ile birlikte geliştirildi."
    ],
    kunye: [["Kat","Zemin + 9"],["Daire","60"],["Tip","1+1 · 45–50 m²"],["Tapu","Arsa payı, ardından kat irtifakı"],["Teslim","20–24 ay"],["Metro","5 km"]],
    planlar: [["goksu-1-1","1+1",""]],
    videolar: ["goksu-1"]
  },
  {
    id: "empire", ad: "Empire Şaşmaz", konum: "Şaşmaz, Yenimahalle / Ankara", sehir: "Ankara",
    kat: "konut", katAd: "Konut & Ticari", one: "206 konut · 114 mağaza",
    kapak: "empire-kapak", galeri: g("empire", 10), // kapak: g04 dikey kırpım, 3:4 kart için
    ozet: "İstanbul Yolu'na 200 metre, Şaşmaz Kavşağı'na yakın; konut ve ticari alanları bir araya getiren iki bloklu proje.",
    aciklama: [
      "Empire Şaşmaz, Yenimahalle Ergazi'de 42988 ada 1 parsel üzerinde iki bloktan oluşuyor: 166 adet 1+1 ve 40 adet 2+1 olmak üzere 206 konut, 114 mağaza ve 2 satış ofisi.",
      "A Blok 2 bodrum + zemin + 6, B Blok 2 bodrum + zemin + 4 kat. Toplam emsal alanı 17.280 m². Mimari tasarım Doğan Gökhan Yalçın'a ait.",
      "Proje Ottoman ve Otoplus projelerinin hemen yanında; Batıkent ve Şaşmaz bölgelerine ve Ankara'nın ana ulaşım akslarına kolay ulaşım sağlıyor."
    ],
    kunye: [["Parsel","42988 ada 1 parsel"],["Blok","A: 2B+Z+6 · B: 2B+Z+4"],["Konut","166 × 1+1 · 40 × 2+1"],["Mağaza","114"],["Emsal alanı","17.280 m²"],["İstanbul Yolu","200 m"]],
    planlar: [["empire-1-1","1+1","Salon + mutfak 21,20 m² · Yatak odası 10,09 m²"],["empire-2-1","2+1","Salon + mutfak 21,03 m² · Yatak odası 13,03 m² · Çocuk odası 10,16 m²"]],
    videolar: ["empire-1"]
  },
  {
    id: "vipport", ad: "VIP Port", konum: "Akyurt, Ankara", sehir: "Ankara",
    kat: "konut", katAd: "Konut", one: "270 daire · Havalimanına 2 dk",
    kapak: "vipport-kapak", galeri: g("vipport", 13), // kapak: g01'in sol kulesi, 3:4 kart için
    ozet: "Esenboğa Havalimanı'na iki dakika, protokol yolu üzerinde iki yüksek blok. Kiracı talebi güçlü bir bölgede 50 m² daireler.",
    aciklama: [
      "VIP Port, Akyurt'ta protokol yolu üzerinde, iki yüksek bloktan oluşuyor ve 10.000 m² alana yayılıyor. Her biri 50 m² olan toplam 270 daire bulunuyor.",
      "Çocuk oyun alanları, kamelyalar, park ve otopark proje içinde. Havalimanına yakınlık kiracı talebini artırıyor; yatırımcı için kira getirisi potansiyeli yüksek.",
      "Esenboğa Havalimanı 2 dk, Yıldırım Beyazıt Üniversitesi 6 dk, Otonomi 4 dk, Pursaklar Devlet Hastanesi 9 dk, Ulus 13 dk, Kızılay 16 dk."
    ],
    kunye: [["Alan","10.000 m²"],["Blok","2"],["Daire","270 × 50 m²"],["Havalimanı","2 dk"],["Üniversite","6 dk"]]
  },
  {
    id: "bativizyon", ad: "Batı Vizyon AVM & Deluxe Residence", konum: "Eskişehir Yolu, Ankara", sehir: "Ankara",
    kat: "konut", katAd: "Konut & Ticari", one: "550 daire · 16 ticari alan",
    kapak: "bativizyon-1", galeri: ["bativizyon-1","bativizyon-2","bativizyon-3","bativizyon-4","bativizyon-5","bativizyon-6","bativizyon-7","bativizyon-8","bativizyon-9"],
    ozet: "Eskişehir Yolu üzerinde konut ve ticari alanları bir arada sunan karma proje. 1+1 ve 2+1 daireler.",
    aciklama: [
      "Batı Vizyon, Eskişehir Yolu üzerinde ticari alanlar ve konutlardan oluşan bir karma proje. 550 daire ve 16 ticari alan içeriyor.",
      "Konutlar 50 m² 1+1 ve 80 m² 2+1 tiplerinden oluşuyor. Yaşamkent'e 25 km mesafede."
    ],
    kunye: [["Daire","550"],["Ticari","16 alan"],["1+1","50 m²"],["2+1","80 m²"],["Konum","Eskişehir Yolu"]]
  },
  {
    id: "anka", ad: "Anka Konakları", konum: "Mormenekşe, Kuzey Kıbrıs", sehir: "KKTC",
    kat: "yurtdisi", katAd: "Yurt dışı", one: "2+1 · 100 m² · Hemen tapu",
    kapak: "anka-1", galeri: ["anka-1","anka-2","anka-3","anka-4","anka-5","anka-6","anka-7","anka-8","anka-9"],
    ozet: "Boğaziçi Mormenekşe'de, denize 3 km mesafede 2+1 daireler. Havuz ve sosyal tesis; hemen tapu imkânı.",
    aciklama: [
      "Anka Konakları, Kuzey Kıbrıs'ta Boğaziçi Mormenekşe bölgesinde 100 m² 2+1 dairelerden oluşuyor. Tapu hemen teslim ediliyor.",
      "Denize 3 km mesafede; havuz ve sosyal tesis alanları var. Kira getirisi ve uzun vadeli değer artışı için planlandı."
    ],
    kunye: [["Tip","2+1 · 100 m²"],["Tapu","Hemen teslim"],["Deniz","3 km"],["Donatı","Havuz · sosyal tesis"]]
  },
  {
    id: "sardunya", ad: "Sardunya Kıbrıs", konum: "Lapta, Kuzey Kıbrıs", sehir: "KKTC",
    kat: "yurtdisi", katAd: "Yurt dışı", one: "Havuzlu villalar",
    kapak: "sardunya-g01", galeri: g("sardunya", 9),
    ozet: "Lapta'da, 3.297 m² arsa üzerinde deniz manzaralı, özel havuzlu villalar.",
    aciklama: [
      "Sardunya Kıbrıs, Kuzey Kıbrıs'ın Lapta bölgesinde 3.297 m²'lik bir arsa üzerinde planlanıyor. Villalar özel havuzlu ve çatı terasları deniz manzarasına açılıyor."
    ],
    kunye: [["Arsa","3.297 m²"],["Konum","Lapta, Kuzey Kıbrıs"],["Tip","Özel havuzlu villa"]],
    planlar: [],
    videolar: ["sardunya-1","sardunya-2"]
  },
  {
    id: "yk-doga", ad: "Yaşamköy Dostlar Doğa", konum: "Temelli / Alagöz, Ankara", sehir: "Ankara",
    kat: "bahce", katAd: "Tapulu bahçe", one: "100 bahçe · 300 m²",
    kapak: "yk-doga-1", galeri: ["yk-doga-1","yk-doga-2","yk-doga-3","yk-doga-4","yk-doga-5","yk-doga-6","yk-doga-7"],
    ozet: "Eskişehir Yolu'na 200 m mesafede 100 adet 300 m² tapulu bahçe. Altyapı hazır, 7/24 güvenlik. Tarım arazisi ya da kooperatif değil.",
    aciklama: [
      "Yaşamköy Dostlar Doğa, Temelli Alagöz Mahallesi'nde 100 adet 300 m² tapulu bahçeden oluşuyor. Eskişehir Yolu'na 200 m, Yaşamkent'e 17 km.",
      "Elektrik, su ve altyapı bağlantıları hazır. Parsel ve site çevresi çitle çevrili; sokak aydınlatması, otomatik nizamiye ve 7/24 güvenlik var. İsteğe bağlı tek tip ev yaptırılabiliyor."
    ],
    kunye: [["Bahçe","100 adet"],["Parsel","300 m² tapulu"],["Eskişehir Yolu","200 m"],["Yaşamkent","17 km"],["Altyapı","Elektrik · su · yol"]]
  },
  {
    id: "yk-site", ad: "Yaşamköy Dostlar Sitesi", konum: "Ankara", sehir: "Ankara",
    kat: "bahce", katAd: "Bahçeli ev", one: "118 bahçe · 2+1 çelik ev",
    kapak: "yk-site-1", galeri: ["yk-site-1","yk-site-2","yk-site-4","yk-site-5","yk-site-6","yk-site-7","yk-site-8","yk-site-9","yk-site-3"],
    ozet: "400 m² tapulu bahçe içinde 81 m² 2+1 çelik ev. 118 bahçe ve 1.000 m² sosyal tesis.",
    aciklama: [
      "Yaşamköy Dostlar Sitesi'nde 400 m² tapulu bahçelerin her birinde 81 m² 2+1 çelik ev yer alıyor. Toplam 118 bahçe var.",
      "1.000 m² sosyal tesis alanı siteye ait. Tarım arazisi ya da kooperatif değil."
    ],
    kunye: [["Bahçe","118 adet · 400 m²"],["Ev","81 m² · 2+1 çelik"],["Sosyal tesis","1.000 m²"]]
  },
  {
    id: "yk-garden", ad: "Yaşamköy Garden", konum: "Ankara", sehir: "Ankara",
    kat: "bahce", katAd: "Bahçeli ev", one: "49 bahçe · 1+1 ev",
    kapak: "yk-garden-1", galeri: ["yk-garden-1","yk-garden-2","yk-garden-3","yk-garden-4","yk-garden-5","yk-garden-6","yk-garden-7","yk-garden-8","yk-garden-9"],
    ozet: "300 m² bahçe içinde 53 m² 1+1 ev. 49 bahçe ve 210 m² sosyal tesis.",
    aciklama: [
      "Yaşamköy Garden, 300 m² bahçelerin her birinde 53 m² 1+1 evden oluşuyor. Toplam 49 bahçe var.",
      "210 m² sosyal tesis alanı siteye ait."
    ],
    kunye: [["Bahçe","49 adet · 300 m²"],["Ev","53 m² · 1+1"],["Sosyal tesis","210 m²"]]
  }
];

/* Siteye girenin aşağı kaydırınca gördüğü bilgi penceresi: "Projelerimiz hakkında bilgi almak
   ister misiniz?" + proje seçimi. id: görseli görünen, listede başta ve seçili gelen proje.
   sona: listede en sona alınanlar (Göksu'da daire kalmadı — müşteri isteği, 5 Kasım 2026). */
const YENI_PROJE = { id: "lokasyon", sona: ["goksu"] };

const VIDEOLAR = [
  { id: "yasamkent-1", ad: "Grande Yaşamkent", alt: "Proje tanıtımı" },
  { id: "yasamkent-2", ad: "Grande Yaşamkent", alt: "1+1 ve 2+1 daireler" },
  { id: "yasamkent-3", ad: "Grande Yaşamkent", alt: "Konum" },
  { id: "lokasyon-1", ad: "Grande Lokasyon", alt: "Konum" },
  { id: "protokol-1", ad: "Grande Protokol", alt: "Şantiye" },
  { id: "protokol-2", ad: "Grande Protokol", alt: "Konum" },
  { id: "goksu-1", ad: "Grande Göksu", alt: "Konum" },
  { id: "empire-1", ad: "Empire Şaşmaz", alt: "Proje tanıtımı" },
  { id: "sardunya-1", ad: "Sardunya Kıbrıs", alt: "Arsa" },
  { id: "sardunya-2", ad: "Sardunya Kıbrıs", alt: "Arsa" }
];

const GRUP = [
  { ad: "Şenler Grup İnşaat", rol: "Geliştirici", metin: "Konut, ticari ve karma projelerin geliştirilmesi ve satışı. Ankara merkezli; Ayvalık ve Kuzey Kıbrıs'ta projeleri var." },
  { ad: "RH Grande İnşaat", rol: "Ortak şirket", metin: "Grup bünyesindeki ortak şirket. Grande Göksu birlikte geliştirildi." },
  { ad: "Gayrimenkul danışmanlığı", rol: "Hizmet", metin: "Yatırımcılara gayrimenkul danışmanlığı hizmeti." }
];

function projeBul(id) { return PROJELER.find(p => p.id === id); }
function img(name) { return "../img/p/" + name + ".jpg"; }
function g(slug, n) { return Array.from({ length: n }, (_, i) => slug + "-g" + String(i + 1).padStart(2, "0")); }
function video(id) { return { dosya: "../video/" + id + ".mp4", kapak: "../img/v/" + id + ".jpg" }; }
