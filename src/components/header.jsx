import { useStore } from "@/utils/useStore";

const Header = () => {
  const { user, ui } = useStore();

  return (
    <header
      className={`px-6 py-4 top-0 fixed left-0 bg-white z-10 shadow-sm ${
        ui ? "ml-60 w-[calc(100%-240px)]" : "ml-20 w-[calc(100%-80px)]"
      }`}
    >
      <div className="flex items-center">
        <div className="ml-auto">
          <div className="flex gap-2 items-center">
            <img src={user.image} alt="user" className="w-8 h-8 rounded-full" />
            <span className="text-gray-700 text-sm">{user.username}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
