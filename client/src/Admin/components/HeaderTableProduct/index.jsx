import { UseDarkModeContext } from "../../context/darkMode";

export default function HeaderTableProduct({ data, handeTickAll, isAll }) {
    const { darkMode } = UseDarkModeContext();
    return (
        <thead className={`${darkMode ? "dark" : "bg-gray-800"}`}>
            <tr>
                {data.map((val) => (
                    <th
                        key={val}
                        className="px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 border-transparent whitespace-nowrap font-semibold text-left   "
                    >
                        {val !== "Tick" ? (
                            val
                        ) : (
                            <input
                                type="checkbox"
                                checked={isAll}
                                onChange={
                                    val === data[0] ? handeTickAll : () => {}
                                }
                            />
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
