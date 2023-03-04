import React from "react";
import styled from "styled-components";
const AdminHeader = () => {
  return (
    <StyledHeaderAdmin className="px-6 z-50 fixed top-0 right-0 border-b border-[#f5ebe0] py-5 w-full flex items-center justify-between">
      <span className="text-secondary text-2xl font-bold">Welcome back</span>
      <div className="flex items-center gap-x-3">
        <div className="relative notify cursor-pointer bg-[#ecf0f3] w-10 h-10 rounded-full flex justify-center items-center text-secondary">
          <i className="bi leading-[0px text-secondary text-xl bi-bell"></i>
          <div className="absolute w-5 h-5 left-[26px] rounded-full bg-red-500 text-white text-sm flex justify-center items-center top-0">
            4
          </div>
        </div>
        <div className="flex gap-x-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://tse1.mm.bing.net/th?id=OIP.OKPDYvqRdq5n-aGu8LwPRwHaHa&pid=Api&P=0"
            alt=""
          />
          <div className="flex flex-col">
            <span className="text-secondary font-semibold">Vinh Pham</span>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </StyledHeaderAdmin>
  );
};

export default AdminHeader;
const StyledHeaderAdmin = styled.div`
  width: calc(100% - 300px);

  .notify {
    box-shadow: 6px 6px 12px #cbced1, -6px -6px 12px #ffffff;
  }
`;
