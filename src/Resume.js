import React from 'react';
import './Resume.css';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'New Jersey Institute of Technology',
    details: 'Minor in Applied Mathematics | Newark, NJ',
    period: 'Sep 2023 - May 2027',
  },
];

const experience = [
  {
    role: 'Data Science Research Assistant',
    organization: 'New Jersey Institute of Technology',
    period: 'Sep 2025 - Present',
    bullets: [
      'Built a complete chart digitization pipeline using OpenCV, Tesseract, and Pandas to convert PDF figures into structured datasets.',
      'Implemented axis detection, tick and legend OCR, and pixel-to-value mapping for automated extraction from scientific charts.',
      'Integrated Docling-based PDF processing to export CSV outputs with minimal manual intervention.',
    ],
  },
  {
    role: 'Undergraduate Teaching Assistant',
    organization: 'New Jersey Institute of Technology',
    period: 'Sep 2025 - Present',
    bullets: [
      'Supported 20+ students with programming assignments, debugging, and algorithmic problem solving.',
      'Held weekly office hours covering core CS topics, including data structures and algorithms.',
      'Provided actionable code feedback with emphasis on structure, readability, and efficiency.',
    ],
  },
];

const leadership = [
  {
    role: 'CodePath SWE Fellow',
    period: '2025',
    bullets: [
      'Selected for a competitive national SWE fellowship focused on technical and leadership development.',
      'Led peer coding sessions to explain algorithms and support collaborative debugging.',
    ],
  },
  {
    role: 'Student Mentor, Scholars Nest',
    period: '2024',
    bullets: [
      'Mentored international students applying to U.S. universities with guidance on essays and application strategy.',
      'Delivered one-on-one coaching for SAT preparation and communication skills growth.',
    ],
  },
];

const skillGroups = {
  Languages: ['Python', 'Java', 'C/C++', 'SQL', 'JavaScript', 'PHP', 'Kotlin', 'HTML/CSS'],
  Frameworks: ['React', 'Node.js', 'Flask', 'FastAPI', 'Streamlit'],
  Libraries: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn', 'TensorFlow', 'OpenCV', 'Tesseract'],
  Tools: ['Git', 'GitHub', 'Docker', 'Bash', 'VS Code', 'PyCharm', 'IntelliJ', 'XAMPP'],
};

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <header className="resume-header">
        <h2>Resume Highlights</h2>
        <p>Experience in software engineering, machine learning, and technical mentorship.</p>
        <a className="resume-cta" href="mailto:nk687@njit.edu?subject=Resume%20Request">
          Request Full Resume
        </a>
      </header>

      <div className="resume-grid">
        <article className="resume-panel">
          <h3>Education</h3>
          {education.map((item) => (
            <div key={item.degree} className="resume-item">
              <h4>{item.degree}</h4>
              <p>{item.school}</p>
              <p>{item.details}</p>
              <span>{item.period}</span>
            </div>
          ))}
        </article>

        <article className="resume-panel">
          <h3>Experience</h3>
          {experience.map((item) => (
            <div key={item.role} className="resume-item">
              <h4>{item.role}</h4>
              <p>
                {item.organization} | {item.period}
              </p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        <article className="resume-panel">
          <h3>Leadership</h3>
          {leadership.map((item) => (
            <div key={item.role} className="resume-item">
              <h4>{item.role}</h4>
              <p>{item.period}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        <article className="resume-panel">
          <h3>Technical Skills</h3>
          <div className="resume-skills">
            {Object.entries(skillGroups).map(([group, list]) => (
              <div key={group} className="resume-skill-group">
                <h4>{group}</h4>
                <div className="resume-pill-list">
                  {list.map((skill) => (
                    <span key={skill} className="resume-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Resume;
