import React from 'react';
import locationImage from './../../assets/images/location.png'; // Ensure correct import

function LocationAccess() {
  return (
    <div className="location section-lg-t-space">
      <div className="custom-container">
        <h2>Allow Access to Location</h2>
        <h5 className="p-0">
          Please enter your location or allow access to your location to find restaurants near you.
        </h5>

        <div className="current-location">
          <div className="animation-circle-inverse">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <img className="img-fluid location-img w-100" src={locationImage} alt="location" />
        </div>

        <a href="/Details" className="btn theme-btn w-100 mt-5" role="button">
          Allow Location Access
        </a>

        <a href="/Details" className="btn btn-link mt-0">
          Enter Location Manually
        </a>
      </div>
    </div>
  );
}

export default LocationAccess;