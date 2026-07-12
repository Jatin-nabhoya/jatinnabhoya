import React from 'react';
import PropTypes from 'prop-types';

const SkillCategory = ({ title, skills }) => (
  <div className="border border-[#ABB2BF] p-4 hover:border-[#C778DD] transition-colors">
    <h3 className="text-lg font-bold mb-2 text-[#C778DD]">{title}</h3>
    <div className="text-[#ABB2BF]">
      {skills.join(', ')}
    </div>
  </div>
);

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Education = ({ degree, university, duration, description }) => (
  <div className="relative pl-6 pb-8 last:pb-0">
    <div className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></div>
    <div className="border-l-2 border-[#ABB2BF] pl-8 ml-[2px] pb-2">
      <div className="border border-[#ABB2BF] p-4 hover:border-[#C778DD] transition-colors">
        <h3 className="text-lg font-bold text-white">{degree}</h3>
        <p className="text-[#C778DD]">{university}</p>
        <p className="text-[#ABB2BF] text-sm mb-2">{duration}</p>
        <p className="text-[#ABB2BF]">{description}</p>
      </div>
    </div>
  </div>
);

Education.propTypes = {
  degree: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const About = () => {
  const education = [
    {
      degree: "Master of Science in Data Science | GPA : 4.00",
      university: "University of New Haven",
      duration: "Jan 2025 - Present",
      description: "Mathematics for Data Science, Machine Learning, Statistical Inference & Predictive Analytics"
    },
    {
      degree: "Bachelor of Technology in Computer Engineering | GPA : 3.3",
      university: "R.K University, Gujarat, India",
      duration: "Aug 2020 - Mar 2024",
      description: "Applied Mathematics, Discrete Mathematics, Algorithms, Database Systems, Machine Learning, Natural Language Processing, Cloud Computing, Distributed Computing"
    }
  ];

  const technicalSkills = {
    "🧠 Mathematics & Core Concepts": [
      "Gradient Descent",
      "Backpropagation",
      "Linear Algebra",
      "Probability",
      "Statistics",
      "Optimization",
      "Calculus"
    ],
    "🧑‍💻 Programming & Databases": [
      "Python",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB"
    ],
    "🤖 Machine Learning & Deep Learning": [
      "Pandas",
      "NumPy",
      "SciPy",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "PySpark",
      "torchmetrics",
      "MLOps Basics"
    ],
    "🗣️ NLP & LLM Engineering": [
      "LangChain",
      "Hugging Face Transformers",
      "RAG (Retrieval-Augmented Generation)",
      "FAISS",
      "Sentence-Transformers",
      "PubMedBERT",
      "BitsAndBytes (quantization)",
      "LLMs (Llama-3, Mistral, Phi-3)",
      "Prompt Engineering",
      "RAGAS",
      "ROUGE-L"
    ],
    "👁️ Computer Vision": [
      "YOLOv7",
      "OpenCV",
      "Albumentations",
      "Optuna (hyperparameter search)",
      "Transfer Learning",
      "Test-Time Augmentation"
    ],
    "📊 Data Visualization & BI": [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Dash",
      "Plotly",
      "Amazon QuickSight"
    ],
    "🌐 Web & API Development": [
      "Django",
      "Flask",
      "React.js",
      "RESTful APIs",
      "Postman",
      "JWT",
      "HTML/CSS/JS"
    ],
    "☁️ Cloud & Data Engineering": [
      "AWS (S3, Lambda, EC2, Glue, Athena, QuickSight, Mage.ai)",
      "Azure (Data Lake Gen2, Databricks, Data Factory, Synapse, Delta Lake, Azure SQL)",
      "Medallion Architecture (Bronze/Silver/Gold)",
      "Parquet",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD"
    ],
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#C778DD]">#</span>about-me
        </h2>

        {/* Professional Summary */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
          <div className="text-[#ABB2BF] space-y-4">
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              I&apos;m Jatin Nabhoya, a <span className="text-[#C778DD] font-semibold">Data Science graduate student</span> and multidisciplinary <span className="text-[#C778DD] font-semibold">ML/AI practitioner</span> who believes data and models only matter when they drive real, measurable decisions.
            </p>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              My journey started in India, where I earned a B.Tech in Computer Engineering from RK University and led my team to become a <strong className="text-[#C778DD]">Smart India Hackathon 2022 Finalist</strong>,building an ML-powered document verification system that improved <span className="text-[#C778DD] font-semibold">fraud detection accuracy by 30%</span>.
            </p>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              I&apos;m currently an MS Data Science student at the <span className="text-[#C778DD] font-semibold">University of New Haven (GPA 4.00)</span>, going deeper into Natural Language Processing, Deep Learning, and Statistical Inference — while shipping end-to-end projects that span four connected disciplines:
            </p>
            <ul className="pl-6 space-y-3">
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
                <span className="text-[#C778DD] font-semibold">Data Science &amp; Analytics</span> — building predictive models and BI-driven storytelling, from Netflix content-trend forecasting to a 7-category hallucination-taxonomy audit of clinical NLP systems.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
                <span className="text-[#C778DD] font-semibold">AI / ML Engineering</span> — fine-tuning and evaluating LLMs (Llama-3, Mistral, Phi-3) for retrieval-augmented generation on medical corpora, and training computer-vision models (YOLOv7) with Optuna hyperparameter search and test-time augmentation.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
                <span className="text-[#C778DD] font-semibold">Data Engineering</span> — designing medallion-architecture pipelines (Raw/Bronze → Silver → Gold) on both <span className="font-semibold">AWS</span> (S3, EC2, Glue, Athena, Mage.ai, QuickSight) and <span className="font-semibold">Azure</span> (Data Factory, Databricks/PySpark, Delta Lake, Synapse) to move raw data into analytics-ready gold layers at scale.
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
                <span className="text-[#C778DD] font-semibold">Full-Stack Applied ML</span> — shipping production systems end-to-end (Django, React.js, MySQL, AWS Lambda, OCR + NLP pipelines) that solve real institutional problems, like automated document verification for scholarships.
              </li>
            </ul>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              I bring a blend of <span className="text-[#C778DD] font-semibold">statistical rigor, cloud/software engineering, and a user-first mindset</span> to every project. Goal: <strong className="text-[#C778DD]">build intelligent, scalable systems that don&apos;t just learn,they lead.</strong>
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <div className="relative">
            {education.map((edu, index) => (
              <Education key={index} {...edu} />
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <SkillCategory key={category} title={category} skills={skills} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
