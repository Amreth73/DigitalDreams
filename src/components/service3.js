import React from 'react';

function Service3() {
  return (
    <div>
      {/* About Section */}
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <div className="about-banner img-holder" style={{ '--width': 720, '--height': 960 }}>
            <img
              src="about-banner.jpg"
              width="720"
              height="960"
              loading="lazy"
              alt="about banner"
              className="img-cover"
            />
            <button className="play-btn" aria-label="Play video">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <div className="about-content">
            <h2 className="h2 section-title">About Us</h2>
            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egetsta ante, sed viverra nunc tincidunt
              neceleifend et tiram.
            </p>
            <h3 className="h3">Who We Are</h3>
            <p className="section-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <h3 className="h3">Our Success</h3>
            <ul className="about-list">
              {successItems.map((item, index) => (
                <li key={index} className="about-item">
                  <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                  <p className="section-text">{item}</p>
                </li>
              ))}
            </ul>
            <h3 className="h3">Our Mission</h3>
            <p className="section-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta" aria-label="cta" style={{ backgroundImage: "url('./assets/images/cta-bg.jpg')" }}>
        <div className="container">
          <p className="cta-subtitle">So What is Next?</p>
          <h2 className="h2 section-title">Are You Ready? Let's get to Work!</h2>
          <a href="#" className="btn btn-secondary">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

export default Service3;

// Sample data for success items
const successItems = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
];
