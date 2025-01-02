import { Link } from "react-router-dom";
import auth from "../../api/auth";

const Navbar = ({ user, children }) => {

  return (
    <div
      className="flex flex-col gap-6 min-h-screen items-center py-3 bg-gray-700 text-white dark:bg-gray-800 dark:text-gray-200"
      style={{ height: "100vh", width: "3rem" }}
    >
      <img
        src="icon.ico"
        alt="Avatar"
        className="image"
        style={{ width: "2rem", height: "2rem" }}
      />

      <ul className="flex flex-col h-full gap-4 items-center">
        <p style={{ width: "80%" }} className="border-t border-gray-500" />
        <li className="transition-colors hover:bg-gray-800 dark:hover:bg-gray-700 rounded-lg">
          {children}
        </li>
        <li>
          <Link
            to="/register"
            className="rounded-lg justify-center material-symbols-outlined text-lg
             transition-colors hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none p-1 px-2.5"
          >
            person
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="rounded-lg justify-center material-symbols-outlined text-lg
             transition-colors hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none p-1 px-2.5"
          >
            login
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className="rounded-lg justify-center material-symbols-outlined text-lg
             transition-colors hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none p-1 px-2.5"
          >
            group
          </Link>
        </li>
        {user && (
          <li>
            <Link
              to="/chat"
              className="rounded-lg justify-center material-symbols-outlined text-lg
             transition-colors hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none p-1 px-2.5"
            >
              forum
            </Link>
          </li>
        )}
        <p style={{ width: "80%" }} className="border-t border-gray-500" />
        {user && (
          <li
            onClick={() => {
              auth.removeToken();
              window.location ="/login"
            }}
            className="rounded-lg justify-center material-symbols-outlined text-lg cursor-pointer
             transition-colors hover:bg-red-800 dark:hover:bg-red-800 focus:outline-none p-1 px-2.5"
          >
            logout
          </li>
        )}
      </ul>

      {user && (
        <div className="flex flex-col justify-center items-center">
          <Link to="/" className="focus:outline-none">
            <img
              src={user.image || "avatar.png"}
              alt="Avatar"
              className="image rounded-full"
              style={{ width: "2rem", height: "2rem" }}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
