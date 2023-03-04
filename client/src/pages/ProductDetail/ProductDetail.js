import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Button from "../../components/Button/Button";
import Quantity from "../../components/Quantity/Quantity";
import styled from "styled-components";
import SocialIcon from "../About/SocialIcon";
import { useDispatch } from "react-redux";
import handleAddToCart from "../../utils/handleAddToCart";
import ProductDetailItem from "../../components/ProductDetailItem/ProductDetailItem";

const ProductDetail = ({ item = {} }) => {
  const dispatch = useDispatch();
  return (
    <StyledProductDetail className="product-detail-page">
      <BreadCrumb heading="Product Detail" title="Home - Details" />
      <div className="wrapper-layout section">
        <ProductDetailItem item={item} />
      </div>
    </StyledProductDetail>
  );
};
export default ProductDetail;
const StyledProductDetail = styled.div``;
