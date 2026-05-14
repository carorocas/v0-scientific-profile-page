import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    degree: 'Doctorado en Biomedicina',
    institution: 'Universidad de Barcelona',
    period: '2013 - 2017',
    thesis: 'Deciphering the role of stromal Galectin-1 in pancreatic cancer progression and its putative use as a therapeutic target',
    location: 'Barcelona, España',
  },
  {
    degree: 'Maestría en Biomedicina',
    institution: 'Universidad de Barcelona',
    period: '2012 - 2013',
    thesis: 'Regulation of the caudal homeobox genes CDX1 and CDX2 by the EMT-inducing factor ZEB1',
    location: 'Barcelona, España',
  },
  {
    degree: 'Maestría en Ciencias Biológicas',
    institution: 'Universidad de los Andes',
    period: '2009 - 2011',
    thesis: 'Perfiles de expresión de la familia Ikaros como herramienta para el diagnóstico de neoplasias hematológicas',
    location: 'Bogotá, Colombia',
  },
  {
    degree: 'Biología',
    institution: 'Universidad de Caldas',
    period: '2003 - 2009',
    thesis: 'Caracterización molecular de Moniliophthora perniciosa en variedades de Theobroma cacao',
    location: 'Manizales, Colombia',
  },
]

const postdoc = [
  {
    title: 'Estancia Postdoctoral',
    institution: 'University of Chicago',
    period: '2020',
    description: 'Targeting the tumor microenvironment in ovarian cancer - Inhibition of NNMT as therapeutic target',
    location: 'Chicago, USA',
  },
  {
    title: 'Estancia Postdoctoral',
    institution: 'Universidad de Antioquia',
    period: '2018 - 2020',
    description: 'Significado clínico de células mieloides supresoras y sus mecanismos de inmunosupresión en cáncer cervical',
    location: 'Medellín, Colombia',
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
            Formación Académica
          </h2>
          <p className="text-muted-foreground">
            Trayectoria académica con formación internacional en investigación biomédica.
          </p>
        </div>

        {/* Postdoctoral */}
        <div className="mb-12">
          <h3 className="flex items-center gap-2 text-lg font-medium text-foreground mb-6">
            <Award className="w-5 h-5 text-primary" />
            Estancias Postdoctorales
          </h3>
          <div className="space-y-4">
            {postdoc.map((item, index) => (
              <div 
                key={index}
                className="relative pl-6 pb-4 border-l-2 border-border last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-medium text-foreground">{item.institution}</h4>
                    <span className="text-xs text-primary font-mono">{item.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.location}</p>
                  <p className="text-sm text-muted-foreground/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-medium text-foreground mb-6">
            <GraduationCap className="w-5 h-5 text-primary" />
            Títulos Académicos
          </h3>
          <div className="space-y-4">
            {education.map((item, index) => (
              <div 
                key={index}
                className="relative pl-6 pb-4 border-l-2 border-border last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-primary" />
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-medium text-foreground">{item.degree}</h4>
                    <span className="text-xs text-primary font-mono">{item.period}</span>
                  </div>
                  <p className="text-sm text-primary/80 mb-1">{item.institution}</p>
                  <p className="text-xs text-muted-foreground mb-2">{item.location}</p>
                  <p className="text-sm text-muted-foreground/80 italic">&ldquo;{item.thesis}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
