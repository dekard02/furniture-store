import InputDetail from "../InputDetail";
import Modal from "../Modal";
import { memo } from "react";
function ProductDetail({ data, isOpen, setIsOpen }) {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <h4 className="text-gray-600 text-[20px] flex items-center">
                Detail
            </h4>
            <p className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px] block mt-4 text-[#5F5F5F]">
                Category:{" "}
                {data?.categories.map((val, index) => (
                    <span key={index}>{`${
                        val.length !== index + 1 ? val?.name + ", " : val?.name
                    }`}</span>
                ))}
            </p>
            <div className="grid grid-cols-3 gap-y-4 gap-x-5 mt-5">
                <InputDetail title="Name" value={data?.name} />
                <InputDetail title="Price" value={data?.price} />
                <InputDetail title="Quantity" value={data?.inStock} />
                <InputDetail title="Rating" value={data?.ratingsAverage} />
                <InputDetail title="Created At" value={data?.createdAt} />
                <InputDetail title="Updated At" value={data?.updatedAt} />
            </div>
            <p className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px] block mt-4 text-[#5F5F5F]">
                {data?.description}
            </p>
            <div className="grid grid-cols-6 gap-4 mt-3 pt-2 pb-5 bg-[#F5F5F1]">
                {data?.images.map((val, index) => {
                    return (
                        <div
                            key={index}
                            className=" overflow-hidden"
                            style={{ border: "1px solid gray" }}
                        >
                            <img
                                className="w-[100%] h-[100%] object-cover"
                                src={val}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </Modal>
    );
}

export default memo(ProductDetail);
