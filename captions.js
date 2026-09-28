/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 9, tr: "Evde Wi-Fi, kulaklıkta Bluetooth, yolda mobil veri", en: "Wi-Fi at home, Bluetooth in headphones, mobile data on the go",
      note: "Evde internete Wi-Fi ile bağlanırız, kablosuz kulaklığımızı Bluetooth ile bağlarız, yolda ise mobil veri kullanırız." },
    { scene: 1, start: 9.8, end: 15.7, tr: "Cihazlar ağa kaç farklı yolla bağlanır?", en: "In how many ways do devices join a network?",
      note: "Sen internete nasıl bağlanıyorsun: kabloyla mı, kablosuz mu? Hadi bağlanma yollarını tanıyalım." },
    { scene: 2, start: 18.5, end: 24.2, tr: "Kablolu bağlantı: veri kablodan geçer", en: "Wired: data travels through a cable",
      note: "Kablolu bağlantıda veri bir kablodan geçer. Ethernet kablosu ve ışıkla çalışan fiber optik kablo buna örnektir." },
    { scene: 2, start: 25, end: 30.7, tr: "Kablosuz: Wi-Fi ve Bluetooth", en: "Wireless: Wi-Fi and Bluetooth",
      note: "Kablosuz bağlantıda veri havadan, dalgalarla gider. Wi-Fi ile internete, Bluetooth ile yakındaki bir cihaza bağlanırız." },
    { scene: 2, start: 31.5, end: 37.1, tr: "Mobil veri ve uydu da kablosuzdur", en: "Mobile data and satellite are wireless too",
      note: "Telefonumuzdaki mobil veri baz istasyonları ile çalışır. Uydu bağlantısı ise dağlara, denizlere bile internet götürür." },
    { scene: 3, start: 40, end: 46.6, tr: "Kablolu bağlantı hızlı ve kararlıdır", en: "A wired link is fast and steady",
      note: "Kablolu bağlantı genellikle daha hızlı ve kesintisizdir. Ama kablonun uzandığı yerde kalmamız gerekir." },
    { scene: 3, start: 47.5, end: 54, tr: "Kablosuzda duvar ve uzaklık sinyali zayıflatır", en: "Walls and distance weaken a wireless signal",
      note: "Kablosuz bağlantıda evin içinde dolaşabiliriz. Ama duvarlar ve uzaklık sinyali zayıflatabilir." },
    { scene: 4, start: 56.9, end: 62.5, tr: "Hangi cihaz hangi yolla bağlanır?", en: "Which device connects in which way?",
      note: "Şimdi günlük hayattaki cihazları kullandıkları bağlantı teknolojisiyle eşleştirelim." },
    { scene: 4, start: 63.4, end: 69, tr: "Evde Wi-Fi, kulaklıkta Bluetooth", en: "Wi-Fi at home, Bluetooth for headphones",
      note: "Evde dizüstü bilgisayarla Wi-Fi üzerinden internete bağlanırız. Kablosuz kulaklık ise telefona Bluetooth ile bağlanır." },
    { scene: 4, start: 69.8, end: 75.8, tr: "Yolda mobil veri, saatte yine Bluetooth", en: "Mobile data on the road, Bluetooth for a watch",
      note: "Yolda harita açarken mobil veri kullanırız. Akıllı saat de telefona Bluetooth ile bağlanır." },
    { scene: 4, start: 76.5, end: 82.6, tr: "Laboratuvarda kablo, akıllı ampulde Wi-Fi", en: "Cables in the lab, Wi-Fi for a smart bulb",
      note: "Okul laboratuvarındaki masaüstü bilgisayarlar kabloyla bağlıdır. Akıllı ampul ise evdeki Wi-Fi ağına bağlanır." },
    { scene: 5, start: 85.4, end: 93.1, tr: "Anahtar: aynı ağdaki cihazları birbirine bağlar", en: "Switch: links devices in the same network",
      note: "Okulun bilişim sınıfında bilgisayarlar kabloyla anahtara, yani switch'e bağlıdır. Anahtar aynı ağdaki cihazları birbirine bağlar." },
    { scene: 5, start: 93.9, end: 101.2, tr: "Yönlendirici: veriyi doğru yere yönlendirir", en: "Router: sends data the right way",
      note: "Yönlendirici veriyi doğru cihaza ya da internete yönlendirir. Kablosuz cihazlar da ona Wi-Fi ile bağlanır." },
    { scene: 5, start: 102, end: 108.8, tr: "Modem: ağı internete bağlar", en: "Modem: connects the network to the internet",
      note: "Modem, okulun ağını internet servis sağlayıcısına, yani internete bağlar." },
    { scene: 6, start: 111.5, end: 117.3, tr: "Aklında kalsın: iş için doğru bağlantı", en: "Remember: the right connection for the job",
      note: "Aklında kalsın: sabit cihaza kablo, taşınan cihaza kablosuz bağlantı çoğu zaman daha uygundur." },
    { scene: 6, start: 118.1, end: 123.8, tr: "Her ağ cihazının bir görevi var!", en: "Every network device has a job!",
      note: "Anahtar bağlar, yönlendirici yönlendirir, modem internete çıkarır." },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
