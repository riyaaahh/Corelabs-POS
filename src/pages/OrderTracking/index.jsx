import React, { useEffect } from "react";
import pro1 from "./../../assets/images/icons/pro1.png";
import messageIcon from "./../../assets/images/svg/message.svg";
import callIcon from "./../../assets/images/svg/message.svg";

const index = () => {
  useEffect(() => {
    // Load Google Maps API dynamically
    const googleMapScript = document.createElement("script");
    googleMapScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw";
    googleMapScript.async = true;
    document.body.appendChild(googleMapScript);

    // Load additional scripts like route-map.js
    const routeMapScript = document.createElement("script");
    routeMapScript.src = "../assets/js/route-map.js";
    routeMapScript.async = true;
    document.body.appendChild(routeMapScript);

    const bootstrapScript = document.createElement("script");
    bootstrapScript.src = "../assets/js/bootstrap.bundle.min.js";
    bootstrapScript.async = true;
    document.body.appendChild(bootstrapScript);

    return () => {
      document.body.removeChild(googleMapScript);
      document.body.removeChild(routeMapScript);
      document.body.removeChild(bootstrapScript);
    };
  }, []);

  return (
    <div>
      {/* Location Map */}
      <div className="delivery-root">
        <div className="map" id="map"></div>
      </div>

      {/* Tracking Popup */}
      <div className="tracking-product">
        <div className="tracking-head">
          <img className="img-fluid profile-pic" src={pro1} alt="Courier" />
          <div>
            <h5>Guy Hawkins</h5>
            <h6>Courier Boy</h6>
          </div>
          <div className="content-option">
            <a href="chatting.html">
              <img
                className="img-fluid message-icon"
                src={messageIcon}
                alt="Message"
              />
            </a>
            <a href="#">
              <img
                className="img-fluid call-icon"
                src={callIcon}
                alt="Call"
              />
            </a>
          </div>
        </div>
        <div className="tracking-body">
          <ul className="tracking-place">
            <li className="active">
              <span></span>
              <div className="d-flex justify-content-between theme-color w-100">
                <h6>Order confirmed</h6>
                <h6>12 : 30 PM</h6>
              </div>
            </li>
            <li>
              <span></span>
              <div className="d-flex justify-content-between light-text w-100">
                <h6>Preparing Food</h6>
                <h6>12 : 45 PM</h6>
              </div>
            </li>
            <li>
              <span></span>
              <div className="d-flex justify-content-between light-text w-100">
                <h6>Food on the way</h6>
                <h6>12 : 58 PM</h6>
              </div>
            </li>
            <li className="p-0">
              <span></span>
              <div className="d-flex justify-content-between light-text w-100">
                <h6>Delivery to you</h6>
                <h6>13 : 15 PM</h6>
              </div>
            </li>
          </ul>
        </div>
        <a
          href="/OrderDetails"
          className="btn theme-btn delivery-btn mt-4 w-100"
        >
          Order View Details
        </a>
      </div>
    </div>
  );
};

export default index;