'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Heart, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -3 }}
          >
            <div className="w-10 h-10 rounded-full border border-border group-hover:border-primary/50 flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-wider">Volver arriba</span>
          </motion.button>

          {/* Logo and name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center shadow-lg shadow-primary/20">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <span className="font-bold text-foreground">Carlos Alberto Orozco Castaño</span>
              <p className="text-xs text-muted-foreground">Investigador Asociado (I)</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">Sobre Mí</a>
            <a href="#publications" className="hover:text-primary transition-colors">Publicaciones</a>
            <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Carlos Orozco · Todos los derechos reservados</p>
            <span className="hidden sm:inline">·</span>
            <p className="flex items-center gap-1">
              Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500" /> en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
