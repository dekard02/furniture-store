import "./App.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layout";
import { publicRoutes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
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
}

export default App;
