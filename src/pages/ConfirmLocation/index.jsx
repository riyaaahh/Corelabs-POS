import React from 'react'

function index() {
  return (
<div>
      {/* location map start */}
      <div className="location-map" id="map"></div>
      {/* location map end */}

      {/* location popup start */}
      <div className="location-popup">
        <div className="change-location">
          <div className="d-flex align-items-center gap-2">
            <i className="ri-map-pin-line"></i>
            <h2>Ontario</h2>
          </div>
          <a href="address.html" className="change-add theme-color">
            Change
          </a>
        </div>
        <p className="address mt-2 mb-0 p-0">
          World of Maps, 1191 Wellington St. W, Ottawa, ONTARIO K1Y 2Z6, Canada
        </p>
        <a href="/PaymentMethod" className="btn theme-btn confirm-location-btn w-100">
          Confirm Location
        </a>
      </div>
      {/* location popup end */}
    </div>

 )
}

export default index