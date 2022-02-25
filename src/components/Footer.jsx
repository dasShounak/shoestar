import Logo from "../img/logo.svg";
import SocialBar from "./SocialBar";
import { FaGlobeAsia } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white font-body-light tracking-wider text-lg px-10">
      <section className="flex justify-center pt-16 pb-40 border-y border-white border-opacity-20">
        <div className="w-1/2 flex justify-between">
          <div className="w-1/3 -mt-10">
            <img src={Logo} alt="Shoestar" className="h-20" />
          </div>
          <div className="w-1/3 ml-auto">
            <h2 className="font-body-bold text-2xl mb-4">Navigation</h2>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  New
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Brand
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex justify-between">
          <div className="w-1/3">
            <h2 className="font-body-bold text-2xl mb-4">Support</h2>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Find a Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping and Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <h2 className="font-body-bold text-2xl mb-4">Company</h2>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Shoestar
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Open a Store
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <SocialBar />
          </div>
        </div>
      </section>
      <section className="flex justify-between px-3 py-8 text-xs uppercase">
        <div className="w-1/2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">
              <FaGlobeAsia />
            </div>
            <h3 className="font-body-bold text-base">INDIA</h3>
          </div>
          <div>
            <p>&copy;2022 Shoestar Inc. All Rights Reserved</p>
          </div>
        </div>
        <div className="w-1/2 flex">
          <ul className="flex ml-auto space-x-4">
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Terms of Sale</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Shoestar Privacy Policy</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
