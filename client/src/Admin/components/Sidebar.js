import React from "react";
import styled from "styled-components";
import { appConstants } from "../../constants/AppConstants";
const Sidebar = ({ onClick = null, activeId = 0 }) => {
  console.log(activeId);
  return (
    <StyledSidebar className="w-[300px] h-screen relative bg-[#edede9]  top-0 left-0 flex-shrink-0  border-r border-gray-400">
      <div className="logo relative w-full justify-center py-5 flex gap-x-4 items-center">
        <img className="w-20" src={appConstants.logo} alt="" />
      </div>
      <div className="mt-5 flex flex-col ">
        <div
          onClick={() => onClick(0)}
          className={`flex py-4 admin-sidebar-item text-secondary cursor-pointer items-center gap-x-3 px-5 ${
            activeId === 0 ? "active" : ""
          }`}
        >
          <i className="bi text-2xl sidebar-icon leading-[0px] bi-grid-fill"></i>
          <span className="sidebar-title text-base font-medium">Dashboard</span>
        </div>
        <div
          onClick={() => onClick(1)}
          className={`flex py-4 admin-sidebar-item text-secondary cursor-pointer items-center gap-x-3 px-5 ${
            activeId === 1 ? "active" : ""
          }`}
        >
          <i className="bi sidebar-icon text-2xl  leading-[0px] bi-cart4"></i>
          <span className=" text-base sidebar-title font-medium">Orders</span>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
const StyledSidebar = styled.div`
  box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;

  .admin-sidebar-item.active {
    background-color: #fc5130;
    color: #fff;
  }
`;
