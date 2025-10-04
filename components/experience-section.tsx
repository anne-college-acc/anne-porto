import { ArrowUpRight } from "lucide-react"

type Experience = {
  title: string
  subtitle: string
  date: string
  description: string
  link: string
}

const experienceData: Experience[] = [
  {
    title: "2nd Place Winner - Codefest.id Hackathon 14",
    subtitle: "ONO",
    date: "May 2025 - June 2025",
    description:
      "Led a small team to design and ship a mobile-first prototype under a 48-hour deadline. Focused on accessibility, performance, and a smooth onboarding flow that increased task completion in testing.",
    link: "https://example.com/codefest-14",
  },
  {
    title: "Frontend Developer Intern",
    subtitle: "Studio Selaras",
    date: "Jan 2025 - Apr 2025",
    description:
      "Built reusable UI components with TypeScript and Tailwind, established linting and formatting rules, and improved Core Web Vitals by refining asset loading and reducing layout shifts.",
    link: "https://example.com/studio-selaras",
  },
  {
    title: "Student Research Assistant",
    subtitle: "Informatics Department",
    date: "Aug 2024 - Dec 2024",
    description:
      "Collaborated on a small research tool for data collection and visualization. Implemented a modular chart layer and improved the documentation for future student contributors.",
    link: "https://example.com/research-assistant",
  },
]

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <a href={item.link} target="_blank" rel="noreferrer" className="group block w-full transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        {/* Left: text content */}
        <div className="min-w-0 flex-1">
          <h3 className="font-serif italic font-semibold text-lg md:text-xl text-text-main transition-colors duration-300 group-hover:text-accent">
            {item.title}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm md:text-base font-sans text-text-main">
            <span className="truncate">{item.subtitle}</span>
            <span aria-hidden="true">•</span>
            <span className="shrink-0">{item.date}</span>
          </div>

          <p className="mt-2 text-sm md:text-base font-sans text-text-main/70">{item.description}</p>
        </div>

        {/* Right: arrow icon */}
        <ArrowUpRight
          className="mt-1 h-5 w-5 md:h-6 md:w-6 text-text-main transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        />
      </div>
    </a>
  )
}

export function ExperienceSection() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 md:space-y-8">
      {experienceData.map((item, idx) => (
        <div key={idx} className="border-b border-border pb-6 md:pb-8 last:border-b-0">
          <ExperienceItem item={item} />
        </div>
      ))}
    </div>
  )
}

export default ExperienceSection
