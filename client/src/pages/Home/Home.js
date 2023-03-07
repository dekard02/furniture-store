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

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = "Trang Chủ";
    async function fetchProductsData() {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/products`);
        if (res && res.data) {
          setData(res.data);
          console.log(res.data);
        }
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
        <Populars data={data.products} />
        <WoodenFurniture data={data.products} />
        <BannerVideo />
        <Testimonial />
      </div>
      <InstagramSection />
    </div>
  );
};

export default Home;
