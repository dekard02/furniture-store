import { UseSideBarContext } from "../../context/SideBarContext";
export default function Main({ children }) {
    const { width } = UseSideBarContext();
    return (
        <div
            className={` w-[100%]  transition-all`}
            style={{
                marginLeft: width,
            }}
        >
            {children}
        </div>
    );
}
