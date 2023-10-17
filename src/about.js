import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./aboutUs.css";
import illustration2 from "./images/62.png";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="row w-100">
      <h1 className="text-center about-title ">About</h1>
      <div className="col-4" data-aos="fade-right">
        <img src={illustration2} alt="" />
      </div>
      <div data-aos="zoom-in-down" className="col-6 boxabout">
        <div className=" py-5">
          <h6 data-aos="fade-up" className="text-light">
            Hi , I'm
          </h6>
          <h1 data-aos="fade-down" className="text-warning ">
            Himanshu Yadav
          </h1>
          <h3 data-aos="fade-right" className=" text-light ">
            I am a Second Year Student at{" "}
            <span data-aos="fade-left" className="text-warning ">
              {" "}
              IIIT Allahabad{" "}
            </span>
          </h3>
          <h5 data-aos="zoom-in" className="p-2 text-dark">
            An Energetic and Passionate Sophomore who seeks to use his knowledge
            and creativity for the betterment of the organization. Proficient
            Competitive Programmer and Web Developer looking forward to work in
            competitive environment and further enhance my knowledge, skills and
            expertise.
          </h5>
        </div>
      </div>
    </div>
  );
};
