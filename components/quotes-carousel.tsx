"use client"

import { useState, useEffect } from "react"
import { QuoteIcon } from "@/components/icons"

interface Quote {
  text: string
  author: string
}

interface QuotesCarouselProps {
  quotes: Quote[]
}

export function QuotesCarousel({ quotes }: QuotesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, quotes.length])

  // Resume auto-play after pause
  useEffect(() => {
    if (!isPaused) return

    const timeout = setTimeout(() => {
      setIsPaused(false)
    }, 10000)

    return () => clearTimeout(timeout)
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsPaused(true)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
    setIsPaused(true)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length)
    setIsPaused(true)
  }

  return (
    <div className="relative">
      {/* Main carousel container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {quotes.map((quote, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative group mx-auto max-w-3xl">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
                <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 md:p-12 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 min-h-[280px] flex flex-col justify-center">
                  <QuoteIcon className="w-10 h-10 text-indigo-400 mb-6 opacity-50" />
                  <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-6 italic text-balance">
                    {quote.text}
                  </p>
                  <p className="text-indigo-400 font-medium text-lg">— {quote.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 rounded-full p-3 text-white hover:bg-indigo-600/80 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-label="Previous quote"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 rounded-full p-3 text-white hover:bg-indigo-600/80 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-label="Next quote"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              index === currentIndex
                ? "w-8 h-3 bg-gradient-to-r from-indigo-600 to-purple-600"
                : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
