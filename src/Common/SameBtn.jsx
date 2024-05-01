import React from "react";
import phnlogo from "../Assets/Svg/phone-logo.svg";

const SameBtn = (props) => {
  return (
    <div id="btn" className="">
      <a href="tel:+919992877529" className="text-decoration-none">
        <button
          aria-label={props.label}
          className="d-flex main_btn gap-2 align-items-center"
        >
          <img className="phn-logo" src={phnlogo} alt="phn-icon" />

          <span className="font-gradient text-uppercase fs-18 ff-jost fw-black text-white">
            Book a Call NOW
          </span>
        </button>{" "}
      </a>
    </div>
  );
};

export default SameBtn;
