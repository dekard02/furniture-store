import React from "react";
import styled from "styled-components";
import order1 from "../../assets/order1.webp";
import order2 from "../../assets/order2.webp";
import order3 from "../../assets/order3.webp";
import { NavLink } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import LoadingSkeleton from "../../components/Loading/LoadingSkeleton";
const Populars = ({ data = [] }) => {
  const { loading } = useSelector((state) => state.global);
  console.log(process.env);
  return (
    <StyledPopular className="section-populars">
      <div className="pb-12">
        <h4 className="section-title">Most Popular Items</h4>

        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid gap-y-5 grid-cols-5 gap-x-7">
            {data.length > 0 &&
              data.map((product, index) => {
                return <ProductItem key={product._id} item={product} />;
              })}
          </div>
        )}
      </div>
      <div className="grid pb-20 grid-cols-3 gap-x-7">
        <NavLink to={"/products"} className="order-item relative">
          <div className="order-item-img cursor-pointer  relative overflow-hidden">
            <img src={order1} alt="" />
          </div>
          <div className="absolute text-xl -right-10 top-2/4 -translate-x-2/4 -translate-y-2/4 font-medium text-secondary order-item-content flex flex-col gap-y-3">
            <h3>
              Single Stylish <br />
              Mini Chair
            </h3>
            <button className="transition-all text-sm hover:text-white px-3 py-2 rounded-md bg-white hover:bg-bgPrimary border border-secondary hover:border-bgPrimary">
              Order Now
            </button>
          </div>
        </NavLink>
        <NavLink to={"/products"} className="order-item relative">
          <div className="order-item-img cursor-pointer  relative overflow-hidden">
            <img src={order2} alt="" />
          </div>
          <div className="absolute text-xl -right-10 top-2/4 -translate-x-2/4 -translate-y-2/4 font-medium text-secondary order-item-content flex flex-col gap-y-3">
            <h3>
              New Furniture <br />
              Tree Planet
            </h3>
            <button className="transition-all text-sm hover:text-white px-3 py-2 rounded-md bg-white hover:bg-bgPrimary border border-secondary hover:border-bgPrimary">
              Order Now
            </button>
          </div>
        </NavLink>
        <NavLink to={"/products"} className="order-item relative">
          <div className="order-item-img cursor-pointer  relative overflow-hidden">
            <img src={order3} alt="" />
          </div>
          <div className="absolute order-content text-xl -right-10 top-2/4 -translate-x-2/4 -translate-y-2/4 font-medium text-secondary order-item-content flex flex-col gap-y-3">
            <h3>
              Single Stylish <br />
              Mini Chair
            </h3>
            <button
              to={"/products"}
              className="transition-all text-sm hover:text-white px-3 py-2 rounded-md bg-white hover:bg-bgPrimary border border-secondary hover:border-bgPrimary"
            >
              Order Now
            </button>
          </div>
        </NavLink>
      </div>
    </StyledPopular>
  );
};

export default Populars;
const StyledPopular = styled.div`
  .order-item {
    overflow: hidden;
    & .order-item-img img {
      transition: 0.5s all;
    }
    &:hover .order-item-img img {
      transform: scale(1.1);
    }
    .order-content {
      left: 80px;
      right: initial;
    }
  }
`;
