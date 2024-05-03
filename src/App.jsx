import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import HeaderComponent from "./components/HeaderComponent";
import { Fragment } from "react";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return (
              <Route key={route.path} path={route.path} element={
                <>
                  <HeaderComponent title={route.title ? route.title : null} role={route.role ? route.role : null} />
                  <Page />
                </>
              } />
            )
          })}
        </Routes>
      </Router>
    </>
  );
}

