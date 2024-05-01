import React, { useState } from "react";
import hero from "../Assets/Webp/hero.webp";
import ellp1 from "../Assets/Svg/hero-ep-1.svg";

const HeroSec = () => {
  const [nav, setNav] = useState(false);
  function setopen() {
    setNav(!nav);
    if (nav === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <div className="hero-bg position-relative  ">
      <img className="position-absolute hero-elp-1" src={ellp1} alt="" />

      <div className="container">
        <div className="d-flex align-items-center pt-18 justify-content-end gap-26">
          <ul
            className={`${
              nav ? "left_0" : "left-0"
            } d-flex flex-column  list_style justify-content-center    align-items-center   flex-md-row gap-32 mb-0 ps-0 my_nav`}
          >
            <li className="">
              <a
                href="#home"
                onClick={setopen}
                className="underline-hover text-decoration-none lh-23 fs-16 fw-medium off-white-a2 ff-jost nav-head"
              >
                Home
              </a>
            </li>
            <li className="">
              <a
                href="#about"
                onClick={setopen}
                className="underline-hover text-decoration-none lh-23 fs-16 fw-medium off-white-a2 ff-jost nav-head"
              >
                About
              </a>
            </li>
            <li className="">
              <a
                href="#program"
                onClick={setopen}
                className="underline-hover text-decoration-none lh-23 fs-16 fw-medium  off-white-a2 ff-jost nav-head"
              >
                Program
              </a>
            </li>
            <li className="">
              <a
                href="#work"
                onClick={setopen}
                className="underline-hover text-decoration-none lh-23 fs-16 fw-medium  off-white-a2 ff-jost nav-head"
              >
                How it works
              </a>
            </li>

            <li className="">
              <a
                href="#faq"
                onClick={setopen}
                className="text-decoration-none underline-hover lh-23 fs-16 fw-medium off-white-a2 ff-jost nav-head"
              >
                FAQs
              </a>
            </li>
          </ul>

          <div className="">
            <button className="d-flex main_btn align-items-center">
              <span className=" fs-14 ff-jost fw-black off-white-f4">
                Get Started{" "}
              </span>
            </button>
          </div>
          <div onClick={setopen}>
            {nav ? (
              <div className=" icon d-flex d-lg-none flex-column justify-content-between position-relative ">
                <span className=" span1 crossLine1"></span>
                <span className=" span3 crossLine2"></span>
              </div>
            ) : (
              <div className="  icon d-flex d-lg-none flex-column justify-content-between">
                <span className=" span1"></span>
                <span className=" position-relative span2"></span>
                <span className=" span3"></span>
              </div>
            )}
          </div>
        </div>
        <div id="home">
          <h1
            data-aos="zoom-in"
            className="lh-41 mw_1000 text-center mx-auto pt-78 mb-20 fs-36 fw-semibold ff-jost text-white"
          >
            Start the Mini-Course:{" "}
            <span className="text-gr">
              Rapidly Learning New Technical Skills
            </span>
          </h1>
          <p
            data-aos="zoom-in"
            className="fs-24 lh-31 ff-jost fw-semibold mb-28 mw-500 text-center text-white mx-auto"
          >
            Learn All The Skills You Need To Become a Software Engineer!
          </p>
          <img
            data-aos="zoom-in"
            className="w-100 hero-img"
            src={hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
