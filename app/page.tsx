"use client";

import {
  BadgeCheck,
  BookOpen,
  Brain,
  Gift,
  Lock,
  MessageSquareText,
  Play,
  Rocket,
  Sparkles,
  Tag,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/animated-background";
import { LeadForm } from "@/components/lead-form";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const founderBenefits = [
  { icon: Tag, label: "Descuento Founder" },
  { icon: BookOpen, label: "Guia exclusiva para aplicar lo aprendido" },
  { icon: Sparkles, label: "IA de negocios incluida desde el inicio" },
];

const featureCards = [
  {
    icon: BookOpen,
    title: "Aprende lo esencial",
    text: "Analisis originales y claros para entender ideas clave sin perder horas.",
  },
  {
    icon: MessageSquareText,
    title: "Pregunta y profundiza",
    text: "Conversa con la IA sobre cada analisis para aterrizarlo a tu contexto.",
  },
  {
    icon: TrendingUp,
    title: "Convierte ideas en accion",
    text: "Lleva aprendizajes a decisiones de negocio, ventas, dinero y crecimiento.",
  },
];

const steps = [
  {
    icon: BookOpen,
    title: "Elige un tema",
    text: "Negocios, inversion, mentalidad, liderazgo y crecimiento personal.",
  },
  {
    icon: Brain,
    title: "Entiende el punto clave",
    text: "Lee analisis redactados para pensar mejor, no para acumular resumenes.",
  },
  {
    icon: WandSparkles,
    title: "Aplicalo con IA",
    text: "Haz preguntas y convierte ideas en acciones concretas para tu semana.",
  },
];

const stats = [
  ["12", "Analisis listos"],
  ["48", "Ideas aplicables"],
  ["86%", "Retencion"],
  ["24h", "Tiempo ahorrado"],
];

const heroLeadMessage =
  "Reserva tu lugar como Founder. Te enviaremos novedades privadas, un precio especial de lanzamiento y la posibilidad de probar CEOTECA antes que todos como beta tester.";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: "easeOut" },
  };
}

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-7 sm:px-8">
      <Logo />
      <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
        <a className="transition hover:text-white" href="#que-es">
          Que es
        </a>
        <a className="transition hover:text-white" href="#como-funciona">
          Como funciona
        </a>
        <a className="transition hover:text-white" href="#demo">
          Demo
        </a>
      </nav>
      <Button asChild variant="outline" className="hidden sm:inline-flex">
        <a href="#acceso">
          <Lock className="h-4 w-4" />
          Acceso anticipado
        </a>
      </Button>
    </header>
  );
}

function FounderBadge() {
  return (
    <motion.div
      className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-violet-200 shadow-[0_0_28px_rgba(168,85,247,0.28)]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      Acceso founders
      <span className="h-1 w-1 rounded-full bg-violet-200" />
      Aprende con ventaja
    </motion.div>
  );
}

function BenefitPills() {
  return (
    <motion.div
      className="mx-auto mt-8 grid w-full max-w-4xl gap-4 md:grid-cols-3"
      {...fadeUp(0.1)}
    >
      {founderBenefits.map((item) => (
        <div
          key={item.label}
          className="flex min-h-16 items-center gap-4 rounded-lg border border-white/12 bg-white/[0.035] px-5 text-left shadow-inner-glow backdrop-blur"
        >
          <item.icon className="h-6 w-6 shrink-0 text-violet-300" />
          <span className="text-sm font-medium text-white/86">{item.label}</span>
        </div>
      ))}
    </motion.div>
  );
}

function AvatarStack() {
  return (
    <motion.div
      className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
      {...fadeUp(0.15)}
    >
      <div className="flex -space-x-3">
        {["AM", "JR", "VR", "CG"].map((initials, index) => (
          <div
            key={initials}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full border-2 border-[#06040d] text-xs font-bold text-white shadow-lg",
              [
                "bg-gradient-to-br from-sky-400 to-slate-900",
                "bg-gradient-to-br from-zinc-200 to-zinc-700",
                "bg-gradient-to-br from-amber-200 to-pink-700",
                "bg-gradient-to-br from-emerald-200 to-indigo-700",
              ][index],
            )}
          >
            {initials}
          </div>
        ))}
        <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#06040d] bg-violet-600 text-sm font-semibold text-white">
          +1K
        </div>
      </div>
      <p className="text-center text-base text-white/72">
        Unete a los <span className="font-semibold text-violet-200">primeros lideres</span>{" "}
        que ya quieren entrar.
      </p>
    </motion.div>
  );
}

