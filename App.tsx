
import React, { useState, useEffect } from 'react';
import { translations, Language, Content } from './translations';
import { 
  Tv, 
  Zap, 
  Film, 
  Trophy, 
  Gamepad2, 
  MessageCircle,
  Globe,
  Star,
  ShieldCheck,
  PlayCircle,
  Activity,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_LINK = "https://wa.me/4915758305041";

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const t: Content = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const slideUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const scaleUp = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { type: "spring", stiffness: 100 }
  };

  return (
    <div className="min-h-screen relative selection:bg-yellow-500/30">
      
      {/* Dynamic Header */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
              <Activity size={24} className="text-black" />
            </div>
            <span className="font-bebas text-2xl tracking-widest uppercase">ALAA<span className="text-yellow-500">TV</span></span>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2 bg-white/5 p-1 rounded-xl">
              {(['ar', 'de', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-lg text-[10px] font-black transition-all ${
                    lang === l ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-xl text-xs font-black hover:bg-yellow-500 transition-colors hidden sm:block"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero: Sports & Celebrity Focus */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000" 
            alt="Stadium Action"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent" />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div 
            {...scaleUp}
            className="inline-flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 mx-auto shadow-xl shadow-yellow-500/20"
          >
            <Star size={12} fill="currentColor" />
            Best Streaming Experience 2025
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-6xl md:text-9xl mb-8 text-white tracking-tighter"
          >
            {t.hero.title} <br />
            <span className="text-yellow-500 neon-text-blue">{t.hero.subtitle}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              className="btn-action text-white px-12 py-6 text-xl flex items-center gap-3 w-full sm:w-auto justify-center shadow-2xl"
            >
              <PlayCircle size={28} />
              {t.hero.cta1}
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              className="bg-white/5 border border-white/10 hover:bg-white/10 px-12 py-6 rounded-xl font-bold transition-all w-full sm:w-auto text-center"
            >
              <MessageCircle size={20} className="inline-block mr-2" />
              {t.hero.cta2}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Infinite Scrolling Stats Bar */}
      <section className="py-14 bg-yellow-500 overflow-hidden shadow-2xl relative z-20">
        <div className="flex whitespace-nowrap gap-16 animate-infinite-scroll">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 text-black font-black text-3xl italic uppercase font-bebas tracking-wider">
              <Zap size={28} fill="currentColor" />
              {t.trust.item1}
              <Zap size={28} fill="currentColor" />
              {t.trust.item3}
              <Zap size={28} fill="currentColor" />
              {t.trust.item2}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-40 px-6 relative bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...slideUp} className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black mb-6 uppercase italic tracking-tighter text-white">
              {t.pricing.title}
            </h2>
            <div className="w-24 h-2 bg-yellow-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
            {/* Standard Plan */}
            <motion.div {...slideUp} className="pricing-card rounded-[2.5rem] p-12 flex flex-col group border border-white/5">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl font-black mb-2">{t.pricing.plan1.name}</h3>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{t.pricing.plan1.tagline}</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <Tv size={28} />
                </div>
              </div>
              <div className="text-7xl font-black mb-12">35<span className="text-2xl font-normal text-gray-600 ml-1">€</span></div>
              <ul className="space-y-6 mb-16 flex-grow">
                {t.pricing.plan1.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-400 font-bold">
                    <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center">
                       <Check size={14} className="text-yellow-500" strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-center group-hover:bg-white group-hover:text-black transition-all text-lg">
                {t.pricing.plan1.cta}
              </a>
            </motion.div>

            {/* Recommended Plan */}
            <motion.div 
              {...slideUp} 
              className="pricing-card rounded-[2.5rem] p-12 flex flex-col border-2 border-yellow-500 shadow-[0_0_60px_rgba(234,179,8,0.15)] scale-105 z-10 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent"
            >
              <div className="absolute top-0 right-12 bg-yellow-500 text-black px-6 py-1.5 rounded-b-2xl text-xs font-black uppercase tracking-tighter">Most Wanted</div>
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl font-black mb-2">{t.pricing.plan2.name}</h3>
                  <span className="text-xs font-bold text-yellow-500 uppercase tracking-[0.2em]">{t.pricing.plan2.tagline}</span>
                </div>
                <div className="bg-yellow-500 p-4 rounded-2xl text-black shadow-xl">
                  <Trophy size={28} />
                </div>
              </div>
              <div className="text-7xl font-black mb-12 text-yellow-500">45<span className="text-2xl font-normal text-gray-500 ml-1">€</span></div>
              <ul className="space-y-6 mb-16 flex-grow">
                {t.pricing.plan2.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-black">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-black" strokeWidth={4} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" className="btn-action w-full py-6 text-center text-white text-xl shadow-2xl">
                {t.pricing.plan2.cta}
              </a>
            </motion.div>

            {/* Premium Plan */}
            <motion.div {...slideUp} className="pricing-card rounded-[2.5rem] p-12 flex flex-col group border border-white/5">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl font-black mb-2">{t.pricing.plan3.name}</h3>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{t.pricing.plan3.tagline}</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Star size={28} />
                </div>
              </div>
              <div className="text-7xl font-black mb-12">60<span className="text-2xl font-normal text-gray-600 ml-1">€</span></div>
              <ul className="space-y-6 mb-16 flex-grow">
                {t.pricing.plan3.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-400 font-bold">
                    <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                       <Check size={14} className="text-purple-500" strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-center group-hover:bg-white group-hover:text-black transition-all text-lg">
                {t.pricing.plan3.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Showcase: Cinematic Dynamic Grid */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20", 
              label: t.showcase.sports, 
              icon: Trophy, 
              color: "bg-blue-600",
              desc: "World Class Stadiums"
            },
            { 
              img: "https://images.unsplash.com/photo-1485846234645-a62644f84728", 
              label: t.showcase.movies, 
              icon: Film, 
              color: "bg-red-600",
              desc: "Latest Hollywood Hits"
            },
            { 
              img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa", 
              label: t.showcase.kids, 
              icon: Gamepad2, 
              color: "bg-green-600",
              desc: "Safe & Fun For Kids"
            },
            { 
              img: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586", 
              label: t.showcase.anime, 
              icon: Star, 
              color: "bg-purple-600",
              desc: "Epic Anime Series"
            },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              {...scaleUp}
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5"
            >
              <img 
                src={`${item.img}?auto=format&fit=crop&q=80&w=800`} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-[0.7] group-hover:brightness-[0.9]" 
                alt={item.label}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-10 flex flex-col justify-end">
                <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-2xl group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2">{item.label}</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Alaatvshow Section */}
      <section className="py-40 px-6 relative overflow-hidden bg-black">
        <div className="absolute -top-24 -right-24 p-40 opacity-[0.03] -z-10 rotate-12 text-yellow-500">
          <Activity size={600} />
        </div>
        <motion.div {...slideUp} className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-12 italic leading-[1.1]">
            <span className="text-yellow-500 uppercase tracking-tighter">{t.why.title}</span> <br />
            {t.why.text}
          </h2>
        </motion.div>
      </section>

      {/* Final Call To Action */}
      <section className="py-56 px-6 text-center relative bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto">
          <motion.div {...scaleUp}>
            <h2 className="text-6xl md:text-[10rem] font-black mb-12 tracking-tighter uppercase italic leading-none">{t.finalCta.title}</h2>
            <p className="text-2xl text-gray-500 mb-20 max-w-2xl mx-auto font-medium">{t.finalCta.subtitle}</p>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              className="btn-action text-white px-20 py-8 text-3xl shadow-[0_0_60px_rgba(146,92,255,0.4)] inline-flex items-center gap-6"
            >
              <MessageCircle size={40} fill="white" className="text-black" />
              {t.finalCta.button}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="py-24 px-6 border-t-8 border-yellow-500 bg-[#000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <div className="font-bebas text-5xl mb-4 tracking-wider">ALAA<span className="text-yellow-500">TV</span></div>
            <p className="text-gray-600 text-sm font-bold tracking-wide">{t.footer.rights}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-black text-2xl italic tracking-tighter">BEIN SPORTS</span>
            <span className="font-black text-2xl italic tracking-tighter">NETFLIX</span>
            <span className="font-black text-2xl italic tracking-tighter">APPLE TV+</span>
            <span className="font-black text-2xl italic tracking-tighter">SKY SPORTS</span>
          </div>

          <div className="flex items-center gap-5 bg-white/5 px-8 py-4 rounded-2xl border border-white/10 hover:border-yellow-500 transition-colors">
            <Globe size={24} className="text-yellow-500" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">{t.footer.support}</span>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <motion.div 
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        className="fixed bottom-12 right-12 z-[200]"
      >
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-90 transition-all group relative"
        >
          <MessageCircle size={48} className="text-white fill-white group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[11px] font-black px-3 py-1.5 rounded-full animate-pulse shadow-lg">
            24/7 LIVE
          </div>
        </a>
      </motion.div>

    </div>
  );
}
