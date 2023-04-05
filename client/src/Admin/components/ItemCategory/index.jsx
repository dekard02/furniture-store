import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UseDeleteCategory, UseEditCategory } from "../../hook/useCategory";
import TextArea from "../TextArea";
import Swal from "sweetalert2";
import { useContextLoading } from "../../context/loadingContext";
import { UseDarkModeContext } from "../../context/darkMode";
export default function ItemCategory({
    name: title,
    description: text,
    stt,
    id,
    setRender,
}) {
    const { darkMode } = UseDarkModeContext();
    const { setIsLoading } = useContextLoading();
    const [disable, setDisable] = useState(true);
    const category = useFormik({
        initialValues: {
            name: title,
            description: text,
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
            await UseEditCategory(values, id).finally(() => {
                setIsLoading(false);
                setRender((r) => !r);
            });
        },
        validateOnBlur: false,
        validateOnChange: false,
    });
    const handelDelete = (id, title) => {
        Swal.fire({
            title: `Are you sure ${title} ?`,
            text: "You won't be able to revert this!",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                setIsLoading(true);
                await UseDeleteCategory(id).finally(() => {
                    setIsLoading(false);
                    setRender((r) => !r);
                });
            }
        });
    };
    return (
        <form className=" py-4 my-4 text-gray-500 mt-5 ">
            <h5 className="text-gray-500 text-[17px] mb-3 flex items-center">
                {`${stt}) `}
                <span onClick={() => setDisable(false)}>
                    {disable && (
                        <FiEdit className="ml-2 cursor-pointer hover:text-red-500" />
                    )}
                </span>
                <span className="flex flex-1 justify-end cursor-pointer text-red-500 text-[25px]">
                    <BsTrash onClick={() => handelDelete(id, title)} />
                </span>
            </h5>
            <input
                disabled={disable}
                id="name"
                name="name"
                type="text"
                className={`${
                    darkMode ? "dark" : "bg-[#F5F5F1]"
                } w-full outline-none p-3 py-4 mb-3 text-gray-500`}
                value={category.values.name}
                onChange={category.handleChange}
            />
            <TextArea
                values={category.values.description}
                fomikHandelChange={category.handleChange}
                id="description"
                disable={disable}
            />
            {!disable && (
                <button
                    type="submit"
                    onClick={(e) => {
                        category.handleSubmit(e);
                        setDisable(true);
                    }}
                    className="bg-green-500 text-white font-[12px] py-2 px-4 mt-2 rounded-[3px] cursor-pointer"
                >
                    Save
                </button>
            )}
        </form>
    );
}
