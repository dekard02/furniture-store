import React from "react";
import styled from "styled-components";
import ProductItem from "../../components/ProductItem/ProductItem";
import Pagination from "@mui/material/Pagination";
import { ProductsData } from "../data/ProductData";
const ProductsSection = () => {
  return (
    <StyledDiv className="products-section wrapper-layout section">
      <div className="flex gap-x-5 relative">
        <div className="w-[30%] flex flex-col gap-y-4">
          <div className="search-section p-5 rounded-md ">
            <div className="flex flex-col gap-y-3">
              <div className="relative">
                <img
                  className="w-12"
                  src="https://risingtheme.com/html/demo-furea/furea/assets/img/other/widget-shape.webp"
                  alt=""
                />
                <div className="absolute font-medium  top-7 left-14 text-bgPrimary text-xl">
                  Search
                </div>
              </div>
              <div className="search-form flex relative overflow-hidden">
                <input
                  className="text-textPrimary flex-1 border-r-0 text-sm outline-none h-10 border border-gray-400 rounded-sm px-3 focus:border-bgPrimary"
                  type="text"
                  placeholder="Search by"
                />
                <button className="text-white bg-bgPrimary px-3 transition-all rounded-sm h-10 hover:bg-secondary">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="search-section filter-price">
            <div className="relative">
              <img
                className="w-12"
                src="https://risingtheme.com/html/demo-furea/furea/assets/img/other/widget-shape.webp"
                alt=""
              />
              <div className="absolute font-medium  top-7 left-14 text-bgPrimary text-xl">
                Filter By Price
              </div>
            </div>
            <div className="my-4 gap-y-3 flex flex-col">
              <div className="relative">
                <button className="text-bgPrimary font-semibold text-base border-b-2 border-bgPrimary">
                  Low to high
                  <i className="bi bi-arrow-up"></i>
                </button>
              </div>
              <div className="relative">
                <button className="text-textPrimary font-semibold text-base">
                  High to low
                  <i className="bi  bi-arrow-down"></i>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <div className="flex flex-col gap-y-3">
                <span className="text-secondary select-none text-sm font-medium">
                  From
                </span>
                <div className="p-3 flex gap-x-2 border border-gray-400 rounded-sm">
                  <span className="text-secondary font-semibold text-sm">
                    $
                  </span>
                  <input
                    placeholder=""
                    type="number"
                    min={0}
                    className="outline-none w-full text-secondary text-xs font-light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <span className="text-secondary select-none text-sm font-medium">
                  To
                </span>
                <div className="p-3 flex gap-x-2 border border-gray-400 rounded-sm">
                  <span className="text-secondary font-semibold text-sm">
                    $
                  </span>
                  <input
                    placeholder="250000"
                    type="number"
                    min={0}
                    className="outline-none w-full text-secondary text-xs font-light"
                  />
                </div>
              </div>
            </div>
            <button className="text-white bg-bgPrimary px-5 mt-4 py-2 rounded-md text-base font-medium hover:bg-secondary transition-all">
              Filter
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="grid gap-y-5 grid-cols-3 gap-x-7">
            {ProductsData.map((item, index) => {
              return <ProductItem key={item.id} item={item} />;
            })}
          </div>
          <div className="text-center flex justify-center items-center mt-7">
            <Pagination count={4} />
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default ProductsSection;
const StyledDiv = styled.div`
  .search-section {
    padding: 20px;
    -webkit-box-shadow: 0 2px 22px rgb(0 0 0 / 10%);
    box-shadow: 0 2px 22px rgb(0 0 0 / 10%);
  }
  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    color: #fff;
    background-color: #f51c1c;
  }
`;
