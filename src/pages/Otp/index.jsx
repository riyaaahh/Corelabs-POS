import React from 'react';

function Index() {
  return (
    <div>
      <header className="section-t-space">
        <div className="custom-container">
          <div className="header-panel">
            <a href="/login">
              <i className="ri-arrow-left-s-line"></i>
            </a>
            <h2>OTP Verification</h2>
          </div>
        </div>
      </header>

      <div className="custom-container">
        <div className="otp-verification">
          <h3>We have sent a verification code to</h3>
          <h3 className="otp-number mt-2">+(101) 635 546 23098</h3>
        </div>

        <form className="otp-form">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="form-input dark-border-gradient">
              <input
                type="number"
                className={`form-control ${num === 1 ? 'active' : ''}`}
                placeholder="0"
                id={`five${num}`}
                onKeyUp={(e) => onKeyUpEvent(num, e)}
                onFocus={() => onFocusEvent(num)}
              />
            </div>
          ))}
        </form>

        <a href="Location" className="btn theme-btn w-100" role="button">
          Continue
        </a>
      </div>
    </div>
  );
}

export default Index;