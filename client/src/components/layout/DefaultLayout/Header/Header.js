import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../../../../assets/logobrand.webp";
import { useDispatch, useSelector } from "react-redux";
import { setScrollValue } from "../../../../store/global/globalSlice";
import { NavLink } from "react-router-dom";
import MenuItem from "../Navbar/MenuItem";
import { cartItemsCountSelector } from "../../../../store/cartSlice/Selector";
import { FiLogIn } from "react-icons/fi";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { setLogout } from "../../../../store/auth/userSlice";
import getMessage from "../../../../utils/getMessage";

const Header = () => {
  const { scrollValid } = useSelector((state) => state.global);
  const { wishlists } = useSelector((state) => state.wishlist);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const cartItemCount = useSelector(cartItemsCountSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      let scrollValue = document.documentElement.scrollTop;
      dispatch(setScrollValue(scrollValue > 10));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleLogOut = () => {
    dispatch(setLogout());
    getMessage("Đăng xuất thành công", "success");
  };
  return (
    <StyledHeader
      className={`header z-[500] relative ${scrollValid ? "active" : ""}`}
    >
      <div className="relative flex items-center justify-between">
        <NavLink to="/" className="w-16 cursor-pointer header-logo">
          <img src={logo} alt="" />
        </NavLink>
        <div className="flex nav-bar gap-x-5">
          <MenuItem title="Home" to={"/"} />
          <MenuItem title="Products" to={"/products"} />
          <MenuItem title="About" to={"/about"} />
        </div>
        <div className="flex items-center header-right gap-x-4">
          <div className="text-2xl icon-user relative text-textPrimary">
            <i className="transition-all cursor-pointer bi text-textPrimary hover:text-bgPrimary bi-person"></i>
            <div className="absolute w-44 select-none hidden shadow-lg border border-gray-200 -left-[153px] py-3 popup-user flex-col rounded-md bg-white">
              {!currentUser?.user && (
                <NavLink
                  to={"/sign-in"}
                  className="py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-x-3 px-3"
                >
                  <FiLogIn className="text-lg font-medium text-textPrimary" />

                  <span className="text-textPrimary whitespace-nowrap font-medium text-sm">
                    Đăng nhập
                  </span>
                </NavLink>
              )}
              {currentUser?.user?.role === "CUSTOMER" && (
                <NavLink
                  to={"/profile"}
                  className="py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-x-3 px-3"
                >
                  <i className="bi text-textPrimary text-lg bi-person-check-fill"></i>

                  <span className="text-textPrimary capitalize whitespace-nowrap font-medium text-sm">
                    {currentUser?.user?.fullName}
                  </span>
                </NavLink>
              )}
              {currentUser?.user?.role === "MANAGER" && (
                <NavLink
                  to={"/admin/home"}
                  className="py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-x-3 px-3"
                >
                  <i className="bi text-textPrimary text-lg bi-person-check-fill"></i>

                  <span className="text-textPrimary capitalize whitespace-nowrap font-medium text-sm">
                    {currentUser?.user?.fullName}
                  </span>
                </NavLink>
              )}
              {!currentUser?.user && (
                <NavLink
                  to={"/sign-up"}
                  className="py-2 cursor-pointer hover:bg-gray-200 z-50 flex items-center gap-x-3 px-3"
                >
                  <BiLogInCircle className="text-lg font-medium text-textPrimary" />
                  <span className="text-textPrimary font-medium text-sm">
                    Đăng kí
                  </span>
                </NavLink>
              )}
              {currentUser?.user && (
                <div
                  onClick={handleLogOut}
                  className="py-2 cursor-pointer hover:bg-gray-200 z-50 flex items-center gap-x-3 px-3"
                >
                  <BiLogOutCircle className="text-lg font-medium text-textPrimary" />
                  <span className="text-textPrimary font-medium text-sm">
                    Đăng xuất
                  </span>
                </div>
              )}
              <NavLink
                to={`/checkout-success`}
                className="py-2 cursor-pointer hover:bg-gray-200 z-50 flex items-center gap-x-3 px-3"
              >
                <i className="bi bi-bank2 text-xs font-medium text-textPrimary"></i>
                <span className="text-textPrimary font-medium text-sm">
                  Lịch sử đơn hàng
                </span>
              </NavLink>
            </div>
          </div>
          <NavLink
            to={"/wishlist"}
            className="relative text-2xl text-textPrimary"
          >
            <span className="text-white cursor-pointer top[-6px] right-[-8px] absolute text-xs bg-bgPrimary rounded-full w-4 h-4 flex justify-center items-center">
              {wishlists.length}
            </span>
            <i className="transition-all cursor-pointer bi text-textPrimary hover:text-bgPrimary bi-heart"></i>
          </NavLink>
          <NavLink to={"/cart"} className="relative text-2xl text-textPrimary">
            <i className="transition-all cursor-pointer bi text-textPrimary hover:text-bgPrimary bi-cart"></i>
            <span className="text-white cursor-pointer top-[-1px] right-[-8px] absolute text-xs bg-bgPrimary rounded-full w-4 h-4 flex justify-center items-center">
              {cartItemCount}
            </span>
          </NavLink>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  &.active {
    position: fixed;
    width: 100%;
    top: 0;
    background: #fff;
    left: 0;
    z-index: 200;
    -webkit-box-shadow: 0 0 7px rgb(0 0 0 / 15%);
    box-shadow: 0 0 7px rgb(0 0 0 / 15%);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  .menu-item.active {
    color: #f51c1c;
  }
  .icon-user {
    &:hover .popup-user {
      display: flex;
    }
  }
`;
