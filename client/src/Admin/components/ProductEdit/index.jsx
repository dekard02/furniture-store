import { toast } from "react-toastify";
import { HiXMark } from "react-icons/hi2";
import InputDetail from "../InputDetail";
import Modal from "../Modal";
import { useFormik } from "formik";
import * as Yub from "yup";
import TextArea from "../TextArea";
import { useEffect, useState } from "react";
import Select from "../Select";
import { UseEditProduct } from "../../hook/useProduct";
function ProductEdit({ data, render, get, isOpen, setIsOpen }) {
    const [img, setImg] = useState([]);
    const [select, setSelect] = useState();
    const handelChange = (e) => {
        if (
            window.File &&
            window.FileReader &&
            window.FileList &&
            window.Blob
        ) {
            const data = Object.keys(e.target.files);

            const check = data.every((val) =>
                /(\.|\/)(gif|jpe?g|png)$/i.test(e.target.files[val].type)
            );
            if (!check) {
                toast.error("File invalid. Please choose correct file!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
                return null;
            }
            let arr = [];
            data.forEach((val) => {
                const file = e.target.files[val];
                const reader = new FileReader();
                reader.onload = function (event) {
                    arr = [...arr, event.target.result];
                };
                reader.onloadend = function () {
                    console.log([...img, ...arr]);
                    setImg([...img, ...arr]);
                };
                reader.readAsDataURL(file);
            });
        } else {
            toast.error("File invalid. Please choose correct file!", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
            });
        }
    };
    const handelDeleteImage = (id) => {
        const clear = img.filter((val) => val !== id);
        setImg(clear);
    };
    const handelSelect = async (id) => {
        setSelect(id);
    };
    const handelSubmit = () => {
        if (formik.errors === {}) {
            console.log(formik.errors);
            return;
        }
        const categories = select && {
            categories: [
                {
                    _id: select,
                },
            ],
        };
        const product = Object.assign({}, formik.values, categories);
        UseEditProduct(product, data._id);
        setIsOpen(false);
        get(!render);
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
        onsubmit: async (values) => {
            try {
                alert(JSON.stringify(values, null, 2));
            } catch (error) {
                console.log(123);
            }
        },
        enableReinitialize: true,
    });
    useEffect(() => {
        setImg(data?.images);
    }, [isOpen]);
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <h4 className="text-gray-600 text-[20px] flex items-center">
                Detail
            </h4>
            <Select data={data?.categories} change={handelSelect} />
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
            <div className="grid grid-cols-6 gap-4 mt-3 pt-2 bg-[#F5F5F1]">
                {img?.map((val, index) => {
                    return (
                        <div
                            key={index}
                            className=" overflow-hidden relative"
                            style={{ border: "1px solid gray" }}
                        >
                            <img
                                className="w-[100%] h-[100%] object-cover"
                                src={val}
                                alt="Product"
                            />
                            <span
                                onClick={() => handelDeleteImage(val)}
                                className="absolute right-1 top-1 text-[20px] text-black cursor-pointer"
                            >
                                <HiXMark />
                            </span>
                        </div>
                    );
                })}
            </div>
            <input type="file" multiple onChange={handelChange} />
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
