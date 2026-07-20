import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Component Imports
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

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

function App() {
  const scrollIndicatorRef = useRef(null);

  // Global ScrollTrigger refresh after mount & resource load
  useEffect(() => {
    ScrollTrigger.refresh();
    
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('load', handleLoad);
    
    // Fallback refreshes for async React renders and images
    const timer1 = setTimeout(() => ScrollTrigger.refresh(), 500);
    const timer2 = setTimeout(() => ScrollTrigger.refresh(), 1500);
    
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useGSAP(() => {
    // Global Scroll Progress Bar
    gsap.to(scrollIndicatorRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });

    // Stagger reveal of section headings and descriptions globally
    const sections = gsap.utils.toArray('section');
    sections.forEach((section) => {
      const title = section.querySelector('.section-title');
      const intro = section.querySelector('p');

      if (title) {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out'
        });
      }

      if (intro) {
        gsap.from(intro, {
          scrollTrigger: {
            trigger: intro,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.1,
          ease: 'power2.out'
        });
      }
    });
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        ref={scrollIndicatorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          backgroundColor: 'var(--accent)',
          transformOrigin: '0% 50%',
          transform: 'scaleX(0)',
          zIndex: 9999
        }}
      />

      {/* Header / Nav */}
      <Header />

      {/* Page Content */}
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="social-icons-row">
            <a 
              href="https://linkedin.com/in/sudharsan-venkatessan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a 
              href="https://github.com/SudharDeveloper" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Sudharsan V. All rights reserved.
          </p>
          <p className="footer-text" style={{ fontSize: '0.8rem', marginTop: '-10px' }}>
            Built with React, GSAP, ScrollTrigger & Vanilla CSS.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
