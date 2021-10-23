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
SwiperCore.use([Navigation, Autoplay, EffectCoverflow, Pagination]);
function TrustedBy() {
    return 
    (<div className="trusted-container"></div>);
}
export default TrustedBy;
