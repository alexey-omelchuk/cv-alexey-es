"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconLanguage, IconChevronRight, IconWorld } from "@tabler/icons-react";
import { EncryptedText } from "./ui/encrypted-text";

export const LanguagesSection = () => {
  const languages = [
    { name: "Castellano", level: "Nativo", desc: "Mi lengua materna. Dominio total en cualquier entorno, ya sea técnico o profesional.", color: "from-cyan-400 to-blue-500" },
    { name: "Inglés", level: "Nivel B2", desc: "Me muevo sin problemas en reuniones, discusiones técnicas y entornos de negocio.", color: "from-blue-400 to-cyan-500" },
    { name: "Catalán / Valenciano", level: "Nativo", desc: "Lengua materna. Lo hablo y escribo perfectamente en el día a día y en el trabajo.", color: "from-violet-500 to-purple-600" },
    { name: "Ucraniano", level: "Nativo", desc: "Lengua materna y vínculo cultural. Fluidez nativa absoluta.", color: "from-emerald-400 to-teal-500" },
  ];

  return (
    <section id="languages" className="w-full bg-transparent relative z-10 py-24">
      <div className="max-w-[98vw] mx-auto px-4">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-8xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tighter leading-none">
              COMUNICACIÓN <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow font-bold">SIN BARRERAS</span>
            </h2>
            <div className="text-white/90 mt-6 uppercase tracking-[0.15em] md:tracking-[0.3em] text-[10px] italic max-w-[85vw] md:max-w-none mx-auto leading-relaxed">
              <b><EncryptedText text="Dominio de idiomas y adaptabilidad cultural" revealDelayMs={30} /></b>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative">
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex items-center gap-6 border-b border-white/5 pb-8">
              <div className="p-4 bg-violet-500/10 rounded-2xl border border-violet-500/20">
                <IconWorld className="text-violet-400 h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter">Idiomas</h3>
                <p className="text-slate-400 text-sm md:text-base font-medium">Me adapto rápido a equipos de cualquier parte del mundo.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((lang, index) => (
                <motion.div key={index} whileHover={{ x: 10 }} className="p-6 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-white/10 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${lang.color} shadow-[0_0_10px_rgba(34,211,238,0.5)]`} />
                      <h4 className="text-xl font-bold text-white tracking-tight uppercase font-[family-name:var(--font-syne)]">{lang.name}</h4>
                    </div>
                    <IconLanguage className="text-white/10 group-hover:text-cyan-400/40 transition-colors h-6 w-6" />
                  </div>
                  <p className="text-cyan-400 text-xs font-mono mb-3 uppercase tracking-wider">{lang.level}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{lang.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-2 text-white/70 text-[10px] uppercase tracking-[0.2em] italic">
              <IconChevronRight className="h-3 w-3" />
              <b>Capacidad total para trabajar en entornos internacionales</b>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};