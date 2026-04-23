"use client"

import { useEffect, useRef, useCallback } from "react"

interface Ripple {
  x: number
  y: number
  size: number
  alpha: number
}

export function RippleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ripplesRef = useRef<Ripple[]>([])
  const animationRef = useRef<number>()
  const lastMousePosRef = useRef({ x: 0, y: 0 })

  const createRipple = useCallback((x: number, y: number) => {
    ripplesRef.current.push({
      x,
      y,
      size: 0,
      alpha: 0.5,
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePosRef.current.x
      const dy = e.clientY - lastMousePosRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > 30) {
        createRipple(e.clientX, e.clientY)
        lastMousePosRef.current = { x: e.clientX, y: e.clientY }
      }
    }

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => createRipple(e.clientX, e.clientY), i * 100)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.size += 4
        ripple.alpha -= 0.008

        if (ripple.alpha <= 0) return false

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 120, 50, ${ripple.alpha})`
        ctx.lineWidth = 2
        ctx.stroke()

        // Inner ripple
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.size * 0.6, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 180, 100, ${ripple.alpha * 0.5})`
        ctx.lineWidth = 1
        ctx.stroke()

        return true
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [createRipple])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-20" />
}
