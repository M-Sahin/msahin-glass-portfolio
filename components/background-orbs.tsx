"use client"

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-float-delayed"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-float-delayed"
        style={{ animationDelay: "6s" }}
      />
    </div>
  )
}
