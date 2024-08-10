import { useStore } from "@/utils/useStore";
import { Navigate, Outlet } from "react-router-dom";

const GuardRouter = ({ children }) => {
  const { isAuthenticated, user, token } = useStore();

  if (!isAuthenticated && !user && !token) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default GuardRouter;
