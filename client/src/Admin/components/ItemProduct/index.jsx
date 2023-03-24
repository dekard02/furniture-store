import TrProduct from "../TrProduct/TrProduct";
export default function ItemProduct(data = []) {
    return (
        <>
            <tbody>
                {data?.data?.products.map((val) => {
                    return (
                        <TrProduct
                            key={val._id}
                            val={val}
                            onClick={data.onClick}
                            onClickEdit={data.onClickEdit}
                        />
                    );
                })}
            </tbody>
        </>
    );
}
