"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { useDevice } from "@/lib/use-device"

interface Trail {
  x: number
  y: number
  alpha: number
  size: number
}

const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor
}

export function CursorGlow() {
  const { isTouchDevice, isReady } = useDevice()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const trailsRef = useRef<Trail[]>([])
  const animationRef = useRef<number>(0)
  const [isVisible, setIsVisible] = useState(false)

  const createTrail = useCallback((x: number, y: number) => {
    trailsRef.current.push({
      x,
      y,
      alpha: 0.6,
      size: 150,
    })
    if (trailsRef.current.length > 20) {
      trailsRef.current.shift()
    }
  }, [])

  useEffect(() => {
    // Skip effect on touch devices
    if (isTouchDevice) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let lastTrailTime = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)

      const now = Date.now()
      if (now - lastTrailTime > 80) {
        createTrail(e.clientX, e.clientY)
        lastTrailTime = now
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", () => setIsVisible(true))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      mouseRef.current.x = lerp(mouseRef.current.x, targetRef.current.x, 0.15)
      mouseRef.current.y = lerp(mouseRef.current.y, targetRef.current.y, 0.15)

      const { x, y } = mouseRef.current

      trailsRef.current = trailsRef.current.filter((trail) => {
        trail.alpha -= 0.025
        trail.size += 1.5

        if (trail.alpha <= 0) return false

        const gradient = ctx.createRadialGradient(trail.x, trail.y, 0, trail.x, trail.y, trail.size)
        gradient.addColorStop(0, `rgba(180, 100, 40, ${trail.alpha * 0.1})`)
        gradient.addColorStop(0.5, `rgba(140, 70, 30, ${trail.alpha * 0.05})`)
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        return true
      })

      const outerGlow = ctx.createRadialGradient(x, y, 0, x, y, 300)
      outerGlow.addColorStop(0, "rgba(120, 60, 20, 0.08)")
      outerGlow.addColorStop(0.4, "rgba(100, 50, 15, 0.04)")
      outerGlow.addColorStop(0.7, "rgba(80, 40, 10, 0.02)")
      outerGlow.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(x, y, 300, 0, Math.PI * 2)
      ctx.fillStyle = outerGlow
      ctx.fill()

      const middleGlow = ctx.createRadialGradient(x, y, 0, x, y, 150)
      middleGlow.addColorStop(0, "rgba(200, 120, 50, 0.12)")
      middleGlow.addColorStop(0.5, "rgba(160, 90, 40, 0.06)")
      middleGlow.addColorStop(0.8, "rgba(120, 60, 25, 0.02)")
      middleGlow.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(x, y, 150, 0, Math.PI * 2)
      ctx.fillStyle = middleGlow
      ctx.fill()

      const innerGlow = ctx.createRadialGradient(x, y, 0, x, y, 60)
      innerGlow.addColorStop(0, "rgba(255, 160, 80, 0.15)")
      innerGlow.addColorStop(0.6, "rgba(220, 130, 60, 0.06)")
      innerGlow.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(x, y, 60, 0, Math.PI * 2)
      ctx.fillStyle = innerGlow
      ctx.fill()

      const centerGlow = ctx.createRadialGradient(x, y, 0, x, y, 10)
      centerGlow.addColorStop(0, "rgba(255, 200, 150, 0.2)")
      centerGlow.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(x, y, 10, 0, Math.PI * 2)
      ctx.fillStyle = centerGlow
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [createTrail, isTouchDevice])

  // Don't render on touch devices (iOS, mobile, tablets)
  if (isReady && isTouchDevice) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
    />
  )
}
