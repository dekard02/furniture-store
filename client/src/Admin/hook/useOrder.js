import { toast } from "react-toastify";
import { axioAuth } from "../utils/auth";
import { useEffect, useState } from "react";

export const GetOrder = (status, page = 1) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const params = {
            page,
        };
        if (status) params.status = status;
        axioAuth
            .get(`orders`, {
                params,
            })
            .then((res) => setData(res.data))
            .catch((err) => err);
    }, [page]);
    return data;
};

export const GetOrderDetail = (id) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axioAuth
            .get(`orders/${id}`)
            .then((res) => setData(res.data.order))
            .catch((err) => err);
    }, []);
    return data;
};

export const UpdateOder = async (id, status) => {
    await toast.promise(
        axioAuth.put(`orders/${id}`, {
            status,
        }),
        {
            pending: "Loading....",
            success: "Edit category success! 👌",
            error: "Edit category fail!  🤯",
        }
    );
};
