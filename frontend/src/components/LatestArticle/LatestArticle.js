import React from 'react';
import './LatestArticle.css';

const LatestArticle = ({ title, date, author, imageUrl }) => {
  return (
    <div className="latest-article">
      <img src={imageUrl} alt={title} className="article-image" />
      <div className="article-info">
        <h4 className="article-title">{title}</h4>
        <p className="article-meta">{date} {author}</p>
      </div>
    </div>
  );
};

export default LatestArticle;
