import { ArrowUpRight } from "lucide-react"

type Experience = {
  title: string
  subtitle: string
  date: string
  description: string[]
  link: string
}

const experienceData: Experience[] = [
  {
    title: "BINUS TV Club",
    subtitle: "Staff of NEWS - BINUS TV Club Alam Sutera",
    date: "Jan 2025 - Present",
    description: [
      "Delivered live event reporting and wrote news articles covering campus activities, ensuring accurate and engaging communication for the organization’s audience",
      "Mentored 10+ junior members by providing guidance on reporting techniques, writing structure, and content standards to improve team output",
    ],
    link: "#",
  },
  {
    title: "BINUS TV Club",
    subtitle: 'Talent Coordinator Advisor for "Glimpse of BINUS TV Club" 2025',
    date: "Jul 2025 - Dec 2025",
    description: [
      "Mentored talent coordinators in managing talents need, interview schedules, and behind the scenes flow",
      "Standardized briefing templates and communication structures for future talent teams",
    ],
    link: "#",
  },
  {
    title: "BINUS TV Club",
    subtitle: 'Event Division Advisor for 2025 "Media Journey"',
    date: "Jul 2025 - Oct 2025",
    description: [
      "Provided strategic input on event planning, logistics, and division workflow",
      "Advised committees on schedule management, venue readiness, and cross-division coordination",
      "Supported quality control for event execution and communication flow",
    ],
    link: "#",
  },
  {
    title: "BINUS TV Club",
    subtitle: 'Registration Division Advisor for "Bunga Rampai & Expo" 2025',
    date: "May 2025 - Sept 2025",
    description: [
      "Supervised and guided the registration team to streamline 200+ participant handling and data accuracy",
      "Developed improved check-in workflows used for subsequent organizational events",
      "Trained new coordinators to manage communication and operational tasks effectively",
    ],
    link: "#",
  },
  {
    title: "BINUS Student Advisory and Support Center",
    subtitle: "Academic Mentor Scholarship",
    date: "July 2024 - Jan 2025",
    description: [
      "Developed effective learning strategies through academic support & sharing sessions for mentee",
      "Provided personalized guidance for mentee, improve academic performance, and encourage confidence",
      "Facilitated academic mentoring sessions to improve mentees study habits and academic performance",
    ],
    link: "#",
  },
  {
    title: "BINUS TV Club",
    subtitle: "Activist of NEWS Division",
    date: "Mar 2024 - Jan 2025",
    description: [
      "Completed organizational training programs led by industry professionals, covering leadership, communication, and operational execution",
      "Actively involved in regional and multi regional organization activities, supporting events, projects, and internal operations",
      "Applied training outcomes directly through hands-on execution across multiple organizational roles",
    ],
    link: "#",
  },
  {
    title: "BINUS TV Club",
    subtitle: 'Event Staff of 2024 "Media Journey"',
    date: "Sept 2024 - Dec 2024",
    description: [
      "Involved in planning & executing campus seminar with 150+ attendees",
      "Managed event schedules, venue preparation, and coordination with other divisions",
      "Provided on-site technical support and smooth process during event",
    ],
    link: "#",
  },
  {
    title: "BINUS TV Club",
    subtitle: 'Talent Coordinator of "Glimpse of BINUS TV Club" 2024',
    date: "July 2024 - Dec 2024",
    description: [
      "Coordinated talents and ensured readiness for performances",
      "Collaborated with event committees to ensure smooth interview session",
      "Assisted in preparing talents needs & technical support",
    ],
    link: "#",
  },
  {
    title: "BINUS TV Club",
    subtitle: "Consumption Staff for “Express Reel Excellence”",
    date: "Jun 2024 - Dec 2024",
    description: [
      "Sourced and evaluated snack and catering vendors based on budget, quality, and event requirements",
      "Coordinated ordering, delivery schedules, and on-site logistics to ensure timely distribution",
      "Supported cost control by aligning vendor selection with approved budgets and quantity planning",
      "Liaised with vendors and internal teams to ensure smooth execution during the event",
    ],
    link: "#",
  },
  {
    title: "BINUS TV Club",
    subtitle: 'Registration Coordinator for "Bunga Rampai & Expo" 2024 Alam Sutera Region',
    date: "Jun 2024 - Sept 2024",
    description: [
      "Led the registration process for 300+ event participants, while ensuring smooth data collection and accurate documentation",
      "Coordinated with the executive board and event divisions to align schedules, participant needs, and event flow",
      "Maintained communication with participants to confirm attendance and provide event information",
      "Executed direct event promotion at the booth by communicating key information to attendees and encouraging walk-in registrations through persuasive, friendly interactions",
    ],
    link: "#",
  },
  {
    title: "BINUS Global Employability & Entrepreneurship Center",
    subtitle: "Event Committee for BINUS Festival",
    date: "May 2024 & Nov 2024",
    description: [
      "Supported logistics, participant handling, and help with event process for BINUS Festival",
    ],
    link: "#",
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

          <ul className="mt-2 space-y-1">
            {item.description.map((desc, i) => (
              <li key={i} className="text-sm md:text-base font-sans text-text-main/70 text-justify relative pl-4">
                <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-text-main/60" />
                {desc}
              </li>
            ))}
          </ul>
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
