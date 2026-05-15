import { Mail, MapPin, Building2, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'CvLAC',
    url: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001005944',
    description: 'Perfil completo en Minciencias',
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/',
    description: 'Open Researcher and Contributor ID',
  },
  {
    name: 'Scopus',
    url: 'https://www.scopus.com/',
    description: 'Perfil de autor en Scopus',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
              Contacto
            </h2>
            <p className="text-muted-foreground mb-8">
              Estoy abierto a colaboraciones en investigación, proyectos de docencia 
              y consultorías en bioinformática aplicada al cáncer.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Institución</h3>
                  <p className="text-sm text-muted-foreground">Instituto Nacional de Cancerología</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Ubicación</h3>
                  <p className="text-sm text-muted-foreground">Bogotá, Colombia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Correo Profesional</h3>
                  <a href="mailto:corozco@cancer.gov.co" className="text-sm text-primary hover:text-primary/80 transition-colors">
                    corozco@cancer.gov.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Correo Personal</h3>
                  <a href="mailto:seifer121@gmail.com" className="text-sm text-primary hover:text-primary/80 transition-colors">
                    seifer121@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-6">Perfiles Académicos</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-all group"
                >
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Categoría Minciencias:</span>{' '}
                Investigador Asociado (I) - Par evaluador reconocido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
