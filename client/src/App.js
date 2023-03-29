import "./App.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layout";
import { privateRouter, publicRoutes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import RouteProtected from "./Admin/components/RouteProtected";
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

        {privateRouter.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<RouteProtected>{route.component}</RouteProtected>}
            ></Route>
          );
        })}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
