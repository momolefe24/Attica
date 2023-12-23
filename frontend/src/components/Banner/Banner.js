import React from 'react';
import './Banner.css'; // Make sure to create a corresponding CSS file

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="logo">Attica</div>
        <div className="menu">
          <a href="#music">Artists</a>
          <a href="#sports">Locations</a>
          <a href="#arts-theatre">Third-Party</a>
          <a href="#comedy">Buy A Ticket</a>
          <a href="#comedy">Cart</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search by Artist, Event or Venue" />
          <button>🔍</button>
        </div>
        <div className="user-actions">
          <button>Sign In/Register</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
