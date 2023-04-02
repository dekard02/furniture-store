import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ProductDetailItem from "../../components/ProductDetailItem/ProductDetailItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../service/productApi";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    document.title = "Sản phẩm chi tiết";
    const fetchProducts = async () => {
      try {
        const res = await productApi.getProduct(slug);
        setProduct(res.products[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <StyledProductDetail className="product-detail-page">
      <BreadCrumb heading="Product Detail" title="Home - Details" />
      <div className="wrapper-layout section">
        {product ? (
          <ProductDetailItem item={product} />
        ) : (
          <div className="text-secondary text-2xl font-medium">
            Không tìm thấy sản phẩm
          </div>
        )}
      </div>
    </StyledProductDetail>
  );
};
export default ProductDetail;
const StyledProductDetail = styled.div``;
