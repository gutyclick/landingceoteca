"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "22%", size: 2, delay: 0.1, duration: 9 },
  { left: "17%", top: "62%", size: 3, delay: 1.2, duration: 12 },
  { left: "28%", top: "34%", size: 2, delay: 2.1, duration: 10 },
  { left: "42%", top: "18%", size: 3, delay: 0.8, duration: 13 },
  { left: "53%", top: "68%", size: 2, delay: 1.7, duration: 11 },
  { left: "66%", top: "28%", size: 2, delay: 0.4, duration: 10 },
  { left: "76%", top: "58%", size: 3, delay: 2.5, duration: 14 },
  { left: "88%", top: "36%", size: 2, delay: 1.1, duration: 12 },
  { left: "92%", top: "74%", size: 2, delay: 3.2, duration: 15 },
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030307]">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(129,93,255,0.18),transparent_34%),radial-gradient(circle_at_12%_34%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_88%_32%,rgba(168,85,247,0.22),transparent_25%)]"
        animate={{ opacity: [0.75, 1, 0.82, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-ribbon absolute left-1/2 top-[-18rem] h-[46rem] w-[78rem] -translate-x-1/2 rounded-[100%] opacity-70 blur-[36px]"
        animate={{
          rotate: [0, 7, -5, 0],
          scaleX: [1, 1.08, 0.98, 1],
          opacity: [0.45, 0.72, 0.5, 0.65],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[-14%] top-[18%] h-[28rem] w-[60rem] rounded-[100%] border border-violet-400/30 bg-violet-500/10 blur-2xl"
        animate={{
          rotate: [8, -10, 8],
          x: [0, 40, 0],
          opacity: [0.32, 0.68, 0.38],
          boxShadow: [
            "0 0 60px rgba(139,92,246,0.18)",
            "0 0 120px rgba(168,85,247,0.32)",
            "0 0 70px rgba(56,189,248,0.16)",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-18%] top-[10%] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/18 blur-[86px]"
        animate={{
          scale: [1, 1.18, 1.04, 1],
          y: [0, 36, 12, 0],
          opacity: [0.42, 0.76, 0.5, 0.62],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-12rem] left-[24%] h-[30rem] w-[48rem] rounded-full bg-blue-500/10 blur-[90px]"
        animate={{ x: [-40, 44, -40], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-violet-200/10"
        animate={{ scale: [0.92, 1.04, 0.96], opacity: [0.16, 0.34, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-36 h-[26rem] w-[70rem] -translate-x-1/2 rounded-[100%] border-t border-violet-200/20"
        animate={{ y: [0, -18, 0], opacity: [0.22, 0.42, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ceoteca-grid absolute inset-0 opacity-50"
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            className="absolute rounded-full bg-violet-100/80 shadow-[0_0_18px_rgba(196,181,253,0.85)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{ y: [0, -34, 0], opacity: [0, 0.9, 0], scale: [0.7, 1.35, 0.8] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(3,3,7,0.28)_45%,#030307_100%)]" />
    </div>
  );
}
