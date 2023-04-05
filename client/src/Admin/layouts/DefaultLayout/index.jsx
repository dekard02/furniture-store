import SideBar from "../SideBar";
import Main from "../Main";
import Header from "../Header";
import SideBarContextProvider from "../../context/SideBarContext";
import AuthContextProvider from "../../context/authContext";
import ModalContextProvider from "../../context/modalContext";
import LoadingProvider from "../../context/loadingContext";
import DarkModeContextProvider from "../../context/darkMode";
function DefaultLayout({ children }) {
  const profile = JSON.parse(localStorage.getItem("user"));
  return (
    <AuthContextProvider>
      <DarkModeContextProvider>
        <LoadingProvider>
          <ModalContextProvider>
            <SideBarContextProvider>
              <SideBar />
              <Main>
                <Header img={profile?.image}></Header>
                <div className="mt-7  mx-5">{children}</div>
              </Main>
            </SideBarContextProvider>
          </ModalContextProvider>
        </LoadingProvider>
      </DarkModeContextProvider>
    </AuthContextProvider>
  );
}

export default DefaultLayout;

// rgb(245 248 254)
