import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import '../index.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle header background on scroll
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

  // Intersection Observer for Active Navigation Links
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the middle portion
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Certificates', target: 'certificates' },
    { label: 'Contact', target: 'contact' }
  ];

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(target);
    if (element) {
      const headerOffset = scrolled ? 65 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
          SUDHARSAN V<span className="logo-dot"></span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <ul className={`nav-links ${isOpen ? 'mobile-active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.target}>
                <a
                  href={`#${item.target}`}
                  className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.target)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a
            href="#contact"
            className="btn btn-secondary"
            style={{ padding: '8px 20px', fontSize: '0.85rem', borderRadius: '30px' }}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Connect <ArrowUpRight size={14} />
          </a>

          {/* Toggle Menu for Mobile */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
