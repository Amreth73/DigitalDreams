import React from 'react';

function Service4() {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <h2 className="h2 section-title">Latest Articles Updated Weekly</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="grid-list">
          {/* Blog Cards */}
          {blogPosts.map((post, index) => (
            <li key={index}>
              <div className={`blog-card${post.isGrid ? ' grid' : ''}`}>
                <figure className="card-banner img-holder" style={{ '--width': post.width, '--height': post.height }}>
                  <img
                    src={post.image}
                    width={post.width}
                    height={post.height}
                    loading="lazy"
                    alt={post.alt}
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <time className="time" dateTime={post.date}>{post.dateString}</time>
                  <h3 className="h3">
                    <a href={post.link} className="card-title">
                      {post.title}
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Service4;

// Sample data for blog posts
const blogPosts = [
  {
    width: 860,
    height: 646,
    image: 'blog-1.jpg',
    alt: 'How to Become a Successful Entry Level UX Designer',
    dateString: 'June 16, 2022',
    date: '2022-06-16',
    title: 'How to Become a Successful Entry Level UX Designer',
    link: '#',
    isGrid: false,
  },
  {
    width: 860,
    height: 646,
    image: 'blog-2.jpg',
    alt: '2022 Local SEO Success: The Year of Everywhere',
    dateString: 'June 16, 2022',
    date: '2022-06-16',
    title: '2022 Local SEO Success: The Year of Everywhere',
    link: '#',
    isGrid: true,
  },
  {
    width: 860,
    height: 646,
    image: 'blog-3.jpg',
    alt: 'The Guide to Running a client Discovery Process',
    dateString: 'June 16, 2022',
    date: '2022-06-16',
    title: 'The Guide to Running a client Discovery Process',
    link: '#',
    isGrid: true,
  },
  {
    width: 860,
    height: 646,
    image: 'blog-4.jpg',
    alt: '3 Ways to get Client Approval for Scope Changes',
    dateString: 'June 16, 2022',
    date: '2022-06-16',
    title: '3 Ways to get Client Approval for Scope Changes',
    link: '#',
    isGrid: true,
  },
  {
    width: 860,
    height: 646,
    image: 'blog-5.jpg',
    alt: 'Top 21 Must-Read Blogs for Creative Agencies',
    dateString: 'June 16, 2022',
    date: '2022-06-16',
    title: 'Top 21 Must-Read Blogs for Creative Agencies',
    link: '#',
    isGrid: true,
  },
  // Add more blog posts with similar structure
];
