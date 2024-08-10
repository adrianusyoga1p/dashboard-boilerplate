import Layout from "@/layout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Login from "@/pages/Login/Login";
import NotFound from "@/pages/NotFound/NotFound";
import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicRouter from "./guard/PublicRouter";
import GuardRouter from "./guard/GuardRouter";


export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRouter>
        <Login />
      </PublicRouter>
    ),
  },
  {
    path: "/",
    element: (
      <GuardRouter>
        <Layout />
      </GuardRouter>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
]);
