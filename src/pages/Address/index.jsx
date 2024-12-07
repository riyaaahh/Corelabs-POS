import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

function Index() {
    useEffect(() => {
        // Initialize Google Maps after the component mounts
        const loadMap = () => {
          const script = document.createElement("script");
          script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw";
          script.async = true;
          script.onload = () => {
            // Your map initialization code here (from location-map.js)
          };
          document.body.appendChild(script);
        };
    
        loadMap();
      }, []);
    
  return (
    <div>
      <header className="section-t-space">
        <div className="custom-container">
          <div className="header-panel">
            <Link to="/Details">
              <i className="ri-arrow-left-s-line"></i>
            </Link>
            <h2>Saved Address</h2>
            <Link to="/AddressDetails">
              <i className="ri-add-line theme-color add-square-img"></i>
            </Link>
          </div>
        </div>
      </header>

      <section className="section-b-space">
        <div className="custom-container">
          <ul className="address-list">
            <li>
              <div className="address-icon">
                <span>
                  <i className="ri-home-5-line"></i>
                </span>
              </div>
              <div className="address-content">
                <div className="form-check address-checkbox p-0">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="fixed1" checked />
                </div>
                <div className="address-place">
                  <h5>Home</h5>
                </div>
                <p>21, Thornridge Cir.Syracuse, Connecticut USA - 35624</p>
              </div>
            </li>
            <li>
              <div className="address-icon">
                <span>
                  <i className="ri-building-line"></i>
                </span>
              </div>
              <div className="address-content">
                <div className="form-check address-checkbox p-0">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="fixed2" />
                </div>
                <div className="address-place">
                  <h5>Work</h5>
                </div>
                <p>21, Thornridge Cir.Syracuse, Connecticut USA - 35624</p>
              </div>
            </li>
          </ul>
          <Link to="/ConfirmLocation" className="btn theme-btn add-select w-100" role="button">
            Select
          </Link>
        </div>
      </section>

      <script src="../assets/js/bootstrap.bundle.min.js"></script>
      <script src="../assets/js/script.js"></script>
    </div>
  );
}

export default Index;