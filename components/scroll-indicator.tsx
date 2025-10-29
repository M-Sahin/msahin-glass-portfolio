"use client"

import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
      {/* Vertical stripes */}
      <div className="relative h-64 w-1 bg-gray-700/30 rounded-full overflow-hidden">
        {/* Progress indicator */}
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Decorative stripes */}
      <div className="flex gap-1">
        <div className="w-0.5 h-8 bg-indigo-500/30 rounded-full" />
        <div className="w-0.5 h-8 bg-purple-500/30 rounded-full" />
        <div className="w-0.5 h-8 bg-pink-500/30 rounded-full" />
      </div>
    </div>
  )
}
