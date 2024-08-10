import { logout } from "@/store/authSlice";
import { useStore } from "@/utils/useStore";
import { useDispatch } from "react-redux";
import BaseButton from "./button";

const Header = () => {
  const dispatch = useDispatch();
  const { user, ui } = useStore();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header
      className={`px-6 py-4 top-0 fixed left-0 bg-white z-10 shadow-sm ${
        ui ? "ml-60 w-[calc(100%-240px)]" : "ml-20 w-[calc(100%-80px)]"
      }`}
    >
      <div className="flex items-center">
        <div className="ml-auto flex gap-2 items-center">
          <img src={user.image} alt="user" className="w-9 h-9 rounded-full" />
          <div>
            <div>{user.username}</div>
            <div>{user.role}</div>
          </div>
          <BaseButton onClick={handleLogout} size="sm" color="red">Logout</BaseButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
