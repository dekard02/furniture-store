import React from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="profile-page">
      <BreadCrumb heading="Profile" title="Home - Profile" />
      <div
        style={{
          paddingTop: "40px",
        }}
        className="section wrapper-layout"
      >
        <div className="flex justify-center items-center">
          <h3
            style={{
              fontSize: "40px",
            }}
            className="section-title inline-block pb-2 border-bgPrimary border-b-4"
          >
            Tài khoản của bạn
          </h3>
        </div>
        <div className="profile-info text-secondary text-2xl pb-2 border-b border-gray-300">
          Thông tin tài khoản
        </div>
        <div className="flex flex-col">
          <span className="text-base capitalize font-medium text-secondary">
            {currentUser.fullName || ""}
          </span>
          <span className="text-base  font-medium text-secondary">
            {currentUser.email || ""}
          </span>
          <span>Việt Nam</span>
        </div>
      </div>
    </div>
  );
}
