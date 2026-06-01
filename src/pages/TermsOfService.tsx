import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <>
      <style>{`
        .terms-page-container {
          min-height: 100vh;
          padding: 140px 8% 100px 8%;
          position: relative;
          z-index: 10;
          max-width: 1000px;
          margin: 0 auto;
        }

        .terms-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .terms-title {
          font-size: clamp(2.2rem, 3.5vw, 3.5rem);
          margin-top: 10px;
        }

        .terms-card {
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

        .terms-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .terms-section h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          border-left: 2px solid var(--accent-blue);
          padding-left: 12px;
          line-height: 1.2;
        }

        .terms-section p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .terms-section ul {
          margin-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .terms-date {
          font-family: var(--font-interface);
          font-size: 0.85rem;
          color: var(--accent-purple);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .terms-page-container {
            padding: 100px 5% 60px 5%;
          }
          .terms-card {
            padding: 32px 24px;
          }
        }
      `}</style>
      <div className="terms-page-container">
        <div className="terms-header">
          <div className="section-tag">Terms & Agreement</div>
          <h1 className="terms-title">Terms of Service</h1>
        </div>

        <div className="terms-card">
          <div className="terms-section">
            <span className="terms-date">Last Updated: June 1, 2026</span>
            <p>
              Welcome to my portfolio site. By accessing or using this website, you agree to comply with and be bound by the following Terms of Service.
            </p>
          </div>

          <div className="terms-section">
            <h2>1. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, all materials on this website—including video cuts, reels, branding designs, visual marks, images, illustrations, copy, and layout code—are the intellectual property of Sakshi James. All rights are reserved.
            </p>
            <p>
              You may view and download visual case study material for your personal reference, client consultation references, or hiring review purposes. However, you may not:
            </p>
            <ul>
              <li>Republish my creative case study deliverables as your own work.</li>
              <li>Sell, rent, or sub-license any creative assets showcased on this site.</li>
              <li>Use my branding elements, logo guidelines, or project files for commercial purposes without explicit, signed consent.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>2. Permitted Use</h2>
            <p>
              You agree to use this site only for lawful purposes related to evaluating my professional capabilities for freelance bookings, contracting, or full-time recruitment openings. You may not use this website in any way that damages site availability or access.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. External Links</h2>
            <p>
              My portfolio containing links to social networks (LinkedIn, Instagram, YouTube, GitHub). I have no control over the privacy policies, content, or terms of third-party platforms, and assume no responsibility for them.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. Limitation of Liability</h2>
            <p>
              This website and all creative samples are provided on an "as is" and "as available" basis without any warranty. I do not guarantee that the site will always be online, error-free, or free of visual disruption.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Revisions and Modifications</h2>
            <p>
              I reserves the right to revise these terms or the visual content of the website at any time without notice. By continuing to use this site, you agree to be bound by the current version of these Terms of Service.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Governing Law</h2>
            <p>
              Any claims relating to this website or these terms shall be governed by local intellectual property laws, without regard to conflict of law provisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
