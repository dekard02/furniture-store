import { createContext, useState, useContext } from "react";

const SideBarContext = createContext();

export default function SideBarContextProvider({ children }) {
     const [width, setWidth] = useState("280px");
     const [collapse, setCollapse] = useState(false);
     return (
          <SideBarContext.Provider
               value={{
                    width,
                    setWidth,
                    collapse,
                    setCollapse,
               }}
          >
               {children}
          </SideBarContext.Provider>
     );
}

export const UseSideBarContext = () => useContext(SideBarContext);
