import React from 'react';
import Organizer from './components/Organizer/Organizer';
import Banner from './components/Banner/Banner';
import HeroSection from './components/HeroSection/HeroSection';
import ContinueWatchingList from './components/ContinueWatchingList/ContinueWatchingList';
import NewsSection from './components/NewsSection/NewsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Banner/>
      <HeroSection/>
      <ContinueWatchingList/>
      <NewsSection/>
      <Organizer />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
