import React from "react";

function register() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 d-none align-self-center pl-0">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/Group 10.png`}
            style={{ objectFit: "cover", width: "93%", objectFit: "contain" }}
          />
        </div>

        <div
          className="col-md-12 py-5 pl-md-4"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/assets/img/signupbg.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1>Create an account</h1>

          <p>
            {" "}
            Already have an account, <a href="#">sign in</a>{" "}
          </p>

          <div className="button-group">
            <button
              className="btn btn-primary bg-white border-0 text-dark mb-4"
              style={{
                borderRadius: "24px",
                fontSize: "0.9rem",
                fontWeight: 500,
                padding: "9px 26px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/phone-square.svg`}
                className="mr-2"
                alt=""
              />
              Sign up with phone number
            </button>

            <button
              className="btn btn-primary ml-md-4 bg-white border-0 text-dark"
              style={{
                borderRadius: "24px",
                fontSize: "0.9rem",
                fontWeight: 500,
                padding: "9px 26px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/envelope-open-text.svg`}
                className="mr-2"
                alt=""
              />
              Sign up with Email
            </button>
          </div>

          <form className="register">
            <div className="container mt-4">
              <div className="row">
                <div className="col-md-6 p-0">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>

                    <input
                      type="text"
                      id="fname"
                      className="form-control border-0 p-3"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                <div className="col-md-6 p-0">
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>

                    <input
                      type="text"
                      id="lname"
                      className="form-control border-0 p-3"
                      style={{
                        height: "35px",
                        borderRadius: "5px",
                        fontSize: 14,
                      }}
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="col-md-6 p-0">
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>

                    <input
                      type="text"
                      id="phone"
                      className="form-control border-0 p-3"
                      style={{
                        height: "35px",
                        borderRadius: "5px",
                        fontSize: 14,
                      }}
                      placeholder="+234 000 000 0000"
                    />
                  </div>
                </div>

                <div className="col-md-6 p-0 mt-md-3">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>

                    <input
                      type="password"
                      id="password"
                      className="form-control border-0 p-3"
                      style={{
                        height: "35px",
                        borderRadius: "5px",
                        fontSize: 14,
                      }}
                      placeholder="Minimum of 8 characters (#@$)"
                    />
                  </div>
                </div>

                <div className="col-md-6 p-0">
                  <div className="form-group mb-0">
                    <label htmlFor="password2">Confirm Password</label>

                    <input
                      type="password"
                      id="password2"
                      className="form-control border-0 p-3"
                      style={{
                        height: "35px",
                        borderRadius: "5px",
                        fontSize: 14,
                      }}
                      placeholder="Minimum of 8 characters (#@$)"
                    />
                  </div>
                </div>

                <div className="col-12 p-0 my-3">
                  <input type="checkbox" name="agreed" id="" /> I have read and
                  agree to the <a href="">terms and conditions</a>
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-lg">
              Sign up{" "}
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/sign-in-alt.svg`}
                className="ml-1"
                alt=""
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default register;
