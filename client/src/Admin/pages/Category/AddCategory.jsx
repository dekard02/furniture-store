import React from "react";
import Input from "../../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UseAddCategory } from "../../hook/useCategory";
import "react-toastify/dist/ReactToastify.css";
import { useContextLoading } from "../../context/loadingContext";
import { UseDarkModeContext } from "../../context/darkMode";
export default function AddCategory({ setRender }) {
    const { setIsLoading } = useContextLoading();
    const { darkMode } = UseDarkModeContext();
    const category = useFormik({
        initialValues: {
            name: "",
            description: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Name should more than 3 characters")
                .max(20, "Name must be 20 characters or less")
                .required("Name is required"),
            description: Yup.string()
                .min(30, "Name should more than 30 characters")
                .required("Description is required"),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
            await UseAddCategory(values).finally(() => {
                setIsLoading(false);
                setRender((r) => !r);
            });
        },
        validateOnBlur: false,
        validateOnChange: false,
    });
    return (
        <div
            className={`${
                darkMode ? "dark_soft" : "bg-white"
            } px-5 py-5 rounded-[15px]`}
        >
            <h4 className="mb-5 font-semibold text-[20px]">Add Category</h4>
            <form className="text-center" onSubmit={category.handleSubmit}>
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
                <button
                    type="submit"
                    className="bg-green-500 text-white px-10 py-2  rounded-[2px] mt-7"
                >
                    👌 Add Category
                </button>
            </form>
        </div>
    );
}
