import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  if (isAuthenticated && token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRouter;