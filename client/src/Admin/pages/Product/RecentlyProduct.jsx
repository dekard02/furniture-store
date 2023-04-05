import HeaderTableProduct from "../../components/HeaderTableProduct";
import { getProductDeleted } from "../../hook/useProduct";
import Paginate from "../../components/Paginate";
import Skeleton from "react-loading-skeleton";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TrRecentlyProduct from "../../components/TrRecentlyProduct";
import Wrapper from "../../components/Wrapper";

const tHead = ["Name", "Price", "Instock", "Recover"];
function RecentlyProduct() {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");
    const [data, setData] = useState(null);
    const [render, setRender] = useState(false);
    useEffect(() => {
        const handelGetProduct = async () => {
            const products = await getProductDeleted(page);
            setData(products);
        };
        handelGetProduct();
    }, [render, page]);
    return (
        <Wrapper title="Cart Table">
            <div className="block w-full overflow-x-auto ">
                <table
                    className="items-center w-full bg-transparent border-separate "
                    style={{ borderSpacing: "0 10px" }}
                >
                    <HeaderTableProduct data={tHead} />
                    <tbody>
                        {data?.products?.map((val, index) => {
                            return <TrRecentlyProduct val={val} key={index} />;
                        })}
                    </tbody>
                </table>

                {data ? (
                    <Paginate paginate={data?.page} />
                ) : (
                    <Skeleton baseColor="#1f2937" count={20} />
                )}
            </div>
        </Wrapper>
    );
}

export default RecentlyProduct;
