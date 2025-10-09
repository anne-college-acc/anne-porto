"use client"

import { useEffect, useState } from "react"
import { MapPin, Briefcase, Mail, Linkedin, Instagram, Menu, X } from "lucide-react"
import { ExperienceSection } from "../components/experience-section"
import { ProjectsSection } from "../components/projects-section"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const greetings = [
    "Hi, my name is",
    "Halo, nama saya",
    "안녕하세요, 제 이름은",
    "Hallo, mein Name ist",
    "你好，我的名字是",
  ]
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "certifications", "contact"]
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { root: null, threshold: 0.6 },
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const intervalId = setInterval(() => {
      setIsFading(true)
      timeoutId = setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length)
        setIsFading(false)
      }, 500) // fade duration
    }, 5000) // slow the cycle to 5s per language

    return () => {
      clearInterval(intervalId)
      if (timeoutId) clearTimeout(timeoutId)
    }
    // greetings length is static; empty deps is fine
  }, [])

  return (
    <div className="font-sans">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-transparent flex justify-between items-center px-8 h-20">
        {/* Hide desktop links on mobile */}
        <div className="hidden md:flex items-center gap-8 font-serif italic">
          <a
            href="#home"
            className={`nav-link text-text-main font-semibold ${activeSection === "home" ? "active" : ""}`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link text-text-main font-semibold ${activeSection === "about" ? "active" : ""}`}
          >
            About
          </a>
          <a
            href="#experience"
            className={`nav-link text-text-main font-semibold ${activeSection === "experience" ? "active" : ""}`}
          >
            Experience
          </a>
          <a
            href="#certifications"
            className={`nav-link text-text-main font-semibold ${activeSection === "certifications" ? "active" : ""}`}
          >
            Certifications & Projects
          </a>
        </div>

        {/* Hide desktop "Contact me" on mobile, add hamburger on mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById("contact")
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
            className="hidden md:inline-flex px-6 py-2 border border-accent text-accent bg-transparent hover:bg-accent hover:text-background transition-all duration-300 rounded-md items-center justify-center"
            aria-label="Scroll to contact section"
          >
            Contact me
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-text-main hover:text-accent transition-transform duration-200 hover:-translate-y-0.5"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background">
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex items-center justify-center rounded-md p-2 text-text-main hover:text-accent transition-colors"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>

          <div className="h-full w-full flex flex-col items-center justify-center gap-y-8">
            <a
              href="#home"
              className="text-2xl font-serif italic text-text-main hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" })
                setIsMenuOpen(false)
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-2xl font-serif italic text-text-main hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })
                setIsMenuOpen(false)
              }}
            >
              About
            </a>
            <a
              href="#experience"
              className="text-2xl font-serif italic text-text-main hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth", block: "start" })
                setIsMenuOpen(false)
              }}
            >
              Experience
            </a>
            <a
              href="#certifications"
              className="text-2xl font-serif italic text-text-main hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth", block: "start" })
                setIsMenuOpen(false)
              }}
            >
              Certifications & Projects
            </a>
            <a
              href="#contact"
              className="text-2xl font-serif italic text-text-main hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                setIsMenuOpen(false)
              }}
            >
              Contact me
            </a>
          </div>
        </div>
      )}

      {/* Home / Landing Section */}
      <section id="home" className="min-h-[calc(100svh-80px)] flex flex-col items-center justify-center px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif italic font-bold text-center mb-4 text-text-main text-balance">
          <span className={`inline-block transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
            {greetings[greetingIndex]}
          </span>{" "}
          <span className="text-accent">Anne Trulyta</span>!
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl text-text-main">
          International Business Management undergraduate fluent in four languages. Passionate about global growth, eager to help ideas grow internationally!
        </p>
        <a
          href="#about"
          className="mt-28 text-sm text-text-main/70 hover:text-text-main underline-offset-4 hover:underline transition"
        >
          Scroll to learn more!
        </a>
      </section>

      {/* Placeholder Sections */}
      <section id="about" className="scroll-mt-20 px-12 md:px-20 py-16 overflow-x-hidden">
      
        <div className="mx-auto max-w-5xl"> 
          <h2 className="font-serif italic font-semibold text-2xl md:text-3xl text-text-main mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: description + micro-lines (heading removed from here) */}
            <div className="order-last md:order-first">
              <p className="mt-4 text-base md:text-lg text-text-main/90 text-justify">
                I’m an International Business Management undergraduate fluent in Indonesian, English, Mandarin, and Korean. I enjoy learning how people and culture shape the way businesses grow and operate globally. My strength lies in understanding individuals, recognizing their talents and aligning them with what they do best. I aim to help organizations build strong, people-driven strategies for international expansion.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-3 text-text-main/80">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm md:text-base">Based in Tangerang</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm md:text-base">Currently Studying at BINUS University</span>
                </div>
              </div>
            </div>

            {/* Right: tombstone-shaped image */}
            <div className="flex justify-center md:justify-end order-first md:order-last">
              <div className="tombstone shadow-md rounded-full w-48 h-48 mx-auto mb-8 md:rounded-none md:w-auto md:h-auto md:mx-0 md:mb-0 overflow-hidden">
                <img src="/images/anne-about.jpg" alt="Portrait placeholder" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-20 py-16 md:py-24 px-8">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="font-serif italic font-semibold text-2xl md:text-3xl mb-6 md:mb-8">Experience</h2>
        </div>
        <ExperienceSection />
      </section>

      {/* Keep remaining placeholder sections for now */}
      <section
        id="certifications"
        className="min-h-screen scroll-mt-20 flex items-center justify-center px-8 overflow-x-hidden"
      >
        <div className="w-full">
          <ProjectsSection />
        </div>
      </section>

      <section id="contact" className="min-h-screen scroll-mt-20 flex items-center justify-center px-8">
        {/* Implement minimalist and elegant contact section */}
        <div className="w-full max-w-2xl flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-balance">
            {"Let's create something together."}
          </h2>
          <p className="text-base md:text-lg text-text-main/80 font-sans text-pretty">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>

          {/* Social links */}
          <div className="mt-8 flex flex-row items-center justify-center gap-x-4">
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              title="Email"
              className="p-3 rounded-md text-text-main/80 hover:text-accent transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <Mail className="h-8 w-8" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="p-3 rounded-md text-text-main/80 hover:text-accent transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <Linkedin className="h-8 w-8" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="p-3 rounded-md text-text-main/80 hover:text-accent transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <Instagram className="h-8 w-8" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: currentColor;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        /* Apply tombstone shape only on desktop so mobile circle (rounded-full) isn't overridden */
        @media (min-width: 768px) {
          .tombstone {
            --tomb-w: 360px;      /* base width for md */
            width: var(--tomb-w);
            height: 480px;        /* base height for md */
            overflow: hidden;

            /* top corners: horizontal and vertical radii are half the width => semicircle */
            border-top-left-radius: calc(var(--tomb-w) / 2) calc(var(--tomb-w) / 2);
            border-top-right-radius: calc(var(--tomb-w) / 2) calc(var(--tomb-w) / 2);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
        @media (min-width: 1024px) {
          .tombstone {
            --tomb-w: 400px;
            height: 520px;
          }
        }

        /* Ensure the image fully fills the frame without baseline gaps */
        .tombstone :global(img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  )
}
