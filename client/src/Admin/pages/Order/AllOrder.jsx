import "tippy.js/dist/tippy.css"; // optional
import { useSearchParams, useNavigate } from "react-router-dom";
import HeaderTableProduct from "../../components/HeaderTableProduct";
import { GetOrder } from "../../hook/useOrder";
import TrAllOrder from "../../components/TrAllOrder";
import Paginate from "../../components/Paginate";

const tHead = [
    "Cutstomer",
    "Phone number",
    "Recipient",
    "Status",
    "Total",
    "Detail",
];
function AllOrder() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") ?? 1;
    const status = searchParams.get("status") ?? "";
    const data = GetOrder(status, page);
    const handelChange = async (e) => {
        navigate(`/admin/order-all?page=${1}&status=${e.target.value}`);
        navigate(0);
    };
    return (
        <div className="flex flex-col bg-white">
            <div className=" shadow-md px-5 py-5 mt-7">
                <h4 className="font-semibold text-[20px]">All Order </h4>
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
                                    <select
                                        name=""
                                        id=""
                                        className="text-black"
                                        onChange={handelChange}
                                        value={status}
                                    >
                                        <option value="">All</option>
                                        <option value="SUCCESS">Success</option>
                                        <option value="PENDING">Pending</option>
                                        <option value="SHIPPING">
                                            Shipping
                                        </option>
                                        <option value="CANCELED">
                                            Canceled
                                        </option>
                                    </select>
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
                                    {data?.orders?.map((val, index) => {
                                        return (
                                            <TrAllOrder
                                                key={index}
                                                data={val}
                                                page={page}
                                            />
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Paginate paginate={data?.page} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AllOrder;
