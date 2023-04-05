import { useRef } from "react";
import { UseDarkModeContext } from "../../context/darkMode";

export default function TextArea({ values, fomikHandelChange, id, disable }) {
    const { darkMode } = UseDarkModeContext();
    const element = useRef();
    const handleChange = (e) => {
        fomikHandelChange(e);
        element.current.style.height = element.current.scrollHeight + "px";
    };
    return (
        <textarea
            disabled={disable}
            id={id}
            name={id}
            ref={element}
            className={`${
                darkMode ? "dark_soft" : "bg-[#F5F5F1]"
            } w-full outline-none p-3 py-4 text-black `}
            defaultValue={values}
            onChange={handleChange}
        ></textarea>
    );
}
