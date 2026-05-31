import { ArrowUpRight } from 'lucide-react';
import { Github, Linkedin, Instagram, Youtube } from './SocialIcons';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .footer-section {
          background-color: #070709;
          border-top: 1px solid var(--border-color);
          padding: 80px 8% 40px 8%;
          position: relative;
          z-index: 10;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-logo-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.8rem;
          color: var(--text-primary);
        }

        .footer-logo span {
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-desc {
          color: var(--text-secondary);
          max-width: 380px;
          font-size: 0.95rem;
        }

        .footer-socials {
          display: flex;
          gap: 16px;
        }

        .footer-social-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .footer-social-link:hover {
          border-color: var(--accent-purple);
          color: var(--text-primary);
          background-color: rgba(168, 85, 247, 0.08);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(168, 85, 247, 0.15);
        }

        .footer-title {
          font-family: var(--font-interface);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-link {
          font-size: 0.9rem;
          color: var(--text-secondary);
          width: fit-content;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .footer-link:hover {
          color: var(--text-primary);
          transform: translateX(4px);
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 40px;
          margin-top: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          font-family: var(--font-interface);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-copyright-link {
          color: inherit;
          transition: var(--transition-fast);
        }

        .footer-copyright-link:hover {
          color: var(--text-primary);
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .footer-section {
            padding: 60px 5% 30px 5%;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
            margin-top: 50px;
          }
        }
      `}</style>
      <footer className="footer-section">
        <div className="footer-grid">
          <div className="footer-logo-col">
            <div className="footer-logo">
              SAKSHI<span>JAMES</span>
            </div>
            <p className="footer-desc">
              Visual director & graphic design team lead crafting scroll-stopping digital content, brand promotional creatives, and custom identity systems.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="footer-title">Navigation</div>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
              <li><a href="#about" className="footer-link" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
              <li><a href="#experience" className="footer-link" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>Experience</a></li>
              <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Services</a></li>
              <li><a href="#portfolio" className="footer-link" onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}>Portfolio</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Contact</div>
            <ul className="footer-links">
              <li>
                <a href="mailto:contact@sakshijames.com" className="footer-link">
                  contact@sakshijames.com <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                  Start a Project <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()}{' '}
            <a
              href="#home"
              className="footer-copyright-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Sakshi James
            </a>
            . All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#privacy" className="footer-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" className="footer-link" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
