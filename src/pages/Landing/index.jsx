import React from 'react';
import profile from './../../assets/images/icons/profile.png';
import food from './../../assets/images/landing/food.png';
import grocery from './../../assets/images/landing/grocery.png';
import pharmacy from './../../assets/images/landing/pharmacy.png';
import discountTag from './../../assets/images/landing/discount-tag.png';
import banner7 from './../../assets/images/landing/banner7.png';

// Inside your JSX



const App = () => {
  return (
    <div>
      {/* Side bar start */}
      <div className="offcanvas sidebar-offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft">
        <div className="offcanvas-header">
        <img className="img-fluid profile-pic" src={profile} alt="profile" />
        <h3>Hello, Lina John</h3>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="sidebar-content">
            <ul className="link-section">
              <li>
                <div className="pages">
                  <h3>RTL</h3>
                  <div className="switch-btn">
                    <input id="dir-switch" type="checkbox" />
                  </div>
                </div>
              </li>
              <li>
                <div className="pages">
                  <h3>Dark</h3>
                  <div className="switch-btn">
                    <input id="dark-switch" type="checkbox" />
                  </div>
                </div>
              </li>

              <li>
                <a href="page-listing.html" className="pages">
                  <h3>Pages List</h3>
                  <i className="ri-arrow-drop-right-line"></i>
                </a>
              </li>

              <li>
                <a href="app-setting.html" className="pages">
                  <h3>Setting</h3>
                  <i className="ri-arrow-drop-right-line"></i>
                </a>
              </li>

              <li>
                <a href="login.html" className="pages">
                  <h3>Logout</h3>
                  <i className="ri-arrow-drop-right-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Side bar end */}

      {/* Header start */}
      <header className="section-t-space">
        <div className="custom-container">
          <div className="header">
            <div className="head-content">
              <button className="sidebar-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
                <i className="ri-menu-line"></i>
              </button>
              <div className="header-location">
                <a href="#location" data-bs-toggle="modal">
                  <h2>Ontario, Canada</h2>
                  <i className="ri-arrow-down-s-line d-arrow"></i>
                </a>
              </div>
            </div>
            <a href="notification.html">
              <i className="ri-notification-2-fill"></i>
            </a>
          </div>
        </div>
      </header>
      {/* Header end */}

      {/* Search section starts */}
      <section className="search-section">
        <div className="custom-container">
          <form className="auth-form search-head" target="_blank">
            <div className="form-group">
              <div className="form-input">
                <input
                  type="search"
                  className="form-control search"
                  id="inputusername"
                  placeholder="Restaurant, item & more"
                />
                <i className="ri-search-line search-icon"></i>
              </div>

              <a href="#search-filter" className="btn filter-button mt-0" data-bs-toggle="modal">
                <i className="ri-equalizer-line"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
      {/* Search section end */}

      {/* Categories section starts */}
      <section>
        <div className="custom-container">
          <div className="row">
            <div className="col-4">
              <div className="main-categories-box">
                <a href="food-home.html">
                  <div className="main-categories-img">
                  <img className="img-fluid img" src={food} alt="food" />
                  </div>
                  <h6 className="dark-text">Food</h6>
                </a>
              </div>
            </div>
            <div className="col-4">
              <div className="main-categories-box">
                <a href="grocery-home.html">
                  <div className="main-categories-img">
                  <img className="img-fluid img" src={grocery} alt="grocery" />
                  </div>
                  <h6 className="dark-text">Grocery</h6>
                </a>
              </div>
            </div>
            <div className="col-4">
              <div className="main-categories-box">
                <a href="pharmacy-home.html">
                  <div className="main-categories-img">
                  <img className="img-fluid img" src={pharmacy} alt="pharmacy" />
                  </div>
                  <h6 className="dark-text">Pharmacy</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories section ends */}

      {/* Offer banner starts */}
      <section>
        <div className="custom-container">
          <div className="offer-deal-box">
          <img className="img-fluid deal-img" src={discountTag} alt="discount" />
          <h5>Deal Of The Day & Other Great Offers</h5>
          </div>
        </div>
      </section>
      {/* Offer banner end */}

      {/* Banner section starts */}
      <section>
        <div className="custom-container">
          <div className="row g-3">
            <div className="col-12">
              <div className="main-banner-box">
              <img className="banner-img img-fluid w-100" src={banner7} alt="banner" />
              <div className="main-banner-details">
                  <h3>Medicine and where to find them!</h3>
                  <h5>Medicine deliver at your door:<span> 20 min</span> </h5>
                  <a href="details.html" className="order-part d-flex justify-content-between align-items-center">
                    <h5 className="dark-text p-0">ORDER NOW</h5>
                    <img className="img-fluid arrow" src="../assets/images/svg/arrow.svg" alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="main-banner-box">
                <img className="banner-img img-fluid w-100" src="../assets/images/landing/banner8.png" alt="banner" />
                <div className="main-banner-details">
                  <h3>Food and where to find them !</h3>
                  <h5>Food deliver at your door:<span> 20 min</span> </h5>
                  <a href="details.html" className="order-part d-flex justify-content-between align-items-center">
                    <h5 className="dark-text p-0">ORDER NOW</h5>
                    <img className="img-fluid arrow" src="../assets/images/svg/arrow.svg" alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="main-banner-box">
                <img className="banner-img img-fluid w-100" src="../assets/images/landing/banner9.png" alt="banner" />
                <div className="main-banner-details">
                  <h3>Grocery and where to find them !</h3>
                  <h5>Grocery deliver at your door:<span> 20 min</span> </h5>
                  <a href="details.html" className="order-part d-flex justify-content-between align-items-center">
                    <h5 className="dark-text p-0">ORDER NOW</h5>
                    <img className="img-fluid arrow" src="../assets/images/svg/arrow.svg" alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner section end */}

      {/* Seller product section starts */}
      <section className="section-b-space">
        <div className="custom-container">
          <div className="title">
            <h3 className="mt-0">Best Seller Product</h3>
            <a href="details.html">View All</a>
          </div>

          <div className="swiper main-seller-product">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="main-product-card">
                  <img
                    className="card-img-top product-card-img"
                    src="../assets/images/landing/banner10.png"
                    alt="Card image"
                    style={{ width: '100%' }}
                  />
                  <div className="card-body">
                    <div className="card-title">
                      <h5>Immunity booster</h5>
                      <div className="d-flex justify-content-between">
                        <span className="old-price">$60.0</span>
                        <span className="new-price">$50.0</span>
                      </div>
                    </div>
                    <a href="#" className="btn btn-buy-now">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Add more products here */}
            </div>
          </div>
        </div>
      </section>
      {/* Seller product section end */}

      {/* Bottom navbar */}
      <footer>
        <div className="bottom-nav">
          <ul>
            <li><a href="home.html"><i className="ri-home-5-line"></i></a></li>
            <li><a href="search.html"><i className="ri-search-line"></i></a></li>
            <li><a href="cart.html"><i className="ri-shopping-cart-line"></i></a></li>
            <li><a href="profile.html"><i className="ri-user-line"></i></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;