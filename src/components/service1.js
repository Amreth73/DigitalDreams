import React from 'react';
import '@ionic/react/css/core.css';
import './front_page.css'
function Service1() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section hero" id="home" aria-label="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">DigitalDreams Marketing Agency</p>
            <h1 className="h1 hero-title">We are available for marketing</h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporthem incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a href="#" className="btn btn-primary">
              Get Started
            </a>
          </div>
          <figure className="hero-banner">
            <img src="hero-banner.png" width="720" height="673" alt="hero banner" className="w-100" />
          </figure>
        </div>
      </section>

      {/* Service Section */}
      <section className="section service" id="service" aria-label="service">
        <div className="container">
          <h2 className="h2 section-title">Services We Provided</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna.
          </p>
          <ul className="grid-list">
            {/* Service Cards */}
            {services.map((service, index) => (
              <li key={index}>
                <div className="service-card">
                  <div className="card-icon" style={{ backgroundColor: service.iconColor }}>
                    <ion-icon name={service.iconName}></ion-icon>
                  </div>
                  <h3 className="h3">
                    <a href={service.link} className="card-title">
                      {service.title}
                    </a>
                  </h3>
                  <p className="card-text">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Service1;

// Sample data for services
const services = [
  {
    iconName: 'chatbox',
    iconColor: '#13c4a1',
    title: 'SEO Optimization',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    link: '#',
  },
  {
    iconName: 'desktop',
    iconColor: '#6610f2',
    title: 'Digital Marketing',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    link: '#',
  },
  {
    iconName: 'bulb',
    iconColor: '#ffb700',
    title: 'Market Research',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    link: '#',
  },
  {
    iconName: 'phone-portrait',
    iconColor: ' #fc3549',
    title: 'Keyword Targeting',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    link: '#',
  },
  {
    iconName: 'archive',
    iconColor: ' #00d280',
    title: 'Email Marketing',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    link: '#',
  },
  {
    iconName: 'archive',
    iconColor: ' #00d280',
    title: 'Marketing & Reporting',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    link: '#',
  },
  // Add more services with similar structure
];
