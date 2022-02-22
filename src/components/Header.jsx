import logo from "../img/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white font-body uppercase font-bold text-lg flex justify-between items-baseline pl-20 pr-6 pt-8">
      <div id="logo">
        <img src={logo} alt="Shoestar" className="h-24 w-auto" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
