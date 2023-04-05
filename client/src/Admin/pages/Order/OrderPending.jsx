import Skeleton from "react-loading-skeleton";
import "tippy.js/dist/tippy.css"; // optional
import { useSearchParams } from "react-router-dom";
import HeaderTableProduct from "../../components/HeaderTableProduct";
import { GetOrder } from "../../hook/useOrder";
import TrOder from "../../components/TrOrder";
import { useState } from "react";
import Paginate from "../../components/Paginate";

const tHead = [
    "Tick",
    "Cutstomer",
    "Phone number",
    "Recipient",
    "Accept",
    "Cancel",
    "Detail",
];
function OrderFulfill() {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");
    const data = GetOrder("PENDING", page);
    const [arr, setArr] = useState([]);
    const handelTick = (id) => {
        const orders = arr.includes(id)
            ? arr.filter((val) => val !== id)
            : [...arr, id];
        setArr(orders);
    };
    const handeTickAll = () => {
        const arrId =
            arr.length !== data?.orders?.length
                ? data?.orders?.map((val) => val._id)
                : [];
        setArr(arrId);
    };
    return (
        <div className="flex flex-col bg-white">
            <div className=" shadow-md px-5 py-5 mt-7">
                <h4 className="font-semibold text-[20px]">Order Fulfill</h4>
            </div>
            <section className="relative pt-5 bg-blueGray-50">
                <div className="w-full mb-12 px-4">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
                            text-white bg-gray-900"
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
                                        I'm lost for words
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto ">
                            <table
                                className="items-center w-full bg-transparent border-separate "
                                style={{ borderSpacing: "0 10px" }}
                            >
                                <HeaderTableProduct
                                    data={tHead}
                                    handeTickAll={handeTickAll}
                                    isAll={arr.length === data?.orders?.length}
                                />
                                <tbody>
                                    {data?.orders?.map((val, index) => {
                                        return (
                                            <TrOder
                                                key={index}
                                                data={val}
                                                handelTick={handelTick}
                                                tick={arr.includes(val?._id)}
                                                page={page}
                                            />
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {data ? (
                            <Paginate paginate={data?.page} />
                        ) : (
                            <Skeleton baseColor="#1f2937" count={50} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OrderFulfill;
