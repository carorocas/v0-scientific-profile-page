'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Microscope, Database, LineChart, Users, ArrowRight } from 'lucide-react'

const researchAreas = [
  {
    icon: Microscope,
    title: 'Biología del Cáncer',
    description: 'Estudio de mecanismos moleculares en cáncer de páncreas, melanoma uveal y mesotelioma pleural.',
    gradient: 'from-primary to-teal-400',
  },
  {
    icon: Database,
    title: 'Bioinformática',
    description: 'Análisis de datos ómicos, metaanálisis de expresión genómica y desarrollo de firmas pronósticas.',
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    icon: LineChart,
    title: 'Biomarcadores',
    description: 'Identificación de biomarcadores diagnósticos y pronósticos para detección temprana del cáncer.',
    gradient: 'from-cyan-400 to-blue-400',
  },
  {
    icon: Users,
    title: 'Microambiente Tumoral',
    description: 'Caracterización de células inmunes y su papel en la progresión tumoral e inmunosupresión.',
    gradient: 'from-blue-400 to-primary',
  },
]

const researchLines = [
  'Galectina-1 como diana terapéutica en cáncer de páncreas y mesotelioma',
  'Firmas de expresión génica para pronóstico en melanoma uveal',
  'Células mieloides supresoras en cáncer cervical',
  'Ancestría genética y respuesta a quimioterapia en leucemia linfoblástica aguda',
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

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            variants={fadeInUp}
          >
            Especialidades
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Áreas de{' '}
            <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
              Investigación
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mi investigación se centra en entender los mecanismos moleculares que gobiernan 
            la progresión del cáncer para desarrollar mejores estrategias de diagnóstico y tratamiento.
          </p>
        </motion.div>

        {/* Research Areas Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {researchAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div 
                key={area.title}
                className="group relative p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative flex items-start gap-5">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Research Lines */}
        <motion.div 
          className="relative p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-primary" />
              </span>
              Líneas de Investigación Actuales
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {researchLines.map((line, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-teal-400 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{line}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
