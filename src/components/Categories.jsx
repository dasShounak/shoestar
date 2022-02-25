import Card from "./Card";
import Card1 from "../img/item-1.png";
import Card2 from "../img/item-2.png";
import Card3 from "../img/item-3.png";

const Categories = () => {
  return (
    <section className="h-screen grid grid-cols-3 gap-32 px-32 items-center">
      <Card photo={Card1} text="trending" />
      <Card photo={Card2} text="exclusive" />
      <Card photo={Card3} text="coming soon" />
    </section>
  )
}

export default Categories