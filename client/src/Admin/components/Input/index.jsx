import React from "react";

export default function Input(props) {
    const {
        setData,
        label,
        id,
        data,
        placeholder,
        type = "text",
        error,
    } = props;
    return (
        <div className="flex  mt-5">
            <label
                className="text-[15px] font-semibold text-gray-500 w-[150px] mt-2"
                htmlFor={id}
            >
                {label}
            </label>
            <div className="flex flex-col flex-1 items-start">
                <input
                    className="flex-1 py-[6px] px-3 outline-none text-[14px] text-gray-600 border border-gray-300 w-[100%]"
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={data}
                    onChange={setData}
                />
                <span className="text-red-600 text-[14px]  h-[22px]">
                    {error || ""}
                </span>
            </div>
        </div>
    );
}
