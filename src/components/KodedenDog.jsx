import React from "react";
import dog from "../Assets/Webp/kodeden-dog.webp";
import SameBtn from "../Common/SameBtn";
import ellp1 from "../Assets/Svg/six-month-ep-1.svg";

const KodedenDog = () => {
  return (
    <div className="bg-black position-relative pt-lg-70 mt_2 pb-lg-130 ">
      <img
        data-aos="zoom-in"
        className="position-absolute kode-elp-1"
        src={ellp1}
        alt="elpse1"
      />
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row justify-content-center align-items-center justify-content-lg-between">
          <div data-aos="zoom-in" className="col-lg-6">
            <h1 className="fs-50 fw-medium text-center text-lg-start mt-5 mt-lg-0 ff-jost lh-72 text-white mb-2">
              Our Guarantee
            </h1>
            <p className="fs-24 fw-normal text-center text-lg-start  ff-jost lh-41 off-white-c6 mb-3">
              If you decide coding isn’t right for you within 15 days of
              starting the program, we’ll you your money back.{" "}
            </p>
            <p className="fs-16 fw-semibold text-center text-lg-start  ff-jost lh-23 text-gr  mb-50">
              I want to become a software engineer in 6 months!
            </p>
            <div className="d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
              <SameBtn />
            </div>
          </div>
          <div className="col-lg-5 d-flex">
            <img
              data-aos="zoom-in"
              className="dog-img mt-5 mt-lg-0 mx-auto"
              src={dog}
              alt="program-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KodedenDog;
