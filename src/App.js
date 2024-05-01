import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import twiter from "../src/Assets/Svg/twiter.svg";
import insta from "../src/Assets/Svg/insta.svg";
import share from "../src/Assets/Svg/share.svg";
import linkdin from "../src/Assets/Svg/linkdin.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import HeroSec from "./components/HeroSec";
import Confused from "./components/Confused";
import SixMonth from "./components/SixMonth";
import OurProgram from "./components/OurProgram";
import KodedenDog from "./components/KodedenDog";
import Whoare from "./components/Whoare";
import Backtotop from "./components/Backtotop";
import MySwiper from "./components/MySwiper";
import { useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1500 });
  }, []);
  return (
    <div>
      <div className=" position- z-3">
        <div className="position-relative z-3">
          <div className="icon-card position-fixed  d-flex flex-column align-items-center gap-12">
            <div className="icon-circle d-flex justify-content-center align-items-center">
              <a
                className="mb-1"
                target="blank"
                href="https://twitter.com/i/flow/login?lang=en"
              >
                <img className="icon_imgs" src={twiter} alt="twiter" />
              </a>
            </div>
            <div className="icon-circle d-flex justify-content-center align-items-center">
              <a
                className="mb-1"
                target="blank"
                href="https://www.instagram.com/accounts/login/"
              >
                <img className="icon_imgs" src={insta} alt="twiter" />
              </a>
            </div>
            <div className="icon-circle d-flex justify-content-center align-items-center">
              <a
                className="mb-1"
                target="blank"
                href="https://www.instagram.com/accounts/login/"
              >
                <img className="icon_imgs" src={share} alt="twiter" />
              </a>
            </div>
            <div className="icon-circle d-flex justify-content-center align-items-center">
              <a
                className="mb-1"
                target="blank"
                href="https://www.linkedin.com/feed/"
              >
                <img className="icon_imgs" src={linkdin} alt="twiter" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <HeroSec />
      <Loader/>
      <SixMonth />
      <Confused />
      <OurProgram />
      <MySwiper />
      <KodedenDog />
      <Whoare />
      <Backtotop />
    </div>
  );
}

export default App;
