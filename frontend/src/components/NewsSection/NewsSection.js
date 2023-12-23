import React from 'react';
import './NewsSection.css'; // Make sure to create a corresponding CSS file
import LatestArticles from '../LatestArticles/LatestArticles';


const topNewsArticles = [
  // Top news articles with larger images and more details
  // ...
];

const latestNewsArticles = [
  // Latest news articles with smaller images
  // ...
];

const NewsArticle = ({ article, isTopNews }) => {
  return (
    <div className={`news-article ${isTopNews ? 'top-news' : 'latest-news'}`}>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-info">
        <h4 className="article-title">{article.title}</h4>
        <p className="article-meta">{article.date} {article.author}</p>
      </div>
    </div>
  );
};


const newsArticles = [
  // Populate this array with your articles, including titles, images, etc.
  {
    id: 1,
    title: "Marshmellow",
    date: "Dec 13, 2023 7:00pm GMT+2",
    author: "#Coachella",
    imageUrl: "https://w0.peakpx.com/wallpaper/612/15/HD-wallpaper-marshmello-dj-face-smile.jpg",
    // ... other article properties
  },
  {
    id: 1,
    title: "DJ Shimza",
    date: "Dec 13, 2023 7:00pm GMT+2",
    author: "#Hey Neighbour",
    imageUrl: "https://kgs-lifestyle.com/wp-content/uploads/2019/11/shimza.png",
    // ... other article properties
  },
  // ... more articles
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <div className="news-header">
        <h2>Hottest Artists</h2>
        <button className="view-all-button">VIEW ALL</button>
      </div>
      <div className="news-content">
        <div className="top-news-section">
          <h3>Top News</h3>
          {newsArticles.map(article => (
            <NewsArticle key={article.id} article={article} isTopNews={true} />
          ))}
        </div>
        <div className="latest-news-section">
        <LatestArticles />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;