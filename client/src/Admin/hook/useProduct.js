import { toast } from "react-toastify";
import { axioAuth } from "../../utils/auth";

export const getProduct = (page) => {
    const data = axioAuth
        .get("products", {
            params: {
                page: page || 1,
            },
        })
        .then((res) => res.data)
        .catch((err) => err);
    return data;
};

export const UseProductDetail = async (id) => {
    const data = await axioAuth
        .get(`products/${id}`, {})
        .then((res) => res.data)
        .catch((err) => err);
    return data;
};

export const UseEditProduct = async (values, id) => {
    await toast.promise(axioAuth.put(`products/${id}`, values), {
        pending: "Loading....",
        success: "Edit product success! 👌",
        error: "Edit product fail!  🤯",
    });
};

export const UseDeleteProduct = (id) => {
    axioAuth
        .delete(`products/${id}`)
        .then((res) => {
            toast(" Delete product success!", {
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