function VideoMock() {
  return (
    <motion.section id="demo" className="mx-auto mt-24 max-w-5xl px-5 sm:px-8" {...fadeUp()}>
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Vista previa
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Descubre CEOTECA en 60 segundos
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/58">
          Mira como aprenderas de analisis originales y como la IA te ayudara a convertir ideas en accion.
        </p>
      </div>

      <div className="group relative mx-auto mt-10 overflow-hidden rounded-lg border border-violet-300/60 bg-[#07070d] p-2 shadow-violet">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(168,85,247,0.22),transparent_36%)] opacity-90 transition group-hover:opacity-100" />
        <div className="relative grid min-h-[320px] grid-cols-1 overflow-hidden rounded-md border border-white/10 bg-black/60 md:grid-cols-[170px_1fr_220px]">
          <aside className="hidden border-r border-white/10 bg-white/[0.025] p-5 md:block">
            <Logo className="[&>span]:text-xs [&>span]:tracking-[0.18em] [&>div]:h-6 [&>div]:w-6 [&_svg]:h-4 [&_svg]:w-4" />
            <div className="mt-8 space-y-3 text-xs text-white/62">
              {["Inicio", "Mi biblioteca", "Aprendizajes", "IA de negocios", "Favoritos"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={cn(
                      "rounded-md px-3 py-2",
                      index === 0 && "bg-violet-400/18 text-white",
                    )}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </aside>

          <main className="p-5 sm:p-8">
            <p className="text-2xl font-bold text-white">Hola, Founder.</p>
            <p className="mt-1 text-sm text-white/54">Tu ventaja comienza aqui.</p>
            <div className="mt-5 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/36">
              Que quieres aprender hoy?
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">Continuar aprendiendo</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Habitos Atomicos", "Principios", "De Cero a Uno", "Piense y hagase rico"].map(
                  (book, index) => (
                    <div key={book} className="rounded-md border border-white/10 bg-white/[0.05] p-3">
                      <div
                        className={cn(
                          "grid aspect-[3/4] place-items-center rounded-sm p-2 text-center text-[11px] font-bold text-black",
                          [
                            "bg-stone-100",
                            "bg-zinc-800 text-white",
                            "bg-sky-300",
                            "bg-emerald-200",
                          ][index],
                        )}
                      >
                        {book}
                      </div>
                      <div className="mt-3 h-1 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-violet-400"
                          style={{ width: `${76 - index * 12}%` }}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/[0.035] p-3">
                  <p className="text-xl font-bold">{value}</p>
                  <p className="mt-1 text-[10px] text-white/50">{label}</p>
                </div>
              ))}
            </div>
          </main>

          <aside className="hidden border-l border-white/10 p-5 lg:block">
            <div className="h-full rounded-md border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-bold">IA de Negocios</p>
              <p className="mt-2 text-xs leading-5 text-white/54">
                Tu asistente para pensar mejor y actuar con ventaja.
              </p>
              <div className="mx-auto mt-8 grid h-24 w-24 place-items-center rounded-full bg-violet-500/20 shadow-violet">
                <Sparkles className="h-9 w-9 text-violet-200" />
              </div>
              <Button className="mt-8 h-10 w-full text-xs">Preguntale a la IA</Button>
            </div>
          </aside>
        </div>

        <button
          aria-label="Reproducir video"
          className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-violet-200/70 bg-violet-500/30 text-white shadow-violet backdrop-blur transition hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full border border-violet-200/50 animate-pulse-ring" />
          <Play className="ml-1 h-10 w-10 fill-white" />
        </button>
      </div>

      <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-white/45">
        Disclaimer: CEOTECA no reemplaza los libros ni entrega libros completos. Creamos analisis
        originales para ayudarte a entender un punto de vista, pensar mejor y aplicar ideas con mas claridad.
      </p>
    </motion.section>
  );
}

