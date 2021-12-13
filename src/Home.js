import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="slider-area">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-9 col-lg-7">
                  <div className="hero__caption">
                    <h1>Financial Inclusion for everyone.</h1>

                    <p className="my-4">
                      Enjoy the best solution to send, receive and pay bills
                      securely with little to no transaction fees.
                    </p>

                    <div
                      className="btn-group btn-group-md"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Link to="/register">
                        <button
                          type="button"
                          className="btn btn-secondary btn-lg text-dark mr-3 mr-md-5"
                          style={{ fontWeight: 500 }}
                        >
                          Get Started
                        </button>
                      </Link>

                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        style={{ fontWeight: 500 }}
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 d-none d-md-block">
                  <div className="hero__img">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img/hero-img.png`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="banner row align-items-center py-4 py-md-5">
          <div className="col-md-6">
            <div className="img-container mb-5 mb-md-0">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/Group8.png`}
                className="img-fluid d-block m-auto"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="content">
              <h3 className="mb-4 font-weight-bold text-secondary">
                About 1.7 Billion unbanked individuals globally
              </h3>

              <p className="text-ash">
                A huge unserved market is created by this financial exclusion.
                This is mostly caused by limitations in traditional banking
                institutions such as high transaction fees and latencies.
              </p>

              <p className="text-ash">
                We need to provide a way to enable individuals to access
                palliatives and other government or global supported funds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-wrapper">
        <div className="container">
          <h2 className="text-uppercase section-title text-center mb-4">
            Solutions
          </h2>

          <div className="parent">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-4 mb-4 mb-md-0">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/availability.png`}
                  />
                </div>
              </div>

              <div className="col-md-8">
                <div className="text-md-right">
                  <h3 className="font-weight-600">Availability</h3>

                  <p>
                    Simple and easy-to-use applications to make the user
                    experience more productive and available on laptops, tablets
                    and mobile devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 justify-content-between align-items-center">
              <div className="col-md-4 mb-4 mb-md-0 order-md-2">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/tech.png`}
                    className="w-100"
                  />
                </div>
              </div>

              <div className="col-md-8 order-md-1">
                <div>
                  <h3 className="font-weight-600">Technology</h3>

                  <p>
                    A decentralised financial system that ensures your
                    transactions are protected and irreversible.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 justify-content-between align-items-center">
              <div className="col-md-4 mb-4 mb-md-0">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/transactions.png`}
                  />
                </div>
              </div>

              <div className="col-md-8">
                <div className="text-md-right">
                  <h3 className="font-weight-600">Fast Transaction rates</h3>

                  <p>
                    Transfer funds to anyone easily and fast with
                    state-of-the-art transaction processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 justify-content-between align-items-center">
              <div className="col-md-4 mb-4 mb-md-0 order-md-2">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/Group7.png`}
                    className="w-100"
                  />
                </div>
              </div>

              <div className="col-md-8 order-md-1">
                <div>
                  <h3 className="font-weight-600">Appearance</h3>

                  <p>
                    You have the ability to choose UI theme with options of
                    either the light or dark mode.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5 justify-content-between align-items-center">
              <div className="col-md-4 mb-4 mb-md-0">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/mobile encryption.png`}
                  />
                </div>
              </div>

              <div className="col-md-8">
                <div className="text-md-right">
                  <h3 className="font-weight-600">
                    Encryption and Authentication
                  </h3>

                  <p>
                    Transfer funds to anyone easily and fast with
                    state-of-the-art transaction processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid mt-5">
        <div
          className="banner row align-items-center py-4 py-md-5 mb-0"
          style={{ backgroundColor: "#372a28" }}
        >
          <div className="col-md-6 order-md-2">
            <div className="img-container">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/image.png`}
                className="img-fluid d-block ml-md-auto"
              />
            </div>
          </div>

          <div className="col-md-6 order-md-1">
            <div className="content">
              <h2
                className="mb-4 font-weight-bold mt-4 mt-md-0 text-capitalize"
                style={{ color: "#fec327" }}
              >
                A home for the unbanked africans.
              </h2>

              <p
                className="text-ash"
                style={{ fontSize: "17px", letterSpacing: "0.1px" }}
              >
                TiZU targets the unbanked individuals in Sub Saharan Africa
                facing an outburst of unmet demand for financial services . We
                aim to provide an easy-to-use platform and experience by
                providing high security, fast transactions at low cost,
                leveraging the power of blockchain to build a decentralised
                financial system in our web and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
