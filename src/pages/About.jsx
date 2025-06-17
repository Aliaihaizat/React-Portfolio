import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';
import { FaCode, FaMobile, FaServer, FaPalette, FaGraduationCap, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

function About() {
  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const skills = [
    { name: "Web Development", level: 70, icon: <FaCode /> },
    { name: "UI/UX Design", level: 95, icon: <FaPalette /> },
    { name: "Mobile Development", level: 60, icon: <FaMobile /> },
    { name: "Backend Basics", level: 65, icon: <FaServer /> },
    { name: "JADE", level: 60, icon: <FaLaptopCode /> },
    { name: "Embedded", level: 50, icon: <FaLightbulb /> },

  ];

  const education = [
    { year: "2023-2025", degree: "Bachelor of IT", institution: "Southern Institute of Technology", icon: <FaGraduationCap /> },
    { year: "2022", degree: "IT Essentials Certificate", institution: "Southern Institute of Technology", icon: <FaGraduationCap /> },
    { year: "2016-2021", degree: "HSC", institution: "East Hills Girls Technology High School", icon: <FaGraduationCap /> },
    { year: "2014-2015", degree: "Year 5-6", institution: "Condell Park Public School", icon: <FaGraduationCap /> },
    { year: "2013", degree: "Year 4", institution: "Lakemba Public School", icon: <FaGraduationCap /> },
    { year: "2010-2012", degree: "Year 2-4", institution: "Spreydon School", icon: <FaGraduationCap /> },
    { year: "2009", degree: "Year 1", institution: "Invercargill Middle School", icon: <FaGraduationCap /> }

  ];

  return (
    <div className="about-page">
      <section className="about-hero" data-aos="fade-down">
        <h1>About Me</h1>
        <div className="waterfall-text">
          <p data-aos="fade-right">Dreamer</p>
          <p data-aos="fade-left">Adaptable</p>
          <p data-aos="fade-right">Affable </p>
        </div>
      </section>

      <section className="bio-section" data-aos="zoom-in">
        <div className="bio-content">
          <p>
            I'm a final-year BIT student who loves making the projects she makes look fun and pretty, but is very reluctant on starting them becuase they have a lot of code.
            Prior to starting the degree I avoided all IT subjects in high school unless if it was compulsory. 
          </p>
          <p>
            When I'm not being bombarded by my school work load, I am either watching a show/movie, eating or knitting. 
          </p>
        </div>
      </section>

      <section className="skills-waterfall">
        <h2 data-aos="fade-down">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-level" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span>{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2 data-aos="fade-down">Education</h2>
        <div className="timeline">
          {education.map((item, index) => (
            <div 
              key={index} 
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;