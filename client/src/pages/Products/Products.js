import axios from "axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import productApi from "../../service/productApi";

const Products = () => {
  const [data, setData] = useState();
  useEffect(() => {
    document.title = "Trang Chủ";
    const fetchProducts = async () => {
      const res = await productApi.getAllProduct();
      setData(res.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <BreadCrumb heading="Shop Left" title="Home - Shop Left Sidebar" />
      <ProductsSection data={data} />
    </div>
  );
};

export default Products;
