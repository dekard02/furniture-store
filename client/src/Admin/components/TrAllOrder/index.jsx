import Tippy from "@tippyjs/react";
import { useNavigate } from "react-router-dom";
import { formatNameProduct as formatName } from "../../utils/formatNameProduct";
import { formatVnd } from "../../utils/formatVnd";
const colors = {
    PENDING: "orange",
    SUCCESS: "green",
    CANCELED: "red",
    SHIPPING: "blue",
};
function TrOder({ data: val }) {
    const navigate = useNavigate();
    const fullName = formatName(val?.fullName);
    const status = formatName(val?.status);
    let total = val?.products.reduce((acc, val) => {
        return acc + val?.price * val?.amount;
    }, 0);
    if (total) total = formatVnd(total?.toString());
    const color = (status) => {
        return colors[status];
    };

    return (
        <tr className="bg-gray-800 mt-2">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                    src={val?.user?.image}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                />
                <Tippy content={fullName}>
                    <span className="ml-3 font-bold text-white ">
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
                    className={`py-3 px-5 bg-${color(
                        val?.status
                    )}-500 rounded-[5px]`}
                >
                    {status}
                </button>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {total}
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
