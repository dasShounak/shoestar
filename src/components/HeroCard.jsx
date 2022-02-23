import heroImage from "../img/hero.png";
import Button from "./Button";

const HeroCard = () => {
  return (
    <div
      id="card"
      className="relative pt-10 bg-gradient-to-br from-indigo-600 via-[#142a5a] to-[#060f21] text-white rounded-[60px]"
    >
      <div id="hero-img">
        <img src={heroImage} alt="NIKE Air Zoom Coral" className="w-full h-full" />
      </div>

      <div className="absolute top-16 right-16">
        <div className="flex flex-col justify-between items-start space-y-20">
          <h1 className="font-display text-[112px] leading-[100px] uppercase">
            <span>Nike Air</span> <br />
            <span className="text-stroke-white text-transparent text-[166px] leading-[140px]">Zoom</span>
            <br />
            <span className="text-[148px] leading-[128px]">Coral</span>
          </h1>

          <div>
            <Button text="Buy Now" type="gradient" bold raise />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
