import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useDispatch, useSelector } from "react-redux";
import handleAddToCart from "../../utils/handleAddToCart";
import { useNavigate } from "react-router-dom";
import { setShowModalQuickView } from "../../redux-toolkit/global/globalSlice";
import handleAddToWishlist from "../../utils/handleAddToWishlist";
const ProductItem = ({ item = {} }) => {
  const { wishlists } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowModalQuickView = (product) => {
    dispatch(setShowModalQuickView(product));
  };

  return (
    <StyledProductItem className={`product-item relative`}>
      <div className="relative product-thumbnail">
        <div
          onClick={() => navigate(`/products/${item.id}`)}
          className="relative overflow-hidden cursor-pointer product-image"
        >
          <img
            className="transition-all duration-700 first-image"
            src={item.thumbnail}
            alt=""
          />
          <img
            className="absolute inset-0 invisible transition-all duration-700 opacity-0 second-image"
            src={item.subThumbnail}
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center invisible transition-all duration-500 opacity-0 product-action gap-x-2">
          <Tippy content="Quickview">
            <button
              onClick={() => handleShowModalQuickView(item)}
              className="z-20 flex items-center justify-center px-2 py-2 text-sm transition-all bg-white rounded-sm product-action-btn text-textPrimary hover:text-white hover:bg-bgPrimary"
            >
              <i className="bi leading-[0px] text-inherit bi-eye"></i>
            </button>
          </Tippy>
          <Tippy content="Add to wishlist">
            <button
              onClick={() => handleAddToWishlist(item, dispatch)}
              className="z-20 flex items-center justify-center px-2 py-2 text-sm transition-all bg-white rounded-sm product-action-btn text-textPrimary hover:text-white hover:bg-bgPrimary"
            >
              <i className=" leading-[0px] text-inherit bi bi-heart-fill"></i>
            </button>
          </Tippy>
          <Tippy content="Add to cart">
            <button
              onClick={() => handleAddToCart(item, 1, dispatch)}
              className="z-20 flex items-center justify-center px-2 py-2 text-sm transition-all bg-white rounded-sm product-action-btn text-textPrimary hover:text-white hover:bg-bgPrimary"
            >
              <i className="bi leading-[0px] text-inherit bi-cart-plus-fill"></i>
            </button>
          </Tippy>
        </div>
      </div>
      <div className="flex flex-col items-center p-3 border border-t-0 border-gray-300 cursor-default product-item-content ">
        <div className="flex flex-col items-center gap-y-2">
          <div className="flex items-center justify-center w-full product-item-colors gap-x-3">
            <span className="w-3 h-3 rounded-full bg-bgPrimary"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
          </div>
          <h3 className="text-base font-semibold cursor-pointer hover:text-bgPrimary text-secondary">
            {item.name}
          </h3>
          <div className="flex items-center justify-center w-full product-item-price gap-x-3">
            <span className="text-lg font-medium text-bgPrimary">
              {item.price}
            </span>
            <span className="text-lg font-medium text-gray-500 line-through">
              $250.00
            </span>
          </div>
        </div>
        <button
          onClick={() => handleAddToCart(item, 1, dispatch)}
          className="flex items-center invisible px-3 py-2 text-sm font-medium text-white transition-all rounded-md opacity-0 add-to-cart bg-bgPrimary hover:bg-secondary gap-x-2"
        >
          <i className="bi bi-cart-plus"></i>
          Add to cart
        </button>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
const StyledProductItem = styled.div`
  .image-second {
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  &:hover .product-thumbnail .product-image .first-image {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    opacity: 0;
    visibility: hidden;
  }

  &:hover .product-thumbnail .product-image .second-image {
    opacity: 1;
    visibility: visible;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  &:hover .product-thumbnail .product-action {
    opacity: 1;
    visibility: visible;
    bottom: 12px;
  }
  &:hover .product-item-content .add-to-cart {
    opacity: 1;
    visibility: visible;
  }
`;
