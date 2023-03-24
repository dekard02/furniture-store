import SideBar from "../SideBar";
import Main from "../Main";
import Header from "../Header";
import SideBarContextProvider from "../../context/SideBarContext";
import AuthContextProvider from "../../context/authContext";
import ModalContextProvider from "../../context/modalContext";
import LoadingProvider from "../../context/loadingContext";

function DefaultLayout({ children }) {
    return (
        <AuthContextProvider>
            <LoadingProvider>
                <ModalContextProvider>
                    <SideBarContextProvider>
                        <div className="h-full w-[100%] flex">
                            <SideBar />
                            <Main>
                                <Header></Header>
                                <div className="mt-7 mb-4 mx-5">{children}</div>
                            </Main>
                        </div>
                    </SideBarContextProvider>
                </ModalContextProvider>
            </LoadingProvider>
        </AuthContextProvider>
    );
}

export default DefaultLayout;
