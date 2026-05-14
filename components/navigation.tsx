'use client'

import { useState } from 'react'
import { Menu, X, FlaskConical, BookOpen, GraduationCap, Briefcase, Award, Mail } from 'lucide-react'

const navItems = [
  { label: 'Sobre Mí', href: '#about', icon: FlaskConical },
  { label: 'Formación', href: '#education', icon: GraduationCap },
  { label: 'Experiencia', href: '#experience', icon: Briefcase },
  { label: 'Publicaciones', href: '#publications', icon: BookOpen },
  { label: 'Proyectos', href: '#projects', icon: Award },
  { label: 'Contacto', href: '#contact', icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              C. Orozco
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
