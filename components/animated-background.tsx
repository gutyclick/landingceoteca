"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(129,93,255,0.18),transparent_34%),radial-gradient(circle_at_12%_34%,rgba(97,61,255,0.18),transparent_24%),radial-gradient(circle_at_88%_32%,rgba(168,85,247,0.22),transparent_25%)]" />
      <motion.div
        className="absolute left-[-14%] top-[18%] h-[28rem] w-[60rem] rounded-[100%] border border-violet-400/30 bg-violet-500/10 blur-2xl"
        animate={{ rotate: [8, -10, 8], x: [0, 40, 0], opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-18%] top-[10%] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/18 blur-[86px]"
        animate={{ scale: [1, 1.18, 1], y: [0, 36, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-12rem] left-[24%] h-[30rem] w-[48rem] rounded-full bg-blue-500/10 blur-[90px]"
        animate={{ x: [-40, 44, -40], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ceoteca-grid absolute inset-0 opacity-50" />
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(3,3,7,0.28)_45%,#030307_100%)]" />
    </div>
  );
}
