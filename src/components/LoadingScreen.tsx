import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2400; // 2.4 seconds

    const animateProgress = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;

      // Cubic ease-out calculation for smooth speed decrescendo
      const ratio = Math.min(elapsed / duration, 1);
      const easeOutRatio = 1 - Math.pow(1 - ratio, 3);
      
      const currentProgress = Math.round(easeOutRatio * 100);
      setProgress(currentProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Wait for exit transitions to finish
        }, 300);
      }
    };

    requestAnimationFrame(animateProgress);
  }, [onComplete]);

  return (
    <div className={`loading-container ${isExiting ? 'exit' : ''}`}>
      <style>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #070709;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: transform 0.8s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.8s ease;
        }

        .loading-container.exit {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .loading-content {
          width: 80%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }

        .loading-meta {
          display: flex;
          justify-content: space-between;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          color: #52525b;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .loading-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 2.2rem;
          line-height: 1;
          color: #ffffff;
          display: flex;
          flex-direction: column;
        }

        .loading-logo span {
          background: linear-gradient(135deg, #a855f7 0%, #00f0ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .loading-bar-track {
          width: 100%;
          height: 3px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }

        .loading-bar {
          height: 100%;
          background: linear-gradient(90deg, #a855f7 0%, #00f0ff 100%);
          transition: width 0.05s linear;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }

        .loading-percentage {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 5rem;
          line-height: 0.8;
          color: #ffffff;
          align-self: flex-end;
          background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.15) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .loading-tagline {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: #a1a1aa;
          letter-spacing: 0.05em;
          opacity: 0.6;
        }
      `}</style>
      <div className="loading-content">
        <div className="loading-meta">
          <span>Creative Portfolio</span>
          <span>© 2026</span>
        </div>
        <div className="loading-logo">
          <span>ESHBAN OLIVER</span>
          <div className="loading-tagline">DESIGN TEAM LEAD // VIDEO CREATIVE</div>
        </div>
        <div className="loading-bar-track">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loading-percentage">{progress.toString().padStart(3, '0')}</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
