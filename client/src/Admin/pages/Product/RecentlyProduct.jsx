import HeaderTableProduct from "../../components/HeaderTableProduct";
import { getProductDeleted } from "../../hook/useProduct";
import Paginate from "../../components/Paginate";
import Skeleton from "react-loading-skeleton";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TrRecentlyProduct from "../../components/TrRecentlyProduct";

const tHead = ["name", "price", "inStock", "Recover"];
function RecentlyProduct() {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");
    const [data, setData] = useState(null);
    const [render, setRender] = useState(false);
    useEffect(() => {
        const handelGetProduct = async () => {
            const products = await getProductDeleted(page);
            setData(products);
        };
        handelGetProduct();
    }, [render, page]);
    console.log(data);
    return (
        <div className="flex flex-col bg-white">
            <div className=" shadow-md px-5 py-5 mt-7">
                <h4 className="font-semibold text-[20px]">Recently Product</h4>
            </div>
            <section className="relative pt-5 bg-blueGray-50">
                <div className="w-full mb-12 px-4">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
                        text-white bg-gray-900"
                    >
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                    <h3 className="font-semibold text-lg text-white">
                                        Card Tables
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto ">
                            <table
                                className="items-center w-full bg-transparent border-separate "
                                style={{ borderSpacing: "0 10px" }}
                            >
                                <HeaderTableProduct data={tHead} />
                                <tbody>
                                    {data?.products?.map((val, index) => {
                                        console.log(val);
                                        return (
                                            <TrRecentlyProduct
                                                val={val}
                                                key={index}
                                            />
                                        );
                                    })}
                                </tbody>
                            </table>

                            {data ? (
                                <Paginate paginate={data?.page} />
                            ) : (
                                <Skeleton baseColor="#1f2937" count={20} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RecentlyProduct;
