import { useSwiper } from "swiper/react";
import { IoChevronForwardCircle } from "react-icons/io5";

const CarouselNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <div
        className="text-5xl text-white transition transform opacity-40 hover:opacity-60 hover:scale-110
      "
      >
        <IoChevronForwardCircle />
      </div>
    </button>
  );
};

export default CarouselNextButton;
