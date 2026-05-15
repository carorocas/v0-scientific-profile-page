import { Briefcase } from 'lucide-react'

const services = [
  {
    title: 'Asesoría en Bioinformática',
    description: 'Consultoría especializada en análisis bioinformáticos y modelamiento de datos genómicos.',
  },
  {
    title: 'Análisis Ómicos',
    description: 'Análisis integrativo de transcriptómica, proteómica y otros datos de alta dimensionalidad.',
  },
  {
    title: 'Investigación Colaborativa',
    description: 'Participación en proyectos de investigación colaborativos multidisciplinarios.',
  },
  {
    title: 'Diseño de Estudios Traslacionales',
    description: 'Asesoría en diseño metodológico de estudios con enfoque translacional del laboratorio a la clínica.',
  },
  {
    title: 'Colaboración en Financiamiento',
    description: 'Apoyo en formulación y ejecución de proyectos financiados por organismos de ciencia y tecnología.',
  },
  {
    title: 'Análisis de Datos',
    description: 'Análisis estadístico avanzado, bioestadística y modelamiento matemático de datos complejos.',
  },
  {
    title: 'Consultoría en Investigación',
    description: 'Asesoría integral en metodología de investigación, diseño experimental y estrategias de publicación.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
            Servicios y Colaboración
          </h2>
          <p className="text-muted-foreground">
            Áreas de consultoría y colaboración disponibles para investigadores e instituciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
