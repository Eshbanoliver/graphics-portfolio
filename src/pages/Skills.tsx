import React from 'react';
import { Palette, Users, Megaphone, Video } from 'lucide-react';
import { 
  AdobePremiere, 
  AdobeIllustrator, 
  AdobePhotoshop, 
  AdobeAfterEffects, 
  Canva 
} from '../components/SocialIcons';

export const Skills: React.FC = () => {
  // Domain categories
  const creativeDomains = [
    {
      title: 'Creative Leadership & Direction',
      icon: <Users size={22} />,
      skills: [
        { name: 'Creative Direction & Team Leadership', desc: 'Leading design teams and managing visual direction across projects.' },
        { name: 'Creative Concept Development', desc: 'Brainstorming and creating original, scroll-stopping concepts.' },
        { name: 'Project Management & Workflow', desc: 'Coordination of deadlines, assets, and delivery pipelines.' },
        { name: 'Client Communication & Intake', desc: 'Understanding requirements and translating briefs into graphics.' }
      ],
      glowColor: 'rgba(168, 85, 247, 0.15)'
    },
    {
      title: 'Graphic & Visual Design',
      icon: <Palette size={22} />,
      skills: [
        { name: 'Graphic Design & Visual Communication', desc: 'Structuring visual messages using visual hierarchy and color theory.' },
        { name: 'Brand Identity Design', desc: 'Formulating robust systems including logos, styles, and identity kits.' },
        { name: 'Social Media Creative Design', desc: 'Designing thumb-stopping Instagram feeds, stories, and carousels.' },
        { name: 'Typography & Layout Design', desc: 'Typesetting, visual grid alignment, and font configurations.' }
      ],
      glowColor: 'rgba(0, 240, 255, 0.15)'
    },
    {
      title: 'Video Editing & Motion Graphics',
      icon: <Video size={22} />,
      skills: [
        { name: 'Reels Editing & Short-Form Video', desc: 'Producing high-retention TikTok, Shorts, and Instagram reels.' },
        { name: 'Commercial Video Editing', desc: 'Crafting conversion-optimized video promos and direct response ads.' },
        { name: 'Motion Graphics', desc: 'Creating dynamic transitions, typography slides, and animated graphics.' }
      ],
      glowColor: 'rgba(168, 85, 247, 0.15)'
    },
    {
      title: 'Print, Marketing & Campaign Layouts',
      icon: <Megaphone size={22} />,
      skills: [
        { name: 'Marketing Campaign Design', desc: 'Fulfilling high-impact design deliverables for marketing blitzes.' },
        { name: 'Banner & Hoarding Design', desc: 'Large-scale vector setups for outdoor and event advertisements.' },
        { name: 'Visiting Card & Collaterals', desc: 'Refined brand printing assets, business cards, and company stationery.' },
        { name: 'Brochure & Flyer Design', desc: 'Structuring details into premium brochures, pamphlets, and flyers.' }
      ],
      glowColor: 'rgba(0, 240, 255, 0.15)'
    }
  ];

  // Specific Tools & Software
  const softwareSuite = [
    {
      name: 'Adobe Premiere Pro',
      category: 'Video Editing',
      level: 95,
      icon: <AdobePremiere size={20} />,
      desc: 'Advanced timeline editing, synchronization, color correction, and audio design.',
      glowColor: 'rgba(0, 240, 255, 0.15)'
    },
    {
      name: 'Adobe Illustrator',
      category: 'Vector Graphics',
      level: 92,
      icon: <AdobeIllustrator size={20} />,
      desc: 'Scalable vector branding, custom typefaces, print layouts, and digital banners.',
      glowColor: 'rgba(168, 85, 247, 0.15)'
    },
    {
      name: 'Adobe Photoshop',
      category: 'Raster Design',
      level: 90,
      icon: <AdobePhotoshop size={20} />,
      desc: 'Creative compositing, photographic manipulations, visual cleanups, and social assets.',
      glowColor: 'rgba(0, 240, 255, 0.15)'
    },
    {
      name: 'Adobe After Effects',
      category: 'Motion Design',
      level: 88,
      icon: <AdobeAfterEffects size={20} />,
      desc: 'Complex dynamic typography, custom transitions, text tracking, and overlays.',
      glowColor: 'rgba(168, 85, 247, 0.15)'
    },
    {
      name: 'Canva',
      category: 'Quick Assets',
      level: 85,
      icon: <Canva size={20} />,
      desc: 'Rapid templates, team design sharing, and swift layouts for social channels.',
      glowColor: 'rgba(0, 240, 255, 0.15)'
    }
  ];

  return (
    <>
      <style>{`
        .skills-page {
          min-height: 100vh;
          padding: 140px 8% 100px 8%;
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .skills-title {
          font-size: clamp(2.5rem, 4vw, 4rem);
          margin-top: 10px;
        }

        .section-subtitle {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 40px;
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-subtitle::after {
          content: '';
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(90deg, var(--border-color) 0%, transparent 100%);
        }

        /* Domain Section Styles */
        .domains-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 40px;
          margin-bottom: 100px;
        }

        .domain-card {
          padding: 40px;
          border-radius: 24px;
          background: linear-gradient(var(--bg-card), var(--bg-card)) padding-box,
                      linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(0, 240, 255, 0.25) 100%) border-box;
          border: 1px solid transparent;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .domain-card:hover {
          background: linear-gradient(var(--bg-card-hover), var(--bg-card-hover)) padding-box,
                      linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-blue) 100%) border-box;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
                      0 0 20px rgba(168, 85, 247, 0.1);
        }

        .domain-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .domain-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(168, 85, 247, 0.1);
          color: var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .domain-card:hover .domain-icon-box {
          background: var(--gradient-accent);
          color: var(--bg-dark);
        }

        .domain-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
        }

        .domain-skills-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .domain-skill-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .domain-skill-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .domain-skill-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        /* Tool Section Styles */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }

        .tool-card {
          padding: 36px;
          border-radius: 20px;
          background: linear-gradient(var(--bg-card), var(--bg-card)) padding-box,
                      linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(0, 240, 255, 0.35) 100%) border-box;
          border: 1px solid transparent;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tool-card:hover {
          background: linear-gradient(var(--bg-card-hover), var(--bg-card-hover)) padding-box,
                      linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-blue) 100%) border-box;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
                      0 0 20px rgba(168, 85, 247, 0.15);
        }

        .tool-glow-layer {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          filter: blur(50px);
          pointer-events: none;
          z-index: 1;
          transition: var(--transition-smooth);
        }

        .tool-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
        }

        .tool-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        .tool-card:hover .tool-icon-box {
          background: var(--gradient-accent);
          color: var(--bg-dark);
          border-color: transparent;
        }

        .tool-cat {
          font-family: var(--font-interface);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .tool-name {
          font-size: 1.4rem;
          font-weight: 700;
          z-index: 2;
        }

        .tool-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          z-index: 2;
          flex-grow: 1;
        }

        .tool-meter-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 2;
          margin-top: 10px;
        }

        .tool-meter-header {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-interface);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .tool-meter-track {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.05);
          border-radius: 2px;
          overflow: hidden;
        }

        .tool-meter-fill {
          height: 100%;
          background: var(--gradient-accent);
          border-radius: 2px;
        }

        @media (max-width: 991px) {
          .domains-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .skills-page {
            padding: 100px 5% 60px 5%;
          }
          .domain-card {
            padding: 24px;
          }
        }
      `}</style>

      <div className="skills-page">
        <div className="skills-header">
          <div className="section-tag">Professional Arsenal</div>
          <h1 className="skills-title">Skills & Software</h1>
        </div>

        {/* Part 1: Creative Domains */}
        <h2 className="section-subtitle">Core Creative Domains</h2>
        <div className="domains-grid">
          {creativeDomains.map((dom, idx) => (
            <div key={idx} className="domain-card">
              <div className="domain-header">
                <div className="domain-icon-box">{dom.icon}</div>
                <h3 className="domain-title">{dom.title}</h3>
              </div>
              <div className="domain-skills-list">
                {dom.skills.map((sk, sIdx) => (
                  <div key={sIdx} className="domain-skill-item">
                    <span className="domain-skill-name">{sk.name}</span>
                    <span className="domain-skill-desc">{sk.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Software Suite */}
        <h2 className="section-subtitle">Creative Toolkit & Software</h2>
        <div className="tools-grid">
          {softwareSuite.map((t, idx) => (
            <div key={idx} className="tool-card">
              <div className="tool-glow-layer" style={{ backgroundColor: t.glowColor }}></div>
              <div className="tool-card-top">
                <div className="tool-icon-box">{t.icon}</div>
                <span className="tool-cat">{t.category}</span>
              </div>
              <h2 className="tool-name">{t.name}</h2>
              <p className="tool-desc">{t.desc}</p>
              
              <div className="tool-meter-wrap">
                <div className="tool-meter-header">
                  <span>Proficiency</span>
                  <span>{t.level}%</span>
                </div>
                <div className="tool-meter-track">
                  <div className="tool-meter-fill" style={{ width: `${t.level}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
