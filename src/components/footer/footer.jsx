import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../footer/logo-white.png";

import { AiOutlineHome } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <FaTwitter /> },
    { icon: <FaYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];

  return (
    <>
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-12 w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3">
          <div className="flex flex-col md:flex-row sm:items-center md:justify-between">
            <div className="flex flex-col gap-8 w-full md:w-1/3 text-center md:text-left">
              <div className="flex flex-col items-center justify-center md:justify-start">
                <div className="w-full max-w-xs mx-auto">
                  <img src="https://files.catbox.moe/d4a5r9.png" alt="logo" />
                </div>

                <div>
                  <p className="text-xl font-bold text-gray-800">
                    Jaya Real Estate
                  </p>
                  <p className="text-base text-gray-600">
                    Address : No 65/A, Singhapura , Thalangama South ,
                    Pelawatta.
                  </p>
                </div>
              </div>
              <p className="text-base text-gray-600">
                Copyright © {new Date().getFullYear()} Jaya Real Estate
              </p>
            </div>

            <div className="flex flex-col gap-8 w-full md:w-1/3 text-center">
              <p className="text-xl font-bold text-gray-800">Useful Links</p>
              <ul className="text-base text-gray-600">
                <li className="hover:text-gray-800">
                  <a href="#">About Us</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="#">Properties for Sale</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="#">Contact Us</a>
                </li>
                <li className="hover:text-gray-800">
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 w-full md:w-1/3 text-center ">
              <p className="text-xl font-bold text-gray-800">Follow Us</p>
              <div className="flex justify-center ">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-xl m-3 text-gray-600 hover:text-gray-800 "
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 border-gray-200 text-center">
            <p className="text-base text-gray-600">
              &copy; {new Date().getFullYear()} Jaya Real Estate. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
