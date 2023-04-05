import { useEffect, useState } from "react";
import { axioAuth } from "../utils/auth";

export const GetDataMonth = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axioAuth
            .get("statistic/revenue-month", {
                params: {
                    year: 2023,
                },
            })
            .then((res) => setData(res.data))
            .catch((error) => console.log(error));
    }, []);
    return data;
};

export const GetDataDay = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axioAuth
            .get("statistic/revenue", {
                params: {
                    year: 2023,
                },
            })
            .then((res) => setData(res.data))
            .catch((error) => console.log(error));
    }, []);
    return data;
};

export const GetStaticCount = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axioAuth
            .get("statistic/count")
            .then((res) => setData(res.data))
            .catch((error) => console.log(error));
    }, []);
    return data;
};
