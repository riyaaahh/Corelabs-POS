import React from 'react'

function index() {
  return (
    <div>
    {/* header start */}
    <header className="section-t-space">
      <div className="custom-container">
        <div className="header-panel">
          <a href="/Address">
            <i className="ri-arrow-left-s-line"></i>
          </a>
          <h2>Complete Address</h2>
        </div>
      </div>
    </header>
    {/* header end */}

    {/* filter section start */}
    <section className="food-filter address-filter">
      <div className="custom-container">
        <ul
          className="nav nav-pills restaurant-order-tab tab-style2 w-100 border-0 mt-0 mb-4"
          id="Tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pill-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#home-tab"
            >
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pill-work-tab"
              data-bs-toggle="pill"
              data-bs-target="#work-tab"
            >
              Work
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pill-hotel-tab"
              data-bs-toggle="pill"
              data-bs-target="#hotel-tab"
            >
              Hotel
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pill-others-tab"
              data-bs-toggle="pill"
              data-bs-target="#others-tab"
            >
              Others
            </button>
          </li>
        </ul>

        <div className="tab-content restaurant-content" id="TabContent">
          {/* Home Tab */}
          <div className="tab-pane fade show active" id="home-tab">
            <form className="auth-form" target="_blank">
              <div className="form-group">
                <label className="form-label fw-semibold">Company / Building</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter your company name" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Floor</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter floor" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Tower (optional)</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter tower" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Nearby Landmark (optional)</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter landmark" />
                </div>
              </div>
              <a href="/Address" className="btn theme-btn save-address w-100">
                Save Address
              </a>
            </form>
          </div>

          {/* Work Tab */}
          <div className="tab-pane fade" id="work-tab">
            <form className="auth-form" target="_blank">
              <div className="form-group">
                <label className="form-label fw-semibold">Company / Building</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter your company name" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Floor</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter floor" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Tower (optional)</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter tower" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Nearby Landmark (optional)</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter landmark" />
                </div>
              </div>
              <a href="address.html" className="btn theme-btn save-address w-100">
                Save Address
              </a>
            </form>
          </div>

          {/* Hotel Tab */}
          <div className="tab-pane fade" id="hotel-tab">
            <form className="auth-form" target="_blank">
              <div className="form-group">
                <label className="form-label fw-semibold">Company / Building</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter your company name" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Floor</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter floor" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Tower (optional)</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter tower" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Nearby Landmark (optional)</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter landmark" />
                </div>
              </div>
              <a href="/Address" className="btn theme-btn save-address w-100">
                Save Address
              </a>
            </form>
          </div>

          {/* Others Tab */}
          <div className="tab-pane fade" id="others-tab">
            <form className="auth-form" target="_blank">
              <div className="form-group">
                <label className="form-label fw-semibold">Company / Building</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter your company name" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Floor</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter floor" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Tower (optional)</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter tower" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label fw-semibold">Nearby Landmark (optional)</label>
                <div className="form-input mb-3">
                  <input type="text" className="form-control" placeholder="Enter landmark" />
                </div>
              </div>
              <a href="address.html" className="btn theme-btn save-address w-100">
                Save Address
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* filter section end */}
  </div>  )
}

export default index