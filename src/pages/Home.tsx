import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Film, Image as ImageIcon, Flame } from 'lucide-react';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Designing visuals people actually stop for.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = [
    {
      id: 'fest-campaign',
      title: 'Neon Pulse Festival Campaign',
      category: 'Festival Campaigns',
      img: '/images/project_festival.png',
      desc: 'Cinematic visual direction and social deliverables driving over 1.2M impressions.',
    },
    {
      id: 'reel-cut',
      title: 'High-Retention Finance Reel',
      category: 'Reels Editing',
      img: '/images/project_finance.png',
      desc: 'Fast-paced storytelling with custom motion graphics boosting views by 300%.',
    },
    {
      id: 'brand-prom',
      title: 'Aether Premium Identity',
      category: 'Branding Visuals',
      img: '/images/project_branding.png',
      desc: 'Bold identity concept tailored for next-generation digital branding.',
    }
  ];

  return (
    <>
      <style>{`
        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 120px 8% 80px 8%;
          overflow: hidden;
          z-index: 2;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          width: 100%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          width: fit-content;
          font-family: var(--font-interface);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 0.05em;
        }

        .hero-title {
          font-size: clamp(3rem, 5vw, 5.5rem);
          line-height: 0.95;
          font-weight: 800;
        }

        .hero-subheadline {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-visual-col {
          display: flex;
          justify-content: center;
          position: relative;
        }

        /* Hero Abstract Visual */
        .hero-abstract-canvas {
          width: 380px;
          height: 380px;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          background: var(--gradient-accent);
          filter: blur(10px);
          opacity: 0.45;
          animation: morphing-shape 12s infinite alternate ease-in-out;
          position: absolute;
          z-index: 1;
        }

        .hero-frame {
          width: 380px;
          height: 380px;
          border-radius: 24px;
          border: 1px solid var(--border-color-hover);
          background: rgba(8, 8, 10, 0.65);
          backdrop-filter: blur(16px);
          z-index: 2;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-frame-inner {
          width: 90%;
          height: 90%;
          border: 1px dashed rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          gap: 16px;
          text-align: center;
          padding: 24px;
        }

        .hero-frame-logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
        }

        @keyframes morphing-shape {
          0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(0deg) scale(1);
          }
          50% {
            border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%;
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            border-radius: 70% 30% 50% 50% / 30% 70% 30% 70%;
            transform: rotate(360deg) scale(0.95);
          }
        }

        /* About Preview */
        .about-preview-section {
          background-color: #0c0c10;
          position: relative;
          z-index: 10;
        }

        .about-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .about-split-img {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .about-split-img img {
          width: 100%;
          display: block;
          filter: grayscale(100%);
          transition: var(--transition-smooth);
        }

        .about-split-img:hover img {
          filter: grayscale(0%);
          transform: scale(1.03);
        }

        .about-split-text {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .section-tag {
          font-family: var(--font-interface);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent-purple);
        }

        .about-title {
          font-size: clamp(2rem, 3.5vw, 3.2rem);
          line-height: 1.1;
        }

        .about-p {
          font-size: 1.1rem;
          line-height: 1.7;
        }

        /* Featured Work */
        .featured-section {
          background-color: #08080a;
          position: relative;
          z-index: 10;
        }

        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 60px;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        .featured-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .featured-card {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          transition: var(--transition-smooth);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .featured-card:hover {
          transform: translateY(-8px);
          border-color: var(--border-color-hover);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .featured-img-wrap {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .featured-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .featured-card:hover .featured-img-wrap img {
          transform: scale(1.08);
        }

        .featured-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, rgba(8,8,10,0.85) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }

        .featured-badge {
          background: var(--gradient-accent);
          color: var(--bg-dark);
          padding: 6px 12px;
          border-radius: 4px;
          font-family: var(--font-interface);
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        .featured-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }

        .featured-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          transition: var(--transition-fast);
        }

        .featured-card:hover .featured-card-title {
          color: var(--accent-blue);
        }

        .featured-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        /* Services Preview */
        .services-preview-section {
          background-color: #0c0c10;
          position: relative;
          z-index: 10;
        }

        .services-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          max-width: 1400px;
          margin: 40px auto 0 auto;
        }

        .service-preview-card {
          padding: 40px 30px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: var(--transition-smooth);
        }

        .service-preview-card:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent-purple);
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(168, 85, 247, 0.1);
        }

        .service-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: rgba(168, 85, 247, 0.1);
          color: var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .service-preview-card:hover .service-icon-wrap {
          background: var(--gradient-accent);
          color: var(--bg-dark);
          transform: scale(1.05) rotate(5deg);
        }

        .service-title {
          font-size: 1.3rem;
          font-weight: 700;
        }

        .service-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        /* Why Work With Me (Stats) */
        .stats-section {
          background-color: #08080a;
          position: relative;
          z-index: 10;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .stat-card {
          padding: 40px 30px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          background: rgba(8, 8, 10, 0.5);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          transition: var(--transition-smooth);
        }

        .stat-card:hover {
          border-color: var(--accent-blue);
          box-shadow: 0 15px 30px rgba(0, 240, 255, 0.08);
          transform: scale(1.03);
        }

        .stat-num {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-family: var(--font-interface);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .stat-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        @media (max-width: 991px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
          }
          .hero-content {
            align-items: center;
          }
          .hero-subheadline {
            margin: 0 auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-frame {
            width: min(380px, 85vw);
            height: min(380px, 85vw);
          }
          .hero-abstract-canvas {
            width: min(380px, 85vw);
            height: min(380px, 85vw);
          }
          .about-split {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .featured-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 6% 60px 6%;
          }
          .hero-title {
            font-size: clamp(2.2rem, 7vw, 3.5rem);
          }
          .hero-subheadline {
            font-size: 0.95rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} className="text-gradient" /> Graphic Lead & Video Creative
            </div>
            <h1 className="hero-title">
              {typedText}
              <span style={{ color: 'var(--accent-blue)' }}>|</span>
            </h1>
            <p className="hero-subheadline">
              Video editor & graphic designer focused on high-performing visuals, social content, branding, and scroll-stopping creative direction.
            </p>
            <div className="hero-ctas">
              <button className="btn-accent" onClick={() => setActivePage('portfolio')}>
                View Portfolio <ArrowRight size={18} />
              </button>
              <button className="btn-secondary" onClick={() => setActivePage('contact')}>
                Let’s Work
              </button>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-abstract-canvas"></div>
            <div className="hero-frame">
              <div className="hero-frame-inner">
                <Flame size={44} style={{ color: 'var(--accent-purple)' }} />
                <div className="hero-frame-logo">SJ.STUDIO</div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                  CREATING FOR THE ATTENTION ECONOMY // HIGH CONVERSION DELIVERABLES
                </p>
                <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem', marginTop: '12px' }}>
                  <span style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>AE</span>
                  <span style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>PR</span>
                  <span style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview-section section-padding">
        <div className="about-split">
          <div className="about-split-img">
            <img src="/images/workspace.png" alt="Creative workspace" />
          </div>
          <div className="about-split-text">
            <div className="section-tag">About Me</div>
            <h2 className="about-title">Making content hit, not just exist.</h2>
            <p className="about-p">
              I’m a video editor and graphic designer who actually knows how to make content hit, not just exist.
            </p>
            <p className="about-p" style={{ color: 'var(--text-secondary)' }}>
              I don’t just put clips together or throw colors on a post and call it a day. I focus on making visuals that grab attention in the first 2 seconds… because let’s be honest, no one has patience anymore. If it doesn’t stop the scroll, it’s useless.
            </p>
            <button className="btn-secondary" style={{ width: 'fit-content', marginTop: '12px' }} onClick={() => setActivePage('about')}>
              Read Full Story <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="featured-section section-padding">
        <div className="featured-header">
          <div className="featured-title-wrap">
            <div className="section-tag">Featured Work</div>
            <h2 className="about-title">Recent Campaigns</h2>
          </div>
          <button className="btn-secondary" onClick={() => setActivePage('portfolio')}>
            See All Projects <ArrowRight size={16} />
          </button>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((p) => (
            <div key={p.id} className="featured-card" onClick={() => setActivePage('portfolio')} style={{ cursor: 'none' }}>
              <div className="featured-img-wrap">
                <img src={p.img} alt={p.title} />
                <div className="featured-overlay">
                  <span className="featured-badge">{p.category}</span>
                </div>
              </div>
              <div className="featured-info">
                <h3 className="featured-card-title">{p.title}</h3>
                <p className="featured-card-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview-section section-padding">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">Services</div>
          <h2 className="about-title" style={{ marginTop: '10px' }}>What I Offer</h2>
        </div>

        <div className="services-preview-grid">
          <div className="service-preview-card">
            <div className="service-icon-wrap">
              <Film size={24} />
            </div>
            <h3 className="service-title">Reels & Video Editing</h3>
            <p className="service-desc">
              High-retention short-form edits optimized for social algorithms, featuring seamless sound design and custom graphics.
            </p>
          </div>

          <div className="service-preview-card">
            <div className="service-icon-wrap">
              <ImageIcon size={24} />
            </div>
            <h3 className="service-title">Social Media Designs</h3>
            <p className="service-desc">
              Scroll-stopping graphic banners, carousel slides, and social kits that reflect premium brand standards.
            </p>
          </div>

          <div className="service-preview-card">
            <div className="service-icon-wrap">
              <Flame size={24} />
            </div>
            <h3 className="service-title">Branding Visuals</h3>
            <p className="service-desc">
              Tailored visual identities, logo marks, and guideline systems to make digital brands immediately recognizable.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button className="btn-accent" onClick={() => setActivePage('services')}>
            Explore Details & Workflow <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Why Work With Me (Stats) */}
      <section className="stats-section section-padding">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag">Why Work With Me</div>
          <h2 className="about-title" style={{ marginTop: '10px' }}>Proven Results</h2>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">4+</div>
            <div className="stat-label">Years Experience</div>
            <p className="stat-desc">Leading graphics team direction since 2020.</p>
          </div>

          <div className="stat-card">
            <div className="stat-num">100%</div>
            <div className="stat-label">Creative Team Lead</div>
            <p className="stat-desc">Managing design pipelines & deliverable quality.</p>
          </div>

          <div className="stat-card">
            <div className="stat-num">10+</div>
            <div className="stat-label">Multi-Industry Projects</div>
            <p className="stat-desc">Success in tech, entertainment, events & e-commerce.</p>
          </div>

          <div className="stat-card">
            <div className="stat-num">Top</div>
            <div className="stat-label">Attention Specialist</div>
            <p className="stat-desc">Engineered strategies to stop visual fatigue.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
