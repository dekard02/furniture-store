export const formatNameProduct = (str = "") => {
    return (
        str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase()
    ).trim();
};
