import React, { useState, useEffect } from 'react';
import {
  ZoomIn,
  X,
  ExternalLink,
  Award,
  Calendar,
  BadgeCheck,
} from 'lucide-react';

import '../index.css';

import javascriptImg from '../assets/javascript.png';
import databaseImg from '../assets/database.png'; // ✅ Correct
import nodejsImg from '../assets/nodejs.png';
import staticWebImg from '../assets/static_website.png';
import responsiveWebImg from '../assets/responsive_website.png';
import dynamicWebImg from '../assets/dynamic_web_app.png';
import pythonFoundImg from '../assets/python_foundations.png';

const certificates = [
  {
    credentialId: 'BRNQXXCJN',
    title: 'JavaScript Essentials',
    issuer: 'NxtWave CCBP 4.0 Academy',
    date: 'June 04, 2026',
    img: javascriptImg,
    verifyUrl:
      'https://certificates.ccbp.in/academy/javascript-essentials?id=BRNQXXCJN',
  },
  {
    credentialId: 'JKNRVDCYAD',
    title: 'Introduction to Databases',
    issuer: 'NxtWave CCBP 4.0 Academy',
    date: 'January 26, 2025',
    img: databaseImg,
    verifyUrl:
      'https://certificates.ccbp.in/academy/introduction-to-databases?id=JKNRVDCYAD',
  },
  {
    credentialId: 'SZNVIDJTZX',
    title: 'Node.js',
    issuer: 'NxtWave CCBP 4.0 Academy',
    date: 'April 16, 2026',
    img: nodejsImg,
    verifyUrl:
      'https://certificates.ccbp.in/academy/node-js?id=SZNVIDJTZX',
  },
  {
    credentialId: 'YUDLLWZSZO',
    title: 'Build Your Own Dynamic Web Application',
    issuer: 'NxtWave CCBP 4.0 Academy',
    date: 'January 30, 2026',
    img: dynamicWebImg,
    verifyUrl:
      'https://certificates.ccbp.in/academy/dynamic-web-application?id=YUDLLWZSZO',
  },
  {
    credentialId: 'ZSUBGSYHV8',
    title: 'Programming Foundations with Python',
    issuer: 'NxtWave CCBP 4.0 Academy',
    date: 'August 11, 2025',
    img: pythonFoundImg,
    verifyUrl:
      'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=ZSUBGSYHV8',
  },
  {
    credentialId: 'ZQNUPTFWC',
    title: 'Build Your Own Responsive Website',
    issuer: 'NxtWave CCBP 4.0 Academy',
    date: 'October 29, 2024',
    img: responsiveWebImg,
    verifyUrl:
      'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=ZQNUPTFWC',
  },
  {
    credentialId: 'NSTAVQVZYT',
    title: 'Build Your Own Static Website',
    issuer: 'NxtWave CCBP 4.0 Academy',
    date: 'October 29, 2024',
    img: staticWebImg,
    verifyUrl:
      'https://certificates.ccbp.in/academy/static-website?id=NSTAVQVZYT',
  },
];

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeCert]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section id="certificates" className="section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>

          <div className="certs-intro">
            <p>
              A collection of verified certifications showcasing my knowledge in
              web development, programming, and modern software engineering.
            </p>
          </div>

          <div className="certs-grid">
            {certificates.map((cert) => (
              <button
                key={cert.credentialId}
                type="button"
                className="cert-card"
                onClick={() => setActiveCert(cert)}
              >
                <div className="cert-img-wrapper">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="cert-img"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="cert-overlay">
                    <div className="cert-overlay-icon">
                      <ZoomIn size={22} />
                    </div>
                  </div>
                </div>

                <div className="cert-info">
                  <span className="cert-issuer">
                    {cert.issuer}
                  </span>

                  <h3 className="cert-title">
                    {cert.title}
                  </h3>

                  <div className="cert-footer">
                    <span className="cert-date">
                      <Calendar size={14} />
                      {cert.date}
                    </span>

                    <span className="cert-verify-link">
                      View
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeCert && (
        <div
          className="lightbox active"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setActiveCert(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <img
              src={activeCert.img}
              alt={activeCert.title}
              className="lightbox-img"
            />

            <div className="lightbox-caption">
              <div className="lightbox-badge">
                <Award size={15} />
                {activeCert.issuer}
              </div>

              <h4>{activeCert.title}</h4>

              <div className="lightbox-meta">
                <p>
                  <BadgeCheck size={15} />
                  Credential ID:
                  <strong>{activeCert.credentialId}</strong>
                </p>

                <p>
                  <Calendar size={15} />
                  Issued:
                  <strong>{activeCert.date}</strong>
                </p>
              </div>

              <a
                href={activeCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary lightbox-btn"
              >
                Verify Credential
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;