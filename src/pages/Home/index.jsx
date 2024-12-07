import React from 'react';
import logo from './../../assets/images/svg/logo.svg';  // Corrected import statement
import slogan from './../../assets/images/svg/slogan-star.svg';  
import './../../assets/css/style.css';

function Index() {
  return (
    <section className="home">
      <video autoPlay muted loop className="cooking-video">
        <source
          src="https://themes.pixelstrap.com/zomo-app/assets/images/video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="theme-content">
        <div className="custom-container bg-transparent">
          <img
            className="img-fluid logo"
            src={logo}  // Using the correct variable for the logo image
            alt="logo"
          />
          <ul className="slogan">
            <li>Order</li>
            <li>
              <img
                src={slogan} 
                alt="star"
              />
            </li>
            <li>Delivered</li>
            <li>
              <img
                src={slogan} 
                alt="star"
              />
            </li>
            <li>Enjoy</li>
          </ul>
          <p>Find and try various foods from here</p>
          <a href="/login" className="btn theme-btn start-btn w-100" role="button">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Index;