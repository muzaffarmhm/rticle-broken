import React from "react";

export default function navbar() {
  return (
    <div>
      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logo.svg" alt="" />
                </a>{" "}
              </div>
              {/* end logo */}
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end header-logo */}
      </div>
      {/* end header */}
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-inverse navbar-toggleable-md">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#cloapediamenu"
              aria-controls="cloapediamenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="cloapediamenu"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link color-pink-hover" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-pink-hover" href="">
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-pink-hover" href="">
                    Our Story
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-red-hover" href="">
                    Signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-aqua-hover" href="">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* end container */}
      </header>
      {/* end header */}
    </div>
  );
}
