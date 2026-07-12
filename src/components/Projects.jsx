import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, tech, duration, image, sourceCode, liveDemo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group">
      <div className="bg-[#282C33] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_35px_rgba(199,120,221,0.4)]">
        {/* Thumbnail Image */}
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-[#C778DD]">{duration}</span>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index) => (
              <span key={index} className="text-sm text-[#C778DD]">#{item}</span>
            ))}
          </div>

          {/* Description with Bullet Points */}
          <div className="text-[#ABB2BF] space-y-2 mb-6">
            {(isExpanded ? description : description.slice(0, 2)).map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-[#C778DD] mt-1.5">•</span>
                <p>{point}</p>
              </div>
            ))}
            {description.length > 2 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#C778DD] hover:underline mt-2 block"
              >
                {isExpanded ? 'Show less' : `Show ${description.length - 2} more points`}
              </button>
            )}
          </div>

          {/* Project Links */}
          <div className="flex gap-4">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C778DD] px-4 py-2 hover:bg-[#C778DD] hover:text-white transition-colors"
              >
                Live Demo <span className="ml-1">{'<~>'}</span>
              </a>
            )}
            {sourceCode && (
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C778DD] px-4 py-2 hover:bg-[#C778DD] hover:text-white transition-colors"
              >
                Source Code <span className="ml-1">{'</>'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sourceCode: PropTypes.string,
  liveDemo: PropTypes.string
};

const Projects = () => {
  const projects = [
    {
      title: "Clinical RAG Hallucination Audit — Comparing how open-source LLMs hallucinate in a medical retrieval-augmented generation pipeline",
      duration: "march-2026",
      tech: [
        "Python",
        "RAG",
        "LangChain",
        "Hugging Face Transformers",
        "FAISS",
        "PubMedBERT",
        "Sentence-Transformers",
        "4-bit Quantization (BitsAndBytes)",
        "RAGAS",
        "ROUGE-L",
        "NCBI E-utilities",
        "Llama-3",
        "Mistral",
        "Phi-3"
      ],
      description: [
        "Built a fully reproducible two-environment RAG pipeline: collected 110 open-access medical documents from PubMed Central, CDC, WHO, and MedlinePlus across 7 domains, then cleaned and chunked them into 2,753 production-ready chunks (512-token windows, tiktoken-accurate, LaTeX/micro-chunk filtering, domain rebalancing from a 57:1 skew).",
        "Embedded chunks with S-PubMedBERT-MS-MARCO (768-d) plus a general-purpose baseline for ablation, indexed in FAISS with exact cosine similarity. Ran Llama-3-8B, Mistral-7B, and Phi-3-mini through an identical strictly-grounded RAG pipeline under matched 4-bit NF4 quantization and greedy decoding to eliminate confounders.",
        "Hand-built a 110-question benchmark across four tiers (answerable / partial / ambiguous / unanswerable), calibrated against measured retrieval coverage so each question probes a specific failure mode. Scored with a rule-based 7-category hallucination taxonomy — no LLM judge, fully reproducible — plus ROUGE-L, a context-overlap faithfulness proxy, and bootstrap 95% CIs.",
        "Key finding: over-refusal dominated every model (35–55%) while fabrication stayed ≤1.8%. Safety-tuned open-source LLMs err toward excessive caution — a utility failure, not a safety one.",
        "Mistral-7B was the most clinically reliable at 52.7% overall correctness — best calibration, refusing 27/29 unanswerable questions while still engaging with 22/30 answerable ones.",
        "Phi-3-mini answers from memory, not evidence: its context-overlap score (0.199) was ~3× lower than peers, meaning it uses retrieved context as a topic hint rather than a grounding source.",
        "Root-cause analysis traced Llama-3's over-refusals to retriever mismatch, not the model itself. Results written up as a conference-style paper: 'Auditing Hallucination in Clinical RAG: A Comparative Study of Three Open-Source LLMs' — Jatin Nabhoya & Mohit Raiyani, University of New Haven."
      ],
      image: "/images/clinical-rag-cover.svg",
      sourceCode: "https://github.com/Jatin-nabhoya/clinical-rag-audit",
      liveDemo: "https://github.com/Jatin-nabhoya/clinical-rag-audit/blob/main/docs/clinical_rag_paper.md"
    },
    {
      title: "Gym Equipment Detection with YOLOv7 — Fine-tuning a real-time object detector on a custom dataset",
      duration: "may-2026",
      tech: [
        "Python",
        "PyTorch",
        "YOLOv7",
        "Object Detection",
        "Transfer Learning",
        "Optuna",
        "Albumentations",
        "OpenCV",
        "torchmetrics",
        "scikit-learn"
      ],
      description: [
        "Built an end-to-end detection pipeline on a self-collected 203-image dataset across five gym equipment classes (dumbbell, barbell, kettlebell, resistance band, pull-up bar), split 162/20/21 train/val/test with augmentation (flips, color jitter, mosaic).",
        "Established a domain-gap baseline using COCO-pretrained YOLOv7 with no fine-tuning (0.0005 mAP@0.5 — effectively blind), then lifted performance to ~0.45 mAP@0.5 through a two-phase staged strategy: freeze backbone + warm up detection head first, then unfreeze all layers for full end-to-end fine-tuning (50 epochs, early stopping at patience 15).",
        "Ran a 30-trial Optuna hyperparameter search over learning rate, weight decay, batch size, and augmentation strength, plus test-time augmentation at evaluation — wrote a custom PyTorch training loop instead of the stock YOLOv7 trainer for full control over the freeze/unfreeze schedule.",
        "Detection performance: COCO baseline 0.0005 → frozen-head fine-tuning ~0.20 → full fine-tuning ~0.45 mAP@0.5. Documented with training curves and a confusion matrix in a full project report (docs/report.pdf in repo)."
      ],
      image: "/images/placeholder.svg",
      sourceCode: "https://github.com/Jatin-nabhoya/YOLOv7_Gym_Equipment_Detection",
      liveDemo: "https://github.com/Jatin-nabhoya/YOLOv7_Gym_Equipment_Detection/blob/main/docs/report.pdf"
    },
    {
      title: "RidePulse | AWS-Based Data Engineering Pipeline (Medallion Architecture)",
      duration: "sep-2025",
      tech: [
        "AWS S3",
        "AWS EC2",
        "Mage.ai",
        "AWS Glue (Crawler & Jobs)",
        "AWS Athena (CTAS)",
        "Amazon QuickSight",
        "Power BI",
        "Parquet",
        "Medallion Architecture"
      ],
      description: [
        "RidePulse is an AWS-native data engineering project that implements a three-layer medallion architecture (Raw, Silver, Gold) to transform real-world NYC TLC open-source CSV data into analytics-ready, high-quality datasets. The pipeline is designed to handle unstructured and semi-structured raw data, enforce schema consistency, and optimize data storage for analytical workloads.",
        "The ingestion layer stores raw NYC TLC CSV files in Amazon S3 (Raw layer). ETL orchestration is handled using Mage.ai deployed on AWS EC2, enabling modular, version-controlled pipelines. Schema discovery and validation are performed using AWS Glue Crawlers, followed by AWS Glue Jobs to transform data from CSV to columnar Parquet format, writing cleaned and standardized datasets to the Silver layer in S3.",
        "In the Gold layer, curated and aggregated datasets are modeled for analytics using Athena external tables and CTAS queries, enabling efficient querying and downstream consumption. The optimized datasets are visualized using Amazon QuickSight and Power BI, supporting exploratory data analysis and dashboard-driven insights. The project emphasizes data quality checks, schema evolution handling, storage optimization, and scalable ETL design, closely simulating production-grade data engineering systems."
      ],
      image: "/images/ridepulse.jpeg",
      sourceCode: "#",
      liveDemo: "#"
    },

    {
      title: "Healthcare Data Pipeline on Azure",
      duration: "Apr-2025",
      tech: [
        "Azure Data Lake Storage Gen2",
        "Azure Databricks (PySpark)",
        "Delta Lake",
        "Azure SQL Database",
        "Azure Data Factory"
      ],
      description: [
        "Designed an end-to-end data pipeline on Azure for healthcare Revenue Cycle Management (RCM), streamlining data ingestion, processing, and insights generation across multiple cloud services",
        "Processed and refined patient, provider, and transactional data using Data Factory, Databricks, and Delta Lake, with integrated Azure Synapse for analytics and Power BI for visualization",
        "Implemented medallion architecture (bronze, silver, gold layers) to ensure layered data governance, scalable processing, and real-time monitoring via Azure Monitor and custom logging solutions"
      ],
      image: "/images/healthcare-pipeline.png",
      sourceCode: "#",
      liveDemo: "#"
    },
    {
      title: "Netflix Content Breakdown: Genres, Volumes, & Annual Releases",
      duration: "mar-2023",
      tech: [
        "PowerBI",
        "Numpy",
        "Pandas",
        "scikit-learn"
      ],
      description: [
        "Built a predictive model to analyze trends in Netflix content distribution.",
        "Developed interactive dashboards in Power BI, helping users visualize genre popularity and content volume.",
        "Applied Machine Learning techniques to forecast future content trends based on past data."
      ],
      image: "/images/netflix.png",
      sourceCode: "https://github.com/Jatin-nabhoya/Netflix-Movie-TV-Show-data-Visualaztion",
      liveDemo: "#"
    },
    {
      title: "Scholarship Verification Automation (SIH 2022 Finalist)",
      duration: "apr-2022",
      tech: [
        "Python",
        "TensorFlow",
        "SQL",
        "Scikit-learn",
        "AWS (S3, Lambda, Translator)",
        "Django",
        "React.js"
      ],
      description: [
        // "Built an ML-powered document verification system using OCR and NLP, improving fraud detection accuracy by 30%.",
        // "Implemented deep learning models (CNN + RNN) to detect fraudulent documents, improving verification accuracy by 30%.",
        // "Integrated AWS S3 for secure document storage and AWS Translator for multilingual support, ensuring accessibility for diverse applicants.",
        // "Designed an interactive dashboard in React.js for real-time tracking of application status and document validation results.",
        // "Used statistical analysis to identify patterns in fraudulent applications, helping policymakers enhance verification strategies."
        
        "Created a web application to streamline scholarship application and document submission processes, utilizing a DigiLocker API for secure document management.",  
        "Implemented with ReactJS for frontend interactivity, Django for backend logic, and MySQL for database management. Utilized AWS services including AWS Translator for multilingual support and AWS S3 for scalable storage solutions.",
        "Automated scholarship status notifications via email service integration.",
        "Automated the processing of student applications using Django, React, and AWS. The app supported AWS translate for multilingual support."
      ],
      image: "/images/sih.png",
      sourceCode: "https://github.com/Jatin-nabhoya/VerifyScholar",
      liveDemo: "https://scholarship-verification-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#C778DD]">#</span>projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