function FeatureGrid() {
  return (
    <section id="que-es" className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
      <motion.div className="grid gap-5 md:grid-cols-3" {...fadeUp()}>
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-7 shadow-inner-glow backdrop-blur"
          >
            <div className="grid h-12 w-12 place-items-center rounded-full bg-violet-400/12 text-violet-250">
              <card.icon className="h-6 w-6 text-violet-300" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">{card.text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Steps() {
  return (
    <section id="como-funciona" className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
      <motion.div className="text-center" {...fadeUp()}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          Como funciona
        </p>
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div key={step.title} className="relative" {...fadeUp(index * 0.08)}>
            <div className="flex items-start gap-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-violet-300/70 bg-violet-500/10 text-lg font-semibold text-violet-100">
                {index + 1}
              </div>
              <div>
                <step.icon className="mb-5 h-10 w-10 text-white" />
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{step.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FounderCta() {
  return (
    <motion.section
      className="mx-auto mt-24 max-w-6xl px-5 pb-10 sm:px-8"
      {...fadeUp()}
    >
      <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.035] px-5 py-10 text-center shadow-inner-glow backdrop-blur sm:px-8">
        <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[70px]" />
        <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-violet-300/70 bg-violet-500/18 shadow-violet">
          <Gift className="h-7 w-7 text-violet-100" />
        </div>
        <h2 className="relative mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Entra antes que el publico.
        </h2>
        <p className="relative mx-auto mt-3 max-w-2xl text-sm text-white/62 sm:text-base">
          Precio Founder, acceso anticipado, bonos exclusivos y cupos limitados para los primeros miembros.
        </p>
        <div className="relative mt-7 flex flex-wrap justify-center gap-3">
          {[
            ["Precio Founder asegurado", BadgeCheck],
            ["Bonos de bienvenida", Gift],
            ["Acceso prioritario", Rocket],
          ].map(([label, Icon]) => (
            <div
              key={label as string}
              className="flex items-center gap-2 rounded-md border border-violet-300/40 bg-black/20 px-4 py-3 text-sm text-white/75"
            >
              <Icon className="h-4 w-4 text-violet-300" />
              {label as string}
            </div>
          ))}
        </div>
        <div id="acceso" className="relative mt-7">
          <LeadForm compact />
        </div>
        <p className="relative mt-4 text-xs text-white/42">
          Sin spam. Beneficios para los primeros miembros. Acceso prioritario.
        </p>
      </div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Header />

      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 text-center sm:px-8 sm:pt-16">
        <FounderBadge />

        <motion.h1
          className="mx-auto mt-6 max-w-6xl text-balance text-5xl font-bold leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
        >
          Aprende como CEO.
          <br />
          <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
            Actua con ventaja.
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-7 max-w-3xl text-balance text-lg leading-8 text-white/72"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.65, ease: "easeOut" }}
        >
          CEOTECA transforma libros clave de negocios, inversion y crecimiento en ideas accionables,
          con una IA enfocada en negocios para ayudarte a pensar mejor, decidir mejor y crecer mas rapido.
        </motion.p>

        <motion.div
          className="mx-auto mt-7 flex max-w-3xl items-start justify-center gap-3 text-balance text-base font-medium leading-7 text-white/78 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.015, 1] }}
          transition={{
            opacity: { delay: 0.3, duration: 0.65, ease: "easeOut" },
            y: { delay: 0.3, duration: 0.65, ease: "easeOut" },
            scale: { delay: 1, duration: 3.2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <motion.span
            className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-violet-400/12 text-violet-200 shadow-[0_0_28px_rgba(168,85,247,0.45)]"
            animate={{ rotate: [0, -8, 8, 0], boxShadow: [
              "0 0 18px rgba(168,85,247,0.28)",
              "0 0 34px rgba(196,181,253,0.55)",
              "0 0 18px rgba(168,85,247,0.28)",
            ] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="h-4 w-4" />
          </motion.span>
          <motion.span
            className="attention-glow-text"
            data-text={heroLeadMessage}
            animate={{ filter: ["saturate(1)", "saturate(1.35)", "saturate(1)"] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {heroLeadMessage}
          </motion.span>
        </motion.div>

        <div className="mt-7">
          <LeadForm />
        </div>

        <BenefitPills />
        <AvatarStack />
      </section>

      <div className="mx-auto mt-8 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <VideoMock />
      <FeatureGrid />
      <Steps />
      <FounderCta />

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Logo className="[&>span]:text-sm [&>div]:h-7 [&>div]:w-7 [&_svg]:h-5 [&_svg]:w-5" />
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/54">
            <a href="#" className="hover:text-white">
              Privacidad
            </a>
            <a href="#" className="hover:text-white">
              Terminos
            </a>
            <a href="#acceso" className="inline-flex items-center gap-2 hover:text-white">
              Proximamente
              <span className="h-2 w-2 rounded-full bg-violet-400" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
