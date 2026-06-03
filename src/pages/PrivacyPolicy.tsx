import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <style>{`
        .privacy-page-container {
          min-height: 100vh;
          padding: 140px 8% 100px 8%;
          position: relative;
          z-index: 10;
          max-width: 1000px;
          margin: 0 auto;
        }

        .privacy-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .privacy-title {
          font-size: clamp(2.2rem, 3.5vw, 3.5rem);
          margin-top: 10px;
        }

        .privacy-card {
          background: linear-gradient(var(--bg-card), var(--bg-card)) padding-box,
                      linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(0, 240, 255, 0.35) 100%) border-box;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid transparent;
          border-radius: 24px;
          padding: 48px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .privacy-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .privacy-section h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          border-left: 2px solid var(--accent-purple);
          padding-left: 12px;
          line-height: 1.2;
        }

        .privacy-section p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .privacy-section ul {
          margin-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .privacy-date {
          font-family: var(--font-interface);
          font-size: 0.85rem;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .privacy-cta-section {
          margin-top: 40px;
          padding: 48px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(0, 240, 255, 0.08) 100%), var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          transition: var(--transition-smooth);
        }

        .privacy-cta-section:hover {
          border-color: rgba(0, 240, 255, 0.3);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 
                      0 0 20px rgba(0, 240, 255, 0.1);
          transform: translateY(-3px);
        }

        .privacy-cta-section h2 {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-family: var(--font-heading);
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .privacy-cta-section p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
        }

        .privacy-cta-btn {
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .privacy-page-container {
            padding: 100px 5% 60px 5%;
          }
          .privacy-card {
            padding: 32px 24px;
          }
          .privacy-cta-section {
            padding: 32px 24px;
          }
        }
      `}</style>
      <div className="privacy-page-container">
        <div className="privacy-header">
          <div className="section-tag">Legal Info</div>
          <h1 className="privacy-title">Privacy Policy</h1>
        </div>

        <div className="privacy-card">
          <div className="privacy-section">
            <span className="privacy-date">Last Updated: June 1, 2026</span>
            <p>
              Your privacy is extremely important to me. This Privacy Policy details how I collect, use, and protect any information you share when using this portfolio website.
            </p>
          </div>

          <div className="privacy-section">
            <h2>1. Information I Collect</h2>
            <p>
              This website is a static portfolio site designed to showcase my creative work as a graphic designer and video creative. 
            </p>
            <p>
              I do not run user registration, user accounts, or newsletters. The only direct way you share personal information is if you voluntarily choose to contact me via:
            </p>
            <ul>
              <li>The direct-contact email address (<a href="mailto:contact@sakshijames.com" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>contact@sakshijames.com</a>).</li>
              <li>The custom consultation form on the Contact page, where you supply your Name, Email Address, and Project Brief.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>2. How I Use Your Information</h2>
            <p>
              Any information shared through contact forms or email is used strictly to communicate back to you, discuss creative briefs, manage design project proposals, and deliver assets. I do not use this data for marketing lists, nor do I ever sell or share it with third parties.
            </p>
          </div>

          <div className="privacy-section">
            <h2>3. Cookies and Analytics</h2>
            <p>
              This website is hosted on Netlify. While no advertising or targeting trackers are used on this site, standard hosting platforms may collect basic server log data (such as IP addresses, browser types, and access timestamps) to analyze security and ensure stable network speeds.
            </p>
          </div>

          <div className="privacy-section">
            <h2>4. Security</h2>
            <p>
              I implement industry-standard security measures to guard the communications sent through this site. However, please remember that no transmission method over the internet is 100% secure.
            </p>
          </div>

          <div className="privacy-section">
            <h2>5. Contact Me</h2>
            <p>
              If you have any questions or concerns about this policy or how I manage communications data, please reach out directly at: <a href="mailto:contact@sakshijames.com" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>contact@sakshijames.com</a>.
            </p>
          </div>
        </div>

        <div className="privacy-cta-section">
          <h2>Ready to create something amazing?</h2>
          <p>Let's collaborate on your next design or creative project and build something extraordinary together.</p>
          <a href="#contact" className="btn-accent privacy-cta-btn">
            Let's Talk Design
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
