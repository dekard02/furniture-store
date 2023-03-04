import React from "react";

const SocialIcon = () => {
  return (
    <div className="flex items-center justify-center gap-x-3">
      <button className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full bg-bgPrimary hover:bg-secondary">
        <i className="transition-all text-lg leading-[0px]  cursor-pointer bi hover:opacity-70 bi-facebook"></i>
      </button>
      <button className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full bg-bgPrimary hover:bg-secondary">
        <i className="text-lg transition-all cursor-pointer bi hover:opacity-70 bi-twitter"></i>
      </button>
      <button className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full bg-bgPrimary hover:bg-secondary">
        <i className="text-lg transition-all cursor-pointer bi hover:opacity-70 bi-instagram"></i>
      </button>
      <button className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full bg-bgPrimary hover:bg-secondary">
        <i className="text-lg transition-all cursor-pointer bi hover:opacity-70 bi-linkedin"></i>
      </button>
    </div>
  );
};

export default SocialIcon;
