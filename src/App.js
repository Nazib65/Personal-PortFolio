import React, { Component } from 'react';
import './App.css';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentComponent: 'about' };
  }

  handleNavClick = (component) => {
    this.setState({ currentComponent: component });
  };

  renderMainContent = () => {
    const { currentComponent } = this.state;

    return currentComponent === 'about' ? (
      <About onNavigate={this.handleNavClick} />
    ) : currentComponent === 'portfolio' ? (
      <Portfolio />
    ) : currentComponent === 'resume' ? (
      <Resume />
    ) : currentComponent === 'contact' ? (
      <Contact />
    ) : (
      <About onNavigate={this.handleNavClick} />
    );
  };

  render() {
    const sections = [
      { id: 'about', label: 'About' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'resume', label: 'Resume' },
      { id: 'contact', label: 'Contact' },
    ];

    return (
      <div className="personal-profile-app">
        <header className="header-navigation">
          <div className="nav-shell">
            <div className="nav-brand">
              <span className="app-dot" />
              <div className="brand-copy">
                <span className="brand-name">Nazib Irfan Khan</span>
                <span className="brand-sub"> | Software Engineer + ML Builder</span>
              </div>
            </div>

            <nav className="navigation-menu" aria-label="Main Navigation">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className={
                    this.state.currentComponent === section.id
                      ? 'navigation-link navigation-link-active'
                      : 'navigation-link'
                  }
                  onClick={() => this.handleNavClick(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <main className="main-content-area">
          <div key={this.state.currentComponent} className="section-stage">
            {this.renderMainContent()}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
