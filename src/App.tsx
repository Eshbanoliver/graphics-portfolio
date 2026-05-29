import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const validPages = ['home', 'about', 'experience', 'services', 'portfolio', 'skills', 'contact'];
    
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
      </main>

      {/* Dynamic responsive footer */}
      <Footer setActivePage={handlePageChange} />

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
      `}</style>
    </div>
  );
}

export default App;
