import React from 'react';
import { Film, Image as ImageIcon, Sparkles, Award, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Film size={32} />,
      title: 'Reels & Video Editing',
      tagline: 'High-Retention Short-Form & Promos',
      desc: 'Engaging, fast-paced video edits engineered for social algorithm retention. Using professional sound design, rhythmic cuts, and visual hooks to maximize views and watch-time.',
      deliverables: ['TikToks & IG Reels', 'YouTube Shorts', 'Ad Promos', 'Sound Design & Mix', 'Color Grading'],
      tools: ['Premiere Pro', 'After Effects', 'CapCut']
    },
    {
      icon: <ImageIcon size={32} />,
      title: 'Social Media Designs',
      tagline: 'High-End Conversational Graphics',
      desc: 'Thumb-stopping templates, feed layouts, and carousels designed to stand out. Balancing visual aesthetics with high-converting information architectures.',
      deliverables: ['Carousel Visuals', 'Infographics', 'Story Kits', 'Ad Creative Sets', 'Thumbnail Direction'],
      tools: ['Photoshop', 'Illustrator', 'Canva']
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Promotional Creatives & Ads',
      tagline: 'Direct-Response Ad Deliverables',
      desc: 'Conversion-focused visual design that stops the scroll and prompts the click. Designed based on client psychological patterns and advertising best practices.',
      deliverables: ['Paid Banner Ads', 'Meta Ad Creatives', 'Event Creatives', 'Launch Campaign Kits', 'CTA Assets'],
      tools: ['Illustrator', 'Photoshop', 'Envato']
    },
    {
      icon: <Award size={32} />,
      title: 'Branding Visuals',
      tagline: 'Digital-First Brand Systems',
      desc: 'Establish solid visual identity systems that scale. Creating clear style guidelines, logos, typography stacks, and colors that align with your mission.',
      deliverables: ['Logo & Mark Systems', 'Color Palettes', 'Typography Guidelines', 'Visual Brand Kits', 'Business Assets'],
      tools: ['Illustrator', 'Photoshop', 'Freepik']
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Strategic Briefing',
      desc: 'Aligning on core objectives, reference materials, targeted platform criteria, and visual aesthetics.'
    },
    {
      num: '02',
      title: 'Creative Direction',
      desc: 'Drafting core storyboards for videos, asset prototypes, and conceptual drafts for typography/layouts.'
    },
    {
      num: '03',
      title: 'Visual Execution',
      desc: 'High-fidelity design, motion graphics integration, sound mixing, and multi-version exports.'
    },
    {
      num: '04',
      title: 'Feedback & Refinement',
      desc: 'Reviewing performance markers, integrating adjustments, and delivering structured asset packages.'
    }
  ];

  return (
    <>
      <style>{`
        .services-page {
          min-height: 100vh;
          padding: 140px 8% 100px 8%;
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
        }

        .services-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .services-title {
          font-size: clamp(2.5rem, 4vw, 4rem);
          margin-top: 10px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-bottom: 120px;
        }

        .service-card {
          background: rgba(16, 16, 22, 0.6);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 48px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: var(--transition-smooth);
        }

        .service-card:hover {
          border-color: var(--accent-purple);
          background: rgba(28, 28, 38, 0.8);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(168, 85, 247, 0.05);
        }

        .service-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .service-card-icon {
          width: 72px;
          height: 72px;
          border-radius: 16px;
          background: rgba(168, 85, 247, 0.08);
          color: var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .service-card:hover .service-card-icon {
          background: var(--gradient-accent);
          color: var(--bg-dark);
        }

        .service-card-title-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 16px;
        }

        .service-card-tagline {
          font-family: var(--font-interface);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .service-card-title {
          font-size: 1.8rem;
          font-weight: 700;
        }

        .service-card-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .service-card-deliverables {
          border-top: 1px solid var(--border-color);
          padding-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .deliverable-title {
          font-family: var(--font-interface);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .deliverable-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .deliverable-tag {
          font-size: 0.85rem;
          padding: 6px 14px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
        }

        .service-card-tools {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 10px;
        }

        /* Workflow design */
        .workflow-section {
          background: rgba(255,255,255,0.01);
          border: 1px solid var(--border-color);
          border-radius: 32px;
          padding: 60px 48px;
        }

        .workflow-title-wrap {
          text-align: center;
          margin-bottom: 60px;
        }

        .workflow-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
        }

        .workflow-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
        }

        .workflow-num {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.8;
        }

        .workflow-step-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .workflow-step-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 991px) {
          .services-page {
            padding: 100px 5% 60px 5%;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            padding: 32px 24px;
          }
          .workflow-section {
            padding: 40px 24px;
          }
        }
      `}</style>
      <div className="services-page">
        <div className="services-header">
          <div className="section-tag">High-Tier Capabilities</div>
          <h1 className="services-title">Services & Offerings</h1>
        </div>

        <div className="services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="service-card">
              <div className="service-card-header">
                <div className="service-card-icon">{srv.icon}</div>
                <ArrowUpRight size={24} style={{ color: 'var(--text-muted)' }} />
              </div>

              <div className="service-card-title-group">
                <span className="service-card-tagline">{srv.tagline}</span>
                <h2 className="service-card-title">{srv.title}</h2>
              </div>

              <p className="service-card-desc">{srv.desc}</p>

              <div className="service-card-deliverables">
                <div className="deliverable-title">Typical Outputs</div>
                <div className="deliverable-list">
                  {srv.deliverables.map((del, dIdx) => (
                    <span key={dIdx} className="deliverable-tag">{del}</span>
                  ))}
                </div>
              </div>

              <div className="service-card-tools">
                <span style={{ fontWeight: 600 }}>Toolkit:</span>
                <span>{srv.tools.join(' / ')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="workflow-section">
          <div className="workflow-title-wrap">
            <div className="section-tag">Creative Pipeline</div>
            <h2 style={{ fontSize: '2.2rem', marginTop: '10px' }}>Creative Process</h2>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="workflow-card">
                <div className="workflow-num">{step.num}</div>
                <h3 className="workflow-step-title">{step.title}</h3>
                <p className="workflow-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
