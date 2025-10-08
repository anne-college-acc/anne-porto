import type React from "react"
type Project = {
  imageSrc: string
  title: string
  description: string
  year: string
  skills: string[]
  link: string
}

const projectsData: Project[] = [
  {
    imageSrc: "/certification-badge-or-diploma.jpg",
    title: "Certified Web Performance Specialist",
    description: "Web Performance Certification",
    year: "2025",
    skills: ["Core Web Vitals", "Performance", "Auditing"],
    link: "https://example.com/cert-web-performance",
  },
  {
    imageSrc: "/responsive-portfolio-ui-case-study.jpg",
    title: "Responsive Portfolio UI",
    description: "Design & Frontend Implementation",
    year: "2024",
    skills: ["Next.js", "Tailwind", "Accessibility"],
    link: "https://example.com/portfolio-ui",
  },
  {
    imageSrc: "/task-management-app-screenshot.jpg",
    title: "TaskFlow App",
    description: "Full‑Stack Productivity Tool",
    year: "2024",
    skills: ["Next.js", "API Routes", "SWR"],
    link: "https://example.com/taskflow",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-text-main/10 bg-(--card-ambient) shadow-md shadow-text-main/5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      style={
        {
          ["--card-ambient" as any]: "#f7f4f0",
        } as React.CSSProperties
      }
      aria-label={`${project.title} – ${project.description}`}
    >
      {/* Image */}
      <div className="w-full aspect-video overflow-hidden rounded-t-lg">
        <img src={project.imageSrc || "/placeholder.svg"} alt={project.title} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif italic font-semibold text-lg md:text-xl text-text-main transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>

        <div className="mt-1 flex flex-col gap-1">
          <p className="text-sm text-text-main/70">{project.description}</p>
          <span className="text-xs text-text-main/60">{project.year}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-text-main/5 px-2 py-1 text-xs text-text-main/70">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export function ProjectsSection() {
  return (
    <section aria-labelledby="certs-projects-title" className="w-full">
      <div className="mx-auto max-w-6xl px-8">
        <h2
          id="certs-projects-title"
          className="mb-12 font-serif italic font-semibold text-2xl md:text-3xl text-text-main text-balance"
        >
          Certifications & Projects
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((p) => (
            <ProjectCard key={`${p.title}-${p.year}`} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
