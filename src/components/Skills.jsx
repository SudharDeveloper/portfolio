import React from "react";
import {
  Code2,
  Server,
  Layout,
  Database,
  Wrench,
  Cpu,
  BookOpen,
} from "lucide-react";
import "../index.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={20} />,
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      title: "Backend & Frameworks",
      icon: <Server size={20} />,
      skills: ["Node.js", "Express.js", "REST API Design"],
    },
    {
      title: "Frontend & UI",
      icon: <Layout size={20} />,
      skills: [
        "React.js",
        "State Management",
        "Responsive UI Design",
        "Bootstrap",
      ],
    },
    {
      title: "Databases",
      icon: <Database size={20} />,
      skills: [
        "SQL",
        "SQLite",
        "Relational Database Design",
        "MySQL (Familiar)",
      ],
    },
    {
      title: "Tools & Practices",
      icon: <Wrench size={20} />,
      skills: [
        "Git & GitHub",
        "VS Code",
        "Agile Workflows",
        "Debugging & Testing",
        "n8n",
        "Automation Anywhere",
      ],
    },
    {
      title: "Others & RPA",
      icon: <Cpu size={20} />,
      skills: [
        "RESTful Web Services",
        "RPA Fundamentals",
        "IoT & Embedded Systems",
        "Arduino Hardware",
      ],
    },
    {
      title: "Currently Learning",
      icon: <BookOpen size={20} />,
      skills: ["Django (Python Backend Web Framework)"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <p
          style={{
            maxWidth: "600px",
            marginBottom: "40px",
            color: "var(--text-secondary)",
          }}
        >
          A diverse set of competencies in full-stack web engineering, robot
          process automation (RPA), data analytics, and embedded systems.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skills-category" key={index}>
              <h3 className="skills-cat-title">
                {category.icon} {category.title}
              </h3>

              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <span className="skill-tag" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;