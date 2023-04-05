import { useEffect, useState } from "react";
import { axioAuth } from "../utils/auth";
import { toast } from "react-toastify";

export const GetCategory = async (page) => {
    const data = axioAuth
        .get("categories", {
            params: {
                page: page || 1,
            },
        })
        .then((res) => res.data)
        .catch((err) => err);
    return data;
};
export const GetCategorySimple = (page) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axioAuth
            .get("categories", {
                params: {
                    page: page || 1,
                },
            })
            .then((res) => setData(res.data))
            .catch((err) => err);
    }, []);
    return data;
};

export const UseAddCategory = async (values) => {
    await axioAuth
        .post("categories", values)
        .then((res) => {
            toast(" Add category success!", {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                draggable: true,
                type: "success",
            });
        })
        .catch((err) => {
            toast(err.response.data.message.split(":")[2], {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                draggable: true,
                type: "error",
            });
        });
};

export const UseEditCategory = async (values, id) => {
    await toast.promise(axioAuth.put(`categories/${id}`, values), {
        pending: "Loading....",
        success: "Edit category success! 👌",
        error: "Edit category fail!  🤯",
    });
};

export const UseDeleteCategory = async (id) => {
    await axioAuth
        .delete(`categories/${id}`)
        .then((res) => {
            toast(" Delete category success!", {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                draggable: true,
                type: "success",
            });
        })
        .catch((err) => {
            toast(err.response.data.message.split(":")[2], {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                draggable: true,
                type: "error",
            });
        });
};
