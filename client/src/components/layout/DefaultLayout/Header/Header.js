import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../../../../assets/logobrand.webp";
import { useDispatch, useSelector } from "react-redux";
import { setScrollValue } from "../../../../redux-toolkit/global/globalSlice";
import { NavLink } from "react-router-dom";
import MenuItem from "../Navbar/MenuItem";
import { cartItemsCountSelector } from "../../../../redux-toolkit/cartSlice/Selector";
const Header = () => {
  const { scrollValid } = useSelector((state) => state.global);
  const { wishlists } = useSelector((state) => state.wishlist);
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
  }, []);
  return (
    <StyledHeader className={`header ${scrollValid ? "active" : ""}`}>
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
          <div className="text-2xl text-textPrimary">
            <i className="transition-all cursor-pointer bi text-textPrimary hover:text-bgPrimary bi-search"></i>
          </div>
          <div className="text-2xl text-textPrimary">
            <i className="transition-all cursor-pointer bi text-textPrimary hover:text-bgPrimary bi-person"></i>
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
`;
