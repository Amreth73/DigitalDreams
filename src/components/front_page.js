import React from 'react';
import './front_page.css'; // Assuming you have a CSS file for styling

function Front_page() {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DigitalDreams - We're available for marketing</title>

        {/* Favicon */}
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />

        {/* Custom CSS */}
        <link rel="stylesheet" href="./assets/css/style.css" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body id="top">
        {/* Header */}
        <header className="header" data-header>
          <div className="container">
            <a href="#" className="logo">
            DigitalDreams
            </a>

            {/* Navbar */}
            <nav className="navbar container" data-navbar>
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#project" className="navbar-link" data-nav-link>
                    Project
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-primary">
                    Login
                  </a>
                </li>
              </ul>

            </nav>

            {/* Navbar Toggle Button */}
            <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
              <ion-icon name="menu-outline" className="open"></ion-icon>
              <ion-icon name="close-outline" className="close"></ion-icon>
            </button>
          </div>
        </header>
      </body>
    </div>
  );
}

export default Front_page;
