import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation";
import "swiper/swiper.esm";
import VerticalCard from "./VerticalCard";
import randomImg from "../Images/hero-img-min.png";
SwiperCore.use([Navigation, Autoplay, EffectCoverflow, Pagination]);
// var cards = [
//   "slide 1",
//   "slide 2",
//   "slide 3",
//   "slide 4",
//   "slide 4",
//   "slide 4",
//   "slide 4",
//   "slide 4",
// ];

function Services() {
  const swiperRef = useRef(null);
  var cards = [];
  for (var i = 0; i < 6; i++) {
    cards.push(
      <VerticalCard
        title="This is a title"
        img={randomImg}
        body="Nemo ut explicabo sunt est recusandae necessitatibus non quis,Nemo ut explicabo sunt est recusandae necessitatibus non quis"
      />
    );
  }

  // function cardHovered() {
  //   Swiper.autoplay.start();
  // }
  // function cardUnHovered() {
  //   Swiper.autoplay.end();
  // }
  //  };
  //   var allCards = document.querySelectorAll(".vertical-card");
  //   allCards.map((card) => card.addEventListener("mouseover", cardHovered));
  //   allCards.map((card) => card.addEventListener("mouseout", cardUnHovered));

  var breakpoints = {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  return (
    <div className="services-container">
      <h1 className="container-title">Our Services</h1>
      <div
        className="services"
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => {
          swiperRef.current.swiper.autoplay.start();
          var allLists = document.querySelectorAll(".items");
          allLists.forEach((itemslist) => (itemslist.style.opacity = "0"));
        }}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          // navigation={true}
          pagination={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={500}
          autoHeight={true}
          breakpoints={breakpoints}
        >
          {cards.map((card) => (
            <SwiperSlide>{card}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Services;
