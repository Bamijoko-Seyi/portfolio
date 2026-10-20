import { about } from '../data/portfolio'

export default function AboutSection() {
    return (
        <section id="about" className="py-20 border-t border-zinc-900">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50 mb-2">{about.heading}</h2>
            <div className="max-w-2xl space-y-4 text-zinc-400 leading-relaxed">
                {about.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
        </section>
    )
}