'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, FileText } from 'lucide-react'

const publications = [
  // 2026
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Physicochemical Characterization of Magnetically Responsive Fe3O4@SiO2@HAGel Nanoplatforms for Controlled Gemcitabine Delivery',
    journal: 'Journal of Inorganic and Organometallic Polymers and Materials',
    year: 2026,
    doi: '10.1007/s10904-026-04207-x',
  },
  // 2025
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Comparative Genomic and Microenvironmental Profiles of Hereditary and Sporadic TNBC in Colombian Women',
    journal: 'Biology Basel',
    year: 2025,
    doi: '10.3390/biology14121706',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Integrative Transcriptomic Meta-Analysis Reveals Risk Signatures and Immune Infiltration Patterns in High-Grade Serous Ovarian Cancer',
    journal: 'Immuno',
    year: 2025,
    doi: '10.3390/immuno5030023',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Development and Validation of an Extracellular Matrix Gene Expression Signature for Prognostic Prediction in Patients with Uveal Melanoma',
    journal: 'International Journal of Molecular Sciences',
    year: 2025,
    doi: '10.3390/ijms26094317',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Transcriptional landscape of pleural mesothelioma patients in relation to NF2 gene mutational status',
    journal: 'Journal of the Egyptian National Cancer Institute',
    year: 2025,
    doi: '10.1186/s43046-025-00284-0',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Characterization of the Temporal Dynamics of the Endothelial-Mesenchymal-like Transition Induced by Soluble Factors from Dengue Virus Infection in Microvascular Endothelial Cells',
    journal: 'International Journal of Molecular Sciences',
    year: 2025,
    doi: '10.3390/ijms26052139',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Regulación y prohibición del asbesto en América Latina y el Caribe: análisis comparativo de política',
    journal: 'Revista de Salud Pública',
    year: 2025,
    doi: '10.15446/rsap.V27n2.118081',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Sleep and Psychosocial Risk Factors Associated with Social Jet Lag and Sleep Duration Among Colombian University Students',
    journal: 'Clocks and Sleep',
    year: 2025,
    doi: '10.3390/clockssleep7040064',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Molecular determinants of neoadjuvant chemotherapy resistance in breast cancer: An analysis of gene expression and tumor microenvironment',
    journal: 'PLOS ONE',
    year: 2025,
    doi: '10.1371/journal.pone.0334335',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Identification of predictive pretreatment biomarkers for neoadjuvant chemotherapy response in Latino invasive breast cancer patients',
    journal: 'Molecular Medicine',
    year: 2025,
    doi: '10.1186/s10020-025-01338-8',
  },
  // 2024
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'ID1 and ID3 functions in the modulation of the tumour immune microenvironment in adult patients with B-cell acute lymphoblastic leukaemia',
    journal: 'Frontiers in Immunology',
    year: 2024,
    doi: '10.3389/fimmu.2024.1473909',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Leptin Signaling and Its Relationship with Obesity-induced Insulin Resistance: A Bioinformatics-assisted Review',
    journal: 'Gene Expression',
    year: 2024,
    doi: '10.14218/GE.2024.00039',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Comparison of Hybribio-H13 and Hybrid Capture® 2 human papillomavirus tests for detection of CIN2+ and CIN3+',
    journal: 'Biomédica',
    year: 2024,
    doi: '10.7705/biomedica.7061',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Comparison between retinoscopy under cyclopegia and the Spot Vision Screener in the detection of refractive error',
    journal: 'Medicina U.P.B.',
    year: 2024,
    doi: '10.18566/medupb.v43n2.a03',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Inference of genetic ancestry from a multi-gene cancer panel in Colombian women with cancer',
    journal: 'Breast Cancer Research and Treatment',
    year: 2024,
    doi: '10.1007/s10549-024-07557-7',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Construction of an immune gene expression meta signature to assess the prognostic risk of colorectal cancer patients',
    journal: 'Advances in Genetics (Book chapter, Elsevier)',
    year: 2024,
    doi: '',
  },
  // 2023
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Validation of an Ultraviolet Light Response Gene Signature for Predicting Prognosis in Patients with Uveal Melanoma',
    journal: 'Biomolecules',
    year: 2023,
    doi: '10.3390/biom13071148',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'Genes and Pathways Involved in the Progression of Malignant Pleural Mesothelioma: A Meta-analysis of Genome-Wide Expression Studies',
    journal: 'Biochemical Genetics',
    year: 2023,
    doi: '10.1007/s10528-023-10426-5',
  },
  {
    authors: 'Orozco Castaño CA et al.',
    title: 'miRNAs signature as potential biomarkers for cervical precancerous lesions in human papillomavirus positive women',
    journal: 'Scientific Reports',
    year: 2023,
    doi: '10.1038/s41598-023-36421-9',
  },
  // 2022
  {
    authors: 'Bonilla-Ocampo DA, Forero-Garzón DA, Moreno-Rueda LY, Petro-Soto JL, Orozco Castaño CA et al.',
    title: 'A Bioinformatics-Assisted Review on Iron Metabolism and Immune System to Identify Potential Biomarkers of Exercise Stress-Induced Immunosuppression',
    journal: 'Biomedicines',
    year: 2022,
    doi: '10.3390/biomedicines10030724',
  },
  {
    authors: 'Orozco Castaño CA, Forero-Garzón DA, Bonilla-Ocampo DA, González-Giraldo Y et al.',
    title: 'An in silico analysis of genome-wide expression profiles of the effects of exhaustive exercise identifies heat shock proteins as the key players',
    journal: 'Meta Gene',
    year: 2022,
    doi: '10.1016/j.mgene.2022.101012',
  },
  {
    authors: 'Núñez-Ríos DL, Martínez-Magaña JJ, Nagamatsu ST, Forero-Garzón DA, Orozco Castaño CA, Montalvo-Ortiz J et al.',
    title: 'Central and Peripheral Immune Dysregulation in Posttraumatic Stress Disorder: Convergent Multi-Omics Evidence',
    journal: 'Biomedicines',
    year: 2022,
    doi: '10.3390/10051107',
  },
  // 2021
  {
    authors: 'Eckert MA, Orozco Castaño CA, Xiao J, Javellana M, Lengyel E et al.',
    title: 'The Effects of Chemotherapeutics on the Ovarian Cancer Microenvironment',
    journal: 'Cancers',
    year: 2021,
    doi: '10.3390/cancers13133136',
  },
  // 2018
  {
    authors: 'Orozco Castaño CA, Martínez-Bosch N, Guerrero P, Vinaixa J, Ravinovich G, Navarro P et al.',
    title: 'Targeting galectin-1 inhibits pancreatic cancer progression by modulating tumor-stroma crosstalk',
    journal: 'PNAS',
    year: 2018,
    doi: '10.1073/pnas.1722434115',
    featured: true,
  },
  {
    authors: 'Orozco Castaño CA, Martínez-Bosch N, Vinaixa J, Navarro P et al.',
    title: 'Increased plasma levels of galectin-1 in pancreatic cancer: potential use as biomarker',
    journal: 'Oncotarget',
    year: 2018,
    doi: '10.18632/oncotarget.26034',
  },
  // 2016
  {
    authors: 'Orozco Castaño CA, Martínez-Bosch N, Vinaixa J, Navarro P et al.',
    title: 'The pancreatic niche inhibits the effectiveness of sunitinib treatment of pancreatic cancer',
    journal: 'Oncotarget',
    year: 2016,
    doi: '10.18632/oncotarget.10199',
  },
  // 2013
  {
    authors: 'Orozco Castaño CA, Groot de Restrepo H, López-Segura V et al.',
    title: 'The Combined Expression Patterns of Ikaros Isoforms Characterize Different Hematological Tumor Subtypes',
    journal: 'PLOS ONE',
    year: 2013,
    doi: '10.1371/journal.pone.0082411',
  },
  // 2012
  {
    authors: 'Orozco Castaño CA, Rivera-Páez FA, López-Gartner GA et al.',
    title: 'Variabilidad genética de Moniliophthora perniciosa en variedades de cacao (Theobroma cacao L.)',
    journal: 'Acta Agronómica',
    year: 2012,
    doi: '10.15446/acag',
  },
  // 2011
  {
    authors: 'Orozco Castaño CA, López-Gartner GA, Rivera-Páez FA et al.',
    title: 'Evaluación microbiológica y molecular de Moniliophthora perniciosa (Agaricales: Marasmiaceae)',
    journal: 'Boletín Científico del Centro de Museos',
    year: 2011,
    doi: '',
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
    transition: { staggerChildren: 0.05 }
  }
}

