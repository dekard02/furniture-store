import { createContext, useState, useContext } from "react";
import { UseDarkModeContext } from "./darkMode";

const SideBarContext = createContext();

export default function SideBarContextProvider({ children }) {
    const [width, setWidth] = useState("280px");
    const [collapse, setCollapse] = useState(false);
    const { darkMode } = UseDarkModeContext();
    return (
        <SideBarContext.Provider
            value={{
                width,
                setWidth,
                collapse,
                setCollapse,
            }}
        >
            <div className={`${darkMode ? "dark" : "light"} w-[100%] flex`}>
                {children}
            </div>
        </SideBarContext.Provider>
    );
}

export const UseSideBarContext = () => useContext(SideBarContext);
