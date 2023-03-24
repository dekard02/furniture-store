import { useRef } from "react";

export default function TextArea({ values, fomikHandelChange, id, disable }) {
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
            className="bg-[#F5F5F1] w-full outline-none p-3 py-4 text-black "
            defaultValue={values}
            onChange={handleChange}
        ></textarea>
    );
}
