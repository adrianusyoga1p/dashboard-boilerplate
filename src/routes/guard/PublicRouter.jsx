import { useStore } from "@/utils/useStore";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }) => {
  const { isAuthenticated, token } = useStore();

  if (isAuthenticated && token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRouter;
