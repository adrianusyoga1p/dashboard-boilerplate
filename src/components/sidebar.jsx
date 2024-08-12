import {
  faAnglesLeft,
  faAnglesRight,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setToggle } from "@/store/uiSlice";
import { useStore } from "@/utils/useStore";
import { logout } from "@/store/authSlice";
// import Logo from "@/assets/logo.png"

const Sidebar = () => {
  const menu = [
    {
      label: "dashboard",
      path: "dashboard",
      icon: "fa-house",
    },
    {
      label: "account settings",
      path: "account-settings",
      icon: "fa-user-gear",
    },
  ];
  const { ui } = useStore();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-sky-700 py-4 ${
        ui ? "w-60 px-6" : "w-20 px-4"
      }`}
    >
      <nav className="flex flex-col space-y-6">
        <div
          className={`flex items-center ${
            ui ? "justify-between" : "justify-center"
          }`}
        >
          {ui && (
            // <img src={Logo} alt="logo.png" className="w-12 max-w-full h-auto" />
            <h1 className="text-2xl font-semibold text-white">logo</h1>
          )}
          <button className="text-white" onClick={() => dispatch(setToggle())}>
            <FontAwesomeIcon
              icon={ui ? faAnglesLeft : faAnglesRight}
              size="sm"
            />
          </button>
        </div>
        <ul className="space-y-2.5">
          {menu.map((item) => {
            return (
              <li key={item.label}>
                <NavLink
                  className={({ isActive }) =>
                    [
                      `flex gap-3 capitalize items-center text-sm py-2 px-3 rounded-md hover:bg-white/20 text-white transition ${
                        ui ? "" : "justify-center"
                      }`,
                      isActive ? "bg-white/20" : null,
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  to={item?.path}
                >
                  <FontAwesomeIcon icon={item?.icon} className="w-4 h-4" />
                  {ui && ui ? item?.label : null}
                </NavLink>
              </li>
            );
          })}
          <li>
            <button
              onClick={handleLogout}
              className={`flex w-full gap-3 capitalize items-center text-sm py-2 px-3 rounded-md hover:bg-red-400 text-white transition ${!ui && 'justify-center'}`}
            >
              <FontAwesomeIcon className="w-4 h-4" icon={faSignOut} />
              {ui && 'Logout'}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
