import "./App.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layout";
import { privateRouter, publicRoutes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
<<<<<<< HEAD
import RouteProtected from "./Admin/components/RouteProtected";
function App() {
    return (
        <Fragment>
            <GlobalStyles></GlobalStyles>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout =
                        route.layout === null ? Fragment : DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}

                {privateRouter.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <RouteProtected>
                                    {route.component}
                                </RouteProtected>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Fragment>
    );
=======
import ErrorPage from "./pages/Error/ErrorPage";
function App() {
  return (
    <Fragment>
      <GlobalStyles></GlobalStyles>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Fragment>
  );
>>>>>>> 73e116c6c556ff964ead5e134abc0590af5e3d5e
}

export default App;
