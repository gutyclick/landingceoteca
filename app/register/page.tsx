"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  User,
  WandSparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const valueItems = [
  {
    icon: BookOpen,
    title: "Aprende más en menos tiempo",
    text: "Análisis claros, accionables y pensados para decidir mejor.",
  },
  {
    icon: WandSparkles,
    title: "Aplica lo que aprendes",
    text: "Ideas convertidas en ejercicios, preguntas y acciones concretas.",
  },
  {
    icon: MessageSquareText,
    title: "Pregúntale a CEOTECA",
    text: "Profundiza cada análisis con guía contextual y enfoque de negocio.",
  },
  {
    icon: BarChart3,
    title: "Crece cada día",
    text: "Convierte lectura, criterio y estrategia en resultados medibles.",
  },
];

const options = [
  "Acceso Founder",
  "Precio especial de lanzamiento",
  "Beta tester de CEOTECA",
  "Novedades privadas",
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Seguro y privado",
    text: "Tus datos están protegidos.",
  },
  {
    icon: Zap,
    title: "Acceso anticipado",
    text: "Entra antes del público.",
  },
  {
    icon: Lock,
    title: "Sin riesgos",
    text: "Te avisaremos antes de cobrar.",
  },
];

const avatars = ["AM", "VR", "CG", "JP"];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_16%_18%,rgba(139,92,246,0.12),transparent_28%),radial-gradient(circle_at_86%_10%,rgba(103,232,249,0.1),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8f7ff_46%,#ffffff_100%)] text-slate-950">
      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Volver a CEOTECA">
            <Logo className="[&>span]:text-slate-950 [&>span]:tracking-normal [&>div]:bg-violet-600 [&>div]:text-white [&>div]:shadow-[0_12px_28px_rgba(124,58,237,0.28)] [&_svg]:fill-white/20" />
          </Link>
          <p className="text-sm text-slate-500">
            ¿Ya tienes cuenta?{" "}
            <a className="font-semibold text-violet-700 transition hover:text-violet-500" href="#">
              Inicia sesión
            </a>
          </p>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto w-full max-w-xl lg:mx-0"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">
            Únete a CEOTECA
          </p>
          <h1 className="mt-7 text-balance text-4xl font-bold leading-[1.05] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            Crea tu cuenta y empieza a aprender con ventaja.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">
            Accede a análisis originales de libros de negocios, inversión y crecimiento,
            con una IA enfocada en ayudarte a pensar mejor y aplicar más rápido.
          </p>

          <div className="mt-9 rounded-lg border border-violet-100 bg-white/72 p-6 shadow-[0_24px_70px_rgba(88,28,135,0.08)] backdrop-blur-xl">
            <div className="space-y-6">
              {valueItems.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-700 shadow-[0_12px_28px_rgba(124,58,237,0.12)]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-950">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 flex items-start gap-5">
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <div
                  key={avatar}
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-full border-2 border-white text-xs font-bold text-white shadow-md",
                    [
                      "bg-gradient-to-br from-violet-500 to-slate-950",
                      "bg-gradient-to-br from-cyan-400 to-violet-800",
                      "bg-gradient-to-br from-fuchsia-400 to-violet-900",
                      "bg-gradient-to-br from-amber-300 to-violet-800",
                    ][index],
                  )}
                >
                  {avatar}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-1 text-amber-400" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Sparkles key={index} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                “CEOTECA me ayuda a entender lo esencial y convertir ideas en decisiones.”
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">— Andrés G.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="mx-auto w-full max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white/86 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
            <button className="flex h-14 w-full items-center justify-center gap-3 rounded-md border border-violet-400 bg-white text-base font-semibold text-slate-950 shadow-[0_0_0_4px_rgba(124,58,237,0.04)] transition hover:border-violet-600 hover:bg-violet-50">
              <span className="text-lg font-bold text-[#4285f4]">G</span>
              Continuar con Google
            </button>

            <div className="my-8 flex items-center gap-4 text-sm text-slate-500">
              <span className="h-px flex-1 bg-slate-200" />
              O regístrate con tu email
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <form className="space-y-5">
              <Field label="Nombre completo" icon={User} placeholder="Tu nombre completo" />
              <Field label="Correo electrónico" icon={Mail} placeholder="tu@email.com" type="email" />

              <div>
                <label className="text-sm font-semibold text-slate-950" htmlFor="password">
                  Contraseña
                </label>
                <div className="relative mt-2">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Crea una contraseña segura"
                    className="h-14 w-full rounded-md border border-slate-200 bg-white py-4 pl-12 pr-12 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-violet-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-1">
                  <span className="h-1 rounded-full bg-violet-500" />
                  <span className="h-1 rounded-full bg-violet-300" />
                  <span className="h-1 rounded-full bg-slate-200" />
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Usa 8+ caracteres con mayúsculas, minúsculas y números.
                </p>
              </div>

              <div className="rounded-lg border border-violet-100 bg-violet-50/70 p-4">
                <p className="text-sm font-semibold text-slate-950">Tu acceso incluye</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {options.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="grid h-5 w-5 place-items-center rounded bg-violet-600 text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 h-4 w-4 rounded border-slate-300 accent-violet-600"
                />
                <span>
                  Acepto los{" "}
                  <a href="#" className="font-semibold text-violet-700 hover:text-violet-500">
                    términos y condiciones
                  </a>{" "}
                  y la{" "}
                  <a href="#" className="font-semibold text-violet-700 hover:text-violet-500">
                    política de privacidad
                  </a>
                  .
                </span>
              </label>

              <button
                type="button"
                className="group flex h-16 w-full items-center justify-center gap-3 rounded-md bg-gradient-to-r from-violet-700 via-violet-600 to-fuchsia-600 text-base font-bold text-white shadow-[0_18px_36px_rgba(124,58,237,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(124,58,237,0.34)]"
              >
                Crear cuenta
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-100 text-violet-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3 rounded-lg border border-slate-100 bg-white/70 px-5 py-4 text-center text-sm text-slate-500 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur">
            <Lock className="h-4 w-4 text-violet-700" />
            Tus datos están protegidos con cifrado de nivel empresarial.
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function Field({
  label,
  icon: Icon,
  placeholder,
  type = "text",
}: {
  label: string;
  icon: ComponentType<{ className?: string }>;
  placeholder: string;
  type?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label className="text-sm font-semibold text-slate-950" htmlFor={id}>
        {label}
      </label>
      <div className="relative mt-2">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="h-14 w-full rounded-md border border-slate-200 bg-white px-4 py-4 pl-12 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />
      </div>
    </div>
  );
}
