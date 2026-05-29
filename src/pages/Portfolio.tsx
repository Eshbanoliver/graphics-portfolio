import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  img: string;
  desc: string;
  fullDesc: string;
  tools: string[];
  role: string;
  client: string;
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All Projects', slug: 'all' },
    { label: 'Reel Editing', slug: 'reels' },
    { label: 'Social Media', slug: 'social' },
    { label: 'Brand Campaigns', slug: 'campaigns' },
    { label: 'Event Designs', slug: 'events' },
    { label: 'Branding', slug: 'branding' },
  ];

  const projects: Project[] = [
    {
      id: 'neon-pulse',
      title: 'Neon Pulse Festival Campaign',
      category: 'Brand Campaigns',
      categorySlug: 'campaigns',
      img: '/images/project_festival.png',
      desc: 'Cinematic visual direction and social campaign assets for a premium neon music fest.',
      fullDesc: 'Developed the entire visual guidelines, motion reels, promotional banners, and stage graphics for the Neon Pulse Festival. The campaign ran across Instagram, TikTok, and Meta Ads, leading to over 1.2M impressions and accelerating ticket sales by 40% in key demographics.',
      tools: ['Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator'],
      role: 'Creative Direction & Lead Editor',
      client: 'Pulse Music Group'
    },
    {
      id: 'fintech-growth',
      title: 'Fintech Growth Reels',
      category: 'Reel Editing',
      categorySlug: 'reels',
      img: '/images/project_finance.png',
      desc: 'Fast-paced storytelling reels boosting visual conversion and attention-holding rate.',
      fullDesc: 'Created a highly engaging short-form series for a major financial education platform. Focused on extreme caption optimization, sound triggers, and visual metaphors to capture scroll attention in the critical initial 2 seconds. The average retention rate increased by 65%.',
      tools: ['Premiere Pro', 'CapCut', 'After Effects'],
      role: 'Video Editor & Sound Designer',
      client: 'Vested Academy'
    },
    {
      id: 'aether-identity',
      title: 'Aether Premium Identity',
      category: 'Branding Projects',
      categorySlug: 'branding',
      img: '/images/project_branding.png',
      desc: 'Bold identity concept tailored for next-generation digital branding and content.',
      fullDesc: 'Crafted a modern visual identity for Aether, a premium digital production house. Developed the custom logo, visual grid guides, color schemes (obsidian black and neon glow cyan), and social templates to establish an elite positioning in the entertainment market.',
      tools: ['Illustrator', 'Photoshop', 'Indesign'],
      role: 'Brand Designer',
      client: 'Aether Media Group'
    },
    {
      id: 'cyber-sound',
      title: 'Cyber Sound Ad Creative Set',
      category: 'Promotional Creatives',
      categorySlug: 'social',
      img: '/images/project_cyber.png',
      desc: 'High-converting display ads and direct-response creatives for audio brand launches.',
      fullDesc: 'Designed a suite of direct-response social media graphics, Instagram story layouts, and promotional banners for a premium hardware launch. Tested multiple color variations and dynamic typographic treatments, yielding a 3.4% click-through rate in advertising trials.',
      tools: ['Photoshop', 'Illustrator', 'Envato'],
      role: 'Lead Designer',
      client: 'CyberSound Labs'
    },
    {
      id: 'agp-esports',
      title: 'AGP Esports Live Event',
      category: 'Event Designs',
      categorySlug: 'events',
      img: '/images/project_esports.png',
      desc: 'Stage backdrops, social banners, and digital flyers for a premium gaming tournament.',
      fullDesc: 'Directed the branding design and key visual templates for the AGP Esports Live Arena Championship. Deliverables included giant LED display backgrounds, animated transition templates for livestream channels, player profile posters, and on-site ticketing assets.',
      tools: ['Illustrator', 'Photoshop', 'After Effects'],
      role: 'Visual Director & Graphic Lead',
      client: 'AGP Events India'
    },
    {
      id: 'vanguard-social',
      title: 'Vanguard Social Grid',
      category: 'Social Media Posts',
      categorySlug: 'social',
      img: '/images/project_vanguard.png',
      desc: 'Premium Instagram aesthetics and editorial layout kit.',
      fullDesc: 'Engineered a highly aesthetic grid system and customizable template kit for Vanguard Agency. Set up bold geometric patterns, layout columns, and clean serif-and-sans type pairings that convey instant premium value in social feeds.',
      tools: ['Canva', 'Photoshop', 'Illustrator'],
      role: 'Creative Design Lead',
      client: 'Vanguard Marketing'
    },
    {
      id: 'pixel-craft',
      title: 'Pixel Craft Identity System',
      category: 'Branding Projects',
      categorySlug: 'branding',
      img: '/images/project_pixel.png',
      desc: 'Identity development featuring custom typography patterns.',
      fullDesc: 'Structured the brand foundation for Pixel Craft, a creative software studio. Created visual layouts, packaging concepts, custom letterforms, and brand guideline documentation that spans all digital and physical product interfaces.',
      tools: ['Illustrator', 'Indesign', 'Freepik'],
      role: 'Visual Brand Creator',
      client: 'Pixel Craft Studio'
    },
    {
      id: 'retro-synth',
      title: 'Retro Synth Cinematic Trailer',
      category: 'Reel Editing',
      categorySlug: 'reels',
      img: '/images/project_retro.png',
      desc: 'VHS grain textures, synth sound design, and custom title templates.',
      fullDesc: 'Produced and edited a retro-futurism audio-visual trailer. Applied custom noise overlays, color grading, analog glitters, and sound effects to simulate high-end nostalgic aesthetics. Designed for social promotion, gaining huge traction on Instagram and YouTube.',
      tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
      role: 'Video Editor / Sound Designer',
      client: 'RetroFuture LLC'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categorySlug === activeFilter);

  return (
    <>
      <style>{`
        .portfolio-page {
          min-height: 100vh;
          padding: 140px 8% 100px 8%;
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .portfolio-title {
          font-size: clamp(2.5rem, 4vw, 4rem);
          margin-top: 10px;
        }

        /* Filter Tabs */
        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .filter-btn {
          font-family: var(--font-interface);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-color-hover);
        }

        .filter-btn.active {
          background: var(--gradient-accent);
          color: var(--bg-dark);
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.2);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }

        .portfolio-card {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          transition: var(--transition-smooth);
          height: 100%;
          display: flex;
          flex-direction: column;
          cursor: none; /* Custom cursor */
        }

        .portfolio-card:hover {
          transform: translateY(-8px);
          border-color: var(--border-color-hover);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .portfolio-img-wrap {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
          background-color: #0f0f12;
        }

        .portfolio-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .portfolio-card:hover .portfolio-img-wrap img {
          transform: scale(1.08);
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(8, 8, 10, 0.7);
          opacity: 0;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-icon-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ffffff;
          color: #08080a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .portfolio-icon-btn:hover {
          transform: scale(1.1);
          background: var(--accent-purple);
          color: #ffffff;
        }

        .portfolio-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-grow: 1;
        }

        .portfolio-cat {
          font-family: var(--font-interface);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-blue);
          letter-spacing: 0.05em;
        }

        .portfolio-card-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .portfolio-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Lightbox Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(4, 4, 6, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .modal-card {
          width: 100%;
          max-width: 1000px;
          background: #0e0e13;
          border: 1px solid var(--border-color);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          animation: modal-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modal-enter {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-color);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: var(--transition-fast);
        }

        .modal-close-btn:hover {
          background: #ffffff;
          color: #08080a;
          transform: rotate(90deg);
        }

        .modal-scroll-area {
          overflow-y: auto;
          flex-grow: 1;
        }

        .modal-img-wrap {
          width: 100%;
          aspect-ratio: 16/9;
          position: relative;
          background-color: #08080a;
        }

        .modal-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-content {
          padding: 40px;
          display: grid;
          grid-template-columns: 2.2fr 0.8fr;
          gap: 40px;
        }

        .modal-main-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 700;
        }

        .modal-desc {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1rem;
        }

        .modal-side-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-left: 1px solid var(--border-color);
          padding-left: 30px;
        }

        .modal-meta-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .modal-meta-label {
          font-family: var(--font-interface);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .modal-meta-value {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .modal-tools-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .modal-tool-tag {
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .portfolio-page {
            padding: 100px 5% 60px 5%;
          }
          .modal-overlay {
            padding: 16px;
          }
          .modal-content {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 24px;
          }
          .modal-side-col {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid var(--border-color);
            padding-top: 24px;
          }
          .modal-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
      <div className="portfolio-page">
        <div className="portfolio-header">
          <div className="section-tag">Case Studies & Showcase</div>
          <h1 className="portfolio-title">Creative Portfolio</h1>
        </div>

        {/* Filter Navigation */}
        <div className="filter-tabs">
          {filters.map((f) => (
            <button
              key={f.slug}
              className={`filter-btn ${activeFilter === f.slug ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.slug)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((p) => (
            <div key={p.id} className="portfolio-card" onClick={() => setSelectedProject(p)}>
              <div className="portfolio-img-wrap">
                <img src={p.img} alt={p.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-icon-btn">
                    <Eye size={20} />
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-cat">{p.category}</span>
                <h3 className="portfolio-card-title">{p.title}</h3>
                <p className="portfolio-card-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <X size={20} />
              </button>

              <div className="modal-scroll-area">
                <div className="modal-img-wrap">
                  <img src={selectedProject.img} alt={selectedProject.title} />
                </div>

                <div className="modal-content">
                  <div className="modal-main-col">
                    <span className="portfolio-cat">{selectedProject.category}</span>
                    <h2 className="modal-title">{selectedProject.title}</h2>
                    <p className="modal-desc">{selectedProject.fullDesc}</p>
                  </div>

                  <div className="modal-side-col">
                    <div className="modal-meta-item">
                      <span className="modal-meta-label">Client</span>
                      <span className="modal-meta-value">{selectedProject.client}</span>
                    </div>

                    <div className="modal-meta-item">
                      <span className="modal-meta-label">Role</span>
                      <span className="modal-meta-value">{selectedProject.role}</span>
                    </div>

                    <div className="modal-meta-item">
                      <span className="modal-meta-label">Tech Stack</span>
                      <div className="modal-tools-wrap">
                        {selectedProject.tools.map((t: string, idx: number) => (
                          <span key={idx} className="modal-tool-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
