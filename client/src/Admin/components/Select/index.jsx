import { HiXMark } from "react-icons/hi2";
import { useCategory as getCategory } from "../../hook/useCategory";
import { useState } from "react";

export default function Select({ select = [], label = "Category", setSelect }) {
    const [key, setKey] = useState(1);
    const categorys = getCategory();
    const handelChange = async (value) => {
        if (+value === -1) {
            return;
        }
        const values = JSON.parse(value);
        const isChange = select.some((val) => val._id === values._id);
        if (!isChange) {
            setSelect([...select, JSON.parse(value)]);
        }
    };
    const handelRemove = (id) => {
        const values = select.filter((val) => val._id !== id);
        setSelect(values);
    };
    return (
        <>
            <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <div className="bg-[#F5F5F1]  flex flex-wrap cursor-pointer mb-3">
                {select?.map((val, index) => {
                    return (
                        <p
                            onClick={() => handelRemove(val._id)}
                            key={index}
                            className="text-[12px] bg-white my-1 mx-1 px-3 py-1 rounded-[30px] text-black flex items-center"
                        >
                            {val.name}
                            <HiXMark className="ml-[5px] " />
                        </p>
                    );
                })}
            </div>
            <select
                key={key}
                onChange={(e) => {
                    handelChange(e.target.value);
                    setKey((key) => key + 1);
                }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            >
                <option value={-1}>---Choose Category---</option>
                {categorys?.categories?.map((val) => {
                    return (
                        <option key={val?._id} value={JSON.stringify(val)}>
                            {val?.name}
                        </option>
                    );
                })}
            </select>
        </>
    );
}
