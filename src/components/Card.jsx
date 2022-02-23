import Button from "./Button";

const Card = (props) => {
  return (
    <div className="text-white bg-gradient-to-br from-indigo-500 via-[#1a305f] to-[#142038] rounded-3xl flex flex-col items-center justify-end">
      <img src={props.photo} className="-mt-[92px]" />
      <h1 className="uppercase font-display text-3xl -mt-48">{props.text}</h1>
      <div className="transform scale-[0.6] my-8">
        <Button text="Shop Now" stroke raise />
      </div>
    </div>
  );
};

export default Card;
