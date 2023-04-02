import ItemCategory from "../../components/ItemCategory";
import { useCategory } from "../../hook/useCategory";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AddCategory from "./AddCategory";
import Paginate from "../../components/Paginate";
import { useLocation } from "react-router-dom";
export default function AllCategory() {
    const { search } = useLocation();
    const data = useCategory(search.split("=")[1]);

    return (
        <div className="flex flex-col ">
            <AddCategory />
            <div className="bg-white shadow-md px-5 py-5 mt-7 rounded-[15px]">
                <h4 className="font-semibold text-[20px]">All Category</h4>
                {data?.categories.map((val, index) => (
                    <ItemCategory
                        id={val._id}
                        stt={index + 1}
                        key={val._id}
                        name={val.name}
                        description={val.description}
                    />
                ))}
                {data ? <></> : <Skeleton count={10} />}
                <Paginate paginate={data?.page} />
            </div>
        </div>
    );
}
