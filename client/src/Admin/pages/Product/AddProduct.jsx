import Input from "../../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Select from "../../components/Select";
import ChooseImg from "../../components/ChooseImg";
import { useState } from "react";
import { UseAddProduct } from "../../hook/useProduct";
import { formData } from "../../utils/formData";
import { UseDarkModeContext } from "../../context/darkMode";
export default function AddProduct() {
    const { darkMode } = UseDarkModeContext();
    const navigage = useNavigate();
    const [select, setSelect] = useState();
    const [img, setImg] = useState([]);
    const [file, setFile] = useState([]);
    const category = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: "",
            inStock: "",
            ratingsAverage: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Name should more than 3 characters")
                .max(100, "Name must be 20 characters or less")
                .required("Name is required"),
            description: Yup.string()
                .min(30, "Description should more than 30 characters")
                .required("Description is required"),
            price: Yup.number()
                .min(0, "Price should greated 0")
                .required("Price is required"),
            inStock: Yup.number()
                .min(0, "Quantity should greated 0")
                .required("Quantity is required"),
            ratingsAverage: Yup.number().min(1, "Rating should greated 1"),
        }),
        onSubmit: async (values) => {
            if (!select || select.length === 0 || !img || img.length === 0) {
                return;
            }
            const { name, price, description, inStock } = values;
            const form = new FormData();
            const categories = select.map((val) => val._id);

            const payload = formData(form, {
                categories,
                name,
                price,
                description,
                inStock,
                file,
            });
            await UseAddProduct(payload);
            navigage("/admin/product");
        },
        validateOnBlur: false,
        validateOnChange: false,
    });
    return (
        <div
            className={` ${
                darkMode ? "dark_soft" : "bg-white"
            } shadow-md px-5 py-5`}
        >
            <h4 className="mb-5 font-semibold text-[20px]">Add Category</h4>
            <form
                className="text-center"
                onSubmit={category.handleSubmit}
                encType="multipart/form-data"
            >
                <Input
                    id="name"
                    data={category.values.name}
                    setData={category.handleChange}
                    label="Name"
                    placeholder="Please provide name product"
                    error={category.errors.name}
                />
                <Input
                    id="description"
                    data={category.values.description}
                    setData={category.handleChange}
                    label="Description"
                    placeholder="Please provide description product"
                    error={category.errors.description}
                />
                <Input
                    id="price"
                    data={category.values.price}
                    setData={category.handleChange}
                    label="Price"
                    placeholder="Please provide price product"
                    error={category.errors.price}
                />
                <Input
                    id="inStock"
                    data={category.values.inStock}
                    setData={category.handleChange}
                    label="Quantity"
                    placeholder="Please provide quantity product"
                    error={category.errors.inStock}
                />
                <Input
                    id="ratingsAverage"
                    data={category.values.ratingsAverage}
                    setData={category.handleChange}
                    label="Ratings Average"
                    placeholder="Please provide quantity ratings"
                    error={category.errors.ratingsAverage}
                />
                <Select label="" select={select} setSelect={setSelect} />
                <ChooseImg
                    img={img}
                    setImg={setImg}
                    file={file}
                    setFile={setFile}
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-10 py-2  rounded-[2px] mt-7"
                >
                    👌 Add Product
                </button>
            </form>
        </div>
    );
}
