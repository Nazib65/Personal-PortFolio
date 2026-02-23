import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    const quickFacts = [
      'Based in Harrison, New Jersey',
      'B.S. Computer Science, Minor in Applied Mathematics (NJIT, 2027)',
      'Data Science Research Assistant and Undergraduate TA',
      'Open to internships and software engineering opportunities',
    ];

    const skills = [
      'Python',
      'Java',
      'C/C++',
      'JavaScript',
      'SQL',
      'React',
      'Node.js',
      'FastAPI',
      'Flask',
      'TensorFlow',
      'OpenCV',
      'Docker',
      'Git',
    ];

    return (
      <section id="about" className="about-section">
        <div className="about-layout">
          <article className="about-card about-profile-card">
            <div className="about-photo-placeholder" aria-label="Profile Photo Placeholder">
              <span className="about-photo-text">Your Photo</span>
            </div>

            <h1 className="about-name">Nazib Irfan Khan</h1>
            <p className="about-kicker">Computer Science Student | Full-Stack + ML</p>
            <p className="about-summary">
              I build data-driven software with strong engineering fundamentals. My current work focuses on
              machine learning systems and chart digitization pipelines that turn unstructured visuals into
              clean, usable datasets.
            </p>

            <div className="about-actions">
              <button
                type="button"
                className="about-btn about-btn-primary"
                onClick={() => this.props.onNavigate('portfolio')}
              >
                View Projects
              </button>
              <button
                type="button"
                className="about-btn about-btn-secondary"
                onClick={() => this.props.onNavigate('contact')}
              >
                Contact Me
              </button>
            </div>
          </article>

          <div className="about-right-column">
            <article className="about-card">
              <h2 className="about-heading">Highlights</h2>
              <ul className="about-list">
                {quickFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>

            <article className="about-card">
              <h2 className="about-heading">Technical Snapshot</h2>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-number">10+</span>
                  <span className="about-stat-label">Projects Built</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">20+</span>
                  <span className="about-stat-label">Students Supported</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">3+</span>
                  <span className="about-stat-label">Years Coding</span>
                </div>
              </div>

              <div className="about-skill-list">
                {skills.map((skill) => (
                  <span key={skill} className="about-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
