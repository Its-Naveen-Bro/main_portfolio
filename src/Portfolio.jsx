import React, { useState } from 'react';
import './Portfolio.css'; 

const navItems = ['home', 'about', 'education', 'skills', 'competitions', 'projects', 'design-projects', 'contact'];

const educationData = [
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
];

const skillsData = [
  { icon: 'fab fa-html5', name: 'HTML' },
  { icon: 'fab fa-css3-alt', name: 'CSS' },
  { icon: 'fab fa-js-square', name: 'JavaScript' },
  { icon: 'fab fa-java', name: 'Java' },
  { icon: 'fab fa-react', name: 'React.js' },
  { icon: 'fas fa-code', name: 'Next.js' },
  { icon: 'fab fa-figma', name: 'Figma' },
  { icon: 'fas fa-database', name: 'SQL' },
  { icon: 'fab fa-uikit', name: 'Unreal Engine' },
  { icon: 'fab fa-unity', name: 'Unity Engine' },
  { icon: 'fas fa-vr-cardboard', name: 'AR / VR' },
  { icon: 'fab fa-microsoft', name: 'Microsoft Office' },
  { icon: 'fas fa-vial', name: 'Manual Testing | Functional Testing | Regression Testing' }
];

const competitionsData = [
  {
    title: 'Smart India Hackathon 2025 (SIH)',
    category: 'National Level Competition',
    description: 'I successfully participated in the SIH 2025, a 30-hour internal hackathon. The experience allowed me to collaborate with teammates, explore creative ideas, and work on real-world problem statements. It was an exciting opportunity to learn, innovate, and strengthen my teamwork and problem-solving skills.',
    achievements: ['Problem Solving', 'Team Collaboration', 'Innovation', 'Technical Implementation'],
    year: '2025',
    image: 'sih.jpg'
  }
];

