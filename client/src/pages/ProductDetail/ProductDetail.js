import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ProductDetailItem from "../../components/ProductDetailItem/ProductDetailItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    document.title = "Trang Chủ";
    async function fetchProductsData() {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/products?slug=${slug}`
        );
        if (res && res.data) {
          setProduct(res.data.products[0]);
          console.log("product", product);
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductsData();
  }, []);
  return (
    <StyledProductDetail className="product-detail-page">
      <BreadCrumb heading="Product Detail" title="Home - Details" />
      <div className="wrapper-layout section">
        <ProductDetailItem item={product} />
      </div>
    </StyledProductDetail>
  );
};
export default ProductDetail;
const StyledProductDetail = styled.div``;
