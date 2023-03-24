import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import productApi from "../../service/productApi";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingSkeleton } from "../../store/global/globalSlice";
import useDebounce from "../../hooks/useDebounce";
const Products = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const debounced = useDebounce(searchValue, 600);
  const dispatch = useDispatch();
  const [filters, setFilter] = useState({
    page: 1,
    perPage: 6,
  });
  const [pagination, setPagination] = useState({
    current: 1,
    tolalPages: 3,
  });
  useEffect(() => {
    document.title = "Sản phẩm";
    const fetchProducts = async () => {
      try {
        dispatch(setLoadingSkeleton(true));

        if (!debounced) {
          const res = await productApi.getAllProduct(filters);
          if (res.page) {
            const { page } = res;
            setPagination({
              current: page.current,
              tolalPages: page.tolalPages,
            });
          }
          setData(res.products);
        } else {
          const res = await productApi.searchProduct(debounced);
          if (res.page) {
            const { page } = res;
            setPagination({
              current: page.current,
              tolalPages: page.tolalPages,
            });
          }
          setData(res.products);
        }
        dispatch(setLoadingSkeleton(false));
      } catch (error) {
        dispatch(setLoadingSkeleton(false));
        console.log(error);
      }
    };
    fetchProducts();
  }, [debounced, filters]);
  useEffect(() => {}, [filters]);
  const handlePageChange = (e, page) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      page: page,
    }));
  };
  return (
    <div className="products-page">
      <BreadCrumb heading="Shop Left" title="Home - Shop Left Sidebar" />
      <ProductsSection
        searchValue={searchValue}
        setFilterChange={setSearchValue}
        handlePageChange={handlePageChange}
        data={data}
        pagination={pagination}
      />
    </div>
  );
};

export default Products;
