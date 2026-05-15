'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin, Building2, ExternalLink, Send, Award } from 'lucide-react'

const socialLinks = [
  {
    name: 'CvLAC',
    url: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001005944',
    description: 'Perfil completo en Minciencias',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0000-0002-7256-0942',
    description: 'Open Researcher and Contributor ID',
    color: 'from-lime-500 to-green-500',
  },
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Carlos-Alberto-Orozco-Castano?ev=hdr_xprf',
    description: 'Perfil en ResearchGate',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/carorocas',
    description: 'Repositorios y proyectos de código',
    color: 'from-gray-600 to-gray-700',
  },
]

const contactInfo = [
  {
    icon: Building2,
    label: 'Institución',
    value: 'Instituto Nacional de Cancerología',
    isLink: false,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Bogotá, Colombia',
    isLink: false,
  },
  {
    icon: Mail,
    label: 'Correo Profesional',
    value: 'corozco@cancer.gov.co',
    href: 'mailto:corozco@cancer.gov.co',
    isLink: true,
  },
  {
    icon: Mail,
    label: 'Correo Personal',
    value: 'seifer121@gmail.com',
    href: 'mailto:seifer121@gmail.com',
    isLink: true,
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

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Conectemos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Información de{' '}
            <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estoy abierto a colaboraciones en investigación, proyectos de docencia 
            y consultorías en bioinformática aplicada al cáncer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </span>
                Datos de Contacto
              </h3>

              <div className="space-y-5">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-4"
                      variants={fadeInUp}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.isLink ? (
                          <a 
                            href={item.href} 
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Badge */}
              <motion.div 
                className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-teal-500/10 rounded-xl border border-primary/20"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Categoría Minciencias</p>
                    <p className="font-semibold text-foreground">Investigador Asociado (I)</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Academic Profiles */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold text-foreground mb-6">Perfiles Académicos</h3>
            </motion.div>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border hover:border-primary/40 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-sm">
                        {link.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <motion.div 
              className="mt-8"
              variants={fadeInUp}
            >
              <motion.a
                href="mailto:corozco@cancer.gov.co"
                className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-primary to-teal-500 text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Enviar Correo Electrónico
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
