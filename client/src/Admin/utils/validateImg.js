import { toast } from "react-toastify";
const validateImg = (e) => {
    const data = Object.keys(e.target.files);
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        const check = data.every((val) =>
            /(\.|\/)(gif|jpe?g|png)$/i.test(e.target.files[val].type)
        );
        if (!check) {
            toast.error("File invalid. Please choose correct file!", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
            });
            return 0;
        }
    } else {
        toast.error("File invalid. Please choose correct file!", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark",
        });
        return 0;
    }
    return data;
};

export { validateImg };
