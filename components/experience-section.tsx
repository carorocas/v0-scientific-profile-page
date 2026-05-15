'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react'

const experiences = [
  {
    position: 'Investigador',
    institution: 'Instituto Nacional de Cancerología',
    period: 'Dic 2023 - Presente',
    description: 'Asesorar, liderar y capacitar para el diseño y ejecución de proyectos de investigación en control del cáncer, empleando metodologías bioinformáticas y bioestadísticas.',
    type: 'current',
    location: 'Bogotá, Colombia',
  },
  {
    position: 'Profesor Ocasional',
    institution: 'Universidad Nacional de Colombia',
    period: '2023 - Presente',
    description: 'Profesor del Doctorado en Oncología. Formación en investigación oncológica y metodologías avanzadas en bioinformática aplicada al cáncer.',
    type: 'current',
    location: 'Bogotá, Colombia',
  },
  {
    position: 'Investigador / Docente',
    institution: 'Fundación Universitaria del Área Andina',
    period: '2021 - Presente',
    description: 'Investigación en ciencias biomédicas y docencia en fundamentos de investigación y seminarios de investigación en maestría.',
    type: 'current',
    location: 'Bogotá, Colombia',
  },
  {
    position: 'Investigador',
    institution: 'Universidad de Antioquia',
    period: '2018 - 2020',
    description: 'Evaluación de PD-L1 como biomarcador pronóstico en cáncer de seno. Docencia en biología celular avanzada y biología molecular.',
    type: 'past',
    location: 'Medellín, Colombia',
  },
  {
    position: 'Investigador Doctoral',
    institution: 'Instituto de Investigación del Hospital del Mar (IMIM)',
    period: '2013 - 2017',
    description: 'Investigación sobre el papel de Galectina-1 en la progresión del cáncer de páncreas. Colaboración con el grupo de Pilar Navarro.',
    type: 'past',
    location: 'Barcelona, España',
  },
  {
    position: 'Docente de Pregrado',
    institution: 'Universidad de Barcelona',
    period: '2016 - 2017',
    description: 'Docencia en biología del cáncer y biología celular.',
    type: 'past',
    location: 'Barcelona, España',
  },
  {
    position: 'Asistente de Investigación',
    institution: 'Universidad de los Andes',
    period: '2010 - 2012',
    description: 'Caracterización de perfiles de splicing en la familia Ikaros. Docencia en genética humana.',
    type: 'past',
    location: 'Bogotá, Colombia',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const currentExp = experiences.filter(e => e.type === 'current')
  const pastExp = experiences.filter(e => e.type === 'past')

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Carrera
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Experiencia{' '}
            <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trayectoria en investigación y docencia en instituciones nacionales e internacionales.
          </p>
        </motion.div>

        {/* Current Positions */}
        <motion.div
          className="mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center gap-3 mb-6"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <Sparkles className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">Posiciones Actuales</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {currentExp.map((exp, index) => (
              <motion.div 
                key={index}
                className="group relative p-6 bg-gradient-to-br from-primary/10 via-card/80 to-card/60 backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-50" />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-xs text-green-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Actual
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-primary/80 mb-3">{exp.institution}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past Positions */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center gap-3 mb-6"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <Briefcase className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Experiencia Previa</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {pastExp.map((exp, index) => (
              <motion.div 
                key={index}
                className="group p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-primary/70">{exp.institution}</p>
                    <div className="flex flex-wrap gap-2 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
