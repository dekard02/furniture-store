const MONTH_DEFAULT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MONTH_STRING = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
function reverseString(str = "") {
    return str.split("-").reverse().join("-");
}
function dataReversed(data) {
    return data.map((val) => ({ ...val, day: reverseString(val.day) }));
}
export const formatDrillDown = (dataMonth = []) => {
    const converMonth = MONTH_STRING.map((val, index) => {
        const data = dataMonth.find((v) => v.month - 1 == index);
        if (data) {
            return { y: data.revenue, name: val, drilldown: val };
        } else {
            return { y: 0, name: val, drilldown: val };
        }
    });
    return converMonth;
};

export const formatDrillDownDetail = (apiMonth, apiDay) => {
    apiMonth.map((val) => {
        val.data = [];
        return val;
    });
    const dataFilter = apiMonth.map((val) => val.month);
    const dataSelect = MONTH_DEFAULT.filter((val) => !dataFilter.includes(val));
    const resultDataSelect = dataSelect.map((val) => ({
        month: val,
        data: [],
    }));
    const dataMonth = [...resultDataSelect, ...apiMonth]
        .sort((a, b) => a.month - b.month)
        .map((val) => ({ month: val.month, data: val.data }));
    dataMonth.forEach((val) => {
        const dayEachMonth = getDaysInMonth(2023, val.month);
        for (let i = 1; i <= dayEachMonth; i++) {
            val.data = [
                ...val.data,
                {
                    day: `${2023}-${
                        val.month < 10 ? `0${val.month}` : val.month
                    }-${i < 10 ? `0${i}` : i}`,
                    revenue: 0,
                },
            ];
        }
    });
    const dataDayApiFormat = dataReversed(apiDay);
    const dataDayFilter = dataDayApiFormat.map((val) => val.day);
    const result = dataMonth.map((val) => {
        const dataFake = val.data.map((value) => {
            if (dataDayFilter.includes(value.day)) {
                return {
                    ...value,
                    ...dataDayApiFormat.find((d) => d.day === value.day),
                };
            } else {
                return value;
            }
        });
        return { data: dataFake };
    });

    const data = MONTH_STRING.map((val, index) => ({
        name: val,
        id: val,
        data: [...result[index].data]
            .map((value) => Object.entries({ [value.day]: value.revenue }))
            .flat(),
    }));
    return data;
};
