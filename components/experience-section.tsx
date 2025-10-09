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
    title: "BINUS TV Club",
    subtitle: "Event Division Advisor for 2025 Media Journey",
    date: "Jul 2025 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "https://example.com/codefest-14",
  },
  {
    title: "BINUS TV Club",
    subtitle: "Talent Coordinator Advisor for Glimpse of BINUS TV Club",
    date: "Jul 2025 - Present",
    description:
      "Collaborated on a small research tool for data collection and visualization. Implemented a modular chart layer and improved the documentation for future student contributors.",
    link: "https://example.com/research-assistant",
  },
  {
    title: "BINUS TV Club",
    subtitle: "Registration Division Advisor for Bunga Rampai & Expo 2025",
    date: "May 2025 - Sept 2025",
    description:
      "Built reusable UI components with TypeScript and Tailwind, established linting and formatting rules, and improved Core Web Vitals by refining asset loading and reducing layout shifts.",
    link: "https://example.com/studio-selaras",
  },
  {
    title: "Academic Mentor Scholarship",
    subtitle: "Mentor for BINUS",
    date: "Sept 2024 - May 2025",
    description:
      "Selected as an Academic Mentor Scholarship Awardee, providing one-on-one academic mentoring to 10+ mentees. Received a scholarship stipend from the university for outstanding academic performance and mentorship contributions.",
    link: "https://example.com/codefest-14",
  },
]

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <a href={item.link} target="_blank" rel="noreferrer" className="group block w-full transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        {/* Left: text content */}
        <div className="min-w-0 flex-1 ">
          <h3 className="font-serif italic font-semibold text-lg md:text-xl text-text-main transition-colors duration-300 group-hover:text-accent">
            {item.title}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm md:text-base font-sans text-text-main">
            <span className="truncate">{item.subtitle}</span>
            <span aria-hidden="true">•</span>
            <span className="shrink-0">{item.date}</span>
          </div>

          <p className="mt-2 text-sm md:text-base font-sans text-text-main/70 text-justify">{item.description}</p>
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
