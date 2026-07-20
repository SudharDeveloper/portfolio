import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate each timeline entry as it enters viewport
    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 92%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
  }, { scope: containerRef });

  const experiences = [
    {
      role: 'Frontend & AI Developer Intern',
      company: 'Aspire Code AI',
      date: '2025',
      points: [
        'Built RecruitIQ, an AI-powered resume-to-job matching engine using Python, Flask, SQLite, and REST APIs.',
        'Developed EduSmart, a full-stack learning recommendation system using React and Python with personalized course suggestion logic.'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'Cognifyz Technologies',
      date: 'June 2025 - July 2025',
      points: [
        'Contributed to real-world software projects by writing and reviewing clean code, fixing bugs, and improving overall code coverage.',
        'Collaborated effectively within an Agile development lifecycle, showcasing communication skills, adaptability, and high attention to detail.'
      ]
    },
    {
      role: 'Data Analytics Intern',
      company: 'ReTech Pvt. Ltd.',
      date: '2024',
      points: [
        'Analyzed and cleaned massive structured datasets using Excel, SQL, and Python to drive business performance intelligence.',
        'Designed interactive Power BI reports and dashboards, executing complex queries to retrieve, transform, and validate backend data.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" ref={containerRef}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p style={{ maxWidth: '600px', marginBottom: '50px', color: 'var(--text-secondary)' }}>
          Gaining professional internship experience in full stack software development, machine learning applications, and data analytics.
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-badge"></div>
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <ul className="timeline-desc">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
