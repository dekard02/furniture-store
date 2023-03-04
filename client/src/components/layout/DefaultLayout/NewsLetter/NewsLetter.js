import React from "react";
import newLetter from "../../../../assets/newletter.webp";
const NewsLetter = () => {
  return (
    <div className="wrapper-layout">
      <div className="relative pt-5 pb-20 newletter-section ">
        <div className="relative rounded-lg">
          <img className="rounded-lg" src={newLetter} alt="" />
          <div className="z-50 flex flex-col absolute top-2/4 -translate-x-2/4 -translate-y-2/4 left-[70%] gap-y-3">
            <span className="text-sm font-normal text-white">
              Want to offer regularly ?
            </span>
            <h3 className="text-2xl font-medium text-white">
              Subscribe Our Newsletter <br />
              for Get Daily Update
            </h3>
            <div className="flex items-center w-[350px] gap-x-2 justify-between px-2 py-1 bg-white ">
              <input
                className="flex-1 p-2 text-sm font-light text-gray-400 bg-white outline-none"
                placeholder="Enter your email address"
                type="text"
              />
              <button className="px-3 py-2 text-sm font-medium text-white transition-all rounded-sm bg-bgPrimary hover:bg-secondary">
                Subscribe
                <i className="ml-2 text-sm text-white bi bi-send-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
