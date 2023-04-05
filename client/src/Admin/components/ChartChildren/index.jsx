import { UseDarkModeContext } from "../../context/darkMode";

function ChartChildren({ bg, count, label, percen = 10 }) {
    const { darkMode } = UseDarkModeContext();
    return (
        <div
            className={`${
                darkMode ? "dark_soft" : "ligth"
            } rounded-[15px] py-2 relative `}
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }}
        >
            <div className="px-2 py-10">
                <div
                    className={`
                    top-[5px] bg-clip-border mx-4 rounded-xl overflow-hidden ${bg} text-white shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center
                `}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6 text-white"
                    >
                        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                        <path
                            fillRule="evenodd"
                            d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                            clipRule="evenodd"
                        ></path>
                        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                    </svg>
                </div>
                <div className="absolute right-5 top-3 flex flex-col items-end">
                    <p className="text-[15px] mb-2">{label}</p>
                    <h3 className="text-[20px] font-bold">{count}</h3>
                </div>
            </div>
            <div className="border-t border-blue-gray-50 p-4">
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong className="text-green-500">{percen}%</strong>
                    &nbsp;than last week
                </p>
            </div>
        </div>
    );
}

export default ChartChildren;
