import AddCoursePage from "../pages/AddCoursePage";
import LoginLecturer from "../pages/LoginLecturer";
import LoginStudent from "../pages/LoginStudent";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    {
        path: '/lecturer',
        page: LoginLecturer,
        title: 'Login',
        role: 'Lecturer'
    },
    {
        path: '/',
        page: LoginStudent,
        title: 'Login',
        role: 'Student'
    },
    {
        path: '*',
        page: NotFoundPage,
        title: '404',
        role: '404'
    },
    {
        path: '/lecturer/dashboard/add-course',
        page: AddCoursePage,
        title: 'Add Course',
        animatedBg: true,
        role: 'lecturer'
    },
]