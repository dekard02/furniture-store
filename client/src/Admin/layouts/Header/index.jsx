import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { MdDarkMode } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiLogout, CiCircleInfo, CiLight } from "react-icons/ci";
import { HiLanguage } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { UseSideBarContext } from "../../context/SideBarContext";
import { useState } from "react";
import { UseDarkModeContext } from "../../context/darkMode";
export default function Header({ img }) {
    const { width, setWidth, setCollapse, collapse } = UseSideBarContext();
    const [defaultImg, setDefaultImg] = useState(img);
    const { toggleDarkMode, darkMode } = UseDarkModeContext();
    return (
        <header className=" w-[100%] flex items-center justify-between py-3 px-4  ">
            {width ? (
                <></>
            ) : (
                <span
                    onClick={() => {
                        setWidth("280px");
                        setCollapse(false);
                    }}
                    className="text-[20px] text-gray-500 cursor-pointer"
                >
                    <FaBars />
                </span>
            )}

            <div
                className={`${
                    darkMode ? "dark" : "ligth"
                } rounded-[30px] px-4 py-2 flex items-center w-full ${
                    collapse ? "justify-end" : "justify-between"
                }`}
            >
                <div
                    className="flex items-center relative w-[250px] rounded-[20px] overflow-hidden "
                    style={{
                        boxShadow:
                            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                    }}
                >
                    <input
                        className={`${
                            darkMode ? "dark_soft" : "bg-white"
                        } pl-4 pr-10 py-2 flex-1  outline-none text-black`}
                        type="text"
                        placeholder="Search..."
                    />
                    <button className="text-[20px] text-gray-500 absolute top-[50%] right-2 translate-y-[-50%] ">
                        <AiOutlineSearch />
                    </button>
                </div>
                <div className="flex items-center">
                    <span className="text-[24px] text-gray-500 ml-3 mr-5 cursor-pointer">
                        <IoMdNotificationsOutline />
                    </span>
                    <span
                        onClick={() => toggleDarkMode()}
                        className="text-[24px] text-gray-500  mr-5 cursor-pointer "
                    >
                        {!darkMode ? <MdDarkMode /> : <CiLight />}
                    </span>
                    <Tippy
                        interactive
                        trigger="click"
                        content="Hello"
                        render={(attrs) => (
                            <div
                                className={`${
                                    darkMode ? "dark" : " bg-white"
                                } w-[200px] shadow-md pt-2  flex flex-col z-10`}
                            >
                                <div className="flex items-center py-3 cursor-pointer hover:shadow-md px-3">
                                    <span className="text-[22px] text-gray-500 mr-3">
                                        <CgProfile />
                                    </span>
                                    <span>Profile</span>
                                </div>
                                <div className="flex items-center py-3 cursor-pointer hover:shadow-md px-3">
                                    <span className="text-[22px] text-gray-500 mr-3">
                                        <HiLanguage />
                                    </span>
                                    <span>Languagge</span>
                                </div>
                                <div className="flex items-center py-3 cursor-pointer hover:shadow-md px-3">
                                    <span className="text-[22px] text-gray-500 mr-3">
                                        <CiLogout />
                                    </span>
                                    <span>Logout</span>
                                </div>
                            </div>
                        )}
                    >
                        <div className="mr-[10px] w-[35px] h-35px] overflow-hidden rounded-full cursor-pointer">
                            <img
                                onError={(e) =>
                                    setDefaultImg(
                                        "https://avatars.githubusercontent.com/u/107147020?v=4"
                                    )
                                }
                                className="w-[100%] h-[100%]"
                                src={defaultImg}
                                alt=""
                            />
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}
