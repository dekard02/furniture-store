import { memo, useEffect, useRef } from "react";
import { HiXMark } from "react-icons/hi2";
import { UseDarkModeContext } from "../../context/darkMode";
function Modal({ children, isOpen, setIsOpen }) {
    const { darkMode } = UseDarkModeContext();
    const overlay = useRef();
    const handelClose = (e) => {
        const target = e.target;
        if (target === overlay.current) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener("keydown", function (e) {
            e.which === 27 && setIsOpen(false);
        });
    }, [isOpen, setIsOpen]);
    return isOpen ? (
        <div
            onClick={handelClose}
            ref={overlay}
            className="fixed w-[100%] h-[100%] left-0 top-0 z-10"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
        >
            <div
                className={`${
                    darkMode ? "dark" : "bg-white"
                } relative py-5 px-4  shadow-lg left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%]`}
            >
                <span
                    onClick={() => setIsOpen(false)}
                    className={`${
                        darkMode ? "text-white" : "text-black"
                    } absolute right-3 top-5 text-[20px] cursor-pointer `}
                >
                    <HiXMark />
                </span>
                {children}
            </div>
        </div>
    ) : (
        <></>
    );
}

export default memo(Modal);
