import React from "react";
import styled from "styled-components";
import shape from "../../assets/headingshape.webp";
import ProductItem from "../ProductItem/ProductItem";
import dealbanner from "../../assets/dealbanner.webp";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSkeleton from "../Loading/LoadingSkeleton";
const WoodenFurniture = ({ data = [] }) => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.global);
  return (
    <StyledWoodenFurniture className="relative flex gap-x-6">
      <div className="w-[70%]">
        <div className="relative border-b border-gray-300 mb-7">
          <h3 style={{ textAlign: "left" }} className="section-title">
            Wooden Furniture
          </h3>
          <div className="bg-white center ">
            <img src={shape} alt="" />
          </div>
        </div>
        {loading ? (
          <LoadingSkeleton columns={3} length={6} />
        ) : (
          <div className="grid grid-cols-3 gap-x-5 gap-y-4">
            {data.length > 0 &&
              data.slice(0, 6).map((item, index) => {
                return <ProductItem item={item} key={item._id} />;
              })}
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="deals__banner--thumbnail parent-image">
          <div className="parent-img">
            <img src={dealbanner} alt="" />
          </div>
          <div className="absolute left-0 right-0 flex flex-col items-center mb-5 gap-y-5 top-5">
            <h3 className="w-full text-xl font-semibold text-center transition-all cursor-pointer hover:text-bgPrimary text-secondary">
              Bring Beauty With <br />
              Furniture Tree
            </h3>
            <div className="flex items-center justify-center countdown-deal gap-x-4">
              <div className="flex flex-col items-center gap-y-1">
                <button className="w-10 h-10 text-base font-medium bg-white rounded-full text-secondary">
                  20
                </button>
                <span className="text-sm font-normal text-secondary">Days</span>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <button className="w-10 h-10 text-base font-medium bg-white rounded-full text-secondary">
                  9
                </button>
                <span className="text-sm font-normal text-secondary">Hrs</span>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <button className="w-10 h-10 text-base font-medium bg-white rounded-full text-secondary">
                  40
                </button>
                <span className="text-sm font-normal text-secondary">Mins</span>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <button className="w-10 h-10 text-base font-medium bg-white rounded-full text-secondary">
                  15
                </button>
                <span className="text-sm font-normal text-secondary">Secs</span>
              </div>
            </div>
            <div>
              <Button>Order Now</Button>
            </div>
          </div>
        </div>
      </div>
    </StyledWoodenFurniture>
  );
};

export default WoodenFurniture;
const StyledWoodenFurniture = styled.div`
  .product-item-price,
  .product-item-colors {
    justify-content: flex-start;
    column-gap: 4px;
  }
  .product-item-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: none;
  }
  .add-to-cart {
    font-size: 10px;
    padding: 4px 13px;
    white-space: nowrap;
    margin-top: initial;
  }
`;
