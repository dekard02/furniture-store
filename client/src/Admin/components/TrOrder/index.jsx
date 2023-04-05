import Tippy from "@tippyjs/react";
import { useNavigate } from "react-router-dom";
import { formatNameProduct as formatName } from "../../utils/formatNameProduct";
import { useRef } from "react";
import { useContextLoading } from "../../context/loadingContext";
import { UpdateOder } from "../../hook/useOrder";
function TrOder({ data: val, tick, handelTick, page }) {
    const navigate = useNavigate();
    const orderRef = useRef();
    const fullName = formatName(val?.fullName);
    const { setIsLoading } = useContextLoading();
    const handelUpdateStatus = async (id, status) => {
        setIsLoading(true);
        await UpdateOder(id, status);
        setIsLoading(false);
        navigate(0);
    };
    return (
        <tr ref={orderRef} className="bg-gray-800 mt-2">
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <input
                    checked={tick}
                    type="checkbox"
                    onChange={() => handelTick(val?._id)}
                />
            </td>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                    src={val?.user?.image}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                />
                <Tippy content={fullName}>
                    <span className="ml-3 font-bold text-white">
                        {fullName}
                    </span>
                </Tippy>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {val?.phoneNumber}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <Tippy content={val?.address} interactive>
                    <p
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            width: "200px",
                        }}
                    >
                        {val?.address}
                    </p>
                </Tippy>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <button
                    className="py-3 px-5 bg-green-500 rounded-[5px]"
                    onClick={() => handelUpdateStatus(val?._id, "SUCCESS")}
                >
                    Accept
                </button>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <button
                    className="py-3 px-5 bg-orange-500 rounded-[5px]"
                    onClick={() => handelUpdateStatus(val?._id, "CANCELED")}
                >
                    Cancel
                </button>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                    <a
                        href={`/admin/order-detail/${val?._id}`}
                        className="bg-slate-700 rounded-[10px] px-3 py-[2px] cursor-pointer"
                    >
                        👁️‍🗨️
                    </a>
                </div>
            </td>
        </tr>
    );
}

export default TrOder;
