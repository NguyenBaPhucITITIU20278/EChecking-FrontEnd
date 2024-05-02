import LoginLecturer from "../pages/LoginLecturer";
import LoginStudent from "../pages/LoginStudent";
import NotFoundPage from "../pages/NotFoundPage";

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
    }
]