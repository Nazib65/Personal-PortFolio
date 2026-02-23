import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: 'https://via.placeholder.com/600x320/0f766e/f3fffd?text=LaLiga+Match+Predictor',
          title: 'LaLiga Match Predictor',
          description:
            'Built an end-to-end machine learning pipeline for match outcome prediction using rolling statistics, feature engineering, and model comparison across classical and neural approaches.',
          technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Streamlit'],
          liveLink: '#',
          githubLink: 'https://github.com/Nazib65',
        },
        {
          project_image: 'https://via.placeholder.com/600x320/115e59/e5fffb?text=JobFit+Copilot',
          title: 'JobFit Copilot',
          description:
            'Built an AI-assisted job application platform that matches resumes to job descriptions and provides tailored guidance for stronger applications.',
          technologies: ['Python', 'NLP', 'React', 'Node.js', 'API Integration'],
          liveLink: '#',
          githubLink: 'https://github.com/Nazib65',
        },
        {
          project_image: 'https://via.placeholder.com/600x320/0e7490/f4fcff?text=Chart+Digitization+Pipeline',
          title: 'Chart Digitization Research Pipeline',
          description:
            'Implemented an automated extraction workflow that converts chart figures from research PDFs into analysis-ready tabular datasets.',
          technologies: ['OpenCV', 'Tesseract', 'Pandas', 'PDF Processing'],
          liveLink: '#',
          githubLink: 'https://github.com/Nazib65',
        },
        {
          project_image: 'https://via.placeholder.com/600x320/1f2937/f8fafc?text=Personal+Portfolio',
          title: 'Personal Portfolio Website',
          description:
            'Developed a custom React portfolio to present projects, technical strengths, and resume details in a clean recruiter-friendly format.',
          technologies: ['React', 'CSS', 'JavaScript'],
          liveLink: '#',
          githubLink: 'https://github.com/Nazib65',
        },
      ],
    };
  }

  render() {
    return (
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-header">
          <h2>Selected Projects</h2>
          <p>Recent systems I designed and built across ML, data extraction, and full-stack development.</p>
        </div>

        <div className="portfolio-grid">
          {this.state.projects.map((project, index) => (
            <article key={project.title + index} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.project_image} alt={project.title} className="project-image" />
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;
