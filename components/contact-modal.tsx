"use client"

import { useState } from "react"
import { CloseIcon, SparkleIcon, SpinnerIcon } from "./icons"

interface User {
  name: string
  occupation: string
  employer: string
  location: string
}

interface ContactModalProps {
  user: User
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ user, isOpen, onClose }: ContactModalProps) {
  const [visitorName, setVisitorName] = useState("")
  const [visitorEmail, setVisitorEmail] = useState("")
  const [contactReason, setContactReason] = useState("Job Opportunity")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerateMessage = async () => {
    if (!visitorName || !contactReason) {
      setError("Please fill in your name and select a reason first.")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/generate-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorName,
          contactReason,
          userName: user.name,
          userOccupation: user.occupation,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      if (result.message) {
        setMessage(result.message)
      } else {
        throw new Error(result.error || "No message generated.")
      }
    } catch (err) {
      setError("Failed to generate message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-8 bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-1">
              Reason for Contacting
            </label>
            <select
              id="reason"
              value={contactReason}
              onChange={(e) => setContactReason(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Job Opportunity</option>
              <option>Project Collaboration</option>
              <option>Networking</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              onClick={handleGenerateMessage}
              disabled={isLoading}
              className="flex-1 py-2.5 px-4 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out
                         flex items-center justify-center gap-2
                         hover:bg-indigo-500 
                         focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75
                         disabled:bg-indigo-800 disabled:cursor-not-allowed"
            >
              {isLoading ? <SpinnerIcon /> : <SparkleIcon />}
              {isLoading ? "Generating..." : "Generate Message Draft"}
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 rounded-lg bg-gray-600 text-white font-semibold transition-all duration-300 ease-in-out
                         hover:bg-gray-500
                         focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
