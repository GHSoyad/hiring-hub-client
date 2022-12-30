import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AddJob from "../pages/Dashboard/AddJob/AddJob";
import AllJobs from "../pages/Dashboard/AllJobs/AllJobs";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import Jobs from "../pages/Jobs/Jobs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs',
                element: <Jobs></Jobs>
            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => params.id
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>
            },
            {
                path: '/dashboard/all-jobs',
                element: <PrivateRouter><AllJobs></AllJobs></PrivateRouter>
            },
            {
                path: '/dashboard/add-job',
                element: <PrivateRouter><AddJob></AddJob></PrivateRouter>
            }
        ]
    }
])

export default router;