const techProjectsData = [
  {
    title: 'Zyren : Agency Website',
    description: 'Developed a professional agency website with Next.js focusing on speed and scalability. Designed clean layouts with responsive design and optimized performance.',
    tech: ['Next.js', 'HTML', 'CSS', 'JavaScript'],
    image: 'ZYREN.png',
    buttons: [
      { label: 'View Website', link: 'https://agency-inky-omega.vercel.app/' },
      { label: 'Github Link', link: 'https://github.com/Its-Naveen-Bro/Weboin_task'}
    ]
  },
  {
    title: 'Zyren International Journal of Publication',
    description: 'ZIJP is a platform for publishing high-quality research papers and academic articles across various disciplines.',
    tech: ['React.js', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    image: 'Zyrenpaper.png',
    buttons: [
      { label: 'View Website', link: 'https://journalwebsite-alpha.vercel.app/' },
      { label: 'Github Link', link: 'https://github.com/Its-Naveen-Bro/ZIJP_Journal_Website.git'}
    ]
  },
  {
    title: 'College ERP : UI/UX Redesign',
    description: 'Completely transformed the college ERP website with a fresh, modern design. I researched what users actually needed and built something that is easy to navigate.',
    tech: ['Figma', 'Prototyping', 'HTML/CSS', 'JavaScript'],
    image: 'ERP_LOGIN.png',
    buttons: [
      { label: 'View Prototype', link: 'https://embed.figma.com/proto/ONnfBktmYnnqPLLz49TyoX/' },
      { label: 'View Demo', link: 'https://drive.google.com/file/d/129U5tjGaDi2nOhNGJLuJHV_l9g77s1NM/view?usp=drive_link' },
      { label: 'Github Link', link: 'https://github.com/Its-Naveen-Bro/ERPWebsite' }
    ]
  },
  {
    title: 'OneForAll : E-commerce Website',
    description: 'OneForAll is a modern e-commerce web application built with React, offering electronics, fashion, and food products in one place.',
    tech: ['React', 'Visual Studio Code', 'HTML/CSS', 'JavaScript'],
    image: 'OneForAll.png',
    buttons: [
      { label: 'View Website', link: 'https://oneforall01.netlify.app' },
      { label: 'Github Link', link: 'https://github.com/Its-Naveen-Bro/OneForAll-shopping-website' }
    ]
  }
];

const designProjectsData = [
  {
    title: 'THE UNSEEN',
    description: 'An intense survival horror game where you\'re lost in a dark forest, trying to escape while mysterious creatures hunt you down. Built with Unreal Engine 5.',
    tech: ['Unreal Engine 5', 'Blueprints', '3D Modeling'],
    image: 'unseen.jpg',
    buttons: [
      { label: 'View Demo', link: 'https://drive.google.com/file/d/1SmLSgsFAGFX7YuVASbWWzcXK8i8TFYz7/view?usp=drive_link' },
      { label: 'Case Study', link: 'THE UNSEEN REPORT.pdf' }
    ]
  },
  {
    title: 'Job Tracking Application',
    description: 'Designed a simple and easy-to-use Job Tracking Application in Figma that helps users keep track of their job applications in one place.',
    tech: ['Figma', 'Prototyping', 'UI/UX Design'],
    image: 'job.png',
    buttons: [
      { label: 'Prototype', link: 'https://www.figma.com/proto/PlfMwSOM5ZyS8gi1NGbEUd/Job-Tracking-design?node-id=1001-4&page-id=0%3A1&starting-point-node-id=1048%3A129&t=ETUPPNp1wfdE40ME-1' },
    ]
  },
  {
    title: 'Augmented & Virtual Reality Experiences',
    description: 'Created interactive AR and VR experiences in Unity where users can interact with 3D models in real-time.',
    tech: ['Unity Engine 6', 'XR ToolKits'],
    image: 'arvr.jpg',
    buttons: [
      { label: 'View Demo', link: 'https://drive.google.com/file/d/1aIW2ENrZPnWJLTBtnNzcRlBu6ZjFwcMF/view?usp=drive_link' },
      { label: 'Case Study', link: 'AR VR report.pdf' }
    ]
  },
  {
    title: 'Quick Save : VR Simulator',
    description: 'Quick Save is a VR-based disaster rescue and preparedness simulator that allows users to experience emergency scenarios in an immersive virtual environment.',
    tech: ['Unreal Engine 5.5', 'Meta XR Simulator', 'Blueprints'],
    image: 'VR.png',
    buttons: [
      { label: 'Source File', link: 'https://drive.google.com/file/d/1saRxynpvr5AqZguZXxgskk-ic-1Cu55l/view?usp=drive_link' },
      { label: 'Case Study', link: 'Quick Save.pdf' }
    ]
  }
];

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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      
      <header className="topBar">
        <div className="wrapper headerWrapper">
          <div className="brandLogo">
            <span className="logoText">NAVEEN</span>
          </div>
          
          <nav className="navigationBar">
            <ul className={`menuItems ${menuOpen ? 'active' : ''}`}>
              {navItems.map(item => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    className={activeSection === item ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                  >
                    {item.includes('-') 
                      ? item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                      : item.charAt(0).toUpperCase() + item.slice(1)
                    }
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="headerRight">
            <div className="toggleMenu" onClick={() => setMenuOpen(!menuOpen)}>
              <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="heroSection">
        <div className="heroBackgroundLines"></div>
        <div className="wrapper heroContent">
          
          <div className="heroLeft">
            
            <h1 className="heroTitle">
              Hi, I'm <span className="textMaroon">Naveen S</span>
            </h1>
            
            <p className="heroSubtitle">
              I build beautiful websites and exciting games that people actually find easy to use. My passion is turning creative ideas into real, working products that make a difference.
            </p>
            
            <div className="heroActionGroup">
              <a href="#contact" className="btnSolidMaroonLarge" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Hire Me <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            <div className="socialSection">
              
              <div className="socialLinks">
                <a href="https://www.linkedin.com/in/naveen-s-30092003ns/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/Its-Naveen-Bro?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

          </div>
          
          <div className="heroRight">
            <div className="verticalRays"></div>
            <div className="imageGlow"></div>
            <div className="heroImageWrapper">
              <img src="img.png" alt="Profile" className="heroImage" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div className="wrapper">
          <div className="sectionHeader relativeCenter">
            <h2 className="sectionTitle">About <span className="textMaroon">Me</span></h2>
            <div className="titleLine"></div>
          </div>
          
          <div className="aboutGrid">
            <div className="aboutImageContainer">
              <img src="342.jpg" alt="About" className="aboutPicSquare" />
            </div>
            
            <div className="aboutTextContent">
              <h3 className="aboutHeading">Hi, I'm Naveen S</h3>
              <h4 className="aboutSubHeading textMaroon">Full Stack Developer & Game Creator</h4>
              
              <p className="aboutDesc">
                I build beautiful websites and exciting games that people actually find easy to use. My passion is turning creative ideas into real, working products that make a difference. My recent work includes thrilling survival horror games built in Unreal Engine 5 and complete redesigns of web applications to make them user-friendly.
              </p>
              
              <ul className="aboutDetailsList">
                <li><span className="detailLabel">Birthday</span><span className="detailValue">: September 30, 2003</span></li>
                <li><span className="detailLabel">Phone</span><span className="detailValue">: +91 89257 35717</span></li>
                <li><span className="detailLabel">Email</span><span className="detailValue">: naveenid30@gmail.com</span></li>
                <li><span className="detailLabel">From</span><span className="detailValue">: Tirupattur District, Tamil Nadu</span></li>
                <li><span className="detailLabel">Language</span><span className="detailValue">: English, Tamil</span></li>
                <li><span className="detailLabel">Freelance</span><span className="detailValue">: Available</span></li>
              </ul>

              <a href="NAVEEN.S.pdf" className="btnSolidMaroonPill">
                 Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="contentSection bgAlt">
        <div className="wrapper" style={{maxWidth: '100%', padding: '0'}}>
          <div className="sectionHeader center">
            <h2 className="sectionTitle">My <span className="textMaroon">Education</span></h2>
          </div>
          
          <div className="educationMarquee">
            <div className="marqueeTrack">
              {[...educationData, ...educationData].map((edu, index) => (
                <div key={index} className="timelineCard horizontalCard">
                  <div className="timelineIcon"><i className="fas fa-graduation-cap"></i></div>
                  <div className="timelineContent">
                    <h3 className="timelineTitle">{edu.title}</h3>
                    <h4 className="timelineInst">{edu.institution}</h4>
                    <p className="timelineDesc">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="contentSection">
        <div className="wrapper">
          <div className="sectionHeader center">
            <h2 className="sectionTitle">Technical <span className="textMaroon">Skills</span></h2>
          </div>
          <div className="skillsGrid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skillCard">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="competitions" className="contentSection bgAlt">
        <div className="wrapper">
          <div className="sectionHeader center">
            <h2 className="sectionTitle">Competitions & <span className="textMaroon">Achievements</span></h2>
          </div>
          <div className="compsGrid">
            {competitionsData.map((comp, index) => (
              <div key={index} className="compCard">
                <div className="compImageWrapper">
                  <img src={comp.image} alt={comp.title} className="compImg" />
                </div>
                <div className="compDetails">
                  <h3 className="compTitle">{comp.title}</h3>
                  <div className="compMeta">{comp.category} • {comp.year}</div>
                  <p className="compDesc">{comp.description}</p>
                  <div className="compTags">
                    {comp.achievements.map((ach, i) => (
                      <span key={i} className="compTag"><i className="fas fa-check"></i> {ach}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="contentSection">
        <div className="wrapper">
          <div className="sectionHeader center">
            <h2 className="sectionTitle">Tech <span className="textMaroon">Projects</span></h2>
          </div>
          <div className="projectsGrid">
            {techProjectsData.map((project, index) => (
              <div key={index} className="projCard">
                <div className="projImgWrapper">
                  <img src={project.image} alt={project.title} className="projImg" />
                </div>
                <div className="projInfo">
                  <h3 className="projTitle">{project.title}</h3>
                  <p className="projDesc">{project.description}</p>
                  <div className="projTechs">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="projTech">{tech}</span>
                    ))}
                  </div>
                  <div className="projActions">
                    {project.buttons.map((btn, i) => (
                      <a key={i} href={btn.link} className={i === 0 ? "btnSolidMaroonSmall" : "btnOutlineSmall"}>
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

      <section id="design-projects" className="contentSection bgAlt">
        <div className="wrapper">
          <div className="sectionHeader center">
            <h2 className="sectionTitle">Design & Game <span className="textMaroon">Projects</span></h2>
          </div>
          <div className="projectsGrid">
            {designProjectsData.map((project, index) => (
              <div key={index} className="projCard">
                <div className="projImgWrapper">
                  <img src={project.image} alt={project.title} className="projImg" />
                </div>
                <div className="projInfo">
                  <h3 className="projTitle">{project.title}</h3>
                  <p className="projDesc">{project.description}</p>
                  <div className="projTechs">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="projTech">{tech}</span>
                    ))}
                  </div>
                  <div className="projActions">
                    {project.buttons.map((btn, i) => (
                      <a key={i} href={btn.link} className={i === 0 ? "btnSolidMaroonSmall" : "btnOutlineSmall"}>
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

      <section id="contact" className="contentSection">
        <div className="wrapper">
          <div className="sectionHeader center">
            <h2 className="sectionTitle">Get In <span className="textMaroon">Touch</span></h2>
          </div>
          <div className="contactBoxes">
            <div className="contactBox">
              <div className="contactIcon"><i className="fas fa-envelope"></i></div>
              <h3>Email</h3>
              <a href="mailto:naveenid30@gmail.com">naveenid30@gmail.com</a>
            </div>
            <div className="contactBox">
              <div className="contactIcon"><i className="fas fa-phone-alt"></i></div>
              <h3>Phone</h3>
              <a href="tel:+918925735717">+91 89257 35717</a>
            </div>
            <div className="contactBox">
              <div className="contactIcon"><i className="fas fa-map-marker-alt"></i></div>
              <h3>Location</h3>
              <p>Tirupattur District, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mainFooter">
        <div className="wrapper footerWrapper">
          <div className="brandLogo"><span className="logoText">NAVEEN</span></div>
          <a href="#home" className="scrollTop" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <i className="fas fa-chevron-up"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;