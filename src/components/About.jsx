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
      "Optimization Techniques",
      "Calculus"
    ],
    "🧑‍💻 Programming Languages & Databases": [
      "Languages: Python",
      "SQL",
      "Relational DBs: PostgreSQL",
      "MySQL",
      "NoSQL DBs: MongoDB"
    ],
    "🤖 Machine Learning & AI": [
      "Pandas",
      "NumPy",
      "SciPy",
      "Scikit-learn",
      "PySpark (basics)",
      "Model Deployment",
      "MLOps Basics"
    ],
    "📊 Data Visualization & Analytics": [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Dash",
      "Plotly"
    ],
    "🌐 Web, API & App Development": [
      "Django",
      "Flask",
      "React.js",
      "RESTful APIs",
      "Postman",
      "JWT",
      "HTML/CSS/JS Basics",
      "Figma"
    ],
    "☁️ DevOps, Cloud & Deployment": [
      "AWS (S3, Lambda, Translator)",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD (Basics)"
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
              I&apos;m Jatin Nabhoya — a <span className="text-[#C778DD] font-semibold">Data Science graduate student</span> and <span className="text-[#C778DD] font-semibold">Machine Learning engineer</span> who believes data only becomes powerful when it drives real decisions.
            </p>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              My journey started in India, where I earned a B.Tech in Computer Engineering from RK University and led my team to become a <strong className="text-[#C778DD]">Smart India Hackathon 2022 Finalist</strong> — building an ML-powered document verification system that improved <span className="text-[#C778DD] font-semibold">fraud detection accuracy by 30%</span>. That experience cemented my belief that the best models are the ones that solve concrete, human problems.
            </p>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              Today, I&apos;m an MS Data Science student at the University of New Haven, going deeper into the areas I find most exciting — <span className="text-[#C778DD] font-semibold">Natural Language Processing</span> (language models, sequence modeling, text classification) and <span className="text-[#C778DD] font-semibold">Deep Learning</span> (CNNs, RNNs, image classification, transfer learning) — while actively building projects that put these concepts into practice.
            </p>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              Beyond the classroom, I&apos;ve architected end-to-end solutions: a <span className="text-[#C778DD] font-semibold">cloud-scale ride analytics pipeline on AWS</span> using Apache Airflow, Redshift, and Power BI; a <span className="text-[#C778DD] font-semibold">diabetes risk prediction system</span> comparing multiple classifiers with full feature engineering; and a full-stack e-commerce portal built with Django REST and React.js. I&apos;m equally comfortable designing ETL pipelines, fine-tuning classifiers with Scikit-Learn, or experimenting with neural networks in <span className="text-[#C778DD] font-semibold">PyTorch and TensorFlow</span>.
            </p>
            <p className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></span>
              I bring a blend of <span className="text-[#C778DD] font-semibold">statistical rigor, software engineering, and a user-first mindset</span> to every project. Whether I&apos;m optimizing a model, automating a cloud workflow, or exploring a new architecture, my goal stays the same: <strong className="text-[#C778DD]">build intelligent, scalable systems that don&apos;t just learn — they lead.</strong>
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
