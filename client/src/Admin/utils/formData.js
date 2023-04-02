const formData = (form, data) => {
    const keys = Object.keys(data);
    keys.forEach((key) => {
        if (Array.isArray(data[key]) && data[key].length > 0) {
            form.delete(key);
            data[key].forEach((value) => form.append(key, value));
        }
        if (typeof data[key] === "string" || typeof data[key] === "number") {
            form.set(key, data[key]);
        }
    });
    return form;
};

export { formData };
