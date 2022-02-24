import Phantom from "../img/phantom.png";
import Button from "./Button";

const CTA = () => {
  const styles = {
    backgroundImage: `url(${Phantom})`,
  };

  return (
    <div style={styles} className="h-[90vh] bg-no-repeat bg-contain bg-center mx-24 relative">
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
        <Button text="Shop Now" type="filled" fill="#FFF" stroke bold />
      </div>
    </div>
  );
};

export default CTA;
