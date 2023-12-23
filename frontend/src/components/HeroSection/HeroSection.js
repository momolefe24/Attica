import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slidesData = [
  {
    id: 1,
    title: 'Kendrick Lamar',
    description: 'Kendrick Lamar is an acclaimed American rapper, songwriter, and record producer, known for his intricate lyrics, profound themes, and innovative musical styles. Born on June 17, 1987, in Compton, California, Lamar emerged from a challenging upbringing to become one of the most influential voices in modern hip-hop. His music often delves into personal and social issues, including the struggles of African American communities, politics, and personal introspection.',
    imageUrl: 'https://w0.peakpx.com/wallpaper/325/47/HD-wallpaper-portrait-display-hip-hop-kendrick-lamar.jpg',
    buttonLabel: 'Book Now'
  },
  {
    id: 2,
    title: 'J. Cole',
    description: 'J. Cole, born Jermaine Lamarr Cole on January 28, 1985, is a renowned American rapper, singer, songwriter, and record producer, celebrated for his introspective lyricism and storytelling abilities. Originally from Frankfurt, Germany, but raised in Fayetteville, North Carolina, Cole gained initial fame with his mixtape "The Come Up" in 2007 and subsequently signed with Roc Nation, Jay-Z\'s record label.',
    imageUrl: 'https://w0.peakpx.com/wallpaper/10/978/HD-wallpaper-the-off-season-j-cole-jcole-the-offseason.jpg',
    buttonLabel: 'Book Now'
  },
];

const HeroSection = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true // Adjust slide height automatically to the height of the image
    };
  
    return (
      <div className="hero-section">
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id} className="hero-slide">
              <img src={slide.imageUrl} alt={slide.title} className="hero-image" />
              <div className="hero-slide-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-description">{slide.description}</p>
                <button className="hero-button">{slide.buttonLabel}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
export default HeroSection;
