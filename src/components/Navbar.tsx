import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 900;
          padding: 24px 8%;
          transition: var(--transition-smooth);
        }

        .navbar-header.scrolled {
          padding: 16px 8%;
          background: rgba(8, 8, 10, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .navbar-logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .navbar-logo-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gradient-accent);
        }

        .navbar-menu-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .navbar-link {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 8px 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: var(--transition-fast);
        }

        .navbar-link:hover,
        .navbar-link.active {
          color: var(--text-primary);
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--gradient-accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.85, 0, 0.15, 1);
        }

        .navbar-link:hover::after,
        .navbar-link.active::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .navbar-cta-btn {
          font-size: 0.85rem;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 30px;
          background: var(--gradient-accent);
          color: var(--bg-dark);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.2);
          transition: var(--transition-smooth);
        }

        .navbar-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 240, 255, 0.3);
        }

        .navbar-mobile-toggle {
          display: none;
          color: var(--text-primary);
        }

        /* Mobile Overlay Menu */
        .navbar-menu-mobile {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #08080a;
          z-index: 850;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 100px 40px;
          transform: translateY(-100%);
          transition: transform 0.6s cubic-bezier(0.85, 0, 0.15, 1);
        }

        .navbar-menu-mobile.open {
          transform: translateY(0);
        }

        .navbar-link-mobile {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .navbar-link-mobile.active,
        .navbar-link-mobile:hover {
          color: var(--text-primary);
          transform: scale(1.1);
        }

        @media (max-width: 991px) {
          .navbar-header {
            padding: 20px 5%;
          }
          .navbar-header.scrolled {
            padding: 14px 5%;
          }
          .navbar-menu-desktop {
            display: none;
          }
          .navbar-mobile-toggle {
            display: block;
          }
        }
      `}</style>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={() => handleNavClick('home')}>
            SAKSHI
            <span className="navbar-logo-dot"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-menu-desktop">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`navbar-link ${activePage === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="navbar-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Let's Talk <ArrowUpRight size={16} />
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`navbar-menu-mobile ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`navbar-link-mobile ${activePage === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="navbar-cta-btn"
          style={{ marginTop: '20px', fontSize: '1.1rem', padding: '14px 32px' }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('contact');
          }}
        >
          Let's Talk <ArrowUpRight size={18} />
        </a>
      </div>
    </>
  );
};

export default Navbar;
