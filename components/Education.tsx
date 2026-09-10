"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconSchool, IconChevronRight, IconCode, IconRocket } from "@tabler/icons-react";
import { EncryptedText } from "./ui/encrypted-text";
export const EducationSection = () => {
  const hardSkills = [
    "IA, LLMs y Agentes (LangChain, n8n)", 
    "Contenedores y Servidores (Docker, Linux/WSL)",
    "APIs e Integraciones (Postman, BurpSuite)",
    "Ciberseguridad Ofensiva (eCPPTv3)",
    "Desarrollo Full-stack",
    "Bases de Datos y SQL"
  ];

  const softSkills = [
    
    "Ganas de aprender día a día",
    "Autodidacta",
    "Me busco la vida solo",
    "Ganas de sacar cosas adelante",
    "Persistente hasta que salgan las cosas bien",
    "Enfoque práctico y resolutivo",
  ];

  return (
    <section id="education" className="w-full bg-transparent relative z-10 py-24">
      <div className="max-w-[98vw] mx-auto px-4">
        
        {/* Título */}
        {/* Título: Corregido para evitar cortes en móvil */}
        <div className="text-center mb-16 flex flex-col items-center w-full px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <h2 className="text-4xl md:text-8xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tighter leading-none">
            FORMACIÓN <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow font-bold">
                Y ACTITUD
            </span>
            </h2>
            
            {/* Subtítulo: Ajuste de ancho y centrado real */}
            <div className="text-white/90 mt-6 uppercase tracking-normal md:tracking-[0.3em] text-[10px] italic max-w-[280px] md:max-w-none mx-auto leading-relaxed break-words whitespace-normal text-center opacity-80">
            <b className="block w-full">
                <EncryptedText 
                text="No busco que me den todo masticado, busco problemas reales" 
                revealDelayMs={30} 
                className="block w-full text-center"
                />
            </b>
            </div>
        </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 md:p-14 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col gap-10">
            
            {/* Header: UPV */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-white/5 pb-10">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 shrink-0">
                  <IconSchool className="text-cyan-400 h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-tight italic font-[family-name:var(--font-syne)]">
                    Universidad Politécnica de Valencia (UPV)
                  </h3>
                  <p className="text-cyan-400/90 text-lg md:text-xl font-medium mt-1">
                    Ingeniería Informática + ADE
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-full lg:w-auto gap-4">
                <div className="flex items-center justify-center w-full lg:min-w-[180px] px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono">
                  <span className="relative flex h-2 w-2 mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                  5º curso / 5 años
                </div>
                <div className="relative h-24 w-full lg:w-48 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-4 overflow-hidden">
                    <img src="/img/upv.webp" alt="UPV Logo" className="h-full object-contain grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            </div>

            {/* Texto Principal */}
            <div className="text-slate-300 leading-relaxed text-lg md:text-xl space-y-6 text-justify font-light">
              <p>
                Actualmente estoy cursando en <span className="text-cyan-400 font-bold">5º del Doble Grado en Ingeniería Informática y ADE</span> en la UPV. Dentro de la universidad, me centro en consolidar una base sólida en <span className="text-white font-medium">arquitectura de software, análisis de sistemas y fundamentos de gestión empresarial</span>, aplicando este rigor académico a proyectos de automatización e IA.
              </p>
              <p>
                No soy un experto que lo sabe todo, pero si me das un problema que no sé resolver, <span className="text-emerald-400 font-bold text-glow-sm">no voy a parar de investigar y romper cosas hasta que lo saque adelante</span>. Tengo la disciplina de quien se busca la vida para montar sistemas de IA desde cero, asegurándome de que lo que construyo sea <span className="text-cyan-400 font-bold">sólido, seguro y no una chapuza</span>. Mi meta es aprender de profesionales de alto nivel para alimentar esa mentalidad de no dejar nunca de aprender.
              </p>
            </div>

            {/* Skills Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <IconCode className="text-cyan-400 h-5 w-5" />
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] italic opacity-70">Stack & Dominio</h4>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {hardSkills.map((skill, i) => (
                    <div key={i} className="flex items-center px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl text-xs font-bold text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 hover:border-cyan-500/20 transition-all duration-300 group">
                      <IconChevronRight className="h-4 w-4 mr-2 text-cyan-500/30 group-hover:text-cyan-400" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <IconRocket className="text-emerald-400 h-5 w-5" />
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] italic opacity-70">Filosofía de Trabajo</h4>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {softSkills.map((skill, i) => (
                    <div key={i} className="flex items-center px-4 py-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-xs font-bold text-emerald-400/80 hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-300 group">
                      <IconChevronRight className="h-4 w-4 mr-2 text-emerald-400/30 group-hover:text-emerald-400" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};