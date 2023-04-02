import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { MdDarkMode } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiLogout, CiCircleInfo } from "react-icons/ci";
import { HiLanguage } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { UseSideBarContext } from "../../context/SideBarContext";
export default function Header() {
    const { width, setWidth } = UseSideBarContext();
    return (
        <header className=" w-[100%] flex items-center justify-between py-3 px-4  ">
            {width ? (
                <></>
            ) : (
                <span
                    onClick={() => setWidth("280px")}
                    className="text-[20px] text-gray-500 cursor-pointer"
                >
                    <FaBars />
                </span>
            )}
            <h3 className="text-[25px] font-semibold text-[#2b3674] ">
                Main Dashboard
            </h3>
            <div className="bg-white rounded-[30px] px-4 py-2 flex justify-between items-center">
                <div className="flex items-center relative w-[250px] rounded-[20px] overflow-hidden ">
                    <input
                        className="pl-4 pr-10 py-2 flex-1 bg-[#f4f7ff] outline-none"
                        type="text"
                        placeholder="Search..."
                    />
                    <button className="text-[20px] text-gray-500 absolute top-[50%] right-2 translate-y-[-50%] ">
                        <AiOutlineSearch />
                    </button>
                </div>
                <span className="text-[24px] text-gray-500 ml-3 cursor-pointer">
                    <IoMdNotificationsOutline />
                </span>
                <span className="text-[24px] text-gray-300 ml-3 cursor-pointer">
                    <MdDarkMode />
                </span>
                <span className="text-[24px] text-gray-500 mx-3 cursor-pointer">
                    <CiCircleInfo />
                </span>
                <Tippy
                    interactive
                    trigger="click"
                    content="Hello"
                    render={(attrs) => (
                        <div className="w-[200px] shadow-md pt-2  flex flex-col z-10 bg-white">
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
                            className="w-[100%] h-[100%]"
                            src="https://avatars.githubusercontent.com/u/104544348?s=48&v=4"
                            alt=""
                        />
                    </div>
                </Tippy>
            </div>
        </header>
    );
}
