import React from 'react'
import './ContinueWatchingList.css'; // Ensure you have the corresponding CSS file
import ContinueWatchingItem from '../ContinueWatchingItem/ContinueWatchingItem';

// Assuming continueWatchingData is imported or defined within this file
const continueWatchingData = [
  {
    id: 1,
    title: "Nicki Minaj",
    season: "Genre",
    episode: "Hip-Hop",
    timeLeft: "49m left",
    imageUrl: "https://w0.peakpx.com/wallpaper/194/357/HD-wallpaper-nicki-minaj-red.jpg",
  },
  {
    id: 2,
    title: "Rihanna",
    season: "Genre",
    episode: "R&B",
    timeLeft: "17m left",
    imageUrl: "https://w0.peakpx.com/wallpaper/491/168/HD-wallpaper-rihanna.jpg",
  },
  {
    id: 2,
    title: "Drake",
    season: "Genre",
    episode: "Hip-Hop",
    timeLeft: "17m left",
    imageUrl: "https://w0.peakpx.com/wallpaper/212/528/HD-wallpaper-drake-drake-music-singer-monochrome-black-and-white.jpg",
  },
  {
    id: 2,
    title: "Playboi Carti",
    season: "Genre",
    episode: "Trap",
    timeLeft: "17m left",
    imageUrl: "https://w0.peakpx.com/wallpaper/339/92/HD-wallpaper-playboi-carti-wall-aesthetic-carti-iphone-playboi-playboi-carti-playboi-carti-samsung-vintage.jpg",
  },
  {
    id: 2,
    title: "Jay-Z",
    season: "Genre",
    episode: "Hip-Hop",
    timeLeft: "17m left",
    imageUrl: "https://w0.peakpx.com/wallpaper/133/183/HD-wallpaper-jay-z.jpg",
  },
  {
    id: 2,
    title: "Beyonce",
    season: "Genre",
    episode: "R&B",
    timeLeft: "17m left",
    imageUrl: "https://w0.peakpx.com/wallpaper/703/418/HD-wallpaper-beyonce-beauty-people-portrait-singer-woman.jpg",
  },

  // ... more items
];

const ContinueWatchingList = () => {
  return (
    <div className="continue-watching-list">
      <h2>Request To Book Artists</h2>
      <div className="items-container">
        {continueWatchingData.map(item => (
          <ContinueWatchingItem
            key={item.id}
            title={item.title}
            season={item.season}
            episode={item.episode}
            timeLeft={item.timeLeft}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinueWatchingList;
