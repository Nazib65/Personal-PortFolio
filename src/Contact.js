import React from 'react';
import './Contact.css';

const contactCards = [
  {
    label: 'Email',
    value: 'faiazkhan671@gmail.edu',
    href: 'mailto:faiazkhan671@gmail.com',
  },
  {
    label: 'Phone',
    value: '862-236-7215',
    href: 'tel:8622367215',
  },
  {
    label: 'Location',
    value: 'Harrison, New Jersey',
    href: null,
  },
];

const links = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nazib526',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Nazib65',
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card-shell">
        <h2>Contact</h2>
        <p>Reach out for internships, project collaboration, or software engineering opportunities.</p>

        <div className="contact-list">
          {contactCards.map((item) => (
            <div key={item.label} className="contact-row">
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="contact-value" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {item.value}
                </a>
              ) : (
                <span className="contact-value">{item.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="contact-socials">
          {links.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-social-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
