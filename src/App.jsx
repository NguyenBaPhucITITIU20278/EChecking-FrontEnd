import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import HeaderComponent from "./components/HeaderComponent";
import GradientBackground from "./components/GradientBackground";
import { Fragment } from "react";
import { NextUIProvider } from "@nextui-org/react";
import FooterComponent from "./components/FooterComponent";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            // const baseHeight = route.header ? 'h-svh' : 'h-full';
            const Background = route.animatedBg ? GradientBackground : Fragment;
            return (
              <Route key={route.path} path={route.path} element={
                <>
                  <Helmet>
                    <title>{route.title}</title>
                  </Helmet>
                  <div className="flex flex-col w-full h-svh">
                    {route.header && <HeaderComponent title={route.title} role={route.role} />}
                    <Background>
                      <Page />
                    </Background>
                    <FooterComponent />
                  </div>
                </>
              } />
            )
          })}
        </Routes>
      </Router>
    </NextUIProvider >
  );
}