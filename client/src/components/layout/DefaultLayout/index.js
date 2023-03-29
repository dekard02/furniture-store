import { Fragment } from "react";
import { useSelector } from "react-redux";
import BackTop from "./BackTop/BackTop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import QuickView from "./Modal/QuickView";
import NewsLetter from "./NewsLetter/NewsLetter";
import VideoModal from "./video/VideoModal";

const DefaultLayout = ({ children }) => {
  const { selectedProduct } = useSelector((state) => state.global);
  return (
    <div className="w-full overflow-hidden app">
      <Header />
      <>{children}</>
      <NewsLetter />
      <VideoModal />
      <QuickView item={selectedProduct} />
      <BackTop />
      <Footer />
    </div>
  );
};
export default DefaultLayout;
