import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { useSelector } from "react-redux";
import Header from "./components/header";
import { useEffect } from "react";
import { apiRefreshToken } from "./api/endpoint/auth";
import store from "./store/store";

const Layout = () => {
  const ui = useSelector((state) => state.ui.value);

  const refreshToken = async () => {
    await apiRefreshToken(store.getState().auth.token);
  }

  useEffect(() => {
    setTimeout(() => {
      refreshToken();
    }, 6000000);
  });
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
