import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./projects.css";
import image1 from "./images/image1.jfif";
import image2 from "./images/image2.png";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";

import Chat_app from "./images/Chat_app.PNG";

export const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="container boxprojects">
        <h1 className="main-heading text-light ">My Projects</h1>

        <div className="row g-3">
          <div
            data-aos="zoom-in-up"
            data-aos-mirror="true"
            data-aos-anchor-placement="center-bottom"
            className=" card col-6 m-3"
            style={{ transform: `translateY($(offset)*0.5)px` }}
          >
            <img src={Chat_app} className="card-img-top img-fluid " alt="..." />
            <div className="card-body text-center">
              <p className="card-text">
                A real-time chat application build with React , Socket.io ,
                NodeJS ...
              </p>
              <p>Uploading New Features soon !!!!!</p>
            </div>
          </div>
          <div
            data-Aos="fade-down-left"
            data-aos-mirror="true"
            data-aos-anchor-placement="center-bottom"
            className=" card col-4 m-3"
          >
            <img src={image2} className="card-img-top img-fluid " alt="..." />
            <div className="card-body">
              <p className="card-text">Coming Soon !!!!!!!!!</p>
            </div>
          </div>

          <div className="row g-3">
            <div
              data-aos="fade-up-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="center-bottom"
              className=" card m-4 col-4"
            >
              <img src={image3} className="card-img-top img-fluid " alt="..." />
              <div className="card-body">
                <p className="card-text">Coming Soon !!!!!!!!!!!</p>
              </div>
            </div>
            <div
              data-aos-mirror="true"
              data-aos="fade-down-right"
              data-aos-anchor-placement="center-bottom"
              className=" card  m-4 col-6"
            >
              <img src={image4} className="card-img-top img-fluid " alt="..." />
              <div className="card-body">
                <p className="card-text">Coming Soon !!!!!!!!!!!</p>
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div
              data-aos="fade-up-left"
              data-aos-mirror="true"
              data-aos-anchor-placement="center-bottom"
              className=" card m-4 col-7"
            >
              <img src={image5} className="card-img-top img-fluid " alt="..." />
              <div className="card-body">
                <p className="card-text">Coming Soon !!!!!!!!!!!</p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-mirror="true"
              data-aos-anchor-placement="center-bottom"
              className=" card  m-4 col-3"
            >
              <img src={image1} className="card-img-top img-fluid " alt="..." />
              <div className="card-body">
                <p className="card-text">Coming Soon !!!!!!!!!!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
