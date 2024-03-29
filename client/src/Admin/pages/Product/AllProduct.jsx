import React, { useEffect, useState } from "react";
import ItemProduct from "../../components/ItemProduct";
import HeaderTableProduct from "../../components/HeaderTableProduct";
import { getProduct, UseProductDetail } from "../../hook/useProduct";
import Paginate from "../../components/Paginate";
import Skeleton from "react-loading-skeleton";
import ProductDetail from "../../components/ProductDetail";
import { useSearchParams } from "react-router-dom";
import ProductEdit from "../../components/ProductEdit";
import { useContextLoading } from "../../context/loadingContext";
import { UseDarkModeContext } from "../../context/darkMode";
const tHead = ["Name", "Price", "InStock", "Edit", "Delete", "Detail"];
export default function AllProduct() {
    const { darkMode } = UseDarkModeContext();
    const { setIsLoading } = useContextLoading();
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");
    const [data, setData] = useState(null);
    const [detail, setDetail] = useState(null);
    const [render, setRender] = useState(false);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const handelDetail = async (id) => {
        setIsLoading(true);
        const values = await UseProductDetail(id);
        setDetail(values?.product);
        setIsLoading(false);
        setIsOpenDetail(true);
    };
    const handelEdit = async (id) => {
        setIsLoading(true);
        const values = await UseProductDetail(id);
        setDetail(values?.product);
        setIsLoading(false);
        setIsOpenEdit(true);
    };
    useEffect(() => {
        const handelGetProduct = async () => {
            const products = await getProduct(page);
            setData(products);
        };
        handelGetProduct();
    }, [render, page]);
    return (
        <div
            className={`${darkMode ? "dark_soft" : "bg-white"} flex flex-col `}
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }}
        >
            <section className="relative pt-5 bg-blueGray-50">
                <div className="w-full mb-5 px-4">
                    <div
                        className={`${
                            darkMode ? "dark_soft" : "bg-gray-900"
                        } relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
                        text-white`}
                    >
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
                                    <h3 className="font-semibold text-lg text-white">
                                        Card Tables
                                    </h3>
                                    <a
                                        href="add-product"
                                        className=" bg-green-500 rounded-md py-1 px-3 text-[14px] text-white"
                                    >
                                        Add Product
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto ">
                            <table
                                className="items-center w-full bg-transparent border-separate "
                                style={{ borderSpacing: "0 10px" }}
                            >
                                <HeaderTableProduct data={tHead} />
                                <ItemProduct
                                    onClick={handelDetail}
                                    onClickEdit={handelEdit}
                                    data={data}
                                />
                            </table>

                            {data ? (
                                <Paginate paginate={data?.page} />
                            ) : (
                                <Skeleton baseColor="#1f2937" count={20} />
                            )}

                            <ProductDetail
                                isOpen={isOpenDetail}
                                setIsOpen={setIsOpenDetail}
                                data={detail}
                            />
                            <ProductEdit
                                isOpen={isOpenEdit}
                                setIsOpen={setIsOpenEdit}
                                data={detail}
                                get={setRender}
                                render={render}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
