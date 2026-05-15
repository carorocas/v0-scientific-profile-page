'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Cpu, 
  BarChart3, 
  Users2, 
  Microscope, 
  FileCheck, 
  TrendingUp, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'Asesoría en Bioinformática',
    description: 'Consultoría especializada en análisis bioinformáticos y modelamiento de datos genómicos.',
    color: 'from-primary to-teal-400',
  },
  {
    icon: BarChart3,
    title: 'Análisis Ómicos',
    description: 'Análisis integrativo de transcriptómica, proteómica y otros datos de alta dimensionalidad.',
    color: 'from-teal-400 to-cyan-400',
  },
  {
    icon: Users2,
    title: 'Investigación Colaborativa',
    description: 'Participación en proyectos de investigación colaborativos multidisciplinarios.',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    icon: Microscope,
    title: 'Diseño de Estudios Traslacionales',
    description: 'Asesoría en diseño metodológico de estudios con enfoque translacional del laboratorio a la clínica.',
    color: 'from-blue-400 to-indigo-400',
  },
  {
    icon: FileCheck,
    title: 'Colaboración en Financiamiento',
    description: 'Apoyo en formulación y ejecución de proyectos financiados por organismos de ciencia y tecnología.',
    color: 'from-indigo-400 to-primary',
  },
  {
    icon: TrendingUp,
    title: 'Análisis de Datos',
    description: 'Análisis estadístico avanzado, bioestadística y modelamiento matemático de datos complejos.',
    color: 'from-primary to-emerald-400',
  },
  {
    icon: MessageSquare,
    title: 'Consultoría en Investigación',
    description: 'Asesoría integral en metodología de investigación, diseño experimental y estrategias de publicación.',
    color: 'from-emerald-400 to-teal-400',
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
    transition: { staggerChildren: 0.08 }
  }
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Colaboración
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Servicios y{' '}
            <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
              Colaboración
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Áreas de consultoría y colaboración disponibles para investigadores e instituciones 
            interesadas en proyectos de investigación en cáncer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div 
                key={index}
                className="group relative p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            ¿Interesado en colaborar? Contáctame para discutir posibilidades de investigación conjunta.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Conversación
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
