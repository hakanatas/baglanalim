/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "baglanalim",
    "title": "Bağlanalım!",
    "titleEn": "Let's Connect!",
    "grade": 5,
    "theme": "Bilgisayar Ağları ve İletişim",
    "code": "BTY.5.3.2",
    "outcome": "Bilgisayar ağları ve bağlanma yöntemlerini sınıflandırabilme",
    "outcomeEn": "Classifying computer networks and connection methods",
    "duration": 125.2,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 17,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 17,
      "t1": 38.5,
      "name": "Bağlanma yöntemleri",
      "en": "Ways to connect",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 38.5,
      "t1": 55.4,
      "name": "Kablolu mu, kablosuz mu?",
      "en": "Wired or wireless?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 55.4,
      "t1": 84,
      "name": "Hangi teknoloji?",
      "en": "Which technology?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 84,
      "t1": 110.1,
      "name": "Kim ne iş yapar?",
      "en": "Who does what?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 110.1,
      "t1": 125.2,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
