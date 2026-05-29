import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Team Lead – Graphic Design',
      company: 'Shapesway Technologies Pvt. Ltd.',
      period: 'Present',
      type: 'Full-time',
      bullets: [
        'Leading the graphic design team and managing creative direction for client projects.',
        'Overseeing social media creatives, branding, and marketing campaigns.',
        'Ensuring consistency, quality, and timely delivery across all design outputs.',
        'Coordinating with clients and internal teams to translate ideas into impactful visuals.'
      ],
      current: true
    },
    {
      role: 'Graphic Designer',
      company: 'Brandskey',
      period: '2024',
      type: 'Full-time',
      bullets: [
        'Designed branding materials, social media creatives, and visual assets for multiple clients.',
        'Worked closely with clients to understand their vision and deliver tailored designs.',
        'Created strong, clean visuals aligned with brand identity.'
      ],
      current: false
    },
    {
      role: 'Graphic Designer',
      company: 'FBSPL Company',
      period: '2023 – 2024',
      type: 'Full-time',
      bullets: [
        'Developed vector illustrations, logos, and branding materials using Adobe Creative Suite.',
        'Collaborated with diverse clients and handled revisions based on feedback.',
        'Presented creative concepts and prototypes for client approval.'
      ],
      current: false
    },
    {
      role: 'Freelance Graphic Designer & AGP Events',
      company: 'Self-Employed',
      period: '2020 – 2023',
      type: 'Contract / Freelance',
      bullets: [
        'Worked independently on various design projects across industries.',
        'Built and managed a network of designers and developers for larger projects.',
        'Handled client communication, project execution, and delivery end-to-end.'
      ],
      current: false
    }
  ];

  return (
    <>
      <style>{`
        .exp-page-container {
          min-height: 100vh;
          padding: 140px 8% 100px 8%;
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }

        .exp-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .exp-title {
          font-size: clamp(2.5rem, 4vw, 4rem);
          margin-top: 10px;
        }

        /* Timeline layout */
        .timeline-container {
          position: relative;
          padding-left: 50px;
          margin-left: 20px;
          border-left: 2px solid var(--border-color);
        }

        .timeline-track-progress {
          position: absolute;
          top: 0;
          left: -2px;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, var(--accent-purple) 0%, var(--accent-blue) 100%);
          transform-origin: top;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-node {
          position: absolute;
          left: -61px; /* Center circle perfectly on vertical border line */
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #08080a;
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          z-index: 15;
        }

        .timeline-node-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .timeline-item.active .timeline-node {
          border-color: var(--accent-purple);
          box-shadow: 0 0 15px var(--accent-purple);
        }

        .timeline-item.active .timeline-node-inner {
          background: var(--accent-purple);
        }

        .timeline-item:hover .timeline-node {
          border-color: var(--accent-blue);
          box-shadow: 0 0 15px var(--accent-blue);
        }

        .timeline-item:hover .timeline-node-inner {
          background: var(--accent-blue);
        }

        /* Timeline Card */
        .timeline-card {
          background: rgba(16, 16, 22, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 40px;
          transition: var(--transition-smooth);
        }

        .timeline-card:hover {
          border-color: var(--border-color-hover);
          background: rgba(28, 28, 38, 0.7);
          transform: translateX(10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .timeline-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .timeline-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          padding: 6px 12px;
          border-radius: 30px;
          font-family: var(--font-interface);
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .timeline-badge.current {
          background: rgba(168, 85, 247, 0.1);
          border-color: var(--accent-purple);
          color: var(--accent-purple);
        }

        .timeline-role {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .timeline-company {
          font-family: var(--font-interface);
          font-size: 1.05rem;
          color: var(--accent-blue);
          margin-top: 4px;
        }

        .timeline-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
          list-style: none;
        }

        .timeline-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .timeline-bullet-icon {
          color: var(--accent-purple);
          margin-top: 3px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .exp-page-container {
            padding: 100px 5% 60px 5%;
          }
          .timeline-container {
            padding-left: 30px;
            margin-left: 10px;
          }
          .timeline-node {
            left: -41px;
            width: 20px;
            height: 20px;
          }
          .timeline-node-inner {
            width: 8px;
            height: 8px;
          }
          .timeline-card {
            padding: 24px;
          }
          .timeline-card:hover {
            transform: translateY(-5px);
          }
          .timeline-role {
            font-size: 1.3rem;
          }
        }
      `}</style>
      <div className="exp-page-container">
        <div className="exp-header">
          <div className="section-tag">Career History</div>
          <h1 className="exp-title">Work Experience</h1>
        </div>

        <div className="timeline-container">
          <div className="timeline-track-progress"></div>
          {experiences.map((exp, idx) => (
            <div key={idx} className={`timeline-item ${exp.current ? 'active' : ''}`}>
              <div className="timeline-node">
                <div className="timeline-node-inner"></div>
              </div>
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className={`timeline-badge ${exp.current ? 'current' : ''}`}>
                    <Calendar size={12} /> {exp.period}
                  </span>
                  <span className="timeline-badge">
                    <Briefcase size={12} /> {exp.type}
                  </span>
                </div>
                <h2 className="timeline-role">{exp.role}</h2>
                <div className="timeline-company">{exp.company}</div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="timeline-bullet-item">
                      <ChevronRight size={16} className="timeline-bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
