import Tippy from "@tippyjs/react";
import { formatNameProduct as formatName } from "../../utils/formatNameProduct";
const colors = {
    CUSTOMER: "green",
    STAFF: "orange",
    MANAGER: "red",
};
function TrUser({ data: val }) {
    const fullName = formatName(val?.fullName);
    const color = (status) => {
        return colors[status];
    };
    return (
        <tr className="bg-gray-800 mt-2">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                    src={val?.image}
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
                <Tippy content={val?.email} interactive>
                    <p
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            width: "200px",
                        }}
                    >
                        {val?.email}
                    </p>
                </Tippy>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <button
                    className={`py-3 px-5 rounded-[5px] bg-${color(
                        val?.role
                    )}-500`}
                >
                    {val?.role}
                </button>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <button
                    className={`py-3 px-5 rounded-[5px] bg-${
                        val?.active ? "green" : "red"
                    }-500`}
                >
                    {val?.active ? "Active" : "InActive"}
                </button>
            </td>
        </tr>
    );
}

export default TrUser;
