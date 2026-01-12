import { cn } from "@/lib/utils"

interface BrandNameProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function BrandName({ className, size = "md" }: BrandNameProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }

  return (
    <span
      className={cn("font-bold tracking-wider", sizeClasses[size], className)}
      style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
    >
      <span className="text-cyan-400">AR</span>
      <span className="text-zinc-300">con</span>
      <span className="text-blue-400">IQ</span>
    </span>
  )
}
