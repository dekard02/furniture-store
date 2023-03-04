import "./App.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layout";
import { publicRoutes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
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
      </Routes>
    </Fragment>
  );
}

export default App;
