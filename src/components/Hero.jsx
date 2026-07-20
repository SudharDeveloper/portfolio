import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowDown, Mail, ArrowUpRight } from 'lucide-react';
import resumePreviewImg from '../assets/resume_preview.png';
import '../index.css';

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial load states
    gsap.set('.hero-tag', { opacity: 0, y: -10 });
    gsap.set('.char-reveal', { opacity: 0, y: 50 });
    gsap.set('.hero-subtitle', { opacity: 0, y: 20 });
    gsap.set('.hero-summary', { opacity: 0, x: -30 });
    gsap.set('.hero-ctas', { opacity: 0, y: 20 });
    gsap.set('.resume-card-wrapper', { opacity: 0, scale: 0.8, rotate: 10 });

    tl.to('.hero-tag', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to('.char-reveal', { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)' }, '-=0.3')
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .to('.hero-summary', { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to('.resume-card-wrapper', { opacity: 1, scale: 1, rotate: 2, duration: 1, ease: 'elastic.out(1, 0.75)' }, '-=0.6')
      .to('.hero-ctas', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.6');
  }, { scope: containerRef });

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="hero-tag">Available for Internships & Projects</span>
            <h1 className="hero-title">
              <span className="char-reveal">SUDHARSAN</span> <span className="char-reveal">V</span>
            </h1>
            <h2 className="hero-subtitle">Software Developer | Python, Node.js & React</h2>
            
            <p className="hero-summary">
              Full Stack Developer with hands-on experience building web applications using Python, Node.js/Express.js, and React. Comfortable across the full development lifecycle, from API endpoints to responsive frontends. Collaborative and committed to writing clean, maintainable code.
            </p>

            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary" onClick={handleScrollToContact}>
                Let's Talk <Mail size={16} />
              </a>
              <a href="#projects" className="btn btn-secondary" onClick={handleScrollToProjects}>
                View Work <ArrowDown size={16} />
              </a>
            </div>

            {/* Quick stats / meta items */}
            <div style={{ display: 'flex', gap: '30px', marginTop: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase' }}>Location</span>
                <span style={{ fontSize: '1rem', fontWeight: 500 }}>Chennai, India</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase' }}>Education</span>
                <span style={{ fontSize: '1rem', fontWeight: 500 }}>B.Tech AI & Data Science</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="resume-card-wrapper" title="Sudharsan V Resume Preview">
              <img 
                src={resumePreviewImg} 
                alt="Sudharsan V Resume Document" 
                className="resume-preview-img" 
              />
              <div style={{ marginTop: '12px', textAlign: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', cursor: 'pointer' }}>
                  Interactive Resume <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
