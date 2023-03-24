import { useCategory as getCategory } from "../../hook/useCategory";

export default function Select({ data = [], change: handelChange }) {
    const categorys = getCategory();
    return (
        <>
            <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Category
            </label>
            <select
                onChange={(e) => handelChange(e.target.value)}
                value={data[0]?._id}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            >
                {categorys?.categories?.map((val) => {
                    return (
                        <option key={val?._id} value={val?._id}>
                            {val?.name}
                        </option>
                    );
                })}
            </select>
        </>
    );
}
