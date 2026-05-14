import { FlaskConical, Calendar } from 'lucide-react'

const projects = [
  {
    title: 'Caracterización del Perfil Transcripcional y Ancestría Genética en Leucemia Linfoblástica Aguda',
    period: 'Ago 2024 - Presente',
    institution: 'Instituto Nacional de Cancerología',
    description: 'Desarrollo de modelos de predicción de respuesta a quimioterapia basados en ancestría genética y perfiles de expresión en pacientes con LLA-B.',
    status: 'active',
  },
  {
    title: 'Funciones Oncogénicas de Galectina-1 en Mesotelioma Pleural Maligno',
    period: 'Ago 2024 - Presente',
    institution: 'Instituto Nacional de Cancerología',
    description: 'Análisis bioinformático y caracterización funcional de Galectina-1 como diana terapéutica en MPM.',
    status: 'active',
  },
  {
    title: 'Biomarcadores en Melanoma Uveal',
    period: '2023',
    institution: 'Fundación Universitaria del Área Andina',
    description: 'Exploración de firmas génicas y microRNAs con significado clínico en pacientes con melanoma uveal usando datos del TCGA.',
    status: 'completed',
  },
  {
    title: 'Aproximaciones Bioinformáticas para el Estudio del Mesotelioma Pleural',
    period: '2021 - 2022',
    institution: 'Fundación Universitaria del Área Andina',
    description: 'Metaanálisis de estudios de expresión genómica para identificar nuevos mecanismos de progresión del MPM.',
    status: 'completed',
  },
  {
    title: 'Células Mieloides Supresoras en Cáncer Cervical',
    period: '2018 - 2020',
    institution: 'Universidad de Antioquia',
    description: 'Estudio del significado clínico de células inmunosupresoras de linaje mieloide en la progresión del cáncer cervical.',
    status: 'completed',
  },
  {
    title: 'Galectina-1 en Cáncer de Páncreas',
    period: '2014 - 2017',
    institution: 'Hospital del Mar - IMIM',
    description: 'Caracterización del papel del estroma tumoral y Galectina-1 en la progresión del cáncer de páncreas y su uso como diana terapéutica.',
    status: 'completed',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
            Proyectos de Investigación
          </h2>
          <p className="text-muted-foreground">
            Proyectos liderados y participación en investigaciones colaborativas.
          </p>
        </div>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`p-5 rounded-lg border transition-all ${
                project.status === 'active' 
                  ? 'bg-primary/5 border-primary/30' 
                  : 'bg-card border-border'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  project.status === 'active' ? 'bg-primary/20' : 'bg-secondary'
                }`}>
                  <FlaskConical className={`w-5 h-5 ${project.status === 'active' ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <h3 className="font-medium text-foreground">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.period}
                    </div>
                  </div>
                  <p className="text-sm text-primary mb-2">{project.institution}</p>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  {project.status === 'active' && (
                    <span className="inline-block mt-3 px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                      En curso
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
