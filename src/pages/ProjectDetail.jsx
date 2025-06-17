// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects'; 
import MediaRenderer from '../components/MediaRenderer';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <header className="project-header">
        <h1>{project.title.toUpperCase()} </h1>
      </header>

      <section className="about-project">
        <h2>ABOUT THE PROJECT</h2>
        <p>{project.longDescription}</p>
      
      </section>

      {project.screenshots && project.screenshots.length > 0 && (
      <section className="screenshots-grid">
        <h2>PROJECT SCREENSHOTS</h2>
        <div className="grid-container">
          {project.screenshots.map((screenshot, index) => (
            <div key={index} className="grid-item">
              <img 
                src={screenshot} 
                alt={`${project.title} screenshot ${index + 1}`} 
              />
            </div>
          ))}
        </div>
      </section>
      )}

      {project.media && project.media.length > 0 && (
      <section className="media-grid">
        <h2>PROJECT MEDIA</h2>
        <div className="grid-container">
          {project.media.map((mediaItem, index) => (
            <div key={index} className="grid-item">
              <MediaRenderer media={mediaItem} />
            </div>
          ))}
        </div>
      </section>
      )}
      
      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetail;