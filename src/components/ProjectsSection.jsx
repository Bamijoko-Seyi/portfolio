import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolio'

export default function ProjectsSection() {
    // Optional: sort so highlighted projects appear first
    const ordered = [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight))

    return (
        <section id="projects" className="py-20 border-t border-zinc-900">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50 mb-2">Projects</h2>
            <p className="text-zinc-400 mb-10">Selected work demonstrating full-stack architecture and clean UI.</p>

            {ordered.length === 0 ? (
                <p className="text-zinc-500">No projects yet — check back soon.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-6">
                    {ordered.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </section>
    )
}