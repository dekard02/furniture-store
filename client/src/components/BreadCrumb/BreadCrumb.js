import React from "react";
import breadcrumbbg from "../../assets/breadcrumbbg.webp";
const BreadCrumb = ({ heading = "", title = "" }) => {
  return (
    <div className="py-7 bg-white border-t border-gray-300">
      <div
        style={{
          backgroundImage: `url(${breadcrumbbg})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="bread-crumb-section relative flex items-center h-[250px]"
      >
        <div className="breadcrumb-content flex flex-col px-10 gap-y-3">
          <h3 className="text-white text-5xl font-bold">{heading}</h3>
          <span className="text-white  text-xl font-semibold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
