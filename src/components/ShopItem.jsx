import ShoeScreen from "../img/featured-shoe_screen.png";
import ShoeMultiply from "../img/featured-shoe_multiply.png";

const ShopItem = (props) => {
  if (props.featured) {
    return (
      <div className="flex flex-col items-start justify-between">
        <div className="bg-gradient-to-br from-indigo-500 via-[#1a305f] to-[#142038] rounded-3xl">
          <div className="relative max-w-xl">
            <img src={ShoeMultiply} style={{ mixBlendMode: "multiply" }} className="absolute" />
            <img src={ShoeScreen} style={{ mixBlendMode: "screen" }} />
          </div>
        </div>
        <h1 className="font-display text-3xl mt-8 ml-6">{props.itemName}</h1>
        <div className="mt-4 ml-6">
          <h2 className="font-display text-2xl text-slate-500">{props.itemPrice}</h2>
          <h2 className="font-display text-2xl text-slate-500">{props.itemColors}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-start justify-between">
        <div className="bg-gradient-to-br from-indigo-500 via-[#1a305f] to-[#142038] rounded-3xl">
          <img src={props.itemPic} />
        </div>
        <h1 className="font-display text-3xl mt-8 ml-6">{props.itemName}</h1>
        <div className="mt-4 ml-6">
          <h2 className="font-display text-2xl text-slate-500">{props.itemPrice}</h2>
          <h2 className="font-display text-2xl text-slate-500">{props.itemColors}</h2>
        </div>
      </div>
    );
  }
};

export default ShopItem;
