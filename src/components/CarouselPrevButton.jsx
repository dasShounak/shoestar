import { useSwiper } from "swiper/react";
import { IoChevronBackCircle } from "react-icons/io5";

const CarouselPrevButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <div
        className="text-5xl text-white transition transform opacity-40 hover:opacity-60 hover:scale-110
      "
      >
        <IoChevronBackCircle />
      </div>
    </button>
  );
};

export default CarouselPrevButton;
