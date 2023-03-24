export default function OrderDetail() {
    return (
        <div className="flex flex-col bg-white">
            <div className=" shadow-md px-5 py-5 mt-7">
                <h4 className="font-semibold text-[20px]">Product Detail</h4>
            </div>
            <div className="py-2 px-4">
                <div className="grid grid-cols-4 gap-y-4 gap-x-5">
                    <div className="flex flex-col items-start text-[#5F5F5F]">
                        <span className="mb-2 text-[15px]">Category</span>
                        <input
                            className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px]"
                            disabled
                            type="text"
                            value="test"
                            style={{ border: "1px solid #D9D9D9" }}
                        />
                    </div>
                    <div className="flex flex-col items-start text-[#5F5F5F]">
                        <span className="mb-2 text-[15px]">Name</span>
                        <input
                            className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px]"
                            disabled
                            type="text"
                            value="name test"
                            style={{ border: "1px solid #D9D9D9" }}
                        />
                    </div>
                    <div className="flex flex-col items-start text-[#5F5F5F]">
                        <span className="mb-2 text-[15px]">Name</span>
                        <input
                            className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px]"
                            disabled
                            type="text"
                            value="name test"
                            style={{ border: "1px solid #D9D9D9" }}
                        />
                    </div>
                    <div className="flex flex-col items-start text-[#5F5F5F]">
                        <span className="mb-2 text-[15px]">Name</span>
                        <input
                            className="bg-[#F5F5F1] w-full py-2 px-1 text-[14px] rounded-[5px]"
                            disabled
                            type="text"
                            value="name test"
                            style={{ border: "1px solid #D9D9D9" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
