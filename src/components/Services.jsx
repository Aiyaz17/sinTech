import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";

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
import card1 from "../Images/SVG/1.svg";
import card2 from "../Images/SVG/2.svg";
import card3 from "../Images/SVG/3.svg";
import card4 from "../Images/SVG/4.svg";
import card5 from "../Images/SVG/5.svg";
import card6 from "../Images/SVG/6.svg";
SwiperCore.use([Navigation, Autoplay, EffectCoverflow, Pagination]);

function Services() {
  const swiperRef = useRef(null);
  var cards = [];
  // for (var i = 0; i < 6; i++) {
  //   cards.push(
  //     <VerticalCard
  //       title="This is a title"
  //       img={randomImg}
  //       body="Nemo ut explicabo sunt est recusandae necessitatibus non quis,Nemo ut explicabo sunt est recusandae necessitatibus non quis"
  //     />
  //   );
  // }
  cards.push(
    <VerticalCard
      title="This is a title"
      img={card1}
      body="Nemo ut explicabo sunt est recusandae necessitatibus non quis,Nemo ut explicabo sunt est recusandae necessitatibus non quis"
    />
  );
  cards.push(
    <VerticalCard
      title="This is a title"
      img={card2}
      body="Nemo ut explicabo sunt est recusandae necessitatibus non quis,Nemo ut explicabo sunt est recusandae necessitatibus non quis"
    />
  );
  cards.push(
    <VerticalCard
      title="This is a title"
      img={card3}
      body="Nemo ut explicabo sunt est recusandae necessitatibus non quis,Nemo ut explicabo sunt est recusandae necessitatibus non quis"
    />
  );
  cards.push(
    <VerticalCard
      title="This is a title"
      img={card4}
      body="Nemo ut explicabo sunt est recusandae necessitatibus non quis,Nemo ut explicabo sunt est recusandae necessitatibus non quis"
    />
  );
  cards.push(
    <VerticalCard
      title="This is a title"
      img={card5}
      body="Nemo ut explicabo sunt est recusandae necessitatibus non quis,Nemo ut explicabo sunt est recusandae necessitatibus non quis"
    />
  );
  cards.push(
    <VerticalCard
      title="This is a title"
      img={card6}
      body="Nemo ut explicabo sunt est recusandae necessitatibus non quis,Nemo ut explicabo sunt est recusandae necessitatibus non quis"
    />
  );

  var breakpoints = {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
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
      <Fade bottom duration={1500}>
        <h1 className="container-title" id="services" tabIndex="100">
          Our Services
        </h1>
      </Fade>
      <Fade bottom duration={1500}>
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
            navigation={true}
            pagination={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={500}
            autoHeight={true}
            breakpoints={breakpoints}
            slideToClickedSlide={true}
          >
            {cards.map((card) => (
              <SwiperSlide>{card}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Fade>
    </div>
  );
}
export default Services;
