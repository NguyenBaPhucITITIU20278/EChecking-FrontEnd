import LoginLecturer from "../pages/LoginLecturer";
import LoginStudent from "../pages/LoginStudent";
import NotFoundPage from "../pages/NotFoundPage";
import DashboardLecturer from "../pages/DashboardLecturer";

export const routes = [
    {
        path: '/lecturer',
        page: LoginLecturer,
    },
    {
        path: '/',
        page: LoginStudent,
    },
    {
        path: '*',
        page: NotFoundPage,
    },
    {
        path: '/lecturer/dashboard',
        page: DashboardLecturer,
    }
]