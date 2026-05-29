import { PenTool, Film, Palette, Cpu, FolderDot, Laptop, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const tools = [
    {
      name: 'Adobe Premiere Pro',
      category: 'Video Editing',
      level: 95,
      icon: <Film size={20} />,
      desc: 'Industry-standard timeline editing, keyframing, multi-cam syncs, and advanced color grading.',
      glowColor: 'rgba(0, 240, 255, 0.15)'
    },
    {
      name: 'Adobe Illustrator',
      category: 'Vector Graphics',
      level: 90,
      icon: <PenTool size={20} />,
      desc: 'Logo systems, digital marketing assets, layouts, typography hierarchies, and vector illustrations.',
      glowColor: 'rgba(168, 85, 247, 0.15)'
    },
    {
      name: 'Adobe Photoshop',
      category: 'Raster Design',
      level: 88,
      icon: <Layers size={20} />,
      desc: 'High-end collage creations, photo manipulation, background cleanups, and asset composites.',
      glowColor: 'rgba(0, 240, 255, 0.15)'
    },
    {
      name: 'CapCut Pro',
      category: 'Short-Form Video',
      level: 92,
      icon: <Film size={20} />,
      desc: 'Rapid short-form templates, caption synchronizations, and quick social trend executions.',
      glowColor: 'rgba(168, 85, 247, 0.15)'
    },
    {
      name: 'ChatGPT & AI Tools',
      category: 'Conceptual & Copy',
      level: 85,
      icon: <Cpu size={20} />,
      desc: 'Visual brainstorming, video scripting, caption structuring, and client brief summaries.',
      glowColor: 'rgba(0, 240, 255, 0.15)'
    },
    {
      name: 'Canva',
      category: 'Quick Assets',
      level: 80,
      icon: <Palette size={20} />,
      desc: 'Rapid design prototyping, brand collateral coordination, and client-editable visual packs.',
      glowColor: 'rgba(168, 85, 247, 0.15)'
    },
    {
      name: 'Envato Elements',
      category: 'Resources',
      level: 95,
      icon: <FolderDot size={20} />,
      desc: 'Asset library procurement, project mockups, motion graphic overlays, and audio track licensing.',
      glowColor: 'rgba(0, 240, 255, 0.15)'
    },
    {
      name: 'Freepik Premium',
      category: 'Graphics Sourcing',
      level: 90,
      icon: <Laptop size={20} />,
      desc: 'Visual templates, background vectors, graphics layouts, and abstract design patterns.',
      glowColor: 'rgba(168, 85, 247, 0.15)'
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        .skill-card {
          padding: 36px;
          border-radius: 20px;
          background: rgba(16, 16, 22, 0.6);
          border: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .skill-card:hover {
          border-color: var(--border-color-hover);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .skill-glow-layer {
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

        .skill-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
        }

        .skill-icon-box {
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

        .skill-card:hover .skill-icon-box {
          background: var(--gradient-accent);
          color: var(--bg-dark);
          border-color: transparent;
        }

        .skill-cat {
          font-family: var(--font-interface);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .skill-name {
          font-size: 1.4rem;
          font-weight: 700;
          z-index: 2;
        }

        .skill-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          z-index: 2;
          flex-grow: 1;
        }

        /* Meter styles */
        .skill-meter-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 2;
          margin-top: 10px;
        }

        .skill-meter-header {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-interface);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .skill-meter-track {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.05);
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-meter-fill {
          height: 100%;
          background: var(--gradient-accent);
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .skills-page {
            padding: 100px 5% 60px 5%;
          }
        }
      `}</style>
      <div className="skills-page">
        <div className="skills-header">
          <div className="section-tag">Technical Arsenal</div>
          <h1 className="skills-title">Skills & Software Tools</h1>
        </div>

        <div className="skills-grid">
          {tools.map((t, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-glow-layer" style={{ backgroundColor: t.glowColor }}></div>
              <div className="skill-card-top">
                <div className="skill-icon-box">{t.icon}</div>
                <span className="skill-cat">{t.category}</span>
              </div>
              <h2 className="skill-name">{t.name}</h2>
              <p className="skill-desc">{t.desc}</p>
              
              <div className="skill-meter-wrap">
                <div className="skill-meter-header">
                  <span>Proficiency</span>
                  <span>{t.level}%</span>
                </div>
                <div className="skill-meter-track">
                  <div className="skill-meter-fill" style={{ width: `${t.level}%` }}></div>
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
