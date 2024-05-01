import React from "react";
import phnlogo from "../Assets/Svg/phone-logo.svg";

const SameBtn = (props) => {
  return (
    <div id="btn" className="">
      <button
        aria-label={props.label}
        className="d-flex main_btn gap-2 align-items-center"
      >
        <img className="phn-logo" src={phnlogo} alt="phn-icon" />
        <span className="font-gradient fs-18 ff-jost fw-black text-white">
          Book a Call NOW
        </span>
      </button>
    </div>
  );
};

export default SameBtn;
