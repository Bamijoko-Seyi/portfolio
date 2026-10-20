import Icon from './Icon'
import { profile } from '../data/portfolio'

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-zinc-900 py-12 mt-10">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-zinc-50 font-bold tracking-tight">{profile.name}</p>
                    <p className="text-sm text-zinc-500">Let's build something together.</p>
                </div>

                <div className="flex items-center gap-4">
                    <a href={`mailto:${profile.email}`} aria-label="Email" className="text-zinc-400 hover:text-zinc-50 transition-colors">
                        <Icon name="mail" size={20} />
                    </a>
                    {profile.socials.map((s) => (
                        <a
                            key={s.platform}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.platform}
                            className="text-zinc-400 hover:text-zinc-50 transition-colors"
                        >
                            <Icon name={s.icon} size={20} />
                        </a>
                    ))}
                </div>

                <p className="text-xs text-zinc-600">© {new Date().getFullYear()} {profile.name}</p>
            </div>
        </footer>
    )
}