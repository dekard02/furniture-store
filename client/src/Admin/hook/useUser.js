import { useEffect, useState } from "react";
import { axioAuth } from "../utils/auth";

export const GetUser = (active, page = 1) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const params = {
            page,
        };
        if (active) params.active = active;
        axioAuth
            .get(`users`, {
                params,
            })
            .then((res) => setData(res.data))
            .catch((err) => err);
    }, [page]);
    return data;
};
