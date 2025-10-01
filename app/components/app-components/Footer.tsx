import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NewsLetter from "./Newsletter";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      {/* newsletter */}
      <div>
        <NewsLetter />
      </div>

      <div className="p-4 px-10 py-14">
        <div className="flex gap-10 justify-between flex-col sm:flex-row mt-5">
          <div>
            <div className="flex flex-col gap-10">
              <img src="/dkgloballogo.jpeg" className="w-[6rem]" />
              <p className="text-sm text-gray-500 w-75">
                Dk Global Fashion Wear Ltd.
              </p>
              <div className="flex items-center gap-5 text-2xl">
                <FaFacebook className="hover:text-blue-600 hover:scale-110 cursor-pointer" />
                <FaInstagram className="hover:text-red-600 hover:scale-110 cursor-pointer" />
                <FaXTwitter className="cursor-pointer hover:scale-110" />
                <FaLinkedin className="hover:text-blue-800 hover:scale-110 cursor-pointer" />
                <FaYoutube className="hover:text-red-600 hover:scale-110 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-bold">Solutions</h1>
            <ul className="sm:flex sm:flex-col gap-4 text-black/60 grid grid-cols-2">
              <li>Outerwear</li>
              <li>Workwear</li>
              <li>Fashionwear</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-bold">Support</h1>
            <ul className="sm:flex sm:flex-col gap-4 text-black/60 grid grid-cols-2">
              <li className="hover:underline ">Submit ticket</li>
              <li className="hover:underline ">Guides</li>
              <Link to={"/contact-us"}>
                <li className="hover:underline ">Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-bold">Company</h1>
            <ul className="sm:flex sm:flex-col gap-4 text-black/60 grid grid-cols-2">
              <Link to={"/about-us"}>
                <li className="hover:underline ">About Us</li>
              </Link>
              <Link to={""}>
                <li className="hover:underline ">Blogs</li>
              </Link>
              <Link to={""}>
                <li className="hover:underline ">Jobs</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-bold">Legal</h1>
            <ul className="sm:flex sm:flex-col gap-4 text-black/60 grid grid-cols-2">
              <li className="hover:underline ">Terms of service</li>
              <li className="hover:underline ">Privacy policy</li>
              <li className="hover:underline ">License</li>
            </ul>
          </div>
        </div>
        <div className="bg-black/20 h-[1px] mt-7 mb-7"></div>
        <div className="text-sm text-gray-500">
          &#169; 2025 Cookie Software Ltd. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
