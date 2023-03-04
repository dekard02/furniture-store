import React from "react";
import footerbg from "../../../../assets/footerbg.webp";
import logo from "../../../../assets/logobrand.webp";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className="pt-8 footer-section"
    >
      <div className="grid grid-cols-4 px-6 pb-5 gap-x-7">
        <div className="flex flex-col footer-item gap-y-4">
          <img className="w-14" src={logo} alt="" />
          <span className="text-base font-light text-textPrimary">
            Ut enim ad minim veniam, quis <br />
            Ut enim ad minim veniam, quis <br />
            nostrud exercitation ullamco laboris
          </span>
          <div className="flex items-center text-2xl gap-x-3 text-bgPrimary">
            <i className="transition-all cursor-pointer bi hover:opacity-70 bi-facebook"></i>
            <i className="transition-all cursor-pointer bi hover:opacity-70 bi-twitter"></i>
            <i className="transition-all cursor-pointer bi hover:opacity-70 bi-instagram"></i>
            <i className="transition-all cursor-pointer bi hover:opacity-70 bi-linkedin"></i>
          </div>
        </div>
        <div className="flex flex-col footer-item gap-y-4">
          <h3 className="text-lg text-secondary">Quick Links </h3>
          <ul className="flex flex-col gap-y-3 text-textPrimary">
            <li className="cursor-pointer hover:text-bgPrimary">About Us</li>
            <li className="cursor-pointer hover:text-bgPrimary">Wishlist</li>
            <li className="cursor-pointer hover:text-bgPrimary">Contact Us</li>
            <li className="cursor-pointer hover:text-bgPrimary">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-bgPrimary">Frequently</li>
          </ul>
        </div>
        <div className="flex flex-col footer-item gap-y-4">
          <h3 className="text-lg text-secondary">Account Info </h3>
          <ul className="flex flex-col gap-y-3 text-textPrimary">
            <li className="cursor-pointer hover:text-bgPrimary">My Account</li>
            <li className="cursor-pointer hover:text-bgPrimary">
              Shopping Cart
            </li>
            <li className="cursor-pointer hover:text-bgPrimary">Login</li>
            <li className="cursor-pointer hover:text-bgPrimary">Register</li>
            <li className="cursor-pointer hover:text-bgPrimary">Checkout</li>
          </ul>
        </div>
        <div className="flex flex-col footer-item gap-y-4">
          <h3 className="text-lg text-secondary">Newsletter</h3>
          <ul className="flex flex-col gap-y-3 text-textPrimary">
            <li>Get updates by subscribe our weekly newsletter</li>
          </ul>
          <div className="flex flex-col">
            <div className="p-1 bg-white footer-form">
              <input
                placeholder="Enter your email address"
                className="w-full px-3 py-2 text-sm font-light text-gray-400 bg-white outline-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <button className="px-3 py-2 text-sm font-medium text-white transition-all rounded-sm bg-bgPrimary hover:bg-secondary">
                Subscribe
                <i className="ml-2 text-sm text-white bi bi-send-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-3 border border-gray-300">
        <span className="text-sm font-light text-textPrimary">
          Copyright © 2022 Furea . All Rights Reserved.Design By Furea
        </span>
        <div className="copy-right-img">
          <img
            src="https://risingtheme.com/html/demo-furea/furea/assets/img/other/payment-visa-card.webp"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
