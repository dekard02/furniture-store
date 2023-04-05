import { HiXMark } from "react-icons/hi2";
import { memo, useState } from "react";
import { validateImg } from "../../utils/validateImg";
import { UseDarkModeContext } from "../../context/darkMode";
function ChooseImg({
    alt,
    img,
    setImg,
    setFile,
    file,
    setDeleteImg,
    deleteImg,
}) {
    const { darkMode } = UseDarkModeContext();
    const [key, setKey] = useState(1);
    const handelChange = (e) => {
        const check = validateImg(e);
        if (!check) return;
        let arr = [];
        let fsArr = [];
        check.forEach((val) => {
            const fs = e.target.files[val];
            const reader = new FileReader();
            reader.onload = function (event) {
                arr = [...arr, event.target.result];
                fsArr = [...fsArr, fs];
            };
            reader.onloadend = function () {
                setFile([...file, ...fsArr]);
                setImg([...img, ...arr]);
            };
            reader.readAsDataURL(fs);
        });
    };
    const handelDeleteImage = (id) => {
        const clear = img.filter((val) => val !== id);
        setImg(clear);

        if (setDeleteImg && !id.startsWith("data")) {
            setDeleteImg([...deleteImg, id]);
        }
        if (setDeleteImg && id.startsWith("data")) {
            let notDelete = "";
            file.forEach((val) => {
                const reader = new FileReader();
                reader.readAsDataURL(val);
                reader.onload = function (event) {
                    if (event.target.result === id) {
                        notDelete = val;
                        setFile(file.filter((value) => value !== notDelete));
                        return;
                    }
                };
            });
        }
    };
    return (
        <div className="mt-4">
            <div
                className={`${
                    darkMode ? "dark_soft" : "bg-[#F5F5F1]"
                } grid grid-cols-6 gap-4 `}
            >
                {img?.map((val, index) => {
                    return (
                        <div
                            key={index}
                            className=" overflow-hidden relative h-[110px] "
                            style={{ border: "1px solid gray" }}
                        >
                            <img
                                className="w-[100%] h-[100%] object-cover"
                                src={val}
                                alt={alt}
                            />
                            <span
                                onClick={() => handelDeleteImage(val)}
                                className="absolute right-1 top-1 text-[20px] text-black cursor-pointer"
                            >
                                <HiXMark />
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="mt-4">
                <label
                    htmlFor="img"
                    className="p-1 bg-purple-600 text-white block rounded-[20px] text-center text-[12px] cursor-pointer"
                >
                    Choose File
                </label>
                <input
                    hidden
                    id="img"
                    key={key}
                    type="file"
                    multiple
                    onChange={(e) => {
                        handelChange(e);
                        setKey((key) => key + 1);
                    }}
                />
            </div>
        </div>
    );
}

export default memo(ChooseImg);
