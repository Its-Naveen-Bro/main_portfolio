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
    <div className="mainContainer">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <header className="topBar">
        <div className="wrapper">
          <nav className="navigationBar">
            <div className="brandName">Naveen S</div>
            <ul className={`menuItems ${menuOpen ? 'active' : ''}`}>
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
            <div className="toggleMenu" onClick={() => setMenuOpen(!menuOpen)}>
              <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="heroSection">
        <div className="wrapper heroContent">
          <div className="heroText">
            <h1>Hey, I'm <span className="accentColor">Naveen S</span></h1>
            <h2>Frontend Developer & Game Creator</h2>
            <p>I build beautiful websites and exciting games that people actually easy to use. My passion is turning creative ideas into real, working products that make a difference.</p>
            <div className="actionButtons">
              <a href="#contact" className="btn btnPrimary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                <i className="fas fa-paper-plane"></i>Hire Me
              </a>
              <a href="#projects" className="btn btnSecondary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                <i className="fas fa-code"></i> See My Work
              </a>
            </div>
            <div className="socialLinks">
              <a href="https://www.linkedin.com/in/naveen-s-30092003ns/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Its-Naveen-Bro?tab=repositories" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="heroImage">
            <div className="imageBorder">
              <img src="342.jpg" alt="Profile" className="profilePic" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div className="wrapper">
          <h2 className="sectionTitle centerTitle">About <span>Me</span></h2>
          <div className="aboutContent">
            <div className="aboutImageBox">
              <div className="imageBorder">
                <img src="img1.jpg" alt="About" className="aboutPic" />
              </div>
            </div>
            <div className="aboutText">
              <h3>Frontend Developer & Game Creator</h3>
              <p>I am a passionate web and game developer who loves creating experiences that feel smooth and intuitive. My recent work includes THE UNSEEN, a thrilling survival horror game built in Unreal Engine 5, and a complete redesign of my college's ERP website to make it user-friendly. I am also diving into AR and VR, building immersive worlds and interactive web experiences that push boundaries.</p>
               <a href="NAVEEN OCT.pdf" className="btn btnSecondary">
                <i className="fas fa-eye"></i>View Resume</a>
            </div>
          </div>
        </div>

      </section>

      <section id="education" className="educationSection">
        <div className="wrapper">
          <h2 className="sectionTitle centerTitle">My <span>Education</span></h2>
          <div className="timelineBox">
            {[
              {
                title: 'Bachelor Degree - Computer Science and Design',
                institution: 'Rajalakshmi Engineering College | 2023 - 2026',
                description: 'Currently studying how to bring ideas to life through code and game design. Learning how creativity and problem-solving work together to create amazing digital products.'
              },
              {
                title: 'Diploma - Mechanical Engineering (Tool & Die)',
                institution: 'PSV Polytechnic College | 2019 - 2022',
                description: 'Studied mechanical design and fell in love with AutoCAD. This is where I first realized I loved turning ideas into precise, working designs.'
              },
              {
                title: 'Secondary School Leaving Certificate',
                institution: 'Infant Jesus Matriculation School | 2019',
                description: 'High school years filled with art and drawing. This early passion for visual creativity sparked my journey into design and everything I do today.'
              }
            ].map((edu, index) => (
              <div key={index} className="timelineStep">
                <div className="timelineMark"></div>
                <div className="timelineInfo">
                  <h3>{edu.title}</h3>
                  <h4>{edu.institution}</h4>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skillsSection">
        <div className="wrapper">
          <h2 className="sectionTitle centerTitle">My <span>Skills</span></h2>
          <div className="skillsDisplay">
            {[
              { icon: 'fab fa-html5', name: 'HTML' },
              { icon: 'fab fa-css3-alt', name: 'CSS' },
              { icon: 'fab fa-js-square', name: 'JavaScript' },
              { icon: 'fab fa-react', name: 'React' },
              { icon: 'fab fa-figma', name: 'Figma' },
              { icon: 'fab fa-uikit', name: 'Unreal Engine (Blueprint)' },
              { icon: 'fab fa-unity', name: 'Unity Engine' },
              { icon: 'fas fa-vr-cardboard', name: 'AR / VR' }
              
            
            ].map((skill, index) => (
              <div key={index} className="skillBox">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projectsSection">
        <div className="wrapper">
          <h2 className="sectionTitle centerTitle">My <span>Projects</span></h2>
          <div className="projectsList">
            {[
              {
                title: 'THE UNSEEN',
                description: 'An intense survival horror game where your lost in a dark forest, trying to escape while mysterious creatures hunt you down. Built with Unreal Engine 5, featuring stunning graphics and spine-chilling sound design.',
                tech: ['Unreal Engine 5', 'Blueprints', '3D Modeling'],
                image: 'unseen.jpg',
                buttons: [
                  { label: 'View Demo', link: 'https://drive.google.com/file/d/1SmLSgsFAGFX7YuVASbWWzcXK8i8TFYz7/view?usp=drive_link' },
                  { label: 'Case Study', link: 'THE UNSEEN REPORT.pdf' }
                ]
              },
              {
                title: 'College ERP Website Redesign',
                description: 'Completely transformed the college ERP website with a fresh, modern design. I researched what users actually needed and built something that easy to navigate and beautiful to look at.',
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
                title: 'Augmented & Virtual Reality Experiences',
                description: 'Created interactive AR and VR experiences in Unity where users can interact with 3D models in real-time. These projects showcase how immersive technology can create engaging user experiences.',
                tech: ['Unity Engine 6', 'XR ToolKits'],
                image: 'arvr.jpg',
                buttons: [
                  { label: 'View Demo', link: 'https://drive.google.com/drive/folders/1D4HcNHi6Wz0g37ye3d-UtGU-UCGbHm6I?usp=sharing' },
                  { label: 'Case Study', link: 'AR VR report.pdf' }
                ]
              }
            ].map((project, index) => (
              <div key={index} className="projectCard">
                <div className="projectImage">
                  <img src={project.image} alt={project.title} className="projectPic" />
                </div>
                <div className="projectDetails">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="techTags">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className="projectLinks">
                    {project.buttons.map((btn, i) => (
                      <a key={i} href={btn.link} className="linkButton" title={btn.label}>
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

      <section id="contact" className="contactSection">
        <div className="wrapper">
          <h2 className="sectionTitle centerTitle">Get In <span>Touch</span></h2>
          <div className="contactBox">
            <div className="contactMethod">
              <i className="fas fa-envelope"></i>
              <div className="methodInfo">
                <h3>Email</h3>
                <a href="mailto:naveenid30@gmail.com">naveenid30@gmail.com</a>
              </div>
            </div>
            <div className="contactMethod">
              <i className="fas fa-phone-alt"></i>
              <div className="methodInfo">
                <h3>Phone</h3>
                <a href="tel:+918925735717">+91 89257 35717</a>
              </div>
            </div>
            <div className="contactMethod">
              <i className="fas fa-map-marker-alt"></i>
              <div className="methodInfo">
                <h3>Location</h3>
                <p>181/3, Elagiri, Jolarpettai, Tirupattur District - 635853, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footerSection">
        <div className="wrapper">
          <a href="#home" className="scrollButton" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
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

        .mainContainer {
          background: linear-gradient(135deg, #0d1117 0%, #1f2937 100%);
          color: #e6edf3;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
          width: 100%;
          overflow-x: hidden;
          display: block;
          min-height: 100vh;
        }

        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .topBar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(13, 17, 23, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .navigationBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }

        .brandName {
          font-size: 1.8rem;
          font-weight: 700;
          color: #00e5ff;
        }

        .menuItems {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .menuItems a {
          color: #e6edf3;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
        }

        .menuItems a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background: #00e5ff;
          bottom: -5px;
          left: 0;
          transition: width 0.3s;
        }

        .menuItems a:hover::after,
        .menuItems a.active::after {
          width: 100%;
        }

        .menuItems a:hover,
        .menuItems a.active {
          color: #00e5ff;
        }

        .toggleMenu {
          display: none;
          font-size: 1.5rem;
          color: #e6edf3;
          cursor: pointer;
          z-index: 1001;
        }

        .heroSection {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          position: relative;
          z-index: 1;
        }

        .heroContent {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .heroText {
          flex: 1;
          animation: fadeIn 0.8s ease-in;
        }

        .heroText h1 {
          font-size: 3rem;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .accentColor {
          color: #00e5ff;
        }

        .heroText h2 {
          font-size: 1.5rem;
          color: #00e5ff;
          margin-bottom: 20px;
        }

        .heroText p {
          color: #8b949e;
          margin-bottom: 30px;
          line-height: 1.7;
        }

        .actionButtons {
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

        .btnPrimary {
          background: #00e5ff;
          color: #000;
        }

        .btnSecondary {
          border: 2px solid #00e5ff;
          color: #00e5ff;
          background: transparent;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 229, 255, 0.3);
        }

        .socialLinks {
          display: flex;
          gap: 15px;
        }

        .socialLinks a {
          color: #00e5ff;
          font-size: 1.3rem;
          transition: transform 0.3s;
          position: relative;
          z-index: 2;
        }

        .socialLinks a:hover {
          transform: scale(1.2);
        }

        .heroImage {
          flex: 1;
          display: flex;
          justify-content: center;
          animation: fadeIn 0.8s ease-in 0.2s backwards;
        }

        .imageBorder {
          width: 350px;
          height: 350px;
          border-radius: 20px;
          overflow: hidden;
          border: 3px solid #00e5ff;
          box-shadow: 0 10px 30px rgba(0, 229, 255, 0.2);
        }

        .profilePic {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sectionTitle {
          font-size: 2.5rem;
          margin-bottom: 50px;
          position: relative;
          display: inline-block;
        }

        .centerTitle {
          display: block;
          text-align: center;
          margin: 0 auto 50px;
        }

        .sectionTitle span {
          color: #00e5ff;
        }

        .sectionTitle::after {
          content: '';
          position: absolute;
          width: 50px;
          height: 3px;
          background: #00e5ff;
          bottom: -10px;
          left: 0;
        }

        .centerTitle::after {
          left: 50%;
          transform: translateX(-50%);
        }

        .aboutSection {
          padding: 100px 0;
          background: rgba(31, 41, 55, 0.2);
          position: relative;
          z-index: 1;
        }

        .aboutContent {
          display: flex;
          gap: 50px;
          align-items: center;
        }

        .aboutImageBox {
          flex: 0 0 40%;
        }

        .aboutPic {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .aboutText {
          flex: 1;
        }

        .aboutText h3 {
          font-size: 1.8rem;
          color: #00e5ff;
          margin-bottom: 20px;
        }

        .aboutText p {
          color: #8b949e;
          line-height: 1.8;
        }

        .educationSection {
          padding: 100px 0;
          position: relative;
          z-index: 1;
        }

        .timelineBox {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timelineBox::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 2px;
          background: #00e5ff;
          left: 50%;
          transform: translateX(-50%);
        }

        .timelineStep {
          position: relative;
          margin-bottom: 50px;
        }

        .timelineMark {
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

        .timelineInfo {
          width: calc(50% - 40px);
          padding: 20px;
          background: rgba(31, 41, 55, 0.6);
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .timelineStep:nth-child(odd) .timelineInfo {
          margin-left: auto;
        }

        .timelineInfo h3 {
          font-size: 1.3rem;
          margin-bottom: 5px;
        }

        .timelineInfo h4 {
          font-size: 1rem;
          color: #00e5ff;
          margin-bottom: 10px;
        }

        .timelineInfo p {
          color: #8b949e;
          line-height: 1.6;
        }

        .skillsSection {
          padding: 100px 0;
          background: rgba(31, 41, 55, 0.2);
          position: relative;
          z-index: 1;
        }

        .skillsDisplay {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .skillBox {
          background: #1f1f1f;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s, background 0.3s;
        }

        .skillBox:hover {
          transform: translateY(-10px);
          background: #2a2a2a;
        }

        .skillBox i {
          font-size: 40px;
          color: #00e5ff;
          margin-bottom: 15px;
        }

        .skillBox span {
          display: block;
          font-size: 16px;
        }

        .projectsSection {
          padding: 100px 0;
          position: relative;
          z-index: 1;
        }

        .projectsList {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .projectCard {
          background: rgba(31, 41, 55, 0.6);
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .projectCard:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 229, 255, 0.2);
        }

        .projectImage {
          height: 200px;
          background: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .projectPic {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .projectDetails {
          padding: 25px;
        }

        .projectDetails h3 {
          color: #00e5ff;
          font-size: 1.4rem;
          margin-bottom: 10px;
        }

        .projectDetails p {
          color: #8b949e;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .techTags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .techTags span {
          background: rgba(0, 229, 255, 0.1);
          color: #00e5ff;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .projectLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
        }

        .linkButton {
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

        .linkButton:hover {
          background: #00bcd4;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 229, 255, 0.4);
        }

        .linkButton i {
          font-size: 0.9rem;
        }

        .contactSection {
          padding: 100px 0;
          background: rgba(31, 41, 55, 0.2);
          position: relative;
          z-index: 1;
        }

        .contactBox {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .contactMethod {
          text-align: center;
          padding: 30px;
          background: rgba(31, 41, 55, 0.6);
          border-radius: 10px;
          transition: transform 0.3s;
        }

        .contactMethod:hover {
          transform: translateY(-5px);
        }

        .contactMethod i {
          font-size: 2.5rem;
          color: #00e5ff;
          margin-bottom: 15px;
        }

        .methodInfo h3 {
          margin-bottom: 10px;
        }

        .methodInfo a {
          color: #00e5ff;
          text-decoration: none;
        }

        .methodInfo p {
          color: #8b949e;
        }

        .footerSection {
          padding: 30px 0;
          text-align: center;
          background: #1f2937;
          position: relative;
          z-index: 1;
        }

        .scrollButton {
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

        .scrollButton:hover {
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
          .toggleMenu {
            display: block;
          }

          .menuItems {
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

          .menuItems.active {
            left: 0;
          }

          .heroContent {
            flex-direction: column-reverse;
          }

          .heroText h1 {
            font-size: 2rem;
          }

          .heroText h2 {
            font-size: 1.2rem;
          }

          .actionButtons {
            flex-direction: column;
          }

          .aboutContent {
            flex-direction: column;
          }

          .timelineBox::before {
            left: 30px;
          }

          .timelineMark {
            left: 30px;
          }

          .timelineInfo {
            width: calc(100% - 70px);
            margin-left: 70px !important;
          }

          .skillsDisplay {
            grid-template-columns: repeat(2, 1fr);
          }

          .projectsList {
            grid-template-columns: 1fr;
          }

          .contactBox {
            grid-template-columns: 1fr;
          }

          .imageBorder {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .brandName {
            font-size: 1.4rem;
          }

          .menuItems {
            gap: 10px;
            padding-top: 30px;
          }

          .heroContent {
            gap: 20px;
          }

          .heroText h1 {
            font-size: 1.5rem;
          }

          .heroText h2 {
            font-size: 1rem;
          }

          .actionButtons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .skillsDisplay {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sectionTitle {
            font-size: 2rem;
          }

          .contactMethod {
            padding: 20px;
          }

          .imageBorder {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;