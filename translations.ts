
export type Language = 'ar' | 'de' | 'en';

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta1: string;
    cta2: string;
  };
  trust: {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
  };
  why: {
    title: string;
    text: string;
  };
  pricing: {
    title: string;
    plan1: {
      name: string;
      tagline: string;
      features: string[];
      cta: string;
    };
    plan2: {
      name: string;
      tagline: string;
      features: string[];
      cta: string;
    };
    plan3: {
      name: string;
      tagline: string;
      features: string[];
      cta: string;
    };
  };
  showcase: {
    sports: string;
    movies: string;
    kids: string;
    anime: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    rights: string;
    support: string;
  };
}

export const translations: Record<Language, Content> = {
  ar: {
    hero: {
      title: "Alaatvshow",
      subtitle: "عالم الترفيه الكامل بين يديك",
      description: "استمتع بأقوى مكتبة أفلام ومسلسلات، قنوات رياضية عالمية، محتوى أطفال آمن، وجودة بث فائقة تعمل بدون تقطيع وعلى جميع الأجهزة.",
      cta1: "اطلب تجربتك الآن",
      cta2: "اشترك عبر واتساب"
    },
    trust: {
      item1: "أكثر من 10,000 قناة",
      item2: "آلاف الأفلام والمسلسلات",
      item3: "بث مستقر بدون تقطيع",
      item4: "يعمل على جميع الأجهزة الذكية",
      item5: "دعم فني سريع 24/7"
    },
    why: {
      title: "لماذا Alaatvshow؟",
      text: "مع Alaatvshow لن تحتاج أكثر من اشتراك واحد. كل ما تحبه من رياضة، أفلام، مسلسلات وأنمي في مكان واحد، بجودة عالية وسعر مناسب."
    },
    pricing: {
      title: "اختر باقتك المفضلة",
      plan1: {
        name: "الاشتراك الأساسي",
        tagline: "الأفضل للبداية",
        features: ["جودة HD", "أفلام ومسلسلات مميزة", "قنوات رياضية أساسية", "قنوات أطفال"],
        cta: "اطلب تجربتك الآن"
      },
      plan2: {
        name: "الاشتراك المتقدم",
        tagline: "الأكثر طلبًا ⭐",
        features: ["جودة Full HD", "مكتبة أكبر من المحتوى", "قنوات رياضية إضافية", "ترفيه وأطفال أكثر", "ثبات أعلى للخدمة"],
        cta: "اشترك الآن عبر واتساب"
      },
      plan3: {
        name: "الاشتراك المميز",
        tagline: "تجربة بلا حدود",
        features: ["جودة 4K Ultra HD", "أقوى محتوى عالمي", "قنوات رياضية عالمية", "باقة كاملة للأطفال", "أفضل أداء تقني"],
        cta: "احصل على أقوى تجربة الآن"
      }
    },
    showcase: {
      sports: "رياضة مباشرة",
      movies: "أفلام ومسلسلات",
      kids: "محتوى أطفال",
      anime: "أنمي وترفيه"
    },
    finalCta: {
      title: "جاهز تبدأ تجربة ترفيه حقيقية؟",
      subtitle: "جرّب الخدمة الآن وشاهد الفرق بنفسك",
      button: "اطلب تجربتك الآن عبر واتساب"
    },
    footer: {
      rights: "جميع الحقوق محفوظة © 2025 Alaatvshow",
      support: "دعم متاح بالعربية / الألمانية / الإنجليزية"
    }
  },
  de: {
    hero: {
      title: "Alaatvshow",
      subtitle: "Die ganze Welt des Entertainments in Ihren Händen",
      description: "Genießen Sie die größte Bibliothek an Filmen und Serien, internationale Sportkanäle, sichere Kinderinhalte und Ultra-Streaming-Qualität ohne Pufferung auf allen Geräten.",
      cta1: "Jetzt Test anfordern",
      cta2: "Per WhatsApp abonnieren"
    },
    trust: {
      item1: "Über 10.000 Kanäle",
      item2: "Tausende Filme & Serien",
      item3: "Stabiles Streaming ohne Ruckler",
      item4: "Läuft auf allen Smart-Geräten",
      item5: "Schneller Support rund um die Uhr"
    },
    why: {
      title: "Warum Alaatvshow?",
      text: "Mit Alaatvshow brauchen Sie nur ein Abonnement. Alles, was Sie an Sport, Filmen, Serien und Anime lieben, an einem Ort, in hoher Qualität und zum fairen Preis."
    },
    pricing: {
      title: "Wählen Sie Ihr Paket",
      plan1: {
        name: "Basis Abo",
        tagline: "Bestens für Einsteiger",
        features: ["HD Qualität", "Premium Filme & Serien", "Basis Sportkanäle", "Kinderkanäle"],
        cta: "Jetzt Test anfordern"
      },
      plan2: {
        name: "Advanced Abo",
        tagline: "Meistgekauft ⭐",
        features: ["Full HD Qualität", "Größere Bibliothek", "Zusätzliche Sportkanäle", "Mehr Kids & Entertainment", "Höhere Stabilität"],
        cta: "Über WhatsApp bestellen"
      },
      plan3: {
        name: "Premium Abo",
        tagline: "Grenzenloses Erlebnis",
        features: ["4K Ultra HD Qualität", "Maximaler Content", "Globale Sportkanäle", "Komplettes Kids-Paket", "Beste Performance"],
        cta: "Hol dir das volle Erlebnis"
      }
    },
    showcase: {
      sports: "Live Sport",
      movies: "Filme & Serien",
      kids: "Kinderinhalte",
      anime: "Anime & Unterhaltung"
    },
    finalCta: {
      title: "Bereit für echtes Entertainment?",
      subtitle: "Testen Sie den Service jetzt und sehen Sie den Unterschied",
      button: "Jetzt per WhatsApp anfragen"
    },
    footer: {
      rights: "Alle Rechte vorbehalten © 2025 Alaatvshow",
      support: "Support auf Arabisch / Deutsch / Englisch"
    }
  },
  en: {
    hero: {
      title: "Alaatvshow",
      subtitle: "The Complete World of Entertainment in Your Hands",
      description: "Enjoy the strongest library of movies and series, global sports channels, safe kids' content, and ultra-high streaming quality on all devices without buffering.",
      cta1: "Request Your Trial Now",
      cta2: "Subscribe via WhatsApp"
    },
    trust: {
      item1: "Over 10,000 Channels",
      item2: "Thousands of Movies & Series",
      item3: "Stable Streaming without Buffering",
      item4: "Works on All Smart Devices",
      item5: "Fast Technical Support 24/7"
    },
    why: {
      title: "Why Alaatvshow?",
      text: "With Alaatvshow, you only need one subscription. Everything you love—sports, movies, series, and anime—all in one place, with high quality and affordable pricing."
    },
    pricing: {
      title: "Choose Your Plan",
      plan1: {
        name: "Basic Plan",
        tagline: "Best for Beginners",
        features: ["HD Quality", "Premium Movies & Series", "Basic Sports Channels", "Kids Channels"],
        cta: "Request Trial Now"
      },
      plan2: {
        name: "Advanced Plan",
        tagline: "Most Popular ⭐",
        features: ["Full HD Quality", "Larger Content Library", "Extra Sports Channels", "More Kids & Ent.", "Highest Stability"],
        cta: "Join via WhatsApp"
      },
      plan3: {
        name: "Premium Plan",
        tagline: "Limitless Experience",
        features: ["4K Ultra HD Quality", "Full Content Access", "Global Sports Channels", "Full Kids Package", "Best Performance"],
        cta: "Get the Ultimate Experience"
      }
    },
    showcase: {
      sports: "Live Sports",
      movies: "Movies & Series",
      kids: "Kids Content",
      anime: "Anime & Entertainment"
    },
    finalCta: {
      title: "Ready to start your real journey?",
      subtitle: "Try our service now and witness the difference yourself",
      button: "Request Your Trial via WhatsApp"
    },
    footer: {
      rights: "All rights reserved © 2025 Alaatvshow",
      support: "Support available in AR / DE / EN"
    }
  }
};
