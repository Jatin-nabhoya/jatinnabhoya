import React from 'react';
import PropTypes from 'prop-types';

const ExperienceCard = ({ title, company, location, duration, achievements }) => (
  <div className="relative pl-6 pb-8 last:pb-0">
    <div className="absolute left-0 top-2 w-2 h-2 bg-[#C778DD] rounded-full"></div>
    <div className="border-l-2 border-[#ABB2BF] pl-8 ml-[2px] pb-2">
      <div className="border border-[#ABB2BF] p-6 hover:border-[#C778DD] transition-colors">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-[#C778DD] text-lg mb-1">{company}</p>
        <p className="text-[#ABB2BF] mb-1">{location}</p>
        <p className="text-[#ABB2BF] text-sm mb-4">{duration}</p>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2 text-[#ABB2BF]">
              <span className="text-[#C778DD] mt-1.5">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Weneura FutureTech Pvt Ltd",
      location: "Delhi, India",
      duration: "Dec 2023 – Jan 2025",
      achievements: [
        "Developed and fine-tuned machine learning models, improving prediction accuracy by 15%.",
        "Automated data preprocessing pipelines using Python and SQL, reduced processing time by 30%.",
        "Built interactive dashboards with Power BI to track business KPIs, enabling data-driven decision-making.",
        "Implemented cloud-based model deployment using AWS, improving system scalability."
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#C778DD]">#</span>experience
        </h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 