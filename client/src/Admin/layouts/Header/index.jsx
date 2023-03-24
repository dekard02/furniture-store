import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { HiLanguage } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { UseSideBarContext } from "../../context/SideBarContext";
export default function Header() {
    const { width, setWidth } = UseSideBarContext();
    return (
        <header className=" w-[100%] flex items-center justify-between py-3 px-4 shadow-lg bg-white">
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
            <h3 className="text-[22px] font-semibold ">DashBoard</h3>
            <div className="flex items-center relative w-[400px] rounded-[5px] overflow-hidden ">
                <input
                    className="pl-4 pr-10 py-2 flex-1 bg-[#f0ecec] outline-none"
                    type="text"
                    placeholder="Search..."
                />
                <button className="text-[20px] text-gray-500 absolute top-[50%] right-2 translate-y-[-50%] ">
                    <AiOutlineSearch />
                </button>
            </div>
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
                <div className="mr-[10px] w-[40px] h-40px] border-black border border-solid rounded-full cursor-pointer">
                    <img
                        className="w-[100%] h-[100%]"
                        src="https://avatars.githubusercontent.com/u/107147020?v=4"
                        alt=""
                    />
                </div>
            </Tippy>
        </header>
    );
}
