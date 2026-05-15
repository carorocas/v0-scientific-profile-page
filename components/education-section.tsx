'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'

const education = [
  {
    degree: 'Doctorado en Biomedicina',
    institution: 'Universidad de Barcelona',
    period: '2013 - 2017',
    thesis: 'Deciphering the role of stromal Galectin-1 in pancreatic cancer progression and its putative use as a therapeutic target',
    location: 'Barcelona, España',
    color: 'from-amber-500 to-orange-500',
  },
  {
    degree: 'Maestría en Biomedicina',
    institution: 'Universidad de Barcelona',
    period: '2012 - 2013',
    thesis: 'Regulation of the caudal homeobox genes CDX1 and CDX2 by the EMT-inducing factor ZEB1',
    location: 'Barcelona, España',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    degree: 'Maestría en Ciencias Biológicas',
    institution: 'Universidad de los Andes',
    period: '2009 - 2011',
    thesis: 'Perfiles de expresión de la familia Ikaros como herramienta para el diagnóstico de neoplasias hematológicas',
    location: 'Bogotá, Colombia',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    degree: 'Biología',
    institution: 'Universidad de Caldas',
    period: '2003 - 2009',
    thesis: 'Caracterización molecular de Moniliophthora perniciosa en variedades de Theobroma cacao',
    location: 'Manizales, Colombia',
    color: 'from-purple-500 to-pink-500',
  },
]

const postdoc = [
  {
    title: 'Estancia Postdoctoral',
    institution: 'University of Chicago',
    period: '2020',
    description: 'Targeting the tumor microenvironment in ovarian cancer - Inhibition of NNMT as therapeutic target',
    location: 'Chicago, USA',
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'Estancia Postdoctoral',
    institution: 'Universidad de Antioquia',
    period: '2018 - 2020',
    description: 'Significado clínico de células mieloides supresoras y sus mecanismos de inmunosupresión en cáncer cervical',
    location: 'Medellín, Colombia',
    color: 'from-cyan-500 to-blue-500',
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
    transition: { staggerChildren: 0.15 }
  }
}

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Trayectoria
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Formación{' '}
            <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
              Académica
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trayectoria académica con formación internacional en investigación biomédica 
            y estancias en instituciones de prestigio mundial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Postdoctoral */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-center gap-3 mb-8"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Estancias Postdoctorales</h3>
            </motion.div>
            
            <div className="space-y-6">
              {postdoc.map((item, index) => (
                <motion.div 
                  key={index}
                  className="group relative"
                  variants={fadeInUp}
                >
                  {/* Timeline line */}
                  {index < postdoc.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                  
                  <div className="relative flex gap-4">
                    {/* Timeline dot */}
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-white font-bold text-sm">{item.period.slice(-4)}</span>
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.institution}</h4>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-center gap-3 mb-8"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Títulos Académicos</h3>
            </motion.div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  className="group relative"
                  variants={fadeInUp}
                >
                  {/* Timeline line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/50 to-transparent" />
                  )}
                  
                  <div className="relative flex gap-4">
                    {/* Timeline dot */}
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <GraduationCap className="w-5 h-5 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.degree}</h4>
                      <p className="text-sm text-primary/80 mt-1">{item.institution}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground/80 mt-3 italic leading-relaxed">&ldquo;{item.thesis}&rdquo;</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
