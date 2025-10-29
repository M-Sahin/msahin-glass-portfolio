"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  BriefcaseIcon,
  MapPinIcon,
  GithubIcon,
  LinkedInIcon,
  ExternalLinkIcon,
  QuoteIcon,
  ReactIcon,
  TypeScriptIcon,
  DotNetIcon,
  DockerIcon,
  NextJsIcon,
  TailwindIcon,
  AzureIcon,
  AwardIcon,
  BookOpenIcon,
  CalendarIcon,
  TrendingUpIcon,
  GlobeIcon,
  GeminiIcon,
} from "@/components/icons"
import { ContactModal } from "@/components/contact-modal"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { FloatingNav } from "@/components/floating-nav"
import { BackToTop } from "@/components/back-to-top"
import { BackgroundOrbs } from "@/components/background-orbs"
import { GitHubActivity } from "@/components/github-activity"

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const user = {
    name: "Murat Sahin",
    occupation: "Medior .NET Engineer",
    employer: "Het CAK",
    location: "Den Haag, the Netherlands",
  }

  const projects = [
    {
      title: "Omgekeerde Stemwijzer API",
      description:
        "Reverse voting guide API built with .NET 9 and AI-powered party matching using OpenAI and Groq. The API is running in Google Cloud Run and users log in via FireBaseUI.",
      github: "https://github.com/M-Sahin/OmgekeerdeStemWijzer.Api",
      demo: null,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/omgekeerdestemwijzer-banner-DzFLilZ1KRC7dHNbmdik0aoI7eTkOt.png",
      tags: [".NET 9", "OpenAI", "Docker", "Azure", "RAG", "FireBaseUI"],
    },
    {
      title: "Omgekeerde Stemwijzer Front-End",
      description:
        "Clean and minimalistic front-end interface that gets information from the API. Users can log in, chat with the RAG agent and view recent chats",
      github: "https://github.com/M-Sahin/omgekeerde-stemwijzer-frontend",
      demo: "https://de-omgekeerde-stemwijzer.onrender.com/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/omgekeerdestemwijzer-banner-DzFLilZ1KRC7dHNbmdik0aoI7eTkOt.png",
      tags: [".NET 9", "OpenAI", "Docker", "Azure", "RAG"],
    },
    {
      title: "SmartWheels client website",
      description: "A modern and sleek business presentation site featuring clean design elements and contrasts",
      github: "https://github.com/M-Sahin/smartwheels-website",
      demo: "https://smartwheels-wxs1.onrender.com/",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smartwheels-1dbywybgXydpqJd5Ah2w4CDH2wenuN.png",
      tags: ["Typescript", "CSS", "Next.js"],
    },
    {
      title: "CanBv client website",
      description: "Modern website built in Wordpress and custom CSS. Includes dynamic forms and CMS.",
      github: null,
      demo: "https://canbv.nl",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canbv-enfrzVRDZ4P4x0wmjyVpjiBxQnMcqb.png",
      tags: ["Wordpress", "CSS"],
    },
  ]

  const experiences = [
    {
      role: "Medior .NET Engineer",
      company: "Het CAK",
      period: "2022 - Present",
      description: "Developing modern and clean solutions for the healthcare and insurance domains.",
    },
    {
      role: "Junior .NET Developer",
      company: "Experis",
      period: "2021 - 2022",
      description: "Developed enterprise applications and implemented microservices architecture.",
    },
    {
      role: "System Engineer",
      company: "Hogeschool Rotterdam",
      period: "2019 - 2021",
      description: "Maintaining robust systems for the IT landscape of the school.",
    },
  ]

  const quotes = [
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    {
      text: "The best error message is the one that never shows up.",
      author: "Thomas Fuchs",
    },
  ]

  const skills = [
    { name: "React", icon: ReactIcon, color: "text-cyan-400" },
    { name: "TypeScript", icon: TypeScriptIcon, color: "text-blue-400" },
    { name: ".NET", icon: DotNetIcon, color: "text-purple-400" },
    { name: "Docker", icon: DockerIcon, color: "text-blue-500" },
    { name: "Next.js", icon: NextJsIcon, color: "text-white" },
    { name: "Tailwind", icon: TailwindIcon, color: "text-teal-400" },
    { name: "Azure", icon: AzureIcon, color: "text-blue-400" },
  ]

  const stats = [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 20, suffix: "+" },
    { label: "Technologies", value: 10, suffix: "+" },
    { label: "Happy Clients", value: 25, suffix: "+" },
  ]

  const certifications = [
    {
      title: "Full-stack Developement with .NET",
      issuer: "Noroff School of Technology and Digital Media",
      date: "2022",
      link: "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvcyFBcjdNZ2s0WnRjd3UtanhQUmtUejc2Q0VleFU0P2U9aWhjSjA2&cid=2ECCB5194E82CCBE",
      icon: GlobeIcon, // Changed from AzureIcon to GlobeIcon for web development
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2020",
      link: "https://www.freecodecamp.org/certification/murat-sahin/responsive-web-design",
      icon: BookOpenIcon,
    },
    {
      title: "ITIL 4 Foundation",
      issuer: "AXELOS Global Best Practice",
      date: "Jul 2021",
      credential: "GR671291422MS",
      icon: AwardIcon,
    },
    {
      title: "Microsoft 365 Certified: Fundamentals",
      issuer: "Microsoft",
      date: "2021",
      link: "https://www.credly.com/badges/06f10c3d-ff7a-421a-a7ef-cf45124102e9",
      icon: AzureIcon,
    },
    {
      title: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle",
      date: "2021",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8EA7FA42E4BE0914FA7DF06DE3B8615C8686E4A3ED7D9FBAB9D87E6580E8F607",
      icon: AwardIcon,
    },
  ]

  const currentlyLearning = [
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      description: "Cloud concepts, Azure services, security, privacy, compliance, and trust",
      progress: 65,
    },
    {
      title: "Developing Solutions for Microsoft Azure (AZ-204)",
      description: "Azure compute solutions, storage, security, monitoring, and integration",
      progress: 15,
    },
  ]

  const articles = [
    {
      title: "Stop Paying for $3,000 RAG Bootcamps",
      excerpt:
        "Qdrant just put a full, production-grade vector search course on YouTube for free. Learn how to build RAG systems that actually scale.",
      date: "Oct 2024",
      readTime: "5 min read",
      tags: ["AI", "RAG", "Vector Search"],
      link: "https://www.linkedin.com/posts/progressivethinker_stop-paying-for-3000-rag-bootcamps-activity-7388804918993756160-n4PR",
    },
    {
      title: "Build an AI Coding Agent with Python and Gemini",
      excerpt:
        "Learn how to build a basic version of Claude Code using Google's free Gemini API. A comprehensive guide to creating agentic AI code editors.",
      date: "2024",
      readTime: "15 min read",
      tags: ["AI", "Python", "Gemini"],
      link: "https://www.freecodecamp.org/news/build-an-ai-coding-agent-with-python-and-gemini/",
    },
    {
      title: "Learn API Fundamentals and Architecture",
      excerpt:
        "A beginner-friendly guide covering REST, SOAP, GraphQL, gRPC, and how to choose the right API architecture for your project.",
      date: "Mar 2025",
      readTime: "12 min read",
      tags: ["API", "Architecture", "Backend"],
      link: "https://www.freecodecamp.org/news/learn-api-fundamentals-and-architecture/",
    },
    {
      title: "Learn System Design Principles",
      excerpt:
        "Master system design with this comprehensive tutorial covering scalability, reliability, data handling, and high-level architecture.",
      date: "Jul 2024",
      readTime: "60 min watch",
      tags: ["System Design", "Architecture", "Scalability"],
      link: "https://www.freecodecamp.org/news/learn-system-design-principles/",
    },
    {
      title: "Is .NET Dead? The Future of .NET in 2025",
      excerpt:
        "Discover why .NET is still the most demanded framework and explore its trends including .NET 9, cloud-native development, and AI integration.",
      date: "Jan 2025",
      readTime: "10 min read",
      tags: [".NET", "Trends", "Future"],
      link: "https://www.softacom.com/wiki/development/future-of-dot-net/",
    },
  ]

  return (
    <main className="relative w-full overflow-hidden bg-gray-900">
      <BackgroundOrbs />
      <ScrollIndicator />
      <FloatingNav />
      <BackToTop />

      <section id="hero" className="relative h-screen w-full">
        <div
          className="absolute inset-0 -z-10 h-full w-full 
                   bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
                   md:bg-gradient-to-br md:from-gray-900 md:via-indigo-950 md:to-purple-950"
        ></div>

        <div className="relative z-10 flex h-full w-full flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center md:justify-end p-8 lg:pr-24">
            <div className="w-full max-w-md text-left animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{user.name}</h1>

              <div className="flex flex-col items-start justify-center gap-4 mt-8">
                <div className="flex items-center gap-3 text-lg text-gray-300">
                  <BriefcaseIcon className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>
                    {user.occupation} @ <strong>{user.employer}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-lg text-gray-300">
                  <MapPinIcon className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>{user.location}</span>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <a
                    href="https://github.com/M-Sahin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <GithubIcon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/murat-s-70545987/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <LinkedInIcon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full">
                <button
                  onClick={() => {
                    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="flex-grow py-3 px-8 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out
                                 hover:bg-indigo-500 hover:scale-105 
                                 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
                >
                  View My Work
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-grow py-3 px-8 rounded-lg bg-transparent text-indigo-300 font-semibold border border-indigo-500/50 
                                 transition-all duration-300 ease-in-out
                                 hover:bg-indigo-700/20 hover:border-indigo-500 
                                 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75
                                 flex items-center justify-center gap-2"
                >
                  <GeminiIcon className="w-5 h-5" />
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 overflow-hidden">
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-purple-800 rounded-full opacity-20 blur-3xl animate-pulse" />
            <div
              className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-indigo-800 rounded-full opacity-20 blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute w-56 h-56 lg:w-72 lg:h-72 bg-pink-800 rounded-full opacity-20 blur-3xl animate-pulse"
              style={{ animationDelay: "4s" }}
            />
          </div>
        </div>
      </section>

      <AnimatedSection>
        <section className="relative w-full py-16 px-8 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
                  <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 text-center transition-all duration-300 hover:border-indigo-500/50 hover:scale-105">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} />
                    <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="about" className="relative w-full py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">About Me</h2>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 md:p-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Medior .NET Engineer with over almost 5 years of experience building scalable web
                  applications and enterprise solutions. My expertise lies in creating robust backend systems,
                  implementing clean architecture patterns, and leading development teams to deliver high-quality
                  software. I also have a great passion for building and designing clean and minimalistic front-end
                  interfaces.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or mentoring aspiring developers. I believe in writing clean, maintainable code and fostering
                  collaborative team environments where everyone can grow and succeed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="work" className="relative w-full py-24 px-8 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur"></div>
                  <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10">
                    <div className="relative h-48 w-full overflow-hidden bg-gray-900/50">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm bg-indigo-600/20 text-indigo-300 rounded-full border border-indigo-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                          >
                            <GithubIcon className="w-5 h-5" />
                            <span className="text-sm">GitHub</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                          >
                            <ExternalLinkIcon className="w-5 h-5" />
                            <span className="text-sm">Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="experience" className="relative w-full py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">My Experience</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 transform md:-translate-x-1/2"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10"></div>

                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                        <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 transition-all duration-300 hover:border-indigo-500/50 hover:scale-105">
                          <div className="flex items-center gap-2 mb-2">
                            <BriefcaseIcon className="w-5 h-5 text-indigo-400" />
                            <span className="text-indigo-400 font-medium text-sm">{exp.period}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                          <p className="text-lg text-gray-300 mb-3">{exp.company}</p>
                          <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="certifications" className="relative w-full py-24 px-8 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Certifications & Learning</h2>

            {/* Certifications Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AwardIcon className="w-6 h-6 text-indigo-400" />
                Earned Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur"></div>
                    <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 transition-all duration-300 hover:border-indigo-500/50 hover:scale-105">
                      <cert.icon className="w-10 h-10 text-indigo-400 mb-4" />
                      <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                      <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                      {cert.credential && <p className="text-xs text-gray-500 mb-3">ID: {cert.credential}</p>}
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                        >
                          <span>View Certificate</span>
                          <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUpIcon className="w-6 h-6 text-indigo-400" />
                Currently Learning
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentlyLearning.map((course, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                    <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 transition-all duration-300 hover:border-indigo-500/50">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white flex-1">{course.title}</h4>
                        <span className="text-indigo-400 font-bold text-sm">{course.progress}%</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="github" className="relative w-full py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">GitHub Activity</h2>
            <GitHubActivity />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="articles" className="relative w-full py-24 px-8 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Articles & Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur"></div>
                  <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 h-full transition-all duration-300 hover:border-indigo-500/50 hover:scale-105 hover:-translate-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs bg-indigo-600/20 text-indigo-300 rounded-full border border-indigo-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium">
                      <span>Read Article</span>
                      <ExternalLinkIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="quotes" className="relative w-full py-24 px-8 bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Words to Code By</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quotes.map((quote, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur"></div>
                  <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10">
                    <QuoteIcon className="w-8 h-8 text-indigo-400 mb-4 opacity-50" />
                    <p className="text-gray-300 text-lg leading-relaxed mb-4 italic">{quote.text}</p>
                    <p className="text-indigo-400 font-medium">— {quote.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <ContactModal user={user} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </div>
  )
}

function CountUpNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, hasAnimated])

  return (
    <div ref={ref} className="text-4xl font-bold text-white">
      {count}
      {suffix}
    </div>
  )
}
