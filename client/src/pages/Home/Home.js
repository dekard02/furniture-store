import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import BannerSection from "../../components/BannerSection/BannerSection";
import BannerVideo from "../../components/BannerVideo/BannerVideo";
import InstagramSection from "../../components/InstagramSection/InstagramSection";
import Populars from "../../components/Populars/Populars";
import Testimonial from "../../components/Testimonial/Testimonial";
import WoodenFurniture from "../../components/WoodenFurniture/WoodenFurniture";
import productApi from "../../service/productApi";
import { setLoadingSkeleton } from "../../store/global/globalSlice";

const Home = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Trang Chủ";
    const fetchProducts = async () => {
      try {
        dispatch(setLoadingSkeleton(true));
        const res = await productApi.getAllProduct();
        setData(res.products);
        dispatch(setLoadingSkeleton(false));
      } catch (error) {
        console.log(error);
        dispatch(setLoadingSkeleton(false));
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="overflow-hidden home">
      <Banner />
      <div className="wrapper-layout">
        <BannerSection />
        <Populars data={data} />
        <WoodenFurniture data={data} />
        <BannerVideo />
        <Testimonial />
      </div>
      <InstagramSection />
    </div>
  );
};

export default Home;
