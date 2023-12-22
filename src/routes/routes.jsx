import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PriviteRoute";
import Dashboard from "../layouts/Dashboard";
import MyProfile from "../pages/MyProfile/MyProfile";
import MyWork from "../pages/MyWork/MyWork";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <PageNotFound/>,
      children: [
       {
        path: "/",
        element: <Home/>,
       },
       {
        path: "/login",
        element: <Login/>,
       },
       {
        path: "/register",
        element: <Register/>
       },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: 'myProfile',
          element: <MyProfile/>
        },
        {
          path: 'myWork',
          element: <MyWork/>
        },
        // {
        //   path: 'myProducts',
        //   element: <MyProducts/>
        // },


      ]
    }
  ]);

  export default router;