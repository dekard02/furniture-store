import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import productApi from "../../service/productApi";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingSkeleton } from "../../store/global/globalSlice";
import useDebounce from "../../hooks/useDebounce";
import Swal from "sweetalert2";
const Products = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lt: 0,
  });
  console.log(data);
  const debounced = useDebounce(searchValue, 600);
  const dispatch = useDispatch();
  const [filters, setFilter] = useState({
    sort: "price",
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
  const handleSortChange = (type) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      sort: type,
    }));
  };
  const handlePriceChange = (e) => {
    const { name, value } = e.target;

    setValues((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (
      +values.salePrice_lt <= +values.salePrice_gte ||
      +values.salePrice_lt < 539000
    ) {
      Swal.fire({
        text: "Không tìm thấy sản phẩm ở khoảng giá phù hợp!",
        icon: "error",
      });
    } else {
      setFilter((prevFilters) => ({
        ...prevFilters,
        "price[gte]": values.salePrice_gte,
        "price[lt]": values.salePrice_lt,
      }));
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="products-page">
      <BreadCrumb heading="Shop Left" title="Home - Shop Left Sidebar" />
      <ProductsSection
        searchValue={searchValue}
        onChange={setSearchValue}
        handlePageChange={handlePageChange}
        data={data}
        pagination={pagination}
        onSortChange={handleSortChange}
        filters={filters}
        values={values}
        onSalePriceChange={handlePriceChange}
        onSubmitValue={handleSubmit}
      />
    </div>
  );
};

export default Products;
