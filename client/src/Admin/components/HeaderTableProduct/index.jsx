import React from "react";

export default function HeaderTableProduct({ data }) {
    return (
        <thead className="bg-gray-800">
            <tr>
                {data.map((val) => (
                    <th
                        key={val}
                        className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 border-transparent whitespace-nowrap font-semibold text-left   "
                    >
                        {val}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
