const ShopItem = (props) => {
  const showExtras = props.showExtras;

  return (
    <div className="flex flex-col items-start justify-between">
      <div className="bg-gradient-to-br from-indigo-500 via-[#1a305f] to-[#142038] rounded-3xl">
        <div className="relative max-w-xl">
          <img src={props.imageMultiply} style={{ mixBlendMode: "multiply" }} className="absolute" />
          <img src={props.imageScreen} style={{ mixBlendMode: "screen" }} />
        </div>
      </div>
      <h1 className="font-display text-3xl mt-8 ml-6">{props.itemName}</h1>
      <div className="mt-4 ml-6">
        {showExtras && <h2 className="font-display text-2xl text-slate-500">{props.itemPrice}</h2>}
        {showExtras && <h2 className="font-display text-2xl text-slate-500">{props.itemColors}</h2>}
      </div>
    </div>
  );
};

export default ShopItem;
