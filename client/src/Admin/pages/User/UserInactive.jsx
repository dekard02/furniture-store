import Skeleton from "react-loading-skeleton";
import "tippy.js/dist/tippy.css"; // optional
import { useSearchParams } from "react-router-dom";
import HeaderTableProduct from "../../components/HeaderTableProduct";
import TrUser from "../../components/TrUser";
import Paginate from "../../components/Paginate";
import { GetUser } from "../../hook/useUser";

const tHead = ["Name", "Emai", "Role", "Status"];
function UserInActive() {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") ?? 1;
    const status = searchParams.get("status") ?? "false";
    const data = GetUser(status, page);
    return (
        <div className="flex flex-col bg-white">
            <div className=" shadow-md px-5 py-5 mt-7">
                <h4 className="font-semibold text-[20px]">All Order </h4>
            </div>
            <section className="relative pt-5 bg-blueGray-50">
                <div className="w-full mb-12 px-4">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
                            text-white bg-gray-900"
                    >
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
                                    <h3 className="font-semibold text-lg text-white">
                                        Card Tables
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto ">
                            <table
                                className="items-center w-full bg-transparent border-separate "
                                style={{ borderSpacing: "0 10px" }}
                            >
                                <HeaderTableProduct data={tHead} />
                                <tbody>
                                    {data?.users.map((val, index) => {
                                        return (
                                            <TrUser
                                                data={val}
                                                key={index}
                                                page={page}
                                            />
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {data ? (
                            <Paginate paginate={data?.page} />
                        ) : (
                            <Skeleton baseColor="#1f2937" count={50} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UserInActive;
