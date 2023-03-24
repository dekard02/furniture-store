export const FilterProduct = (data = [], rest) => {
    const values = Object.keys(data);
    return values.filter((val) => rest.includes(val));
};
