import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { useStore } from "./utils/useStore";

const Layout = () => {
  const { ui } = useStore();

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
