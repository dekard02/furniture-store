import React from "react";
import styled from "styled-components";
import ProductItem from "../../components/ProductItem/ProductItem";
import Pagination from "@mui/material/Pagination";
import { LoadingSkeleton } from "../Loading";
import { useSelector } from "react-redux";

const ProductsSection = ({
  data = [],
  pagination = {},
  handlePageChange,
  onChange,
  searchValue,
  onSortChange,
  filters,
  values,
  onSalePriceChange,
  onSubmitValue,
}) => {
  const { loading } = useSelector((state) => state.global);
  return (
    <StyledDiv className="products-section wrapper-layout section">
      <div className="flex gap-x-10 relative">
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
                  onChange={(e) => onChange(e.target.value)}
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
            <div className="my-4 gap-y-2 flex flex-col">
              <div className="relative">
                <button
                  onClick={() => onSortChange(`price`)}
                  style={{
                    color: filters.sort === "price" ? "#f51c1c" : "#666666",
                    borderBottom: `2px solid ${
                      filters.sort === "price" ? "#f51c1c" : "transparent"
                    }`,
                  }}
                  className="font-semibold select-none text-base"
                >
                  Low to high
                  <i className="bi bi-arrow-up"></i>
                </button>
              </div>
              <div className="relative">
                <button
                  style={{
                    color: filters.sort === "-price" ? "#f51c1c" : "#666666",
                    borderBottom: `2px solid ${
                      filters.sort === "-price" ? "#f51c1c" : "transparent"
                    }`,
                  }}
                  onClick={() => onSortChange(`-price`)}
                  className="font-semibold select-none text-base"
                >
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
                    VND
                  </span>
                  <input
                    placeholder=""
                    type="number"
                    min={0}
                    value={values.salePrice_gte}
                    onChange={onSalePriceChange}
                    name="salePrice_gte"
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
                    VND
                  </span>
                  <input
                    placeholder=""
                    type="number"
                    name="salePrice_lt"
                    min={0}
                    value={values.salePrice_lt}
                    onChange={onSalePriceChange}
                    className="outline-none w-full text-secondary text-xs font-light"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={onSubmitValue}
              className="text-white bg-bgPrimary px-5 mt-4 py-2 rounded-md text-base font-medium hover:bg-secondary transition-all"
            >
              Filter
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          {loading ? (
            <LoadingSkeleton columns={3} length={6} />
          ) : (
            <div className="grid gap-y-5 grid-cols-3 gap-x-7">
              {data.length > 0 &&
                data.map((item, index) => {
                  return <ProductItem key={item._id} item={item} />;
                })}
            </div>
          )}
          {data?.length === 0 && searchValue !== "" && (
            <div className="flex text-xl text-bgPrimary justify-center items-center w-full">
              Không tìm thấy sản phẩm với tên phù hợp
            </div>
          )}

          <div className="text-center flex justify-center items-center mt-7">
            {data?.length > 0 && (
              <Pagination
                onChange={handlePageChange}
                count={pagination?.tolalPages}
                page={pagination?.current}
              />
            )}
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
