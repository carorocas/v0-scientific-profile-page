import { ArrowDown, MapPin, Building2, ExternalLink } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Left Column - Name and Navigation */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-4">
                Carlos Alberto<br />
                <span className="text-primary">Orozco Castaño</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Investigador Asociado (I)
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="w-4 h-4 text-primary" />
                <span>Instituto Nacional de Cancerología</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-4"
              >
                Sobre Mí
              </a>
              <a 
                href="#education" 
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-4"
              >
                Formación
              </a>
              <a 
                href="#publications" 
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-4"
              >
                Publicaciones
              </a>
              <a 
                href="#projects" 
                className="block text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-4"
              >
                Proyectos
              </a>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              Soy un investigador con más de <span className="text-primary font-medium">10 años de experiencia</span> en el 
              estudio de los <span className="text-primary font-medium">mecanismos moleculares del cáncer</span>, con especial 
              énfasis en inmunología tumoral y microambiente tumoral.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Mi trabajo combina técnicas de biología molecular y celular con aproximaciones bioinformáticas para identificar nuevos biomarcadores y dianas terapéuticas. He desarrollado modelos preclínicos y colaborado con equipos interdisciplinarios en instituciones nacionales e internacionales.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Actualmente lidero proyectos de investigación en el Instituto Nacional de Cancerología de Colombia, enfocados en la caracterización de mecanismos moleculares tumorales, la biología de fibroblastos asociados al tumor y la infiltración inmunitaria en tumores sólidos.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a 
                href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001005944"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Ver CvLAC
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors text-sm font-medium"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <a href="#about" className="animate-bounce text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
