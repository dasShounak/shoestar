import Button from "./Button";

const Card = (props) => {
  const styles = {
    backgroundImage: `url(${props.item})`,
  };

  return (
    <div
      style={styles}
      className="h-[780px] bg-contain bg-no-repeat bg-center text-white flex flex-col items-center justify-end pb-20 space-y-8"
    >
      <h1 className="uppercase font-display text-4xl">{props.text}</h1>
      <div className="transform scale-[0.7]">
        <Button text="Shop Now" stroke raise />
      </div>
    </div>
  );
};

export default Card;
