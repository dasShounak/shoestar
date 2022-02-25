import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center transform -translate-y-4 font-body-heavy">
      <ul className="flex justify-center items-baseline space-x-8 mr-10">
        <li>
          <a href="#">New Arrivals</a>
        </li>
        <li>
          <a href="#" className="inline-flex items-center">
            Men <BiChevronDown />
          </a>
        </li>
        <li>
          <a href="#" className="inline-flex items-center">
            Women <BiChevronDown />
          </a>
        </li>
        <li>
          <a href="#" className="inline-flex items-center">
            Kids <BiChevronDown />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
