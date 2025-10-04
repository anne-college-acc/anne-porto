"use client"

import { useEffect, useState } from "react"
import { MapPin, Briefcase } from "lucide-react"

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<string>("home")

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
        <div className="flex items-center gap-8 font-serif italic">
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
        <a
          href="#contact"
          className="px-6 py-2 border border-accent text-accent bg-transparent hover:bg-accent hover:text-background transition-all duration-300 rounded-md inline-flex items-center justify-center"
          aria-label="Scroll to contact section"
        >
          Contact me
        </a>
      </nav>

      {/* Home / Landing Section */}
      <section id="home" className="min-h-[calc(100svh-80px)] flex flex-col items-center justify-center px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif italic font-bold text-center mb-4 text-text-main whitespace-nowrap">
          <span className={`inline-block transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
            {greetings[greetingIndex]}
          </span>{" "}
          <span className="text-accent">Anne Trulyta</span>!
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl text-text-main">
          I am a passionate developer creating elegant and intuitive digital experiences.
        </p>
        <a
          href="#about"
          className="mt-28 text-sm text-text-main/70 hover:text-text-main underline-offset-4 hover:underline transition"
        >
          Scroll to learn more!
        </a>
      </section>

      {/* Placeholder Sections */}
      <section id="about" className="scroll-mt-20 px-12 md:px-20 py-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: header + description + micro-lines */}
          <div>
            <h2 className="font-serif italic font-semibold text-2xl md:text-3xl text-text-main">About Me</h2>
            <p className="mt-4 text-base md:text-lg text-text-main/90 text-justify">
              I’m a developer focused on crafting elegant, accessible, and thoughtfully engineered interfaces. My work
              balances aesthetics and performance, aiming for experiences that feel intuitive and delightful. I value
              maintainable systems, clear communication, and continuous learning with each project. Outside of code, I
              enjoy exploring design, reading, and the occasional deep-dive into new tools.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 md:gap-4 text-text-main/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm md:text-base">Based in Your City</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm md:text-base">Currently at Your Company / University</span>
              </div>
            </div>
          </div>

          {/* Right: tombstone-shaped image */}
          <div className="flex justify-center md:justify-end">
            <div className="tombstone shadow-md">
              <img
                src="/images/about-portrait.webp"
                alt="Portrait placeholder"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keep remaining placeholder sections for now */}
      <section id="experience" className="min-h-screen scroll-mt-20 flex items-center justify-center px-8">
        <h2 className="text-4xl font-serif italic font-semibold">Experience Section (Coming Soon)</h2>
      </section>

      <section id="certifications" className="min-h-screen scroll-mt-20 flex items-center justify-center px-8">
        <h2 className="text-4xl font-serif italic font-semibold">Certifications & Projects Section (Coming Soon)</h2>
      </section>

      <section id="contact" className="min-h-screen scroll-mt-20 flex items-center justify-center px-8">
        <h2 className="text-4xl font-serif italic font-semibold">Contact Section (Coming Soon)</h2>
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

        /* Tombstone: half-circle top + rectangular bottom using CSS masks.
           Works in modern browsers; border is omitted for a cleaner look. */
        .tombstone {
          width: 320px;
          height: 440px;
          overflow: hidden;
          -webkit-mask:
            radial-gradient(closest-side at 50% 0, #000 99.5%, transparent 100%) top / 100% 50% no-repeat,
            linear-gradient(#000, #000) bottom / 100% 50% no-repeat;
          mask:
            radial-gradient(closest-side at 50% 0, #000 99.5%, transparent 100%) top / 100% 50% no-repeat,
            linear-gradient(#000, #000) bottom / 100% 50% no-repeat;
        }
        @media (min-width: 768px) {
          .tombstone { width: 360px; height: 480px; }
        }
        @media (min-width: 1024px) {
          .tombstone { width: 400px; height: 520px; }
        }
      `}</style>
    </div>
  )
}
