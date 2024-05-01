import React from "react";
import program1 from "../Assets/Webp/progran-1.webp";

const OurProgram = () => {
  return (
    <div id="work" className="bg-black pt-lg-120 pt-5  mt_2 pb-lg-130 pb-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <img
              data-aos="zoom-in"
              className="w-100 h-100"
              src={program1}
              alt="program-img"
            />
          </div>
          <div className="col-lg-6 col-12">
            <div data-aos="zoom-in">
              <h1 className="fs-50 fw-medium text-center text-lg-start mx-auto mx-lg-0  mt-5 mt-lg-0 lg-68 ff-jost text-white mw-556 mb-2">
                Are You A Good Fit For Our Program?{" "}
              </h1>
              <p className="fs-16 fw-normal text-center text-lg-start mx-auto mx-lg-0  ff-jost off-white-e4 mb-20">
                About Who The Program is For
              </p>
              <p className="fs-16 fw-semibold  text-center text-lg-start mx-auto mx-lg-0 ff-jost text-gr lh-23 mb-2">
                Our 6-Month Software Engeering Course is for individuals that...
              </p>
              <p className="fs-16 fw-normal text-center text-lg-start mx-auto mx-lg-0  ff-jost off-white-a2 mb-20 mw-506 lh-23">
                Want to take action now but don't have years to waste in
                university Are extremely motivated and want to succeed Have
                dreamed of becoming a software engineer but don't have hundreds
                of thousands of dollars lying around{" "}
              </p>
              <p className="fs-16 fw-semibold text-center text-lg-start mx-auto mx-lg-0 ff-jost text-gr lh-23 mb-2">
                It isn't for...
              </p>{" "}
              <p className="fs-16 fw-normal text-center text-lg-start mx-auto mx-lg-0 ff-jost off-white-a2 mb-20 mw-506 lh-23">
                People that aren't self-starters People that don't have a sense
                of urgency to become a software engineeer People that aren't
                serious about fulfilling their dream
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
