import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BannerSection from "../../components/BannerSection/BannerSection";
import BannerVideo from "../../components/BannerVideo/BannerVideo";
import InstagramSection from "../../components/InstagramSection/InstagramSection";
import Populars from "../../components/Populars/Populars";
import Testimonial from "../../components/Testimonial/Testimonial";
import WoodenFurniture from "../../components/WoodenFurniture/WoodenFurniture";
import productApi from "../../service/productApi";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = "Trang Chủ";
    const fetchProducts = async () => {
      const res = await productApi.getAllProduct();
      setData(res.products);
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
