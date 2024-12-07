import React from 'react';
import loginImg from './../../assets/images/background/login-img.jpg'; // Corrected import
import line from './../../assets/images/onboarding/line.png'; // Corrected import
import googleIcon from './../../assets/images/icons/google.svg'; // Corrected import

function Index() {
  return (
    <section className="section-b-space pt-0">
      <img className="img-fluid login-img" src={loginImg} alt="login-img" /> {/* Use the imported variable */}
      <img className="img-fluid line-vector" src={line} alt="line" /> {/* Use the imported variable */}

      <div className="custom-container">
        <form className="auth-form mt-1">
          <h2>Enter your mobile number to get OTP</h2>

          <div className="form-group mt-4">
            <label className="form-label fw-semibold dark-text">Mobile Number</label>
            <div className="d-flex gap-3">
              <div className="dropdown dark-border-gradient">
                <a
                  className="btn dropdown-toggle mt-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  +101
                </a>
                <ul className="dropdown-menu">
                  <li key="101"><a className="dropdown-item">+101</a></li>
                  <li key="102"><a className="dropdown-item">+102</a></li>
                  <li key="103"><a className="dropdown-item">+103</a></li>
                </ul>
              </div>
              <div className="form-input dark-border-gradient">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
          </div>

          <a href="/Otp" className="btn theme-btn w-100 mt-4" role="button">
            Send OTP
          </a>
        </form>

        <div className="division">
          <span>OR</span>
        </div>

        <a href="https://www.google.co.in/" className="btn gray-btn mt-3">
          <img className="img-fluid google" src={googleIcon} alt="google" /> Continue with Google
        </a>

        <p className="text-center">
          By continuing, you agree to our Terms of Service, Privacy Policy, and Content Policy.
        </p>
      </div>
    </section>
  );
}

export default Index;