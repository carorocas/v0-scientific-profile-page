import { Microscope, Database, LineChart, Users } from 'lucide-react'

const researchAreas = [
  {
    icon: Microscope,
    title: 'Biología del Cáncer',
    description: 'Estudio de mecanismos moleculares en cáncer de páncreas, melanoma uveal y mesotelioma pleural.',
  },
  {
    icon: Database,
    title: 'Bioinformática',
    description: 'Análisis de datos ómicos, metaanálisis de expresión genómica y desarrollo de firmas pronósticas.',
  },
  {
    icon: LineChart,
    title: 'Biomarcadores',
    description: 'Identificación de biomarcadores diagnósticos y pronósticos para detección temprana del cáncer.',
  },
  {
    icon: Users,
    title: 'Microambiente Tumoral',
    description: 'Caracterización de células inmunes y su papel en la progresión tumoral e inmunosupresión.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
            Áreas de Investigación
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Mi investigación se centra en entender los mecanismos moleculares que gobiernan 
            la progresión del cáncer para desarrollar mejores estrategias de diagnóstico y tratamiento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {researchAreas.map((area) => {
            const Icon = area.icon
            return (
              <div 
                key={area.title}
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">{area.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Research Lines */}
        <div className="mt-12 p-6 bg-card rounded-lg border border-border">
          <h3 className="font-medium text-foreground mb-4">Líneas de Investigación Actuales</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Galectina-1 como diana terapéutica en cáncer de páncreas y mesotelioma</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Firmas de expresión génica para pronóstico en melanoma uveal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Células mieloides supresoras en cáncer cervical</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Ancestría genética y respuesta a quimioterapia en leucemia linfoblástica aguda</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
