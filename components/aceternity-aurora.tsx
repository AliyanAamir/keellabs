"use client"

import { cn } from "@/lib/utils"
import type React from "react"

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
  showRadialGradient?: boolean
}

export const AceterityAurora = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full w-full items-center justify-center bg-zinc-950 text-slate-50 transition-bg",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--aurora:repeating-linear-gradient(100deg,transparent_0%,var(--orange-500)_5%,var(--amber-400)_10%,transparent_15%,transparent_20%,var(--blue-500)_25%,var(--blue-400)_30%,transparent_35%,transparent_40%)]
            [background-image:var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%]
            filter
            blur-[15px]
            after:content-[""]
            after:absolute
            after:inset-0
            after:[background-image:var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora
            after:[background-attachment:fixed]
            pointer-events-none
            absolute
            -inset-[10px]
            opacity-70
            will-change-transform
            `,
            showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`,
          )}
          style={
            {
              "--orange-500": "#f97316",
              "--amber-400": "#fbbf24",
              "--blue-500": "#3b82f6",
              "--blue-400": "#60a5fa",
            } as React.CSSProperties
          }
        />
      </div>
      {children}
    </div>
  )
}
