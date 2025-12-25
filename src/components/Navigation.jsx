import { useState } from "react"
import logo from "/img/logo.png"

export default function Navigation({ activeSection, setActiveSection }) {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { label: "Pengalaman", id: "pengalaman" },
        { label: "Proyek", id: "proyek" },
        { label: "Kontak", id: "kontak" },
    ]

    return (
        <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
                <img src={logo} className="w-8" alt="" />
                <a href="/" className="text-2xl font-bold tracking-tight text-black">
                    KokoyDev
                </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
                {navItems.map((item) => (
                <a
                    href={`#${item.id}`}
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`text-sm cursor-pointer font-normal transition-colors ${
                    activeSection === item.id ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                >
                    {item.label}
                </a>
                ))}
            </div>

            <div className="hidden md:block">
                <a href="https://wa.me/62895411029846" className="px-6 py-2 border border-gray-900 text-black font-medium rounded-full hover:bg-gray-50 transition-colors text-sm">
                    Hubungi
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100">
                {navItems.map((item) => (
                <a
                    href={`#${item.id}`}
                    key={item.id}
                    onClick={() => {
                    setActiveSection(item.id)
                    setIsOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                    {item.label}
                </a>
                ))}
            </div>
            )}
        </div>
        </nav>
    )
}
