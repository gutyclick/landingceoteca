"use client";

import { FormEvent, useState } from "react";
import { Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SubmitState = "idle" | "loading" | "success" | "error";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [contact, setContact] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState(
    "Recibe acceso anticipado, una guía exclusiva y precio especial al lanzar CEOTECA.",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("Guardando tu acceso founder...");

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact, source: compact ? "footer_cta" : "hero" }),
    });

    const data = (await response.json()) as { message?: string };

    if (!response.ok && response.status !== 202) {
      setState("error");
      setMessage(data.message || "No pudimos guardar tu acceso. Intenta de nuevo.");
      return;
    }

    setState("success");
    setContact("");
    setMessage(data.message || "Listo. Te avisaremos apenas abramos.");
  }

  if (compact) {
    return (
      <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row">
        <Input
          aria-label="Correo o WhatsApp"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          placeholder="Tu correo o WhatsApp"
          className="h-12"
          required
        />
        <Button className="h-12 shrink-0" disabled={state === "loading"}>
          {state === "loading" ? "Guardando..." : "Quiero ser Founder"}
        </Button>
      </form>
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-3xl rounded-lg border border-violet-300/60 bg-white/[0.035] p-4 shadow-violet backdrop-blur-xl sm:p-7"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.65, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <label className="relative flex-1">
          <Mail className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/72" />
          <Input
            aria-label="Correo o numero de WhatsApp"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            placeholder="Tu correo o numero de WhatsApp"
            className="h-16 pl-14"
            required
          />
        </label>
        <Button className="h-16 px-7 text-base" disabled={state === "loading"}>
          {state === "loading" ? "Guardando..." : "Quiero mi acceso Founder"}
        </Button>
      </div>
      <p
        className={`mt-4 flex items-center justify-center gap-2 text-center text-sm ${
          state === "error"
            ? "text-red-200"
            : state === "success"
              ? "text-emerald-200"
              : "text-white/68"
        }`}
      >
        <Lock className="h-4 w-4 shrink-0" />
        {message}
      </p>
    </motion.form>
  );
}
