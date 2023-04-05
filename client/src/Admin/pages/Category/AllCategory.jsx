import ItemCategory from "../../components/ItemCategory";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AddCategory from "./AddCategory";
import Paginate from "../../components/Paginate";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCategory } from "../../hook/useCategory";
import { UseDarkModeContext } from "../../context/darkMode";
export default function AllCategory() {
    const [render, setRender] = useState(true);
    const { search } = useLocation();
    const [data, setData] = useState(null);
    const { darkMode } = UseDarkModeContext();
    useEffect(() => {
        const handelGetData = async () => {
            const categories = await GetCategory(search.split("=")[1]);
            setData(categories);
        };
        handelGetData();
    }, [render, search]);
    return (
        <div className="flex flex-col  ">
            <AddCategory setRender={setRender} />
            <div
                className={`${
                    darkMode ? "dark_soft" : "bg-white"
                } shadow-md px-5 py-5 mt-7 rounded-[15px]`}
            >
                <h4 className="font-semibold text-[20px]">All Category</h4>
                {data?.categories.map((val, index) => (
                    <ItemCategory
                        id={val._id}
                        stt={index + 1}
                        key={val._id}
                        name={val.name}
                        description={val.description}
                        setRender={setRender}
                    />
                ))}
                {data ? (
                    <></>
                ) : (
                    <Skeleton
                        count={10}
                        baseColor={`${darkMode ? "dark_soft" : "white"}`}
                    />
                )}
                <Paginate paginate={data?.page} />
            </div>
        </div>
    );
}
