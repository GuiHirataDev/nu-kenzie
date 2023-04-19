import { createBrowserRouter, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "*",
        element: <Navigate replace to={"/"}/>
    }
])