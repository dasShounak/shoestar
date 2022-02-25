import Button from "./Button";
import ShopItem from "./ShopItem";
import ShoeScreen from "../img/featured-shoe_screen.png";
import ShoeMultiply from "../img/featured-shoe_multiply.png";

const Featured = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-4 px-32">
        <div className="flex flex-col justify-start items-start mt-16">
          <h1 className="font-display text-5xl mb-10">
            Featured Products
            <br />
            From our Store
          </h1>
          <p className="text-3xl leading-relaxed tracking-wide max-w-2xl font-body-italic">
            Popular styles from the newest release of Nike collection. An assortment of everyday core UltraBoost branded
            items.
          </p>
          <div className="text-white mt-24">
            <Button text="Explore Now" type="filled" fill="#6063EA" />
          </div>
        </div>
        <div className="ml-auto">
          <ShopItem imageMultiply={ShoeMultiply} imageScreen={ShoeScreen} itemName="Nike Adapt BB 2.0" showExtras itemPrice="155 USD" itemColors="2 Colors" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
