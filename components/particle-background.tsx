"use client"

import { useEffect, useRef, useState } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLowPerf, setIsLowPerf] = useState(false)

  useEffect(() => {
    // Detect iOS/mobile for performance adjustments
    const checkDevice = () => {
      const userAgent = navigator.userAgent || ""
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) || 
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
      const isMobile = window.innerWidth < 768 || "ontouchstart" in window
      setIsLowPerf(isIOS || isMobile)
    }
    checkDevice()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationId: number
    const particles: Particle[] = []
    // Reduce particle count on low-performance devices
    const particleCount = isLowPerf ? 25 : 50
    // Reduce connection distance check on low-performance devices
    const connectionDistance = isLowPerf ? 100 : 150

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvasWidth) this.x = 0
        if (this.x < 0) this.x = canvasWidth
        if (this.y > canvasHeight) this.y = 0
        if (this.y < 0) this.y = canvasHeight
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(234, 88, 12, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const resize = () => {
      // Use device pixel ratio for sharp rendering, but cap it on mobile
      const dpr = isLowPerf ? 1 : Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    const init = () => {
      resize()
      particles.length = 0
      const displayWidth = window.innerWidth
      const displayHeight = window.innerHeight
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(displayWidth, displayHeight))
      }
    }

    const animate = () => {
      const displayWidth = window.innerWidth
      const displayHeight = window.innerHeight
      
      ctx.clearRect(0, 0, displayWidth, displayHeight)

      particles.forEach((particle) => {
        particle.update(displayWidth, displayHeight)
        particle.draw(ctx)
      })

      // Draw connections (skip on very low performance or reduce complexity)
      if (!isLowPerf || particles.length <= 25) {
        particles.forEach((a, i) => {
          particles.slice(i + 1).forEach((b) => {
            const dx = a.x - b.x
            const dy = a.y - b.y
            const distanceSquared = dx * dx + dy * dy
            const maxDistSquared = connectionDistance * connectionDistance

            if (distanceSquared < maxDistSquared) {
              const distance = Math.sqrt(distanceSquared)
              ctx.strokeStyle = `rgba(234, 88, 12, ${0.1 * (1 - distance / connectionDistance)})`
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
            }
          })
        })
      }

      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [isLowPerf])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-50" 
      style={{
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    />
  )
}
