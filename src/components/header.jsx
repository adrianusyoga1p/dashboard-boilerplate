import { useSelector } from "react-redux";

const Header = () => {
  const ui = useSelector((state) => state.ui.value);
  return (
    <header className={`px-6 py-4 top-0 fixed left-0 bg-white z-10 shadow-sm ${ui ? 'ml-60 w-[calc(100%-240px)]' : 'ml-20 w-[calc(100%-80px)]'}`}>
      <div className="flex items-center">
        <div className="ml-auto">
          Header
        </div>
      </div>
    </header>
  )
}

export default Header