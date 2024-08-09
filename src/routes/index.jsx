import Layout from "@/layout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import NotFound from "@/pages/NotFound/NotFound";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFound/>
  },
  {
    path: "*",
    element: <Navigate to='/404' replace />
  }
]);
