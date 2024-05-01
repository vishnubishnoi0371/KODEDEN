import confuse1 from "../Assets/Webp/confuse-1.webp";
import confuse2 from "../Assets/Webp/confuse-2.webp";
import confuse3 from "../Assets/Webp/confuse-3.webp";
import ellp1 from "../Assets/Svg/confused-arrow.svg";
import arrow from "../Assets/Svg/arrowline.svg";

const Confused = () => {
  return (
    <div
      id="program"
      className="bg-black position-relative pt-lg-120 pt-40 mt_2"
    >
      <img
        data-aos="zoom-in"
        className="position-absolute confuse-elp-1"
        src={ellp1}
        alt="elp1"
      />

      <div id="team" className="container pb-lg-130">
        <h1
          data-aos="zoom-in"
          className="fs-50 fw-medium ff-jost lh-68 text-white text-center mx-auto mb-2 mw-1065"
        >
          “From Confused to Coder”: Kodeden's Exclusive 6-Month
          <span className="text-gr"> Software Engineering</span> Course
        </h1>
        <p
          data-aos="zoom-in"
          className="text-white fw-normal fs-16 ff-jost mb-3 mx-auto text-center"
        >
          Through twice-weekly live lectures and at-home exercises, you’ll:
        </p>
        <p
          data-aos="zoom-in"
          className=" off-white-a2 fw-normal lh-23 fs-16 text-center mx-auto ff-jost mw-640 mb-20 mb-lg-88 text-center'"
        >
          Learn everything you need to know to break into tech from senior
          engineers with experience at Apple, Amazon, and the DOD.
        </p>
        <div className="d-flex gap-40 flex-wrap align-items-center justify-content-center">
          <div
            data-aos="zoom-in"
            className="confuse-card d-flex flex-column justify-content-end overflow-hidden"
          >
            <div className="d-flex justify-content-between">
              <p className="fs-30 fw-semibold ff-jost text-end d-flex align-items-end  off-white-a2 lh-47 mb-4">
                01
              </p>
              <div className=" position-relative">
                <img
                  className="confused-img position-absolute confuse_img_set  mt_5"
                  src={confuse1}
                  alt="crd-img"
                />
                <img
                  className="confused-img mt_5"
                  src={confuse1}
                  alt="crd-img-2"
                />
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <p className="fs-18 mt_10 fw-bold lh-26 mb-md-0 off-white-e4 mb_20 ff-jost">
                Master
                <br /> <span> Full-Stack Coding Skills</span>
              </p>
              <div>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="confuse-card  overflow-hidden">
            <div className="d-flex justify-content-between">
              <p className="fs-30 fw-semibold ff-jost text-end d-flex align-items-end  off-white-a2 lh-47 mb-1">
                02
              </p>
              <div className=" position-relative">
                <img
                  className="confused-img2 position-absolute confuse_img_set2  mt_5"
                  src={confuse2}
                  alt="crd-img-3"
                />
                <img
                  className="confused-img2 pt-3"
                  src={confuse2}
                  alt="crd-img-4"
                />
              </div>
            </div>{" "}
            <div className="d-flex gap-2 align-items-end">
              <p className="fs-18 fw-bold lh-26 mb-0 off-white-e4 ff-jost">
                Build a
                <br /> <span> Standout Portfolio</span>
              </p>{" "}
              <div className="mb-1">
                <img src={arrow} alt="arrow2" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="confuse-card  overflow-hidden">
            <div className="d-flex mt-2 justify-content-between">
              <p className="fs-30 fw-semibold ff-jost text-end d-flex align-items-end  off-white-a2 lh-47 mb-0">
                03
              </p>
              <div className=" position-relative">
                <img
                  className="confused-img3 position-absolute confuse_img_set3  mt_5"
                  src={confuse3}
                  alt="crd-img5"
                />
                <img
                  className="confused-img3 mt_5"
                  src={confuse3}
                  alt="crd-img6"
                />
              </div>
            </div>{" "}
            <div className="d-flex gap-2 align-items-end">
              <p className="fs-18 fw-bold lh-26 mb-0 off-white-e4 ff-jost">
                Launch
                <br /> <span> Your Tech Career</span>
              </p>{" "}
              <div className="mb-1">
                <img src={arrow} alt="arrow3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confused;
