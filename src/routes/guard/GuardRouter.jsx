import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const GuardRouter = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  if (!isAuthenticated && !user && !token) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default GuardRouter;
