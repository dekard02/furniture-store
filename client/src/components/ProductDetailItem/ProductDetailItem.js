import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SocialIcon from "../../pages/About/SocialIcon";
import handleAddToCart from "../../utils/handleAddToCart";
import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import styled from "styled-components";
import handleAddToWishlist from "../../utils/handleAddToWishlist";
import { useNavigate } from "react-router-dom";
const ProductDetailItem = ({ item = {}, isQickView = false }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInc = () => {
    setQuantity(quantity + 1);
  };
  const handleDec = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  useEffect(() => {
    setQuantity(1);
  }, []);

  return (
    <StyledProductDetailItem className="grid grid-cols-2 gap-x-5">
      <div className="flex flex-col gap-y-5">
        <div className="product-detail-image">
          <img className="rounded-md" src={item.thumbnail} alt="" />
        </div>
        <div className="grid grid-cols-3 gap-x-7">
          <div className="relative border cursor-pointer border-bgPrimary">
            <img
              src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/big-product4.webp"
              alt=""
            />
          </div>
          <div className="relative border border-gray-400 cursor-pointer">
            <img
              src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/big-product5.webp"
              alt=""
            />
          </div>
          <div className="relative border border-gray-400 cursor-pointer">
            <img
              src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/big-product2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <h3 className="text-3xl font-semibold text-secondary">{item.name}</h3>
        <div className="flex gap-x-3">
          <span className="text-lg font-medium text-bgPrimary">
            {item.price}
          </span>
          <span className="text-lg font-medium text-gray-400 line-through">
            $320.000
          </span>
        </div>
        <div className="flex gap-x-1">
          <i className="text-base text-yellow-500 bi bi-star-fill"></i>
          <i className="text-base text-yellow-500 bi bi-star-fill"></i>
          <i className="text-base text-yellow-500 bi bi-star-fill"></i>
          <i className="text-base text-yellow-500 bi bi-star-fill"></i>
          <i className="text-base text-yellow-500 bi bi-star-fill"></i>
        </div>
        <span className="text-base text-textPrimary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam
          ullam is recusandae laborum explicabo id sequi quisquam, ab sunt
          deleniti quidem ea animi facilis quod nostrum odit! Repellendus
          voluptas suscipit.
        </span>
        <div className="flex gap-x-3">
          <Quantity
            handleDec={handleDec}
            handleInc={handleInc}
            value={quantity}
          />
          <Button
            onClick={() => handleAddToCart(item, quantity, dispatch)}
            className="btn-add-to-cart"
          >
            Thêm Vào Giỏ Hàng
          </Button>
        </div>
        <div
          onClick={() => handleAddToWishlist(item, dispatch)}
          className="flex items-center font-normal cursor-pointer text-secondary hover:text-bgPrimary gap-x-3"
        >
          <i className=" leading-[0px] text-inherit bi-heart"></i>
          Thêm Vào Danh Sách Yêu Thích
        </div>
        {isQickView ? (
          <></>
        ) : (
          <div className="relative">
            <Button
              onClick={() => navigate("/checkout")}
              className="btn-add-to-cart"
            >
              Mua Ngay
            </Button>
          </div>
        )}
        <div className="flex items-center gap-x-2">
          <span className="text-lg font-semibold text-secondary">Barcode:</span>
          <span className="text-base font-normal text-gray-500">565461</span>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-lg font-semibold text-secondary">Sky:</span>
          <span className="text-base font-normal text-gray-500">4420</span>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-lg font-semibold text-secondary">Vendor:</span>
          <span className="text-base font-normal text-gray-500">Belo</span>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-lg font-semibold text-secondary">Type:</span>
          <span className="text-base font-normal text-gray-500">Sofa</span>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-lg font-semibold text-secondary">
            Social Share:
          </span>
          <SocialIcon />
        </div>
        <div className="flex flex-col ">
          <span className="text-lg font-semibold text-secondary">
            Guaranteed Safe Checkout
          </span>
          <div className="relative mt-2">
            <img
              src="https://risingtheme.com/html/demo-furea/furea/assets/img/other/safe-checkout.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </StyledProductDetailItem>
  );
};

export default ProductDetailItem;
const StyledProductDetailItem = styled.div`
  .btn-add-to-cart {
    border: 0;
    background-color: #f51c1c;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #121a25;
    }
  }
`;
