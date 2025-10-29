"use client"

import { GithubIcon } from "@/components/icons"

export function GitHubActivity() {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
      <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 transition-all duration-300 hover:border-indigo-500/50">
        <div className="flex items-center gap-3 mb-6">
          <GithubIcon className="w-8 h-8 text-indigo-400" />
          <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
        </div>

        <div className="space-y-4">
          <a href="https://github.com/M-Sahin" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src="https://ghchart.rshah.org/6366f1/M-Sahin"
              alt="GitHub Contribution Chart"
              className="w-full rounded-lg opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
              <p className="text-gray-400 text-sm mb-1">Public Repos</p>
              <p className="text-2xl font-bold text-white">15+</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
              <p className="text-gray-400 text-sm mb-1">Contributions</p>
              <p className="text-2xl font-bold text-white">500+</p>
            </div>
          </div>

          <a
            href="https://github.com/M-Sahin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mt-4"
          >
            <span>View Full Profile</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
