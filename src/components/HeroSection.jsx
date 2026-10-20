import Icon from './Icon'
import { profile } from '../data/portfolio'

const ctaStyles = {
    primary: 'bg-lime-500 hover:bg-lime-400 text-zinc-950', // Changed text to dark for contrast on lime
    secondary: 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-50',
}

export default function HeroSection() {
    return (
        <section id="hero" className="py-20 md:py-32">
            <p className="text-lime-400 font-medium mb-4">{profile.greeting}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-50 mb-6">
                {profile.title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10">
                {profile.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
                {profile.ctas.map((cta) => (
                    <a
                        key={cta.label}
                        href={cta.url}
                        {...(cta.external && { target: '_blank', rel: 'noopener noreferrer' })}
                        {...(cta.download && { download: true })}
                        className={`inline-flex items-center gap-2 font-medium px-5 py-3 rounded-lg transition-colors ${ctaStyles[cta.variant] ?? ctaStyles.primary}`}
                    >
                        {cta.label} <Icon name={cta.icon} size={18} />
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-4">
                {profile.socials.map((s) => (
                    <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.platform}
                        className="text-zinc-400 hover:text-lime-400 transition-colors"
                    >
                        <Icon name={s.icon} size={22} />
                    </a>
                ))}
            </div>
        </section>
    )
}