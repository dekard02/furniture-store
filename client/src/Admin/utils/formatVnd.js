export const formatVnd = (str) => {
    return str
        .split("")
        .reverse()
        .reduce((prev, next, index) => {
            return (index % 3 ? next : next + ",") + prev;
        });
};
