import React from 'react';
import PropTypes from 'prop-types';

const CertificateCard = ({ title, issuer, issueDate, credentialId, skills, image, verifyLink }) => (
  <div className="border border-[#ABB2BF] group hover:border-[#C778DD] transition-colors h-full">
    <div className="aspect-[4/3] bg-[#282C33] overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{title}</h3>
      <div className="space-y-1 mb-3">
        <p className="text-[#C778DD] text-sm">{issuer}</p>
        <p className="text-[#ABB2BF] text-xs">Issued {issueDate}</p>
        {credentialId && (
          <p className="text-[#ABB2BF] text-xs">
            ID: <span className="text-[#C778DD]">{credentialId}</span>
          </p>
        )}
      </div>
      {skills && skills.length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="text-xs text-[#C778DD]">#{skill}</span>
            ))}
            {skills.length > 3 && <span className="text-xs text-[#ABB2BF]">+{skills.length - 3}</span>}
          </div>
        </div>
      )}
      {verifyLink && (
        <a
          href={verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#C778DD] px-3 py-1 text-sm hover:bg-[#C778DD] hover:text-white transition-colors"
        >
          View →
        </a>
      )}
    </div>
  </div>
);

CertificateCard.propTypes = {
  title: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  issueDate: PropTypes.string.isRequired,
  credentialId: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string.isRequired,
  verifyLink: PropTypes.string
};

const Certificates = () => {
  const certificates = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      issueDate: "Mar-2023",
      credentialId: "8Y1LCFGYFUQN", // Placeholder if not in resume, otherwise use provided
      skills: [
        "Logistic Regression",
        "Artificial Neural Networks",
        "Linear Regression",
        "Decision Trees",
        "Recommender Systems"
      ],
      image: "/images/Machine Learning Specialization.png",
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/8Y1LCFGYFUQN" // Placeholder
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI",
      issueDate: "Mar-2023",
      credentialId: "TPO8335MMNKX", // Placeholder if not in resume, otherwise use provided
      skills: [
        "Artificial Intelligence and Machine Learning (AI/ML)",
        "Artificial Neural Networks",
        "Anomaly Detection",
        "Dimensionality Reduction",
        "Deep Learning"
      ],
      image: "/images/Unsupervised Learning, Recommenders, Reinforcement Learning.png",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/TPO8335MMNKX" // Placeholder
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      issueDate: "Dec-2022",
      image: "/images/CISCO.png",
      verifyLink: "https://www.credly.com/badges/5170d80d-d050-40fb-8b6c-a840b5749bd0/linked_in_profile"
    },
    {
      title: "NPTEL Python for Data Science",
      issuer: "NPTEL",
      issueDate: "Mar-2023",
      credentialId: "NPTEL22CS23S34140074", // Placeholder if not in resume
      skills: [
        "Microsoft Power BI",
        "Data Visualization",
        "Data Science"
      ],
      image: "/images/NPTEL.jpeg",
      verifyLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS32S34140074NPTEL2201045454"
    },
    
    {
      title: "SIH 2022 Finalist",
      issuer: "Smart India Hackathon (Govt)",
      issueDate: "2022",
      image: "/images/SIH.jpeg",
      verifyLink: "https://www.linkedin.com/posts/jatin-nabhoya_sih2022-smartindiahackathon2022-pmabrmodiatsih-activity-6978567500753985537-ihYR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHp1jcBePk9Vfhbnw1HGRVWgLJGwHrbRHg"
    },
    {
      title: "SQL (Intermediate) level",
      issuer: "HackerRank",
      issueDate: "Jun-2022",
      image: "/images/HR.png",
      verifyLink: "https://www.hackerrank.com/certificates/1bc6ebb718f4"
    },
    {
      title: "Competitive Python",
      issuer: "HackerRank",
      issueDate: "Jun-2022",
      image: "/images/python-hr.png",
      verifyLink: "https://www.hackerrank.com/certificates/68fe4c1f9d46"
    },
    {
      title: "Arch-A-thon",
      issuer: "hackthon",
      issueDate: "Mar-2021",
      image: "/images/arch-a-thon.jpeg",
      verifyLink: "https://www.linkedin.com/posts/jatin-nabhoya_arch-hackathon2022-experience-activity-6910931543679004672-dUpp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHp1jcBePk9Vfhbnw1HGRVWgLJGwHrbRHg"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#C778DD]">#</span>certificates
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 