import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineSetting,
} from "react-icons/ai";
import { RxDot } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { UseSideBarContext } from "../../context/SideBarContext";
import { useLocation } from "react-router-dom";
import { UseDarkModeContext } from "../../context/darkMode";

const fake = [
    {
        id: 1,
        title: "Home",
        icon: <AiOutlineHome />,
        path: "/admin/home",
    },
    {
        id: 100,
        title: "Category",
        icon: <AiOutlineShoppingCart />,
        path: "/admin/category",
    },

    {
        id: 2,
        title: "Products",
        icon: <HiOutlineDatabase />,
        path: "/admin/product",
        children: [
            {
                id: 1,
                title: "All Product",
                path: "/admin/product",
            },
            {
                id: 2,
                title: "Add Product",
                path: "/admin/add-product",
            },
            {
                id: 3,
                title: "Recently Product",
                path: "/admin/recently-product",
            },
        ],
    },
    {
        id: 3,
        title: "Orders",
        icon: <AiOutlineShoppingCart />,
        path: "/admin/order",
        children: [
            {
                id: 1,
                title: "All Order",
                path: "/admin/all-order",
            },
            {
                id: 2,
                title: "Order Pending",
                path: "/admin/pending-order",
            },
        ],
    },
    {
        id: 4,
        title: "Users",
        icon: <AiOutlineUser />,
        path: "/admin/user",
        children: [
            {
                id: 1,
                title: "User Active",
                path: "/admin/active-user",
            },
            {
                id: 2,
                title: "User Inactive",
                path: "/admin/inactive-user",
            },
        ],
    },
    {
        id: 5,
        title: "Setting",
        icon: <AiOutlineSetting />,
        path: "/admin/settings",
    },
];

export default function SideBar() {
    const { darkMode } = UseDarkModeContext();
    const location = useLocation();
    let pathAction =
        location.pathname.split("/")[location.pathname.split("/").length - 1];
    if (pathAction.split("-").length >= 2) {
        pathAction = pathAction.split("-")[1];
    }
    const { width, setWidth, setCollapse } = UseSideBarContext();
    const [arr, setArr] = useState([]);
    const handelCheck = (id, children) => {
        if (children) {
            const data = arr.includes(id)
                ? arr.filter((val) => val !== id)
                : [...arr, id];

            setArr(data);
        }
    };
    return (
        <StyledSideBar
            className={`${
                darkMode ? "dark_soft" : "bg-white"
            } fixed top-3  overflow-x-hidden transition-all h-[100%]  rounded-[12px]`}
            style={{
                width: width,
            }}
        >
            <div className={`overflow-auto overflow-x-hidden `}>
                <div className="py-4 px-3  flex items-center justify-between ">
                    <span className="text-[18px] font-semibold text-gray-500">
                        Hello Admin
                    </span>
                    <span
                        onClick={() => {
                            setWidth(0);
                            setCollapse(true);
                        }}
                        className="text-[20px] text-gray-500 cursor-pointer"
                    >
                        <FaBars />
                    </span>
                </div>
                <div
                    className=" mx-auto overflow-hidden flex justify-center items-center py-1"
                    style={{
                        borderBottom: darkMode
                            ? "2px solid #353434"
                            : "4px solid #f4f7ff",
                    }}
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/107147020?v=4"
                        className="w-[70px] h-[70px] rounded-full my-2"
                        alt=""
                    />
                </div>
                <div className="flex flex-col  mt-5  h-[100%]">
                    <ul className="whitespace-nowrap">
                        {fake.map((val) => {
                            let Comp = "div";
                            if (val.path && !val.children) {
                                Comp = Link;
                            }
                            return (
                                <li
                                    to="admin"
                                    onClick={() =>
                                        handelCheck(val.id, val.children)
                                    }
                                    className={`${
                                        val.path.includes(pathAction)
                                            ? `${
                                                  !darkMode
                                                      ? "bg-[#ebf0fe] text-[#6b88e7]"
                                                      : "bg-[#353434] shadow-sm"
                                              }`
                                            : `${
                                                  darkMode
                                                      ? "dark_soft"
                                                      : "bg-white text-[#bbc4dd]"
                                              }`
                                    } mx-3 my-2 cursor-pointer rounded-[5px] ${
                                        darkMode
                                            ? "hover:bg-[#353434] "
                                            : "hover:bg-[#ebf0fe]"
                                    }  ${
                                        darkMode
                                            ? "hover:text-white"
                                            : "hover:text-[#6b88e7]"
                                    }  transition-all `}
                                    key={val.id}
                                >
                                    <Comp
                                        to={val.path || "/admin"}
                                        className="py-3 block "
                                    >
                                        <div className="flex items-center justify-between ml-2 ">
                                            <p className={`flex items-center `}>
                                                <span className="mr-3 text-[22px] ">
                                                    {val?.icon}
                                                </span>
                                                <span>{val?.title}</span>
                                            </p>
                                            {val.children && (
                                                <span className="mr-4 ">
                                                    <BsChevronDown />
                                                </span>
                                            )}
                                        </div>
                                        {val.children ? (
                                            <ul
                                                className={` pl-7 text-[15px] border-after not_animation ${
                                                    arr.includes(val.id)
                                                        ? "animation"
                                                        : ""
                                                }`}
                                            >
                                                {val.children.map((item) => {
                                                    return (
                                                        <li
                                                            className="mt-3 flex items-center "
                                                            key={item.id}
                                                        >
                                                            <RxDot className="mr-2 text-[25px]" />
                                                            <Link
                                                                to={item.path}
                                                            >
                                                                <p className="">
                                                                    {item.title}
                                                                </p>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        ) : (
                                            <></>
                                        )}
                                    </Comp>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </StyledSideBar>
    );
}

const StyledSideBar = styled.div`
    .not_animation {
        transition: max-height 0.3s ease-out;
        overflow-y: hidden;
        max-height: 0px;
    }
    .animation {
        transition: max-height 0.3s ease-in;
        overflow-y: hidden;
        max-height: 120px;
    }
    .border-after {
        position: relative;
        &::after {
            position: absolute;
            content: "";
            top: 17px;
            left: 13px;
            width: 3px;
            height: 80%;
            background-color: #d4e7f3;
            border-radius: 15px;
        }
    }
`;
