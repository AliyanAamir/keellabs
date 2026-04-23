"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface SmoothScrollProps {
  children: ReactNode
  mobileBreakpoint?: number
}

export function SmoothScroll({ children, mobileBreakpoint = 768 }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [mobileBreakpoint])

  useEffect(() => {
    const container = containerRef.current
    if (!container || isMobile) {
      // Reset body height and container transform on mobile
      document.body.style.height = ""
      if (container) {
        container.style.transform = ""
      }
      return
    }

    let current = 0
    let target = 0
    const ease = 0.075

    const updateScroll = () => {
      target = window.scrollY
      current += (target - current) * ease

      if (container) {
        container.style.transform = `translateY(${-current}px)`
      }

      animationRef.current = requestAnimationFrame(updateScroll)
    }

    const setBodyHeight = () => {
      document.body.style.height = `${container.scrollHeight}px`
    }

    setBodyHeight()
    window.addEventListener("resize", setBodyHeight)
    animationRef.current = requestAnimationFrame(updateScroll)

    return () => {
      window.removeEventListener("resize", setBodyHeight)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      document.body.style.height = ""
    }
  }, [isMobile])

  // On mobile, render children without the fixed positioning
  if (isMobile) {
    return <>{children}</>
  }

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full will-change-transform">
      {children}
    </div>
  )
}
