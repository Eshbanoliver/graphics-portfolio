import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import { Whatsapp } from './components/SocialIcons';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const validPages = ['home', 'about', 'experience', 'services', 'portfolio', 'skills', 'contact', 'privacy', 'terms'];
    
    // Initial load hash sync
    const hash = window.location.hash.replace('#', '');
    if (hash && validPages.includes(hash)) {
      setActivePage(hash);
    } else {
      window.location.hash = 'home';
    }

    // Listener for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      if (newHash && validPages.includes(newHash)) {
        setActivePage(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: string) => {
    setActivePage(page);
    window.location.hash = page;
  };

  // Scroll reveal observer logic
  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all items marked for scroll reveal
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading, activePage]); // Re-run when page changes to wire up new elements

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="app-container">
      {/* Premium cursor follower */}
      <CustomCursor />

      {/* Dynamic graphic backgrounds */}
      <div className="bg-grid"></div>
      <div className="bg-dot-grid"></div>
      <div className="bg-noise"></div>
      <div className="bg-glow-sphere-1"></div>
      <div className="bg-glow-sphere-2"></div>

      {/* Sticky glassmorphic navbar */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Content wrapper with custom slide-fade transition animation */}
      <main className="page-transition-enter" key={activePage}>
        {activePage === 'home' && <Home setActivePage={handlePageChange} />}
        {activePage === 'about' && <About />}
        {activePage === 'experience' && <Experience />}
        {activePage === 'services' && <Services />}
        {activePage === 'portfolio' && <Portfolio />}
        {activePage === 'skills' && <Skills />}
        {activePage === 'contact' && <Contact />}
        {activePage === 'privacy' && <PrivacyPolicy />}
        {activePage === 'terms' && <TermsOfService />}
      </main>

      {/* Dynamic responsive footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Floating WhatsApp FAB */}
      <a
        href="https://wa.me/917728065750?text=Hi%20Sakshi,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect%20about%20a%20project!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Contact on WhatsApp"
      >
        <Whatsapp size={22} />
        <span className="whatsapp-fab-tooltip">Chat with me</span>
      </a>

      <style>{`
        .page-transition-enter {
          animation: page-fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          position: relative;
          z-index: 10;
        }

        @keyframes page-fade-in {
          from {
            opacity: 0;
            transform: translateY(15px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* WhatsApp Floating Action Button */
        .whatsapp-fab {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 56px;
          height: 56px;
          background-color: #25D366;
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
          z-index: 800;
          cursor: none;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          animation: whatsapp-pulse 2s infinite;
        }

        .whatsapp-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
        }

        .whatsapp-fab-tooltip {
          position: absolute;
          right: 70px;
          background: rgba(8, 8, 10, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 8px 14px;
          border-radius: 8px;
          font-family: var(--font-interface);
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transform: translateX(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }

        .whatsapp-fab:hover .whatsapp-fab-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes whatsapp-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-fab {
            bottom: 20px;
            right: 20px;
            width: 48px;
            height: 48px;
          }
          .whatsapp-fab-tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
