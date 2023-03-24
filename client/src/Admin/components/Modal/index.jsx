import { memo, useEffect, useRef } from "react";
import { HiXMark } from "react-icons/hi2";
function Modal({ children, isOpen, setIsOpen }) {
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
            <div className="relative py-5 px-4 bg-white shadow-lg left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%]">
                <span
                    onClick={() => setIsOpen(false)}
                    className="absolute right-3 top-5 text-[20px] cursor-pointer text-black"
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
