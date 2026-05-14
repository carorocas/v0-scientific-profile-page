'use client'

import { useState } from 'react'
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const publications = [
  {
    title: 'Targeting galectin-1 inhibits pancreatic cancer progression by modulating tumor-stroma crosstalk',
    journal: 'PNAS',
    year: '2018',
    doi: '10.1073/pnas.1722434115',
    highlight: true,
  },
  {
    title: 'Validation of an Ultraviolet Light Response Gene Signature for Predicting Prognosis in Patients with Uveal Melanoma',
    journal: 'Biomolecules',
    year: '2023',
    doi: '10.3390/biom13071148',
    highlight: true,
  },
  {
    title: 'Genes and Pathways Involved in the Progression of Malignant Pleural Mesothelioma: A Meta-analysis of Genome-Wide Expression Studies',
    journal: 'Biochemical Genetics',
    year: '2023',
    doi: '10.1007/s10528-023-10426-5',
    highlight: false,
  },
  {
    title: 'miRNAs signature as potential biomarkers for cervical precancerous lesions in human papillomavirus positive women',
    journal: 'Scientific Reports',
    year: '2023',
    doi: '10.1038/s41598-023-36421-9',
    highlight: false,
  },
  {
    title: 'A Bioinformatics-Assisted Review on Iron Metabolism and Immune System to Identify Potential Biomarkers of Exercise Stress-Induced Immunosuppression',
    journal: 'Biomedicines',
    year: '2022',
    doi: '10.3390/biomedicines10030724',
    highlight: false,
  },
  {
    title: 'Central and Peripheral Immune Dysregulation in Posttraumatic Stress Disorder: Convergent Multi-Omics Evidence',
    journal: 'Biomedicines',
    year: '2022',
    doi: '10.3390/10051107',
    highlight: false,
  },
  {
    title: 'The Combined Expression Patterns of Ikaros Isoforms Characterize Different Hematological Tumor Subtypes',
    journal: 'PLOS ONE',
    year: '2013',
    doi: '10.1371/journal.pone.0082411',
    highlight: false,
  },
  {
    title: 'Increased plasma levels of galectin-1 in pancreatic cancer: potential use as biomarker',
    journal: 'Oncotarget',
    year: '2018',
    doi: '10.18632/oncotarget.26034',
    highlight: false,
  },
  {
    title: 'The Effects of Chemotherapeutics on the Ovarian Cancer Microenvironment',
    journal: 'Cancers',
    year: '2021',
    doi: '10.3390/cancers13133136',
    highlight: false,
  },
  {
    title: 'ID1 and ID3 functions in the modulation of the tumour immune microenvironment in adult patients with B-cell acute lymphoblastic leukaemia',
    journal: 'Frontiers in Immunology',
    year: '2024',
    doi: '10.3389/fimmu.2024.1473909',
    highlight: true,
  },
]

export function PublicationsSection() {
  const [showAll, setShowAll] = useState(false)
  
  const displayedPubs = showAll ? publications : publications.slice(0, 6)

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4">
            Publicaciones Seleccionadas
          </h2>
          <p className="text-muted-foreground">
            Artículos en revistas científicas indexadas. Ver perfil completo en{' '}
            <a 
              href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001005944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              CvLAC
            </a>.
          </p>
        </div>

        <div className="space-y-3">
          {displayedPubs.map((pub, index) => (
            <a
              key={index}
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-4 rounded-lg border transition-all group ${
                pub.highlight 
                  ? 'bg-primary/5 border-primary/30 hover:border-primary/50' 
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <BookOpen className={`w-4 h-4 mt-1 flex-shrink-0 ${pub.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="font-medium text-primary/80">{pub.journal}</span>
                    <span>{pub.year}</span>
                    <span className="font-mono">DOI: {pub.doi}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>

        {publications.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 flex items-center gap-2 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {showAll ? (
              <>
                Ver menos <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Ver todas ({publications.length}) <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </section>
  )
}
