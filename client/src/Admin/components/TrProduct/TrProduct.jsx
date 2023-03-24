import { useRef } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { formatVnd } from "../../utils/formatVnd";
import { formatNameProduct } from "../../utils/formatNameProduct";
import { UseDeleteProduct } from "../../hook/useProduct";
import Swal from "sweetalert2";
function TrProduct({ val, onClick, onClickEdit }) {
    const refProduct = useRef();
    const name = formatNameProduct(val.name);
    const coin = formatVnd(val?.price.toString());
    const handelDelete = (id, title) => {
        Swal.fire({
            title: `Are you sure delete ${title} ?`,
            text: "You won't be able to revert this!",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                UseDeleteProduct(id);
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
                    onClick={() => {
                        onClickEdit(val._id);
                    }}
                    className="py-3 px-5 bg-orange-400 rounded-[5px]"
                >
                    <AiOutlineEdit />
                </button>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <button
                    onClick={() => handelDelete(val._id, name)}
                    className="py-3 px-5 bg-red-500 rounded-[5px]"
                >
                    <BsTrash />
                </button>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                    <p
                        onClick={() => onClick(val._id)}
                        className="bg-slate-700 rounded-[10px] px-3 py-[2px] cursor-pointer"
                    >
                        👁️‍🗨️
                    </p>
                </div>
            </td>
        </tr>
    );
}

export default TrProduct;
