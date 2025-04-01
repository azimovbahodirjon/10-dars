import { FaRegMoon, FaRegSun } from "react-icons/fa";
import {
  MdOutlineSpaceDashboard,
  MdAddCircle,
  MdSettings,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useSelector } from "react-redux";

function Sidebar() {
  const { user } = useSelector((store) => store.user);
  const { changeTheme, currentTheme } = useTheme();
  return (
    <div className="py-10 px-0 pl-8 hidden w-64 shrink-0 flex-col  bg-opacity-50 p-2 pr-0 pt-10  lg:flex">
      <div className="mb-20 flex flex-col font-semibold text-xl items-center">
        <img
          className="w-20 h-20 mb-3 rounded-full"
          src={user.photoURL}
          alt=""
        />
        <h2 className="text-xl font-semibold">Hello, {user.displayName}</h2>
      </div>
      <ul className="font-semibold px-0 flex flex-col gap-4 grow">
        <li>
          <Link
            to="/"
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-2 text-xl dark:bg-base-300 active"
          >
            <MdOutlineSpaceDashboard />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-2 text-xl dark:bg-base-300"
          >
            <MdAddCircle /> Create
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-2 text-xl dark:bg-base-300"
          >
            <MdSettings /> Settings
          </Link>
        </li>
      </ul>
      <label className="mb-5 flex cursor-pointer justify-center gap-2">
        {/* sun icon */}
        <FaRegSun className="swap-on h-5 w-5 fill-current" />
        <input
          onChange={changeTheme}
          type="checkbox"
          value="synthwave"
          checked={currentTheme === "dracula"}
          className="theme-controller toggle"
        />
        {/* moon icon */}
        <FaRegMoon className="swap-off h-5 w-5 fill-current" />
      </label>
    </div>
  );
}

export default Sidebar;
