import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import HeaderComponent from "./components/HeaderComponent";
import GradientBackground from "./components/GradientBackground";
import { Fragment } from "react";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Background = route.animatedBg ? GradientBackground : Fragment;
            return (
              <Route key={route.path} path={route.path} element={
                <div className="flex flex-col min-w-screen w-screen h-screen">
                  <HeaderComponent title={route.title ? route.title : null} role={route.role ? route.role : null} />
                  <Background>
                    <Page />
                  </Background>
                </div>
              } />
            )
          })}
        </Routes>
      </Router>
    </>
  );
}