export function PublicationsSection() {
  const [showAll, setShowAll] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const INITIAL_COUNT = 8
  const displayedPubs = showAll ? publications : publications.slice(0, INITIAL_COUNT)

  // Group publications by year for stats
  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a)
  const recentYearCount = publications.filter(p => p.year >= 2024).length

  return (
    <section id="publications" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Producción Científica
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Publicaciones{' '}
            <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
              Científicas
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {publications.length} artículos en revistas científicas indexadas.{' '}
            <a
              href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001005944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ver perfil completo en CvLAC
            </a>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 mb-12 max-w-xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {[
            { number: publications.length, label: 'Publicaciones' },
            { number: recentYearCount, label: 'Desde 2024' },
            { number: years.length, label: 'Años de Actividad' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border"
              variants={fadeInUp}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications List */}
        <motion.div 
          className="space-y-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <AnimatePresence>
            {displayedPubs.map((pub, index) => {
              const hasDoi = pub.doi && pub.doi.length > 0
              const isFeatured = 'featured' in pub && pub.featured

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  layout
                >
                  {hasDoi ? (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block p-5 rounded-xl border transition-all duration-300 group ${
                        isFeatured 
                          ? 'bg-gradient-to-r from-primary/10 via-card/80 to-card/60 border-primary/30 hover:border-primary/50' 
                          : 'bg-card/60 backdrop-blur-sm border-border hover:border-primary/40'
                      }`}
                    >
                      <PublicationContent pub={pub} isFeatured={isFeatured} hasDoi={hasDoi} />
                    </a>
                  ) : (
                    <div className="block p-5 rounded-xl border bg-card/60 backdrop-blur-sm border-border transition-all duration-300 group">
                      <PublicationContent pub={pub} isFeatured={false} hasDoi={hasDoi} />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        {publications.length > INITIAL_COUNT && (
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground bg-card/60 backdrop-blur-sm border border-border hover:border-primary/40 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {showAll ? (
                <>
                  Ver menos <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Ver todas las publicaciones ({publications.length}) <ChevronDown className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function PublicationContent({ pub, isFeatured, hasDoi }: { 
  pub: typeof publications[0], 
  isFeatured: boolean, 
  hasDoi: boolean 
}) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
        isFeatured 
          ? 'bg-gradient-to-br from-primary to-teal-400' 
          : 'bg-secondary'
      }`}>
        {isFeatured ? (
          <FileText className="w-5 h-5 text-white" />
        ) : (
          <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
            {pub.title}
          </h3>
          {hasDoi && (
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1 italic">{pub.authors}</p>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="text-xs font-medium text-primary/80">{pub.journal}</span>
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
            {pub.year}
          </span>
          {isFeatured && (
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium">
              Destacado
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
