import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800">
            <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#hero" className="font-bold tracking-tight text-zinc-50">
                    {profile.initials}<span className="text-lime-400">.</span>
                </a>

                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="text-sm text-zinc-400 hover:text-lime-400 transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-zinc-400 hover:text-lime-400"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {open && (
                <ul className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setOpen(false)} className="block text-zinc-400 hover:text-lime-400">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}