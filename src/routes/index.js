import LoginLecturer from "../pages/LoginLecturer";
import LoginStudent from "../pages/LoginStudent";
import NotFoundPage from "../pages/NotFoundPage";
import StudentDashboard from "../pages/StudentDashboard";
import StudentSuccess from "../pages/StudentSuccess";
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
        
        path: '/student/dashboard',
        page: StudentDashboard,
    },
    {
        
        path: '/success',
        page: StudentSuccess,
    }

]