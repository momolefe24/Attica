import React from 'react';
import './ContinueWatchingItem.css'; // make sure to create a corresponding CSS file

const ContinueWatchingItem = ({ title, season, episode, timeLeft, imageUrl }) => {
  return (
    <div className="continue-watching-item">
      <img src={imageUrl} alt={title} className="thumbnail" />
      <div className="circle-plus">
        {/* The plus sign is created with the ::before pseudo-element in CSS */}
      </div>
      <div className="overlay">
        <button className="play-button">▶</button>

      </div>
      <div className="info">
        <span className="title">{title}</span>
        <span className="season-episode">{season} - {episode}</span>
      </div>
    </div>
  );
};

export default ContinueWatchingItem;
