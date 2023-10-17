import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer-body text-center bg-dark">
      <div className="container-fluid w-100 py-3">
        <h5 className="text-light ">Made by Himanshu Yadav</h5>
        <div className="row bg-dark text-light py-3">
          <span className="col-3 ">
            <a href="#Home">Home</a>
          </span>
          <span className="col-3 text-light">
            <a href="#About">About</a>
          </span>
          <span className="col-3">
            <a href="#Projects">My Projects</a>
          </span>
          <span className="col-3">
            <a href="#ContactUs">Contact Me</a>
          </span>
        </div>
      </div>
    </div>
  );
};
