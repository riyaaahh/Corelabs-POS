import React, { useState } from 'react';
import Modal from 'react-modal';
import home from './../../assets/images/home.png';
import mastercard from './../../assets/images/icons/svg/mastercard.svg';
import success from './../../assets/images/gif/success-payment-light.gif';

Modal.setAppElement('#root'); // Important for accessibility

function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePayNow = () => {
        setIsModalOpen(true);
        // Scroll to the modal after rendering
        setTimeout(() => {
            const successSection = document.getElementById("success");
            if (successSection) {
                successSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Header */}
            <header className="section-t-space">
                <div className="custom-container">
                    <div className="header-panel">
                        <a href="confirm-location.html">
                            <i className="ri-arrow-left-s-line"></i>
                        </a>
                        <h2>Payment Options</h2>
                    </div>
                </div>
            </header>

            {/* Delivery Address Section */}
            <section className="delivery address">
                <div className="custom-container">
                    <div className="cart-add-box">
                        <div className="add-img">
                            <img className="img-fluid img" src={home} alt="rp1" />
                        </div>
                        <div className="add-content">
                            <h5 className="fw-semibold dark-text">Deliver to: Home</h5>
                            <h6 className="address mt-1 light-text">1901 Thornridge Cir. Shiloh, Hawaii 81063</h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payment Method Section */}
            <section className="payment method section-lg-b-space">
                <div className="custom-container">
                    <h3 className="fw-semibold dark-text">Credit / Debit Card</h3>
                    <div className="payment-list">
                        <ul className="cart-add-box payment-card-box gap-0 mt-3">
                            <li className="w-100">
                                <div className="payment-detail">
                                    <div className="add-img">
                                        <img className="img-fluid img" src={mastercard} alt="mastercard" />
                                    </div>
                                    <div className="add-content">
                                        <div>
                                            <h5 className="fw-semibold dark-text">Mastercard **** **** 4589</h5>
                                            <h6 className="mt-1 light-text">Expires on 16/24</h6>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                defaultChecked
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="new-card w-100">
                                <a href="new-card.html" className="payment-detail">
                                    <div className="add-img">
                                        <i className="ri-add-line theme-color add-square-img"></i>
                                    </div>
                                    <div className="add-content">
                                        <div>
                                            <h5 className="fw-semibold dark-text">Add New Card</h5>
                                            <h6 className="mt-1 light-text">Save and Pay via Cards.</h6>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pay Popup */}
            <div className="pay-popup">
                <div className="price-items">
                    <h3>$18</h3>
                    <h6>2 items Added</h6>
                </div>
                <button className="btn theme-btn pay-btn mt-0" onClick={handlePayNow}>
                    Pay Now
                </button>
            </div>

            {/* Success Payment Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div id="success" className="modal-body">
                    <div className="confirm-title">
                        <img className="img-fluid confirm-offer" src={success} alt="success-payment" />
                        <h2 className="dark-text text-center fw-semibold mt-2">Payment Success</h2>
                        <h5 className="mt-3 dark-text text-center w-75 mx-auto">
                            Your payment was successful! Just wait for foodfest to arrive at home.
                        </h5>
                    </div>
                    <a href="/OrderTracking" className="btn theme-btn w-100 mt-4">
                        Track Order Now
                    </a>
                    <a href="food-home.html" className="btn btn-link mt-0">
                        Back to Home
                    </a>
                </div>
            </Modal>
        </div>
    );
}

export default Index;