import { UseSideBarContext } from "../../context/SideBarContext";
export default function Main({ children }) {
    const { width } = UseSideBarContext();
    return (
        <div
            className={`bg-[#edf0f2] w-[100%] ml-[${width}] transition-all`}
            style={{
                marginLeft: width,
            }}
        >
            {children}
        </div>
    );
}
