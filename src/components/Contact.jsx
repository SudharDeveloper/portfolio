import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, MessageSquare, Info } from 'lucide-react';
import '../index.css';

const GithubIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  // Pull keys from Vite env
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setAlert({ show: false, type: '', message: '' });

    // Fallback if keys are not configured yet
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setTimeout(() => {
        setIsSending(false);
        setAlert({
          show: true,
          type: 'success',
          message: 'Simulation: Message captured! (To connect your live inbox, add your EmailJS API keys in your .env file).'
        });
        console.log('Simulated contact form send details:', formData);
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setIsSending(false);
          setAlert({
            show: true,
            type: 'success',
            message: 'Your message has been sent successfully! Sudharsan will get back to you soon.'
          });
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }, (error) => {
          setIsSending(false);
          setAlert({
            show: true,
            type: 'error',
            message: `Failed to send email: ${error.text}. Please check your credentials.`
          });
      });
  };

  // WhatsApp helper link
  const waNumber = '919952873836';
  const waText = encodeURIComponent('Hi Sudharsan, I saw your portfolio and would love to connect with you!');
  const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <section id="contact" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p style={{ maxWidth: '600px', marginBottom: '40px', color: 'var(--text-secondary)' }}>
          Have an opportunity, a project idea, or just want to say hi? Feel free to write me or connect directly through social channels.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Details</h3>
            <p className="contact-lead">Let's build something exceptional together.</p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <a href="mailto:sudharsanv@gmail.com" className="contact-detail-value">
                    sudharsanv@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <a href="tel:+919952073691" className="contact-detail-value">
                    +91 9952073691
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-value">Chennai, India</div>
                </div>
              </div>
            </div>

            {/* Quick Actions Row */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                <MessageSquare size={18} /> Connect on WhatsApp
              </a>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>Follow Me</span>
                <div className="social-icons-row">
                  <a 
                    href="https://linkedin.com/in/sudharsan-venkatessan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    title="LinkedIn profile"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a 
                    href="https://github.com/SudharDeveloper" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    title="GitHub profile"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {alert.show && (
              <div className={`form-alert form-alert-${alert.type}`}>
                <Info size={16} />
                <span>{alert.message}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <label className="form-label" htmlFor="user_name">Your Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="form-control"
                  placeholder="John Doe"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="user_email">Email Address</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="form-control"
                  placeholder="john@example.com"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Hi Sudharsan, I would love to connect..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
                
                {(!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) && (
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Info size={12} /> Sandbox mode active
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
