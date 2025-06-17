import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';

function Projects() {
  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Studio Ghibli Fan Page",
      image: "/images/ghibliMain.png",
      description: "A fan page for Studio Ghibli films",
      wide: true,
      tags: ["HTML", "CSS", "Responsive"]
    },
    {
      id: 2,
      title: "Travel Store",
      image: "/images/collective.png",
      description: "Flight booking system for Collective Airlines",
      wide: false,
      tags: ["JADE"]
    },
    {
      id: 3,
      title: "Gantt Chart Study Tracker",
      image: "/images/gantt1.png",
      description: "Mobile application for tracking study sessions",
      wide: false,
      tags: ["Andriod Studio"]
    },
    {
      id: 4,
      title: "Automatic Clothes Line",
      image: "/images/clothes.png",
      description: "Automatic clothes retrieval",
      wide: true,
      tags: ["Embedded", "Python", "Serial"]
    },
    {
      id: 5,
      title: "To Do List",
      image: "/images/toDo2.png",
      description: "Winforms based client server application",
      wide: true,
      tags: ["C#", "Winfroms"]
    }
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title" data-aos="fade-down">My Projects</h1>
      
      <div className="grid-container">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`item ${project.wide ? 'wide' : ''}`}
            data-aos="fade-up"
            data-aos-delay={project.id * 100}
          >
            <img src={project.image} alt={project.title} />
            <div className="item-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link 
                to={`/projects/${project.id}`} 
                className="project-button"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;