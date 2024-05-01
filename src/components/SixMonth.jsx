import React from "react";
import SameBtn from "../Common/SameBtn";
import man from "../Assets/Webp/six-month-man.webp";
import ellp1 from "../Assets/Svg/six-month-ep-1.svg";

const SixMonth = () => {
  return (
    <div id="about" className="bg-black position-relative z-1 mt_5">
      <img
        data-aos="zoom-in"
        className="position-absolute six-month-elp-1"
        src={ellp1}
        alt=""
      />

      <div className="container">
        <div>
          <p
            data-aos="zoom-in"
            className="fs-24 lh-31 ff-jost fw-semibold pt-20 mb-10 mw-500 text-center text-white mx-auto"
          >
            Become a <span className="text-gr">Software</span> Engineer Now!
          </p>
          <p
            data-aos="zoom-in"
            className="fs-16 fw-normal ff-jost off-white-c6 lh-25 text-center mx-auto mb-35"
          >
            No Math or Science Background Needed
          </p>
          <div
            data-aos="zoom-in"
            className="d-flex justify-content-center align-items-center"
          >
            <SameBtn />
          </div>
        </div>
        <div className="d-flex flex-column pb-lg-130 flex-lg-row flex-column-reverse align-items-center pt-40 pt-lg-150">
          <div data-aos="zoom-in">
            <h1 className="fs-50 fw-medium ff-jost text-center text-lg-start lh-68 text-white mt-5 mt-lg-0  mb-2 mw-680">
              What is KodeDen's <span className="text-gr">6-Month </span>
              Software Engineering Course?
            </h1>
            <ul className="mw-642 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start  ps-0">
              <li className="fs-16 fw-normal off-white-a2 list_d lh-32 ff-jost ">
                With 6-figure salaries, unlimited PTO, and the flexibility to
                work anywhere in the world—(or
              </li>
              <li className="fs-16 fw-normal off-white-a2 list_d lh-32 ff-jost ">
                simply pick your kids up from school), you want in.
              </li>
              <li className="fs-16 fw-normal off-white-a2 list_d lh-32 ff-jost ">
                But who has $25k+ to drop on a bootcamp?
              </li>
              <li className="fs-16 fw-normal off-white-a2 list_d lh-32 ff-jost ">
                Or semesters of free time to dedicate to going back to school?
              </li>
              <li className="fs-16 fw-normal off-white-a2 list_d lh-32 ff-jost ">
                Or YEARS to go through the trial and error involved in teaching
                yourself?
              </li>
              <li className="fs-16 fw-normal off-white-a2 list_d lh-32 ff-jost ">
                Heck, most people don’t even know where to start.
              </li>
              <li className="fs-16 fw-normal off-white-a2 list_d lh-32 ff-jost ">
                If that's you, you’ve been dreaming of a high-paying tech career
                but paralyzed when it comes time to take action
              </li>
            </ul>
            <p className="fs-16 fw-semibold text-center text-lg-start ff-jost lh-23 text-gr mb-50">
              I want to Start My Software Engineering Journey!
            </p>
            <div className="d-flex align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
              <SameBtn />
            </div>
          </div>
          <div data-aos="zoom-in">
            <img className="man-img" src={man} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixMonth;
