import React from 'react';

const ResumeSkillCategory = ({ title, skills }) => (
  <div className="border border-[#ABB2BF] p-4 hover:border-[#C778DD] transition-colors">
    <h3 className="text-lg font-bold mb-2 text-[#C778DD]">{title}</h3>
    <div className="text-[#ABB2BF]">{skills.join(', ')}</div>
  </div>
);

export const ResumeSkills = () => {
  const newSkills = {
    '🤖 Applied AI & LLMs': [
      'AI Agents',
      'LLM Orchestration',
      'Ollama'
    ],
    '🧠 Machine Learning & Vision-Language Models': [
      'PEFT',
      'QLoRA',
      'CLIP4Clip',
      'GIT (Generative Image-to-text Transformer)',
      'BLIP-2',
      'Qwen2.5-VL',
      'Model Benchmarking'
    ],
    '📊 Data Analytics & Statistics': [
      'Hypothesis Testing',
      'Bootstrap Testing',
      'Permutation Testing',
      'Data Validation',
      'Dashboard Reporting'
    ],
    '☁️ Data Engineering & Cloud': [
      'Amazon SageMaker',
      'Amazon Redshift',
      'Apache Airflow',
      'Data Warehousing'
    ],
    '🛠️ Programming & MLOps': [
      'R',
      'GitHub Actions',
      'Agile/Scrum'
    ]
  };

  return (
    <section id="resume-skills" className="pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          <span className="text-[#C778DD]">#</span>additional-skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(newSkills).map(([category, skills]) => (
            <ResumeSkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResumeProjectCard = ({ title, date, technologies, bullets }) => (
  <article className="border border-[#ABB2BF] bg-[#282C33] p-6 hover:border-[#C778DD] transition-colors">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="text-[#C778DD] shrink-0">{date}</span>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((technology) => (
        <span key={technology} className="text-sm text-[#C778DD]">#{technology}</span>
      ))}
    </div>
    <ul className="text-[#ABB2BF] space-y-2">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex items-start gap-2">
          <span className="text-[#C778DD]">•</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </article>
);

export const ResumeProjects = () => {
  const projects = [
    {
      title: 'Video Captioning with Vision-Language Models — Retrieval-Augmented Q-Former',
      date: 'Nov 2026',
      technologies: [
        'Python',
        'PyTorch',
        'Hugging Face Transformers',
        'PEFT/QLoRA',
        'CLIP4Clip',
        'BLIP-2',
        'Qwen2.5-VL'
      ],
      bullets: [
        'Fine-tuned and benchmarked CLIP4Clip, GIT, BLIP-2, and Qwen2.5-VL for video captioning on the MSVD, MSR-VTT, and VATEX datasets.',
        'Used 4-bit QLoRA fine-tuning to train the 3B-parameter Qwen2.5-VL on a single 16 GB T4 GPU.',
        'Designed SG-RQF, a retrieval-augmented Q-Former, and benchmarked it against baseline models using BLEU-4, METEOR, ROUGE-L, and CIDEr.',
        'Used paired bootstrap and permutation tests to confirm that model score differences were statistically significant.'
      ]
    },
    {
      title: 'Clinical AI Agent — Multi-LLM Hallucination Detection System',
      date: 'Feb 2026 · In development',
      technologies: [
        'Python',
        'AI Agents',
        'RAG',
        'RAGAS',
        'Ollama',
        'Docker'
      ],
      bullets: [
        'Built an agent to retrieve biomedical documents, including FDA drug labels and PubMed abstracts, route 10-tier queries through three LLMs, evaluate responses, and generate structured audit reports.',
        'Designed a hallucination taxonomy covering fabrication, factual drift, omission, and confident uncertainty, with automated RAGAS evaluation and result documentation.',
        'Containerized retrieval, inference, and evaluation as modular Docker stages; compared faithfulness and context use with and without retrieval to inform model selection.'
      ]
    }
  ];

  return (
    <section id="resume-projects" className="pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          <span className="text-[#C778DD]">#</span>new-projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ResumeProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
