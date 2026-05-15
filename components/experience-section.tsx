import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    position: 'Investigador',
    institution: 'Instituto Nacional de Cancerología',
    period: 'Dic 2023 - Presente',
    description: 'Asesorar, liderar y capacitar para el diseño y ejecución de proyectos de investigación en control del cáncer, empleando metodologías bioinformáticas y bioestadísticas.',
    type: 'current',
  },
  {
    position: 'Profesor Ocasional',
    institution: 'Universidad Nacional de Colombia',
    period: '2023 - Presente',
    description: 'Profesor del Doctorado en Oncología. Formación en investigación oncológica y metodologías avanzadas en bioinformática aplicada al cáncer.',
    type: 'current',
  },
  {
    position: 'Investigador / Docente',
    institution: 'Fundación Universitaria del Área Andina',
    period: '2021 - Presente',
    description: 'Investigación en ciencias biomédicas y docencia en fundamentos de investigación y seminarios de investigación en maestría.',
    type: 'current',
  },
  {
    position: 'Investigador',
    institution: 'Universidad de Antioquia',
    period: '2018 - 2020',
    description: 'Evaluación de PD-L1 como biomarcador pronóstico en cáncer de seno. Docencia en biología celular avanzada y biología molecular.',
    type: 'past',
  },
  {
    position: 'Investigador Doctoral',
    institution: 'Instituto de Investigación del Hospital del Mar (IMIM)',
    period: '2013 - 2017',
    description: 'Investigación sobre el papel de Galectina-1 en la progresión del cáncer de páncreas. Colaboración con el grupo de Pilar Navarro.',
    type: 'past',
  },
  {
    position: 'Docente de Pregrado',
    institution: 'Universidad de Barcelona',
    period: '2016 - 2017',
    description: 'Docencia en biología del cáncer y biología celular.',
    type: 'past',
  },
  {
    position: 'Asistente de Investigación',
    institution: 'Universidad de los Andes',
    period: '2010 - 2012',
    description: 'Caracterización de perfiles de splicing en la familia Ikaros. Docencia en genética humana.',
    type: 'past',
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-muted-foreground">
            Trayectoria en investigación y docencia en instituciones nacionales e internacionales.
          </p>
        </div>

        <div className="grid gap-4">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`p-5 rounded-lg border transition-all ${
                exp.type === 'current' 
                  ? 'bg-primary/5 border-primary/30' 
                  : 'bg-card border-border hover:border-border/80'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-medium text-foreground">{exp.position}</h3>
                  <p className="text-sm text-primary">{exp.institution}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
