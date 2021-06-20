import React from "react";

export default function topbar() {
  return (
    <div>
      <div>
        <div id="wrapper">
          <div className="collapse top-search" id="collapseExample">
            <div className="card card-block">
              <div className="newsletter-widget text-center">
                <form className="form-inline">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What you are looking for?"
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              {/* end newsletter */}
            </div>
          </div>
          {/* end top-search */}
        </div>
        <div>
          <div className="topbar-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                  <div className="topsocial">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Youtube"
                    >
                      <i className="fa fa-youtube" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Pinterest"
                    >
                      <i className="fa fa-pinterest" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Instagram"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Google+"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </div>
                  {/* end social */}
                </div>
                {/* end col */}
                <div className="col-lg-4 hidden-md-down">
                  <div className="topmenu text-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href>
                          <i className="fa fa-star" />
                          Latest
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href>
                          <i className="fa fa-bolt" />
                          Trending
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href>
                          <i className="fa fa-pencil-square-o" /> Post for us
                        </a>
                      </li>
                    </ul>
                    {/* end ul */}
                  </div>
                  {/* end topmenu */}
                </div>
                {/* end col */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className="topsearch text-right">
                    <a
                      data-toggle="collapse"
                      href="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fa fa-search" /> Search
                    </a>
                  </div>
                  {/* end search */}
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end header-logo */}
          </div>
          {/* end topbar */}
        </div>
      </div>
    </div>
  );
}
