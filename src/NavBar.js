import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./navcontainer.css";
export const NavBar = () => {
  const [offset, setoffset] = useState(0);
  const [navColor, setnavColor] = useState("");
  const handleScroll = () => setoffset(window.pageYOffset);
  const handlenavcolor1 = () =>
    setnavColor("allnav navbar navbar-expand-lg text-end fixed-top");
  const handlenavcolor2 = () =>
    setnavColor("navbar navbar-expand-lg navbar-dark text-end fixed-top");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (offset > 695) {
      handlenavcolor1();
    } else {
      handlenavcolor2();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, navColor]);

  return (
    <>
      <nav className={navColor}>
        <div className=" container-fluid py-1">
          <h1 className="text-warning px-4 ">Welcome!!!!!</h1>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-3">
              <li className="nav-item">
                <a key="1" className="nav-link" href="#Home">
                  <h5> Home </h5>
                </a>
              </li>
              <li className="nav-item">
                <a key="2" className="nav-link" href="#About">
                  <h5> About </h5>
                </a>
              </li>
              <li className="nav-item">
                <a key="3" className="nav-link" href="#Projects">
                  <h5> Project </h5>
                </a>
              </li>
              <li className="nav-item">
                <a key="4" className="nav-link" href="#ContactUs">
                  <h5> Let's Connect</h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
