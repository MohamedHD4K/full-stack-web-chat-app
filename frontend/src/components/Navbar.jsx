import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-between px-4 bg-blue-500 text-white"
      style={{ height: "8vh" }}
    >
      <span className="font-medium text-xl">Chat App</span>
      <ul className="flex gap-4">
        <li>
          <Link
            to="/"
            className="p-3 rounded-full transition-all hover:bg-blue-800 material-symbols-outlined focus:outline-none "
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="p-3 rounded-full transition-all hover:bg-blue-800 material-symbols-outlined focus:outline-none "
          >
            person
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="p-3 rounded-full transition-all hover:bg-blue-800 material-symbols-outlined focus:outline-none "
          >
            menu
          </Link>
        </li>
        <li>
          <Link
            to="/chat"
            className="p-3 rounded-full transition-all hover:bg-blue-800 material-symbols-outlined focus:outline-none "
          >
            chat
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
