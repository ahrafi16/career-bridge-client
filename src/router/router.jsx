import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/jobs/:id",
                element: <JobDetails></JobDetails>,
                loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
        ]
    },
]);

export default router;