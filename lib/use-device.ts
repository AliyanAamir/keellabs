"use client"

import { useState, useEffect } from "react"

interface DeviceInfo {
  isMobile: boolean
  isIOS: boolean
  isTouchDevice: boolean
  isReady: boolean
}

export function useDevice(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isIOS: false,
    isTouchDevice: false,
    isReady: false,
  })

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || ""
      
      // Detect iOS
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) || 
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
      
      // Detect touch device
      const isTouchDevice = "ontouchstart" in window || 
        navigator.maxTouchPoints > 0
      
      // Detect mobile (width-based + touch)
      const isMobile = window.innerWidth < 768 || (isTouchDevice && window.innerWidth < 1024)

      setDeviceInfo({
        isMobile,
        isIOS,
        isTouchDevice,
        isReady: true,
      })
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  return deviceInfo
}
