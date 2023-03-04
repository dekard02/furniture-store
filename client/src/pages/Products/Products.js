import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

const Products = () => {
  return (
    <div className="products-page">
      <BreadCrumb heading="Shop Left" title="Home - Shop Left Sidebar" />
      <ProductsSection />
    </div>
  );
};

export default Products;
