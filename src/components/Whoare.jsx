import React from "react";
import boys from "../Assets/Webp/whoare-boys.webp";
import SameBtn from "../Common/SameBtn";
import ellp1 from "../Assets/Svg/confused-arrow.svg";

const Whoare = () => {
  return (
    <div className="bg-black position-relative pt-lg-130 mt_2   pt-5">
      <img
        data-aos="zoom-in"
        className="position-absolute who-elp-1"
        src={ellp1}
        alt=""
      />

      <div className="container">
        <h1
          data-aos="zoom-in"
          className="fs-50 fw-medium ff-jost mb-74 mt-lg-5 mt-2  lh-72 text-white text-center"
        >
          Who Are <span className="text-gr">We</span> ?
        </h1>
        <div className="row justify-content-between pb-lg-120">
          <div data-aos="zoom-in" className="col-lg-5">
            <img className="w-100 h-100" src={boys} alt="boys" />
          </div>
          <div data-aos="zoom-in" className="col-lg-6">
            <p className="fs-14 fw-normal text-center text-lg-start mx-auto mx-lg-0 ff-jost lh-22 off-white-e4 mb-2">
              MEET YOUR INSTRUCTORS
            </p>
            <p className="fs-30 fw-medium text-center text-lg-start mx-auto mx-lg-0 ff-jost lh-41 off-white-e4 mb-3 mw-350">
              Hi, We’re Kody Doherty and Kolton Starr 👋{" "}
            </p>
            <p className="fs-16 fw-normal text-center text-lg-start mx-auto mx-lg-0 ff-jost lh-25   off-white-c6 mb-3">
              And we know firsthand that building a career as a software
              engineer without a computer science degree is possible.
              <br /> We started where you are *right now*—without engineering
              degrees, a professional portfolio, or years of experience.
              <br /> Then we climbed the ranks to hold senior positions at tech
              titans like Amazon, Apple, and the US government. <br />{" "}
              Throughout our careers, we’ve managed program budgets entire teams
              of engineers, directed $30 million program budgets, and built 2
              successful tech startups (one that we sold).
              <br />
              Learning to code did more than add a few impressive lines to our
              resumes. It literally changed our lives…
            </p>
            <p className="fs-16 fw-semibold ff-jost text-center text-lg-start lh-23 text-gr mb-50">
              I want to live my dream now!
            </p>
            <div className="d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
              <SameBtn />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-100 mb-0 botm-line" />
      <div className="container">
        <p className="fs-20 fw-normal ff-jost text-center text-lg-end mb-0   lh-22 text-white py-lg-65 py-4">
          Privacy Policy | Terms of Service | Cookie Policy
        </p>
      </div>
    </div>
  );
};

export default Whoare;
