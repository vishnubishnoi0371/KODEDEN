"use client";
import "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import swipe1 from "../Assets/Svg/swipe1.svg";
import swipe2 from "../Assets/Svg/swipe2.svg";
import swipe3 from "../Assets/Svg/swipe3.svg";
import din from "../Assets/Svg/in.svg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Nxtarrow, Prevarrow } from "../icon/Icon";
import SameBtn from "../Common/SameBtn";

const MySwiper = () => {
  return (
    <div
      id="faq"
      className="bg-black position-relative pt-lg-120  pb-lg-130  mt_2"
    >
      <div className="container">
        <h1
          data-aos="zoom-in"
          className="text-center fs-50 mt-lg-5 mt-0  mb-50 fw-medium ff-jost lh-72 text-white"
        >
          What Our <span className="text-gr mb-5">Students</span> Are Saying
        </h1>
        <button
          aria-label="prev"
          className="swiper-button-prev d-sm-flex align-items-center justify-content-center d-none "
        >
          <Prevarrow />
        </button>

        <Swiper
          className="mx-auto w-100 "
          
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={false}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          modules={[Navigation, Pagination, Autoplay]}

          autoplay
          breakpoints={{
            320: {
              slidesPerView: 1,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
            500: {
              slidesPerView: 1.5,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2.2,
            },
            1200: {
              slidesPerView: 2.7,
            },
            1250: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="bg-black text-white">
            <div className="swiper_card">
              <h2 className="fs-24 fw-normal ff-jost mb-1 lh-36 text-white">
                Ross O’Rourke Founder, iC-1 Solution. CEO Agile Onboarding
              </h2>
              <p className="fs-16 fw-normal ff-jost lh-25 off-white-c6">
                Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper
                augue magna egestas sit tempus, cras. Mauris gravida elit eget
                mi et vitae viverra duis eget. Aliquam, quisque gravida est
                pretium suscipit vel. Non blandit eget tortor netus pellentesque
                mauris, diam.
              </p>
              <p className="fs-16 fw-semibold mt-1 mb-3 ff-jost lh-25 off-white-c6">
                Read More...
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-13">
                  <img src={swipe1} alt="swipeimg" />
                  <div>
                    <p className="fs-20 fw-normal ff-jost lh-28 text-white mb-0">
                      Ross O’Rourke
                    </p>
                    <p className="fs-14 fw-normal ff-jost lh-20  off-white-c6 mb-0">
                      @Ross O’Rourke
                    </p>
                  </div>
                </div>
                <div>
                  <img className="din_svg" src={din} alt="swipeimg2" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-black text-white">
            <div className="swiper_card">
              <h2 className="fs-24 fw-normal ff-jost mb-1 lh-36 text-white">
                “Luke O’Malley Tech Lead Agile Onboarding.”
              </h2>
              <p className="fs-16 fw-normal ff-jost lh-25 off-white-c6">
                I highly recommend kody Doherty. I have had the pleasure of
                working with him on variety of software projects over the past
                three years and his guidance has been intergral to my personal
                success. He is a driven, organized engineer who develops
                inspiring relationships with his students.
              </p>
              <p className="fs-16 fw-semibold mt-1 mb-3 ff-jost lh-25 off-white-c6">
                Read More...
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-13">
                  <img src={swipe2} alt="swipeimg3" />
                  <div>
                    <p className="fs-20 fw-normal ff-jost lh-28 text-white mb-0">
                      Ross O’Rourke
                    </p>
                    <p className="fs-14 fw-normal ff-jost lh-20  off-white-c6 mb-0">
                      @Ross O’Rourke
                    </p>
                  </div>
                </div>
                <div>
                  <img className="din_svg" src={din} alt="swipeimg4" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-black text-white">
            <div className="swiper_card">
              <h2 className="fs-24 fw-normal ff-jost mb-1 lh-36 text-white">
                Leslie Sage Director of Data Science at DevResults
              </h2>
              <p className="fs-16 fw-normal ff-jost lh-25 off-white-c6">
                Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper
                augue magna egestas sit tempus, cras. Mauris gravida elit eget
                mi et vitae viverra duis eget. Aliquam, quisque gravida est
                pretium suscipit vel. Non blandit eget tortor netus pellentesque
                mauris, diam.
              </p>
              <p className="fs-16 fw-semibold mt-1 mb-3 ff-jost lh-25 off-white-c6">
                Read More...
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-13">
                  <img src={swipe3} alt="swipeimg5" />
                  <div>
                    <p className="fs-20 fw-normal ff-jost lh-28 text-white mb-0">
                      Ross O’Rourke
                    </p>
                    <p className="fs-14 fw-normal ff-jost lh-20  off-white-c6 mb-0">
                      @Ross O’Rourke
                    </p>
                  </div>
                </div>
                <div>
                  <img className="din_svg" src={din} alt="swipeimg6" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-black text-white">
            <div className="swiper_card">
              <h2 className="fs-24 fw-normal ff-jost mb-1 lh-36 text-white">
                Ross O’Rourke Founder, iC-1 Solution. CEO Agile Onboarding
              </h2>
              <p className="fs-16 fw-normal ff-jost lh-25 off-white-c6">
                Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper
                augue magna egestas sit tempus, cras. Mauris gravida elit eget
                mi et vitae viverra duis eget. Aliquam, quisque gravida est
                pretium suscipit vel. Non blandit eget tortor netus pellentesque
                mauris, diam.
              </p>
              <p className="fs-16 fw-semibold mt-1 mb-3 ff-jost lh-25 off-white-c6">
                Read More...
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-13">
                  <img src={swipe1} alt="swipeimg7" />
                  <div>
                    <p className="fs-20 fw-normal ff-jost lh-28 text-white mb-0">
                      Ross O’Rourke
                    </p>
                    <p className="fs-14 fw-normal ff-jost lh-20  off-white-c6 mb-0">
                      @Ross O’Rourke
                    </p>
                  </div>
                </div>
                <div>
                  <img className="din_svg" src={din} alt="swipeimg8" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-black text-white">
            <div className="swiper_card">
              <h2 className="fs-24 fw-normal ff-jost mb-1 lh-36 text-white">
                “Luke O’Malley Tech Lead Agile Onboarding.”
              </h2>
              <p className="fs-16 fw-normal ff-jost lh-25 off-white-c6">
                I highly recommend kody Doherty. I have had the pleasure of
                working with him on variety of software projects over the past
                three years and his guidance has been intergral to my personal
                success. He is a driven, organized engineer who develops
                inspiring relationships with his students.
              </p>
              <p className="fs-16 fw-semibold mt-1 mb-3 ff-jost lh-25 off-white-c6">
                Read More...
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-13">
                  <img src={swipe2} alt="swipeimg9" />
                  <div>
                    <p className="fs-20 fw-normal ff-jost lh-28 text-white mb-0">
                      Ross O’Rourke
                    </p>
                    <p className="fs-14 fw-normal ff-jost lh-20  off-white-c6 mb-0">
                      @Ross O’Rourke
                    </p>
                  </div>
                </div>
                <div>
                  <img className="din_svg" src={din} alt="swipeimg10" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-black text-white">
            <div className="swiper_card">
              <h2 className="fs-24 fw-normal ff-jost mb-1 lh-36 text-white">
                Leslie Sage Director of Data Science at DevResults
              </h2>
              <p className="fs-16 fw-normal ff-jost lh-25 off-white-c6">
                Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper
                augue magna egestas sit tempus, cras. Mauris gravida elit eget
                mi et vitae viverra duis eget. Aliquam, quisque gravida est
                pretium suscipit vel. Non blandit eget tortor netus pellentesque
                mauris, diam.
              </p>
              <p className="fs-16 fw-semibold mt-1 mb-3 ff-jost lh-25 off-white-c6">
                Read More...
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex gap-13">
                  <img src={swipe3} alt="swipeimg11" />
                  <div>
                    <p className="fs-20 fw-normal ff-jost lh-28 text-white mb-0">
                      Ross O’Rourke
                    </p>
                    <p className="fs-14 fw-normal ff-jost lh-20  off-white-c6 mb-0">
                      @Ross O’Rourke
                    </p>
                  </div>
                </div>
                <div>
                  <img className="din_svg" src={din} alt="swipeimg12" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          data-aos="zoom-in"
          className="d-flex justify-content-center pt-3 pt-md-5 mt-3 align-items-center"
        >
          <SameBtn />
        </div>
        <button
          aria-label="next"
          className="swiper-button-next pb-5 pb-lg-0 d-sm-flex align-items-center justify-content-center d-none "
        >
          <Nxtarrow />
        </button>
      </div>
    </div>
  );
};
export default MySwiper;
