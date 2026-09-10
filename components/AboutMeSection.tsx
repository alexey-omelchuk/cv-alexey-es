"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconTerminal2,
  IconSparkles,
  IconBrain,
  IconBrandLinkedin
} from "@tabler/icons-react";
import { EncryptedText } from "./ui/encrypted-text";

export const AboutMeSection = () => {
  const contactInfo = [
    { icon: <IconMail className="h-5 w-5" />, label: "Email", value: "alexeyeuk@gmail.com", href: "mailto:alexeyeuk@gmail.com" },
    { icon: <IconBrandLinkedin className="h-5 w-5" />, label: "LinkedIn", value: "alexey-omelchuk", href: "https://www.linkedin.com/in/alexey-omelchuk/" },
    { icon: <IconPhone className="h-5 w-5" />, label: "Teléfono (Whatsapp)", value: "+34 677 64 56 85", href: "tel:+34677645685" },
    { icon: <IconMapPin className="h-5 w-5" />, label: "Ubicación", value: "Valencia", href: "#" },
  ];

  return (
    <section id="about" className="w-full bg-transparent relative z-10 py-24">
      <div className="max-w-[98vw] mx-auto px-4">

        {/* TÍTULO CORREGIDO PARA MÓVIL */}
        <div className="text-center mb-16 flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-8xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tighter leading-none">
              EL MIX <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 bg-clip-text text-transparent text-glow font-bold">
                QUE FUNCIONA
              </span>
            </h2>

            {/* FIX MÓVIL: Control de ancho, salto de línea y centrado */}
            <div className="text-white/90 mt-6 uppercase tracking-normal md:tracking-[0.3em] text-[10px] md:text-[11px] italic max-w-[280px] md:max-w-none mx-auto leading-relaxed break-words whitespace-normal text-center">
              <b>
                <EncryptedText
                  text="Código, Negocio y sentido común con IA"
                  revealDelayMs={30}
                  className="block w-full"
                />
              </b>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Columna Izquierda: Narrativa Personal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                  <IconUser className="text-cyan-400 h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight uppercase font-[family-name:var(--font-syne)]">
                  Sobre&nbsp;&nbsp;&nbsp;mi&nbsp;&nbsp;&nbsp;perfil
                </h3>
              </div>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed text-justify font-light">
                <p>
                  Estoy en el <span className="text-cyan-400 font-bold">5º año</span> del  <span className="text-white font-bold">Doble Grado de Ingeniería Informática y Administración y Dirección de Empresas (ADE).</span> <br></br>¿Por qué las dos? Porque me niego a ser el típico que solo sabe picar código sin entender para qué sirve lo que está haciendo. Desde el principio tengo claro que de nada sirve ser el mejor programador si no ayuda a la empresa a ser más eficiente o a vender más.
                </p>

                <p>
                  Me muevo bien con <span className="text-white font-medium">Java, JavaScript (Next.js/React), Python, C, PHP, MySQL, Postman y APIs</span>. Todos los días uso <span className="text-white font-medium">Docker y Linux con WSL</span> para el tema de integraciones de contenedores. Además, me gusta que las cosas sean seguras, así que le he metido muchas horas al <span className="text-violet-400 font-medium italic">hacking ético </span>(actualmente he aprobado el <span className="text-violet-400 font-medium italic">eCPPTv3, utilizando Linux con herramientas de Pentesting como BurpSuite / Postman</span>). Todo esto con el objetivo de <span className="text-emerald-400 font-bold">no dejar agujeros</span> (OWASP Top 10 y demás).
                </p>

                <p>
                  Sobre la <span className="text-emerald-400 font-bold">IA</span>: No la veo como un juguete para solamente hacer resúmenes, sino como una herramienta de productividad bestial. Me manejo bien con <span className="text-emerald-400 font-medium whitespace-nowrap">LLMs, LangChain y n8n</span>. La uso para automatizar las tareas pesadas (ej: agentes WhatsApp/Telegram, chatbots, sistemas RAG...) y centrarme en lo que de verdad importa. Para mí, la IA es el puente que faltaba para que la tecnología y el negocio se entiendan de una vez por todas.
                </p>

                <p className="text-slate-400 italic text-base">
                  Y por último quiero recalcar que no me vas a oír decir que soy un <span className="text-emerald-400 font-bold">experto</span> en nada en un sector que cambia tanto en tan poco tiempo, esa palabra caduca rápido. Prefiero decir que me esfuerzo cada día por <span className="text-emerald-400 font-bold">aprender de los mejores</span> y superar lo que sabía ayer. Al final, el objetivo es que mi metodología sea cada vez más sólida y mis soluciones más reales.
                </p>

                <blockquote className="border-l-2 border-emerald-500/50 pl-6 py-2 italic text-emerald-400/80 text-base bg-emerald-500/5">
                  "Menos teoría y más soluciones que funcionen en el mundo real. Así de simple."
                </blockquote>
              </div>
            </div>

            <IconTerminal2 className="absolute -bottom-10 -right-10 text-white/[0.03] h-64 w-64 rotate-12 pointer-events-none" />
          </motion.div>

          {/* Columna Derecha: Contacto y Enfoque */}
          <div className="flex flex-col gap-6">

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 shadow-xl"
            >
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 italic opacity-50">¿Hablamos?</h4>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <a key={i} href={info.href} className="flex items-center gap-4 group transition-all">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all">
                      {React.cloneElement(info.icon as React.ReactElement<any>, {
                        className: "text-slate-400 group-hover:text-cyan-400 transition-colors"
                      })}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">{info.label}</p>
                      <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-md border border-emerald-500/20 rounded-[2.5rem] p-8 relative overflow-hidden group"
            >
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <IconSparkles className="text-emerald-400 h-5 w-5 animate-pulse" />
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] italic">Mentalidad</h4>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed italic relative z-10">
                "Uso la IA para dejar de hacer tareas de mono y centrarme en resolver problemas de verdad."
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <IconBrain size={80} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};