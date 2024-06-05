import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import HeaderComponent from "./components/HeaderComponent";
import GradientBackground from "./components/GradientBackground";
import { Fragment, useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import FooterComponent from "./components/FooterComponent";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "./redux/slices/studentSlice";
import * as StudentService from "./services/StudentService";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { jwtDecode } from 'jwt-decode';
import { isJsonString } from "./utils";




export default function App() {
  const dispatch = useDispatch()
  const queryClient = new QueryClient()
  const [isLoading, setIsLoading] = useState(false)
  const student = useSelector(state => state.student)

  const handleGetDetailUser = async (id, token) => {
    try {
      const res = await StudentService.getDetailUser(id, token)
      dispatch(updateStudent({ ...res?.data, accessToken: token }))
      setIsLoading(false)
      // console.log(res?.data)
    } catch (error) {
      // console.log(error)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    let storageData = localStorage.getItem('accessToken')
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      const decoded = jwtDecode(storageData);
      if (decoded?.id) {
        handleGetDetailUser(decoded?.id, storageData);
      }
    }
    setIsLoading(false)
  })

  


  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
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
        </NextUIProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}