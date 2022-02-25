import { Navigation, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselPrevButton from "./CarouselPrevButton";
import CarouselNextButton from "./CarouselNextButton";
import "swiper/css";
import "swiper/css/navigation";
import ShopItem from "./ShopItem";
import Shoe1Screen from "../img/shoe-1_screen.png";
import Shoe1Muliply from "../img/shoe-1_multiply.png";
import Shoe2Screen from "../img/shoe-2_screen.png";
import Shoe2Muliply from "../img/shoe-2_multiply.png";
import Shoe3Screen from "../img/shoe-3_screen.png";
import Shoe3Muliply from "../img/shoe-3_multiply.png";

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, A11y, Keyboard]}
        spaceBetween={80}
        slidesPerView={3}
        navigation={{ nextEl: CarouselNextButton, prevEl: CarouselPrevButton }}
        keyboard={{enabled: true}}
        a11y
        loop
        centeredSlides
        autoHeight
        grabCursor
        longSwipes
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="h-full w-full relative"
      >
        <SwiperSlide>
          <ShopItem imageMultiply={Shoe1Muliply} imageScreen={Shoe1Screen} itemName="Nike Adapt BB 2.0" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopItem imageMultiply={Shoe2Muliply} imageScreen={Shoe2Screen} itemName="Nike Adapt BB 2.0" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopItem imageMultiply={Shoe3Muliply} imageScreen={Shoe3Screen} itemName="Nike Adapt BB 2.0" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopItem imageMultiply={Shoe1Muliply} imageScreen={Shoe1Screen} itemName="Nike Adapt BB 2.0" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopItem imageMultiply={Shoe2Muliply} imageScreen={Shoe2Screen} itemName="Nike Adapt BB 2.0" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopItem imageMultiply={Shoe3Muliply} imageScreen={Shoe3Screen} itemName="Nike Adapt BB 2.0" />
        </SwiperSlide>
        <div className="absolute right-6 bottom-1/2 z-10">
          <CarouselNextButton />
        </div>
        <div className="absolute left-6 bottom-1/2 z-10">
          <CarouselPrevButton />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
