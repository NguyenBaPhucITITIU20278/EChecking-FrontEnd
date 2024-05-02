import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            return (
              <Route key={Page} path={route.path} element={<Page />} />
            )
          })}
        </Routes>
      </Router>
    </>
  )
}

