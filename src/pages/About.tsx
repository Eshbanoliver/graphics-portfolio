import React from 'react';
import { Film, Image as ImageIcon, Sparkles, Award } from 'lucide-react';

export const About: React.FC = () => {
  const whatIDo = [
    {
      icon: <Film size={24} />,
      title: 'Reels & Video Editing',
      desc: 'Crafting high-retention short-form videos with custom caption treatments, audio triggers, and narrative pacing that matches current creator-economy trends.',
    },
    {
      icon: <ImageIcon size={24} />,
      title: 'Social Media Designs',
      desc: 'Developing cohesive grid systems, carousels, and visual templates that communicate value fast and elevate the visual trust of digital channels.',
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Promotional Creatives & Ads',
      desc: 'Designing direct-response ad visuals, event assets, and landing header layouts built around user psychological triggers to drive conversion rates.',
    },
    {
      icon: <Award size={24} />,
      title: 'Branding Visuals',
      desc: 'Formulating robust digital identity materials including logo packages, brand guidelines, typography styles, and color palettes that stand out in crowded feeds.',
    }
  ];

  return (
    <>
      <style>{`
        .about-page-container {
          min-height: 100vh;
          padding: 140px 8% 100px 8%;
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
        }

        .about-main-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          margin-bottom: 100px;
        }

        .about-photo-wrapper {
          position: relative;
        }

        .about-photo-frame {
          position: sticky;
          top: 140px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: 0 30px 60px rgba(0,0,0,0.7);
        }

        .about-photo-frame img {
          width: 100%;
          display: block;
          filter: grayscale(100%) contrast(1.1);
          transition: var(--transition-smooth);
        }

        .about-photo-frame:hover img {
          filter: grayscale(0%) contrast(1);
          transform: scale(1.02);
        }

        .about-narrative {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .about-narrative h1 {
          font-size: clamp(2.5rem, 4vw, 4rem);
          line-height: 1.05;
        }

        .about-paragraph {
          font-size: 1.15rem;
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .about-paragraph.highlight {
          color: var(--text-primary);
          font-weight: 500;
          border-left: 2px solid var(--accent-purple);
          padding-left: 24px;
        }

        /* What I Do Grid */
        .what-i-do-title-wrap {
          margin-bottom: 60px;
          text-align: center;
        }

        .what-i-do-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        .what-card {
          padding: 40px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .what-card:hover {
          border-color: var(--accent-blue);
          background: var(--bg-card-hover);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 240, 255, 0.06);
        }

        .what-card-icon {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background: rgba(0, 240, 255, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .what-card:hover .what-card-icon {
          background: var(--gradient-accent);
          color: var(--bg-dark);
          transform: scale(1.05) rotate(5deg);
        }

        .what-card-title {
          font-size: 1.35rem;
          font-weight: 700;
        }

        .what-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 991px) {
          .about-page-container {
            padding: 100px 5% 60px 5%;
          }
          .about-main-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-photo-frame {
            position: relative;
            top: 0;
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
      <div className="about-page-container">
        <div className="about-main-grid">
          <div className="about-photo-wrapper">
            <div className="about-photo-frame">
              <img src="/images/portrait.png" alt="Sakshi James portrait" />
            </div>
          </div>

          <div className="about-narrative">
            <div className="section-tag">Inside The Mind</div>
            <h1>I focus on making visuals that grab attention.</h1>
            
            <p className="about-paragraph highlight">
              “I’m a video editor and graphic designer who actually knows how to make content hit, not just exist.”
            </p>

            <p className="about-paragraph">
              I don’t just put clips together or throw colors on a post and call it a day. I focus on making visuals that grab attention in the first 2 seconds… because let’s be honest, no one has patience anymore. If it doesn’t stop the scroll, it’s useless.
            </p>

            <p className="about-paragraph">
              I’ve worked on all kinds of content from festival campaigns to brand promos, and I get what works online and what just looks pretty but does nothing.
            </p>

            <p className="about-paragraph" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              My style? Clean, eye-catching, and made to perform.
            </p>
          </div>
        </div>

        {/* What I Do Section */}
        <div style={{ marginTop: '120px' }}>
          <div className="what-i-do-title-wrap">
            <div className="section-tag">Core Competencies</div>
            <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>What I Do</h2>
          </div>

          <div className="what-i-do-grid">
            {whatIDo.map((item, idx) => (
              <div key={idx} className="what-card">
                <div className="what-card-icon">{item.icon}</div>
                <h3 className="what-card-title">{item.title}</h3>
                <p className="what-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
