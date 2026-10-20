import { ExternalLink } from 'lucide-react'
import Icon from './Icon'

export default function ProjectCard({ project }) {
    return (
        <article className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-lime-500/50 transition-colors">
            {project.image && (
                <div className="aspect-video bg-zinc-800 overflow-hidden">
                    <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>
            )}

            <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight text-zinc-50 mb-1">{project.title}</h3>
                <p className="text-sm text-lime-400 mb-3">{project.tagline}</p>
                <p className="text-zinc-400 leading-relaxed mb-4">{project.description}</p>

                {project.tech_stack?.length > 0 && (
                    <ul className="flex flex-wrap gap-2 mb-5">
                        {project.tech_stack.map((tech) => (
                            <li key={tech} className="text-xs text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded">
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex gap-4">
                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-lime-400 hover:text-lime-300 font-medium"
                        >
                            Live Demo <ExternalLink size={14} />
                        </a>
                    )}
                    {project.repo_url && (
                        <a
                            href={project.repo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-50"
                        >
                            Source <Icon name="github" size={14} />
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}