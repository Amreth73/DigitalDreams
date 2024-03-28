import React from 'react';

import './front_page.css'
function Service2() {
  return (
    <section className="section project" id="project" aria-label="project">
      <div className="container">
        <h2 className="h2 section-title">Our Recent Projects</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="grid-list">
          {/* Project Cards */}
          {projects.map((project, index) => (
            <li key={index}>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ '--width': project.width, '--height': project.height }}>
                  <img
                    src={project.image}
                    width={project.width}
                    height={project.height}
                    loading="lazy"
                    alt={project.alt}
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">{project.subtitle}</p>
                  <h3 className="h3">
                    <a href={project.link} className="card-title">
                      {project.title}
                    </a>
                  </h3>
                  <a href={project.detailsLink} className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Service2;

// Sample data for projects
const projects = [
  {
    width: 510,
    height: 700,
    image: 'project-1.jpg',
    alt: 'Designing a better cinema experience',
    subtitle: 'SEO Optimization',
    title: 'Designing a better cinema experience',
    link: '#',
    detailsLink: '#',
  },
  {
    width: 510,
    height: 700,
    image: 'project-2.jpg',
    alt: 'Building design process within teams',
    subtitle: 'Digital Marketing',
    title: 'Building design process within teams',
    link: '#',
    detailsLink: '#',
  },
  {
    width: 510,
    height: 700,
    image: 'project-3.jpg',
    alt: 'How intercom brings play into their design process',
    subtitle: 'Keyword Targeting',
    title: 'How intercom brings play into their design process',
    link: '#',
    detailsLink: '#',
  },
  {
    width: 510,
    height: 700,
    image: 'project-4.jpg',
    alt: 'Stuck with to-do list, I created a new app for',
    subtitle: 'Email Marketing',
    title: 'Stuck with to-do list, I created a new app for',
    link: '#',
    detailsLink: '#',
  },
  {
    width: 510,
    height: 700,
    image: 'project-5.jpg',
    alt: 'Examples of different types of sprints',
    subtitle: 'Marketing & Reporting',
    title: 'Examples of different types of sprints',
    link: '#',
    detailsLink: '#',
  },
  {
    width: 510,
    height: 700,
    image: 'project-6.jpg',
    alt: 'Redesigning the new york times app',
    subtitle: 'Development',
    title: 'Redesigning the new york times app',
    link: '#',
    detailsLink: '#',
  },
  // Add more projects with similar structure
];
