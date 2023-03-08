import axios from "axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

const Products = () => {
  const [data, setData] = useState();
  useEffect(() => {
    document.title = "Trang Chủ";
    async function fetchProductsData() {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/products`);
        if (res && res.data) {
          setData(res.data);
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductsData();
  }, []);
  return (
    <div className="products-page">
      <BreadCrumb heading="Shop Left" title="Home - Shop Left Sidebar" />
      {data && data.products ? <ProductsSection data={data.products} /> : <></>}
    </div>
  );
};

export default Products;
