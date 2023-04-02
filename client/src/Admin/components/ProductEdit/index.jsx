import InputDetail from "../InputDetail";
import Modal from "../Modal";
import { useFormik } from "formik";
import * as Yub from "yup";
import TextArea from "../TextArea";
import { useEffect, useState } from "react";
import Select from "../Select";
import { UseEditProduct } from "../../hook/useProduct";
import ChooseImg from "../ChooseImg";
import { formData } from "../../utils/formData";
import { useContextLoading } from "../../context/loadingContext";
function ProductEdit({ data, render, get, isOpen, setIsOpen }) {
    const { setIsLoading } = useContextLoading();
    const [img, setImg] = useState([]);
    const [select, setSelect] = useState(data?.categories);
    const [file, setFile] = useState([]);
    const [deleteImg, setDeleteImg] = useState([]);
    const handelSubmit = async () => {
        const { name, price, inStock, description } = formik.values;
        if (!select || select.length === 0) {
            return;
        }
        if (formik.errors === {}) {
            return;
        }
        const categories = select.map((val) => val._id);
        const form = new FormData();
        const payload = formData(form, {
            name,
            price,
            inStock,
            description,
            categories,
            deleteImg,
            file,
        });
        try {
            setIsLoading(true);
            setIsOpen(false);
            await UseEditProduct(payload, data._id);
        } catch (error) {
            console.log(error);
        } finally {
            get(!render);
            setFile([]);
            setDeleteImg([]);
            setIsLoading(false);
        }
    };
    const formik = useFormik({
        initialValues: {
            name: data?.name,
            price: data?.price,
            inStock: data?.inStock,
            description: data?.description,
        },
        validationSchema: Yub.object({
            name: Yub.string()
                .min(10, "Name product should more than 10 character")
                .max(50, "Name product maximum 50 character")
                .required("Please provide name product"),
            price: Yub.number().min(0).required("Please provide price product"),
            inStock: Yub.number().required("Please provide quantity product"),
        }),
        onsubmit: async (values) => {},
        enableReinitialize: true,
    });
    useEffect(() => {
        setImg(data?.images);
        setSelect(data?.categories);
    }, [isOpen]);
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <h4 className="text-gray-600 text-[20px] flex items-center">
                Detail
            </h4>
            <Select select={select} setSelect={setSelect} />
            <div className="grid grid-cols-3 gap-y-4 gap-x-5 my-5">
                <InputDetail
                    disabled={false}
                    change={true}
                    title="Name"
                    id="name"
                    setData={formik.handleChange}
                    value={formik.values.name || ""}
                />
                <InputDetail
                    disabled={false}
                    change={true}
                    id="price"
                    setData={formik.handleChange}
                    title="Price"
                    value={formik.values.price ?? ""}
                />
                <InputDetail
                    disabled={false}
                    change={true}
                    id="inStock"
                    setData={formik.handleChange}
                    title="Quantity"
                    value={formik.values.inStock ?? ""}
                />
                <InputDetail title="Rating" value={data?.ratingsAverage} />
                <InputDetail title="Created At" value={data?.createdAt} />
                <InputDetail title="Updated At" value={data?.updatedAt} />
            </div>
            <TextArea
                values={data?.description || ""}
                id="description"
                fomikHandelChange={formik.handleChange}
            />
            <ChooseImg
                img={img}
                setImg={setImg}
                alt="Product"
                setFile={setFile}
                file={file}
                deleteImg={deleteImg}
                setDeleteImg={setDeleteImg}
            />
            <button
                type="submit"
                onClick={() => handelSubmit()}
                className="bg-green-400 rounded-[5px] px-10 py-2 text-[14px] text-white mt-5"
            >
                Save
            </button>
        </Modal>
    );
}

export default ProductEdit;
