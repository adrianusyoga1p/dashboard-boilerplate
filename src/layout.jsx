import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { useEffect } from "react";
import { apiRefreshToken } from "./api/endpoint/auth";
import { useStore } from "./utils/useStore";

const Layout = () => {
  const { ui, token } = useStore();

  const refreshToken = async () => {
    await apiRefreshToken(token);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshToken();
    }, 1800000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-[500px] relative">
      <Sidebar />
      <Header />
      <main className={`p-6 mt-14 ${ui ? "ml-60" : "ml-20"}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
