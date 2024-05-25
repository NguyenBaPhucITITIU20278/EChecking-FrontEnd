import AddCoursePage from "../pages/AddCoursePage";
import AddSessionPage from "../pages/AddSessionPage";
import CourseInfoPage from "../pages/CourseInfoPage";
import LoginLecturer from "../pages/LoginLecturer";
import LoginStudent from "../pages/LoginStudent";
import NotFoundPage from "../pages/NotFoundPage";
import StudentDashboard from "../pages/StudentDashboard";
import StudentSuccess from "../pages/StudentSuccess";
import DashboardLecturer from "../pages/DashboardLecturer";
import QuizPage from "../pages/QuizPage";
import DashboardStudent from "../pages/DashboardStudent";
import SessionInfoPage from "../pages/SessionInfoPage";
import StudentAccount from "../pages/StudentAccount";

export const routes = [
    {
        path: '/lecturer',
        page: LoginLecturer,
        title: 'Login Page',
        role: 'Lecturer',
        header: true
    },
    {
        path: '/',
        page: LoginStudent,
        title: 'Login Page',
        role: 'Student',
        header: true
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
        title: '404',
        role: '404'
    },
    {
        path: '/lecturer/dashboard/add-course',
        page: AddCoursePage,
        title: 'New Course',
        animatedBg: true,
        role: 'lecturer',
        header: true
    },
    {
        path: '/lecturer/dashboard/add-session',
        page: AddSessionPage,
        title: 'New Attendance',
        animatedBg: true,
        role: 'lecturer',
        header: true
    },
    {
        path: '/lecturer/dashboard/course',
        page: CourseInfoPage,
        title: 'Course Information',
        role: 'lecturer',
        header: true
    },
    {
        path: '/lecturer/dashboard/course/session',
        page: SessionInfoPage,
        title: 'Session Information',
        role: 'lecturer',
        header: true
    },
    {
        path: '/studentAccount',
        page: StudentAccount,
    }
]