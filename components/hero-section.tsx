'use client'

import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Building2, ExternalLink, Microscope, Dna, Brain } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  }
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left Column - Main Content */}
          <motion.div className="space-y-8" variants={staggerContainer}>
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Investigador Asociado (I)
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Carlos Alberto</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Orozco Castaño
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
              variants={fadeInUp}
            >
              Investigador con más de <span className="text-foreground font-semibold">10 años de experiencia</span> en 
              el estudio de los mecanismos moleculares del cáncer, bioinformática y microambiente tumoral.
            </motion.p>

            {/* Location Info */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="w-4 h-4 text-primary" />
                <span>Instituto Nacional de Cancerología</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bogotá, Colombia</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={fadeInUp}
            >
              <motion.a 
                href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001005944"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver CvLAC Completo
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium border border-border hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contactar
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center"
            variants={scaleIn}
          >
            <div className="relative w-80 h-80">
              {/* Central Icon */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-72 h-72 rounded-full border border-primary/20" />
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-56 h-56 rounded-full border border-primary/30" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <Dna className="w-7 h-7 text-primary" />
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-8 left-0"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 backdrop-blur-sm border border-teal-500/20 flex items-center justify-center">
                  <Microscope className="w-7 h-7 text-teal-400" />
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-8 right-0"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 backdrop-blur-sm border border-cyan-500/20 flex items-center justify-center">
                  <Brain className="w-7 h-7 text-cyan-400" />
                </div>
              </motion.div>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">CA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-border/50"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {[
            { number: '10+', label: 'Años de Experiencia' },
            { number: '29', label: 'Publicaciones' },
            { number: '15+', label: 'Proyectos de Investigación' },
            { number: '3', label: 'Estancias Internacionales' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-wider">Explorar</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
