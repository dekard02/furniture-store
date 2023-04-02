import { useRef } from "react";
import { RiDeviceRecoverLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { formatNameProduct } from "../../utils/formatNameProduct";
import { formatVnd } from "../../utils/formatVnd";
import { useRecoverProduct as UseRecoverProduct } from "../../hook/useProduct";
function TrRecentlyProduct({ val }) {
    const refProduct = useRef();
    const name = formatNameProduct(val?.name);
    const coin = formatVnd(val?.price.toString());
    const handelDelete = (id, title) => {
        Swal.fire({
            title: `Are you sure recover ${title} ?`,
            text: "You won't be able to revert this!",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, recover it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await UseRecoverProduct(id);
                refProduct.current.remove();
            }
        });
    };
    return (
        <tr ref={refProduct} className="bg-gray-800 mt-2">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                    src={val.images[0]}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                />
                <span className="ml-3 font-bold text-white">{name}</span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {`${coin}đ`}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-orange-500 mr-2"></i>
                <span className="bg-green-500 rounded-[10px] px-3 py-[2px] block text-center overflow-hidden w-[50px]">
                    {val.inStock}
                </span>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <button
                    onClick={() => handelDelete(val?._id)}
                    className="py-3 px-5 bg-orange-500 rounded-[5px]"
                >
                    <RiDeviceRecoverLine />
                </button>
            </td>
        </tr>
    );
}

export default TrRecentlyProduct;
