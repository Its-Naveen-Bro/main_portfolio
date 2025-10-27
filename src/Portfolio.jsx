import React, { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <div className="portfolio">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">Naveen S</div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              {['home', 'about', 'education', 'skills', 'projects', 'contact'].map(item => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    className={activeSection === item ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-flex">
          <div className="hero-left">
            <h1>Hi, I am <span className="highlight">Naveen S</span></h1>
            <h2>Frontend & Game Developer</h2>
            <p>I design and develop web and game projects that combine creativity with technology, making experiences that are both user friendly and exciting for users.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn primary-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                <i className="fas fa-paper-plane"></i> Hire Me
              </a>
              <a href="#projects" className="btn secondary-btn" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                <i className="fas fa-code"></i> View Work
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/naveen-s-30092003ns/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Its-Naveen-Bro?tab=repositories" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-img-container">
              <img src="342.jpg" alt="Profile" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title section-center">About <span>Me</span></h2>
          <div className="about-content">
            <div className="about-image">
              <div className="about-img-container">
                <img src="img1.jpg" alt="About" className="about-img" />
              </div>
            </div>
            <div className="about-text">
              <h3>Frontend Developer & Game Developer</h3>
              <p>I am a Frontend Developer and Game developer who enjoys creating user-friendly digital experiences. My portfolio includes THE UNSEEN, a horror survival game developed in Unreal Engine 5, and a college ERP system redesign focused on usability and visual clarity. I also explore AR/VR, creating immersive environments and interactive web-based interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title section-center">My <span>Education</span></h2>
          <div className="timeline">
            {[
              {
                title: 'Bachelor Degree - Computer Science and Design',
                institution: 'Rajalakshmi Engineering College | 2023 - 2026',
                description: 'I am study coding and game design, exploring how creativity and logic come together to shape great digital experiences.'
              },
              {
                title: 'Diploma - Mechanical Engineering (Tool & Die)',
                institution: 'PSV Polytechnic College | 2022',
                description: 'During my diploma, I got really interested in AutoCAD because I enjoyed turning ideas into precise designs.'
              },
              {
                title: 'Secondary School Leaving Certificate (SSLC)',
                institution: 'Infant Jesus Matriculation School | 2019',
                description: 'During my SSLC, I loved drawing and expressing creativity through art. This early interest sparked my passion for design and visual work.'
              }
            ].map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{edu.title}</h3>
                  <h4>{edu.institution}</h4>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title section-center">My <span>Skills</span></h2>
          <div className="skills-grid">
            {[
              { icon: 'fab fa-html5', name: 'HTML' },
              { icon: 'fab fa-css3-alt', name: 'CSS' },
              { icon: 'fab fa-js-square', name: 'JavaScript' },
              { icon: 'fab fa-react', name: 'React' },
              { icon: 'fas fa-pencil-ruler', name: 'Figma' },
              { icon: 'fas fa-gamepad', name: 'Unreal Engine(Blueprint)' },
              { icon: 'fas fa-vr-cardboard', name: 'AR / VR' }
              
            
            ].map((skill, index) => (
              <div key={index} className="skill-card">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title section-center">My <span>Projects</span></h2>
          <div className="projects-grid">
            {[
              {
                title: 'THE UNSEEN',
                description: 'A survival horror game set in a procedurally generated forest where players must escape while being hunted by unseen entities. Developed in Unreal Engine 5 with advanced lighting and sound design.',
                tech: ['Unreal Engine 5', 'Blueprints', '3D Modeling'],
                image: 'unseen.jpg',
                buttons: [
                  { label: 'View Demo', link: 'https://drive.google.com/file/d/1SmLSgsFAGFX7YuVASbWWzcXK8i8TFYz7/view?usp=drive_link' },
                  { label: 'Case Study', link: 'THE UNSEEN REPORT.pdf' }
                ]
              },
              {
                title: 'College ERP Redesign',
                description: 'Complete UI/UX overhaul of the college management system, improving navigation, accessibility, and visual hierarchy. Conducted user research and testing to inform design decisions.',
                tech: ['Figma', 'Prototyping', 'Visual Studio Code'],
                image: 'ERP_LOGIN.png',
                buttons: [
                  { label: 'View Prototype', link: 'https://embed.figma.com/proto/ONnfBktmYnnqPLLz49TyoX/Login-v0.1?node-id=1-9&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&embed-host=share' },
                  { label: 'View Demo', link: 'https://drive.google.com/file/d/129U5tjGaDi2nOhNGJLuJHV_l9g77s1NM/view?usp=drive_link' },
                  { label: 'Case Study', link: 'ERP.pdf' },
                  { label: 'Github Link', link: 'https://github.com/Its-Naveen-Bro/ERPWebsite' }
                ]
              },
              {
                title: 'AR/VR PROJECTS',
                description: 'Developed an interactive AR/VR experience using Unity, featuring real-time 3D models and immersive user interactions with Vuforia and XR Toolkit integration.',
                tech: ['Unity Engine 6', 'XR ToolKits'],
                image: 'arvr.jpg',
                buttons: [
                  { label: 'View Demo', link: 'https://drive.google.com/drive/folders/1D4HcNHi6Wz0g37ye3d-UtGU-UCGbHm6I?usp=sharing' },
                  { label: 'Case Study', link: 'AR VR report.pdf' }
                ]
              }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-img">
                  <img src={project.image} alt={project.title} className="project-img-tag" />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    {project.buttons.map((btn, i) => (
                      <a key={i} href={btn.link} className="project-btn" title={btn.label}>
                        <i className={btn.icon}></i>
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title section-center">Contact <span>Information</span></h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div className="contact-info">
                <h3>Email</h3>
                <a href="mailto:naveenid30@gmail.com">naveenid30@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <div className="contact-info">
                <h3>Phone</h3>
                <a href="tel:+918925735717">+91 89257 35717</a>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="contact-info">
                <h3>Location</h3>
                <p>Tirupattur, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <a href="#home" className="back-to-top" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </footer>

      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio {
          background: linear-gradient(135deg, #0d1117 0%, #1f2937 100%);
          color: #e6edf3;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
          width: 100%;
          overflow-x: hidden;
          display: block;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(13, 17, 23, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #00e5ff;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-links a {
          color: #e6edf3;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background: #00e5ff;
          bottom: -5px;
          left: 0;
          transition: width 0.3s;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #00e5ff;
        }

        .hamburger {
          display: none;
          font-size: 1.5rem;
          color: #e6edf3;
          cursor: pointer;
          z-index: 1001;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          position: relative;
          z-index: 1;
        }

        .hero-flex {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .hero-left {
          flex: 1;
          animation: fadeIn 0.8s ease-in;
        }

        .hero-left h1 {
          font-size: 3rem;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .highlight {
          color: #00e5ff;
        }

        .hero-left h2 {
          font-size: 1.5rem;
          color: #00e5ff;
          margin-bottom: 20px;
        }

        .hero-left p {
          color: #8b949e;
          margin-bottom: 30px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
          z-index: 2;
          cursor: pointer;
          border: none;
          font-size: 1rem;
        }

        .primary-btn {
          background: #00e5ff;
          color: #000;
        }

        .secondary-btn {
          border: 2px solid #00e5ff;
          color: #00e5ff;
          background: transparent;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 229, 255, 0.3);
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          color: #00e5ff;
          font-size: 1.3rem;
          transition: transform 0.3s;
          position: relative;
          z-index: 2;
        }

        .social-links a:hover {
          transform: scale(1.2);
        }

        .hero-right {
          flex: 1;
          display: flex;
          justify-content: center;
          animation: fadeIn 0.8s ease-in 0.2s backwards;
        }

        .hero-img-container {
          width: 350px;
          height: 350px;
          border-radius: 20px;
          overflow: hidden;
          border: 3px solid #00e5ff;
          box-shadow: 0 10px 30px rgba(0, 229, 255, 0.2);
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 50px;
          position: relative;
          display: inline-block;
        }

        .section-title.section-center {
          display: block;
          text-align: center;
          margin: 0 auto 50px;
        }

        .section-title span {
          color: #00e5ff;
        }

        .section-title::after {
          content: '';
          position: absolute;
          width: 50px;
          height: 3px;
          background: #00e5ff;
          bottom: -10px;
          left: 0;
        }

        .section-title.section-center::after {
          left: 50%;
          transform: translateX(-50%);
        }

        .about {
          padding: 100px 0;
          background: rgba(31, 41, 55, 0.2);
          position: relative;
          z-index: 1;
        }

        .about-content {
          display: flex;
          gap: 50px;
          align-items: center;
        }

        .about-image {
          flex: 0 0 40%;
        }

        .about-img-container {
          width: 300px;
          height: 300px;
          border-radius: 10px;
          border: 5px solid #00e5ff;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.3);
        }

        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-text {
          flex: 1;
        }

        .about-text h3 {
          font-size: 1.8rem;
          color: #00e5ff;
          margin-bottom: 20px;
        }

        .about-text p {
          color: #8b949e;
          line-height: 1.8;
        }

        .education {
          padding: 100px 0;
          position: relative;
          z-index: 1;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 2px;
          background: #00e5ff;
          left: 50%;
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
        }

        .timeline-dot {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #00e5ff;
          border-radius: 50%;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .timeline-content {
          width: calc(50% - 40px);
          padding: 20px;
          background: rgba(31, 41, 55, 0.6);
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: auto;
        }

        .timeline-content h3 {
          font-size: 1.3rem;
          margin-bottom: 5px;
        }

        .timeline-content h4 {
          font-size: 1rem;
          color: #00e5ff;
          margin-bottom: 10px;
        }

        .timeline-content p {
          color: #8b949e;
          line-height: 1.6;
        }

        .skills {
          padding: 100px 0;
          background: rgba(31, 41, 55, 0.2);
          position: relative;
          z-index: 1;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .skill-card {
          background: #1f1f1f;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s, background 0.3s;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          background: #2a2a2a;
        }

        .skill-card i {
          font-size: 40px;
          color: #00e5ff;
          margin-bottom: 15px;
        }

        .skill-card span {
          display: block;
          font-size: 16px;
        }

        .projects {
          padding: 100px 0;
          position: relative;
          z-index: 1;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: rgba(31, 41, 55, 0.6);
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 229, 255, 0.2);
        }

        .project-img {
          height: 200px;
          background: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .project-img-tag {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-content {
          padding: 25px;
        }

        .project-content h3 {
          color: #00e5ff;
          font-size: 1.4rem;
          margin-bottom: 10px;
        }

        .project-content p {
          color: #8b949e;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .project-tech span {
          background: rgba(0, 229, 255, 0.1);
          color: #00e5ff;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .project-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
        }

        .project-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #00e5ff;
          color: #000;
          border: none;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .project-btn:hover {
          background: #00bcd4;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 229, 255, 0.4);
        }

        .project-btn i {
          font-size: 0.9rem;
        }

        .contact {
          padding: 100px 0;
          background: rgba(31, 41, 55, 0.2);
          position: relative;
          z-index: 1;
        }

        .contact-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-item {
          text-align: center;
          padding: 30px;
          background: rgba(31, 41, 55, 0.6);
          border-radius: 10px;
          transition: transform 0.3s;
        }

        .contact-item:hover {
          transform: translateY(-5px);
        }

        .contact-item i {
          font-size: 2.5rem;
          color: #00e5ff;
          margin-bottom: 15px;
        }

        .contact-info h3 {
          margin-bottom: 10px;
        }

        .contact-info a {
          color: #00e5ff;
          text-decoration: none;
        }

        .contact-info p {
          color: #8b949e;
        }

        .footer {
          padding: 30px 0;
          text-align: center;
          background: #1f2937;
          position: relative;
          z-index: 1;
        }

        .back-to-top {
          display: inline-block;
          width: 50px;
          height: 50px;
          background: #00e5ff;
          color: #000;
          border-radius: 50%;
          text-decoration: none;
          line-height: 50px;
          font-size: 1.2rem;
          transition: transform 0.3s;
          position: relative;
          z-index: 2;
        }

        .back-to-top:hover {
          transform: translateY(-5px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: #0d1117;
            flex-direction: column;
            padding-top: 40px;
            transition: left 0.3s;
            gap: 20px;
            z-index: 999;
          }

          .nav-links.active {
            left: 0;
          }

          .hero-flex {
            flex-direction: column-reverse;
          }

          .hero-left h1 {
            font-size: 2rem;
          }

          .hero-left h2 {
            font-size: 1.2rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .about-content {
            flex-direction: column;
          }

          .timeline::before {
            left: 30px;
          }

          .timeline-dot {
            left: 30px;
          }

          .timeline-content {
            width: calc(100% - 70px);
            margin-left: 70px !important;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-details {
            grid-template-columns: 1fr;
          }

          .hero-img-container {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .logo {
            font-size: 1.4rem;
          }

          .nav-links {
            gap: 10px;
            padding-top: 30px;
          }

          .hero-flex {
            gap: 20px;
          }

          .hero-left h1 {
            font-size: 1.5rem;
          }

          .hero-left h2 {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .section-title {
            font-size: 2rem;
          }

          .contact-item {
            padding: 20px;
          }

          .about-img-container {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;