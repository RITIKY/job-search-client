import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import Salary from "../Pages/Salary";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {path: "/",
            element: <Home/>
        },
        {path: "/details",
            element: <Details/>
        },
        {
          path: "/post-job",
          element: <CreateJob/>
        },
        {
          path: "/my-job",
          element: <MyJobs/>
        },
        {
          path: "/salary",
          element: <Salary/>
        },
        {
          path: "edit-job/:id",
          element: <UpdateJob/>,
          loader:({params}) => fetch(`https://job-search-server-u2c3.onrender.com/all-jobs/${params.id}`)
        },
        {
          path: "/job/:id",
          element: <JobDetails/>
        }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

export default router;