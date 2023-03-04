import axios from "axios";
import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import BannerSection from "../../components/BannerSection/BannerSection";
import BannerVideo from "../../components/BannerVideo/BannerVideo";
import InstagramSection from "../../components/InstagramSection/InstagramSection";
import Populars from "../../components/Populars/Populars";
import Testimonial from "../../components/Testimonial/Testimonial";
import WoodenFurniture from "../../components/WoodenFurniture/WoodenFurniture";

const Home = () => {
  useEffect(() => {
    document.title = "Trang Chủ";
    async function fetchProductsData() {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/products`);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductsData();
  }, []);
  return (
    <div className="overflow-hidden home">
      <Banner />
      <div className="wrapper-layout">
        <BannerSection />
        <Populars />
        <WoodenFurniture />
        <BannerVideo />
        <Testimonial />
      </div>
      <InstagramSection />
    </div>
  );
};

export default Home;
