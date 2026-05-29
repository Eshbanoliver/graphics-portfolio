import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { Github, Instagram, Linkedin, Youtube } from '../components/SocialIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Video Reels', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@sakshijames.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', projectType: 'Video Reels', message: '' });
    }, 1500);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com' },
    { name: 'YouTube', icon: <Youtube size={20} />, url: 'https://youtube.com' },
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
  ];

  return (
    <>
      <style>{`
        .contact-page {
          min-height: 100vh;
          padding: 140px 8% 100px 8%;
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: flex-start;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .contact-headline {
          font-size: clamp(2.5rem, 4.5vw, 4.5rem);
          line-height: 1.05;
        }

        .contact-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Email Copy Widget */
        .email-copy-widget {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          margin-top: 10px;
          max-width: 450px;
        }

        .email-details {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .email-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(168, 85, 247, 0.1);
          color: var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .email-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .email-label {
          font-family: var(--font-interface);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .email-val {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
        }

        .copy-btn {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .copy-btn:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .copy-btn.success {
          background: rgba(0, 240, 255, 0.1);
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        /* Social Grid */
        .socials-title {
          font-family: var(--font-interface);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .socials-grid-horizontal {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-family: var(--font-interface);
          font-size: 0.9rem;
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .social-chip:hover {
          border-color: var(--accent-purple);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(168, 85, 247, 0.1);
        }

        /* Form styling */
        .contact-form-card {
          background: rgba(16, 16, 22, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 48px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-label {
          font-family: var(--font-interface);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input {
          background: rgba(8, 8, 10, 0.5);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px 20px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: #ffffff;
          outline: none;
          transition: var(--transition-fast);
          width: 100%;
        }

        .form-input:focus {
          border-color: var(--accent-purple);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
          background: rgba(8, 8, 10, 0.7);
        }

        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 20px center;
          background-size: 16px;
        }

        /* Success state styling */
        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 20px;
          padding: 40px 0;
        }

        .success-glow-box {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid var(--accent-blue);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(0, 240, 255, 0.3);
          animation: success-pulse 2s infinite;
        }

        @keyframes success-pulse {
          0% { transform: scale(1); box-shadow: 0 0 20px rgba(0, 240, 255, 0.3); }
          50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(0, 240, 255, 0.5); }
          100% { transform: scale(1); box-shadow: 0 0 20px rgba(0, 240, 255, 0.3); }
        }

        @media (max-width: 991px) {
          .contact-page {
            padding: 100px 5% 60px 5%;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .contact-form-card {
            padding: 32px;
          }
        }
      `}</style>
      <div className="contact-page">
        <div className="contact-grid">
          {/* Info Column */}
          <div className="contact-info-col">
            <div className="section-tag">Get In Touch</div>
            <h1 className="contact-headline">Let's create something impossible to ignore.</h1>
            <p className="contact-subtitle">
              Ready to elevate your visual identity, redesign your social grids, or produce conversion-optimized video reels? Let's kick off a collaborative design sprint.
            </p>

            {/* Email copying widget */}
            <div className="email-copy-widget">
              <div className="email-details">
                <div className="email-icon-box">
                  <Mail size={20} />
                </div>
                <div className="email-text">
                  <span className="email-label">Direct Email</span>
                  <span className="email-val">contact@sakshijames.com</span>
                </div>
              </div>
              <button 
                className={`copy-btn ${copied ? 'success' : ''}`} 
                onClick={copyEmail}
                title="Copy Email Address"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* Social Grid */}
            <div style={{ marginTop: '20px' }}>
              <div className="socials-title">Follow & Sync</div>
              <div className="socials-grid-horizontal">
                {socialLinks.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-chip">
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-card">
            {formStatus === 'success' ? (
              <div className="form-success-state">
                <div className="success-glow-box">
                  <Check size={40} />
                </div>
                <h2>Message Dispatched!</h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. I will review your project brief and get back to you within 24 hours.
                </p>
                <button className="btn-secondary" style={{ marginTop: '10px' }} onClick={() => setFormStatus('idle')}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="input-group">
                    <label className="input-label" htmlFor="name">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="E.g. Oliver Queen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label className="input-label" htmlFor="email">Your Email</label>
                    <input 
                      id="email"
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="E.g. oliver@queen.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label className="input-label" htmlFor="projectType">Project Type</label>
                    <select 
                      id="projectType"
                      className="form-input form-select"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option value="Video Reels">Reels & Video Editing</option>
                      <option value="Social Media">Social Media Designs</option>
                      <option value="Ads & Promos">Promotional Creatives & Ads</option>
                      <option value="Branding">Branding Visuals</option>
                      <option value="Full Campaign">Full Campaign System</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label className="input-label" htmlFor="message">Project Brief & Details</label>
                    <textarea 
                      id="message"
                      rows={5} 
                      required 
                      className="form-input" 
                      placeholder="Describe what you want to achieve..."
                      style={{ resize: 'vertical' }}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="btn-accent" 
                  style={{ width: '100%', marginTop: '10px' }}
                >
                  {formStatus === 'submitting' ? 'Sending Message...' : 'Start a Project'} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
