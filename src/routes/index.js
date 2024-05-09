import LoginLecturer from "../pages/LoginLecturer";
import LoginStudent from "../pages/LoginStudent";
import NotFoundPage from "../pages/NotFoundPage";
import DashboardLecturer from "../pages/DashboardLecturer";
import QuizPage from "../pages/QuizPage";
import DashboardStudent from "../pages/DashboardStudent";

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
    },
    {
        path: '/student/quizpage',
        page: QuizPage,
    },
    {
        path: '/student/dashboard',
        page: DashboardStudent,
    }
]