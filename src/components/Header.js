import React from "react";
import { Switch, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-1">
                <svg
                  viewBox="0 0 320 100"
                  height="100"
                  width="320"
                  className="logo"
                >
                  <defs id="SvgjsDefs1107"></defs>

                  <g
                    id="SvgjsG1108"
                    featurekey="symbolFeature-0"
                    transform="matrix(1.6129032258064515,0,0,1.6129032258064515,-30.64516129032258,-30.64516129032258)"
                    fill="#372a28"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M23.5,76h8c0.6,0,1-0.4,1-1V50c0-0.6-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1v25C22.5,75.6,22.9,76,23.5,76z M24.5,51h6v23h-6V51z   M68.5,76h8c0.6,0,1-0.4,1-1V20c0-0.6-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1v55C67.5,75.6,67.9,76,68.5,76z M69.5,21h6v53h-6V21z M53.5,76  h8c0.6,0,1-0.4,1-1V30c0-0.6-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1v45C52.5,75.6,52.9,76,53.5,76z M54.5,31h6v43h-6V31z M38.5,39  c-0.6,0-1,0.4-1,1v35c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V40c0-0.6-0.4-1-1-1H38.5z M45.5,74h-6V41h6V74z M81,80c0,0.6-0.4,1-1,1H20  c-0.6,0-1-0.4-1-1s0.4-1,1-1h60C80.6,79,81,79.4,81,80z M25.6,41.3c-0.3-0.4-0.2-1.1,0.2-1.4l21.9-15.6l-2.4-0.3  c-0.5-0.1-0.9-0.6-0.9-1.1c0.1-0.5,0.6-0.9,1.1-0.9l5,0.7c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0.1c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1  c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2l-0.7,5  c-0.1,0.5-0.5,0.9-1,0.9c0,0-0.1,0-0.1,0c-0.5-0.1-0.9-0.6-0.9-1.1l0.4-2.7L26.9,41.5c-0.2,0.1-0.4,0.2-0.6,0.2  C26.1,41.7,25.7,41.5,25.6,41.3z"
                    ></path>
                  </g>

                  <g
                    id="SvgjsG1109"
                    featurekey="nameFeature-0"
                    transform="matrix(2.4838548110758487,0,0,2.4838548110758487,118.41033680572465,-13.819175779080336)"
                    fill="#372a28"
                  >
                    <path d="M0.64 13.52 l0 -2.32 l20.96 0 l0 2.32 l-9.12 0 l0 26.48 l-2.72 0 l0 -26.48 l-9.12 0 z M27.880000000000003 40 l-2.4 0 l0 -20.72 l2.4 0 l0 20.72 z M28 14.760000000000002 l-2.64 0 l0 -3.56 l2.64 0 l0 3.56 z M54.28 40 l-21.92 0 l0 -2.28 l18.44 -24.2 l-16.88 0 l0 -2.32 l20.24 0 l0 2.28 l-18.44 24.2 l18.56 0 l0 2.32 z M58.84 29.16 l0 -17.96 l2.72 0 l0 17.16 c0 7.12 2.56 10.08 8.44 10.08 c6.2 0 8.44 -3.28 8.44 -10.08 l0 -17.16 l2.72 0 l0 17.96 c0 7.48 -3.72 11.6 -11.16 11.6 c-7.52 0 -11.16 -4.24 -11.16 -11.6 z"></path>
                  </g>
                </svg>
              </div>

              <div className="col-md-10">
                <div className="main-menu float-right d-none d-lg-block">
                  <Switch>
                    <nav>
                      <ul className="m-0 p-0" id="navigation">
                        <li>
                          <Link to="">Home</Link>
                        </li>

                        <li>
                          <Link to="/share">Share</Link>
                        </li>

                        <li>
                          <Link to="/about">About us</Link>
                        </li>
                      </ul>
                    </nav>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
