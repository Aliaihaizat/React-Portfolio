// src/components/MediaRenderer.jsx
import React from 'react';

const MediaRenderer = ({ media }) => {
  if (media.type === 'image') {
    return (
      <img 
        src={media.url} 
        alt={`Project screenshot`} 
        className="project-media"
      />
    );
  } else if (media.type === 'video') {
    return (
      <video 
        controls 
        poster={media.thumbnail}
        className="project-media"
      >
        <source src={media.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  return null;
};

export default MediaRenderer;