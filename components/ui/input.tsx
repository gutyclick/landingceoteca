import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-md border border-white/10 bg-white/[0.055] px-4 py-3 text-base text-white shadow-inner transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/42 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/70 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
