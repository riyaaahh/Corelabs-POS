import React from "react";
import cube from './../../assets/images/svg/cube.svg';
import threedee from './../../assets/images/svg/threedee-cube.svg';
import bike from './../../assets/images/svg/bike.svg';
import done from './../../assets/images/svg/done.svg';
import dots from './../../assets/images/svg/dots-design.svg';
import delivery from './../../assets/images/gif/delivery.png';
import success from './../../assets/images/gif/success-payment-light.gif';
import giftwo from './../../assets/images/gif/giftwo-light.gif';

// Header Component
const Header = () => (
  <header className="section-t-space">
    <div className="custom-container">
      <div className="header-panel">
        <a href="/OrderTracking">
          <i className="ri-arrow-left-s-line"></i>
        </a>
        <h2>Order Tracking</h2>
      </div>
    </div>
  </header>
);

// Order Tracking Section Component
const TrackingSection = () => (
  <section>
    <div className="custom-container">
      <h5 className="dark-text">
        <span className="light-text">Order ID : </span>12143012020111
      </h5>
      <div className="order-tracking mt-3">
        <ul className="tracking-place">
          <li className="active">
            <h6>12 : 30 PM</h6>
            <span></span>
            <img className="img-fluid icon step-1" src={cube} alt="cube" />
            <h6 className="color-1">Order confirmed</h6>
          </li>
          <li>
            <h6>12 : 30 PM</h6>
            <span></span>
            <img className="img-fluid icon step-2" src={threedee} alt="3d-cube" />
            <h6 className="color-2">Preparing food</h6>
          </li>
          <li>
            <h6>12 : 30 PM</h6>
            <span></span>
            <img className="img-fluid icon step-3" src={bike} alt="bike" />
            <h6 className="color-3">Food on the way</h6>
          </li>
          <li>
            <h6>12 : 30 PM</h6>
            <span></span>
            <img className="img-fluid icon step-4" src={done} alt="done" />
            <h6 className="color-4">Delivery to you</h6>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

// Bill Details Section Component
const BillDetails = () => (
  <section className="bill-details section-lg-b-space">
    <div className="custom-container">
      <div className="total-detail mt-3">
        <div className="sub-total">
          <h5>Sub Total</h5>
          <h5 className="fw-semibold">$58</h5>
        </div>
        <h5 className="mt-3">Delivery Charge (2 kms)</h5>
        <h5 className="free">Free</h5>
        <h6 className="delivery-info light-text mt-2">
          Save $5 on Delivery fee by ordering above $30
        </h6>
        <div className="sub-total pb-3">
          <h5>Discount (20%)</h5>
          <h5 className="fw-semibold">$9.6</h5>
        </div>
        <div className="grand-total">
          <h5 className="fw-semibold">Grand Total</h5>
          <h5 className="fw-semibold amount">$48.4</h5>
        </div>
        <img className="dots-design" src={dots} alt="dots" />
      </div>
      <div className="delivery-time mt-4">
        <p className="delivery-line mb-0 m-0 p-0">A Moment of Delivered on Time</p>
        <img className="img-fluid delivery-bike" src={delivery} alt="delivery" />
      </div>
    </div>
  </section>
);

// Modal Component
const Modal = ({ id, children, title, closeable = true }) => (
  <div className={`modal fade ${id}`} id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        {closeable && (
          <div className="modal-title d-flex justify-content-end">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        )}
        {title && <h3 className="fw-semibold">{title}</h3>}
        <div className="modal-body p-0">{children}</div>
      </div>
    </div>
  </div>
);

// Main App Component
const Index = () => (
  <div>
    <Header />
    <TrackingSection />
    <BillDetails />

    {/* Delivered Modal */}
    <Modal id="delivered" title="Food Delivered!!">
      <div className="text-center">
        <img className="img-fluid confirm-offer for-light" src={success} alt="success-payment" />
        <h5 className="mt-3 text-center w-75 light-text mx-auto">
          Your food is delivered. Give us feedback and tell us how it was!
        </h5>
        <a href="#feedback" className="btn theme-btn w-100 mt-4" data-bs-target="#feedback" data-bs-toggle="modal" role="button">
          Give Feedback Now
        </a>
        <a href="food-home.html" className="btn btn-link mt-0">
          I’ll do it later
        </a>
      </div>
    </Modal>

    {/* Feedback Modal */}
    <Modal id="feedback" title="Feedback">
      <div className="modal-body">
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={`ri-star-${i < 4 ? "fill" : "line"} star`}></i>
          ))}
        </div>
        <textarea className="form-control feedback-box" rows="5" placeholder="Write your feedback here..."></textarea>
        <a href="#done" className="btn theme-btn w-100 mt-4" data-bs-target="#done" data-bs-toggle="modal" role="button">
          Submit Feedback
        </a>
      </div>
    </Modal>

    {/* Thank You Modal */}
    <Modal id="done" title="Thank you!!">
      <div className="text-center">
        <img className="img-fluid confirm-offer for-light" src={giftwo} alt="thank-you" />
        <h5 className="mt-3 text-center w-75 light-text mx-auto">
          Thank you for your feedback, we appreciate your review.
        </h5>
        <a href="/Details" className="btn theme-btn w-100 mt-4" role="button">
          Back to Home
        </a>
      </div>
    </Modal>
  </div>
);

export default Index;