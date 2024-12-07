import React from 'react'
import offer from './../../assets/images/icons/offer-discount.png';
import VegIcon from'./../../assets/images/icons/veg.svg'
import NonVegIcon from './../../assets/images/svg/nonveg.svg'
import  rp1 from './../../assets/images/product/rp1.png'
import rp2 from './../../assets/images/product/rp2.png'
import  rp3 from './../../assets/images/product/rp3.png'
import  rp4 from'./../../assets/images/product/rp4.png'
function index() {
  return (

<body>
<header>
  <div className="header-panel-lg">
    <div className="custom-container">
      <div className="panel">
        <a href="food-home.html"><i className="ri-arrow-left-s-line"></i></a>
        <a href="search.html"><i className="ri-search-2-line"></i></a>
      </div>
    </div>
  </div>
</header>

<section>
  <div className="custom-container">
    <div className="restaurant-details-box">
      <div className="restaurant-head">
        <div className="name">
          <img className="img-fluid restaurant-logo" src="../assets/images/icons/brand3.png" alt="starbucks-logo" />
          <div className="d-block ms-2">
            <h3>Starbucks</h3>
            <h6>Coffee</h6>
          </div>
        </div>
        <div className="option">
          <a href="#">
            <i className="ri-share-line share"></i>
          </a>

          <a href="#">
            <i className="toggle-heart ri-heart-3-fill heart"></i>
          </a>
        </div>
      </div>

      <div className="restaurant-details">
        <div className="location">
          <h6 className="rating-star">
            <span className="star"><i className="ri-star-s-fill"></i></span> 3.7 (1k+ Reviews)
          </h6>
          <h6 className="pt-2 light-text"><span className="dark-text">4.0km</span> Free Delivery</h6>
        </div>
        <ul className="distance">
          <li><i className="ri-map-pin-fill theme-color"></i> 1 km</li>
          <li><i className="ri-time-fill theme-color"></i> 15 min</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  <section>
    <div className="custom-container">
      <div className="swiper coupon">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="offer-box">
              <div className="offer-icon">
              <img className="img-fluid offer" src={offer} alt="offer-Discount" />
              </div>
              <div className="offer-content">
                <h5>50% OFF upto & $25</h5>
                <h6 className="light-text">Use Code MEFRGD124</h6>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="offer-box">
              <div className="offer-icon">
                <img className="img-fluid offer" src={offer} alt="offer" />
              </div>
              <div className="offer-content">
                <h5>50% OFF upto & $25</h5>
                <h6 className="light-text">Use Code MEFRGD124</h6>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="offer-box">
              <div className="offer-icon">
                <img className="img-fluid offer" src={offer} alt="offer" />
              </div>
              <div className="offer-content">
                <h5>50% OFF upto & $25</h5>
                <h6 className="light-text">Use Code MEFRGD124</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <section className="food-filter">
    <div className="custom-container">
      <ul className="food-symbol">
        <li>
        <a href="#" className="food-types">
    <img className="img-fluid img" src={VegIcon} alt="veg" />
    <h6>Veg</h6>
    <i className="ri-close-line close"></i>
</a>
        </li>
        <li>
          <a href="#" className="food-types active">
            <img className="img-fluid img" src={NonVegIcon}
 alt="non-veg" />
            <h6>Non Veg</h6>
            <i className="ri-close-line close"></i>
          </a>
        </li>
        <li>
          <a href="#" className="food-types">
            <i className="ri-award-fill award"></i>
            <h6>Best Seller</h6>
            <i className="ri-close-line close"></i>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section className="food-list-section section-b-space">
    <div className="custom-container">
      <div className="list-box">
        <h3 className="fw-semibold dark-text">Recommended</h3>
        <div className="accordion food-accordion" id="accordionPanelsStayOpenaccordion1">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="collapseOne">Featured
                Food (04)</button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample ">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Sweet Bakery
                (08)</button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Savoury Bakery
                (08)</button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">Sandwiches & Wrap
                (08)</button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Salad & Muesli
                (08)</button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Desserts (08)</button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-box">
        <h3 className="mt-3 fw-semibold dark-text">Drinks</h3>

        <div className="accordion food-accordion" id="accordionPanelsStayOpenaccordion2">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Espresso (04)</button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Freshly Brewed Coffee
                (08)</button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Coffee Frappu (08)</button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse show" aria-labelledby="heading3"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">Cold Brew (08)</button>
            </h2>
            <div id="collapse4" className="accordion-collapse collapse show" aria-labelledby="heading4"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-heading5">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">Other Beverages
                (08)</button>
            </h2>
            <div id="collapse5" className="accordion-collapse collapse show" aria-labelledby="heading5"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="product-box2">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Mexican Shred Beef</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp1} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Tacos</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp2} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Burrito Bowl</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp3} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
                <div className="product-box2 mt-4">
                  <div className="product-content">
                    <img className="img" src={NonVegIcon}
 alt="non-veg" />
                    <h5 className="product-name">Chicken Recipe</h5>
                    <div className="d-flex align-items-center gap-1">
                      <ul className="rating-stars">
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                        <li><i className="ri-star-fill stars"></i></li>
                      </ul>
                      <h5 className="dark-text">1k+ Rating</h5>
                    </div>
                    <div className="product-price">
                      <h6 className="fw-semibold"><span>$6</span> / $12</h6>
                    </div>
                    <p className="mb-0 mt-2 pt-2">A super easy Mexican style shred beef cooked...Read More</p>
                  </div>
                  <div className="product-img">
                    <a href="#product-popup" data-bs-toggle="offcanvas">
                      <img className="img-fluid img" src={rp4} alt="rp1" />
                    </a>
                    <div className="add-btn">
                      <a className="btn btn-outline" data-bs-target="#add-product" data-bs-toggle="modal"><i
                          className="ri-add-line"></i> ADD</a>
                    </div>
                    <div className="plus-minus">
                      <i className="ri-subtract-line sub"></i>
                      <input type="number" value="1" min="1" max="10" />
                      <i className="ri-add-line add"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="panel-space"></section>

  <div className="modal filter-modal" id="add-product" tabindex="-1">
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content">
        <div className="custom-container">
          <div className="filter-header section-t-space">
            <h1 className="title">Custom Food</h1>
            <a href="#" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
          </div>
          <div className="filter-body section-t-space">
            <div className="horizontal-product-box">
              <div className="product-img">
                <img className="img-fluid img" src={rp1} alt="rp1" />
              </div>
              <div className="product-content">
                <h5>Mexican Shred Beef</h5>
                <h6>Hot beef stick</h6>
                <div className="plus-minus">
                  <i className="ri-subtract-line sub"></i>
                  <input type="number" value="1" min="1" max="10" />
                  <i className="ri-add-line add"></i>
                </div>
                <img className="red-symbol" src={NonVegIcon}
 alt="non-veg" />
                <h3 className="product-price">$40</h3>
              </div>
            </div>

            <div className="filter-box section-t-space">
              <h3 className="fw-semibold dark-text">Choose Size</h3>

              <ul className="filter-list mt-3">
                <li>
                  <h5 className="product-size">Size S</h5>
                  <div className="form-check product-price">
                    <label className="form-check-label" for="reverseCheck1">$18</label>
                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1" />
                  </div>
                </li>
                <li>
                  <h5 className="product-size">Size M</h5>
                  <div className="form-check product-price">
                    <label className="form-check-label" for="reverseCheck1">$20</label>
                    <input className="form-check-input" type="checkbox" id="reverseCheck2" checked />
                  </div>
                </li>
                <li>
                  <h5 className="product-size">Size L</h5>
                  <div className="form-check product-price">
                    <label className="form-check-label" for="reverseCheck1">$22</label>
                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck3" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="body-title section-t-space">
              <h3 className="fw-semibold dark-text">Choose Size</h3>

              <ul className="filter-list mt-3">
                <li>
                  <h5 className="product-size">Chili sauce</h5>
                  <div className="form-check product-price">
                    <label className="form-check-label" for="reverseCheck1">$18</label>
                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck4" />
                  </div>
                </li>
                <li>
                  <h5 className="product-size">Mustard</h5>
                  <div className="form-check product-price">
                    <label className="form-check-label" for="reverseCheck1">$20</label>
                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck5" checked />
                  </div>
                </li>
                <li>
                  <h5 className="product-size">Special dipping sauce</h5>
                  <div className="form-check product-price">
                    <label className="form-check-label" for="reverseCheck1">$22</label>
                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck6" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="body-title d-flex justify-content-between section-t-space section-b-space">
              <h3 className="fw-semibold dark-text d-flex align-items-center">Grand Total</h3>
              <h2 className="theme-color">$40</h2>
            </div>
          </div>
          <div className="filter-footer">
            <a href="#" className="btn theme-btn apply-btn w-100" data-bs-dismiss="modal"
              data-bs-toggle="offcanvas">Apply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div className="cart-popup">
    <div className="price-items">
      <h3>$18</h3>
      <h6>2 item Added</h6>
    </div>
    <a href="/Cart" className="btn theme-btn cart-btn mt-0">View Cart</a>
  </div>


  <div className="offcanvas fade offcanvas-bottom product-detail-popup" tabindex="-1" id="product-popup">
    <div className="product-box-modal ratio_40">
      <div className="product-img">
        <img className="bg-img" src={rp1} alt="rp1" />
      </div>
      <div className="product-content">
        <div className="product-info">
          <img className="img" src={NonVegIcon}
 alt="non-veg" />
          <h5 className="product-name">Mexican Shred Beef</h5>
          <div className="d-flex align-items-center gap-2 mb-2">
            <ul className="rating-stars">
              <li><i className="ri-star-fill stars"></i></li>
              <li><i className="ri-star-fill stars"></i></li>
              <li><i className="ri-star-fill stars"></i></li>
              <li><i className="ri-star-fill stars"></i></li>
              <li><i className="ri-star-fill stars"></i></li>
            </ul>
            <h5 className="dark-text">1k+ Rating</h5>
          </div>
          <div className="product-price">
            <h6 className="fw-semibold"><span>$6</span> / $12</h6>
          </div>
        </div>
        <div className="plus-minus">
          <i className="ri-subtract-line sub"></i>
          <input type="number" value="1" min="1" max="10" />
          <i className="ri-add-line add"></i>
        </div>
      </div>
      <p>A super easy Mexican style shredded beef cooked in a slow cooker with smoky chipotle chilies with a hint of
        cocoa and cinnamon.</p>
      <ul className="ingredient-list">
        <li>2-3 pounds beef roast (such as chuck, eye of round, etc.)</li>
        <li>1 tablespoon ground chipotle chilis</li>
        <li>2 tablespoons ground ancho chilis</li>
        <li>1 teaspoon ground cumin</li>
        <li>1 tablespoon oregano</li>
      </ul>
    </div>
  </div>

  <script src="../assets/js/swiper-bundle.min.js"></script>
  <script src="../assets/js/custom-swiper.js"></script>

  <script src="../assets/js/bootstrap.bundle.min.js"></script>

  <script src="../assets/js/script.js"></script>
</body>  )
}

export default index