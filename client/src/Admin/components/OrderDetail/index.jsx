import { useParams } from "react-router-dom";
import { GetOrderDetail } from "../../hook/useOrder";
import { formatVnd } from "../../utils/formatVnd";
export default function OrderDetail() {
    const { id } = useParams();
    const data = GetOrderDetail(id);
    let total = data?.products.reduce((acc, val) => {
        return acc + val?.price * val?.amount;
    }, 0);
    if (total) {
        total = formatVnd(total?.toString());
    }
    return (
        <div className="flex flex-col bg-white">
            <h4 className="py-2 px-4 text-[30px]">Total: {total}</h4>
            <div className="py-2 px-4">
                <div className="grid grid-cols-1 gap-y-4 gap-x-5">
                    <div className="flex flex-col items-start text-[#5F5F5F]">
                        <span className="mb-2 text-[15px]">Name</span>
                        <input
                            className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px]"
                            disabled
                            type="text"
                            defaultValue={data?.fullName}
                            style={{ border: "1px solid #D9D9D9" }}
                        />
                    </div>
                    <div className="flex flex-col items-start text-[#5F5F5F]">
                        <span className="mb-2 text-[15px]">Phone number</span>
                        <input
                            className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px]"
                            disabled
                            type="text"
                            defaultValue={data?.phoneNumber}
                            style={{ border: "1px solid #D9D9D9" }}
                        />
                    </div>
                    <div className="flex flex-col items-start text-[#5F5F5F]">
                        <span className="mb-2 text-[15px]">Address</span>
                        <input
                            className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px]"
                            type="text"
                            disabled
                            defaultValue={data?.address}
                            style={{ border: "1px solid #D9D9D9" }}
                        />
                    </div>
                    <div className="flex flex-col items-start text-[#5F5F5F]">
                        <span className="mb-2 text-[15px]">Status</span>
                        <input
                            className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px]"
                            disabled
                            type="text"
                            defaultValue={data?.status}
                            style={{ border: "1px solid #D9D9D9" }}
                        />
                    </div>
                    <div className="flex flex-col items-start text-[#5F5F5F]">
                        <span className="mb-2 text-[15px]">Created At</span>
                        <input
                            className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px]"
                            disabled
                            type="text"
                            defaultValue={data?.createdAt}
                            style={{ border: "1px solid #D9D9D9" }}
                        />
                    </div>
                    {data?.products?.map((val, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-start text-[#5F5F5F]"
                            >
                                <span className="mb-2 text-[15px]">
                                    Product {index + 1}
                                </span>
                                <div
                                    className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px]
                            rounded-[5px]"
                                    style={{ border: "1px solid #D9D9D9" }}
                                >
                                    <p className="my-1">
                                        Name: {val?.product?.name}
                                    </p>
                                    <p className="my-1">
                                        Current Price: {val?.price}
                                    </p>
                                    <p className="my-1">
                                        Quantity: {val?.amount}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
