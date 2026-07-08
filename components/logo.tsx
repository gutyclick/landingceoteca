import { Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative grid h-9 w-9 place-items-center rounded-md bg-violet-400/10 text-violet-300 shadow-[0_0_28px_rgba(168,85,247,0.42)]">
        <Hexagon className="h-6 w-6 fill-violet-400/30" strokeWidth={2.6} />
        <span className="absolute h-2 w-2 rounded-sm bg-white" />
      </div>
      <span className="text-xl font-bold tracking-[0.18em] text-white">CEOTECA</span>
    </div>
  );
}
