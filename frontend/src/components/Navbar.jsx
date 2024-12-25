import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div
      className="flex flex-col gap-6 min-h-screen items-center p-3 bg-indigo-700 text-white"
      style={{ height: "100vh", width: "4rem" }}
    >
      <img
        src="icon.ico"
        alt="Avatar"
        className="image"
        style={{ width: "2rem", height: "2rem" }}
      />

      <ul className="flex flex-col h-full gap-4 items-center">
        <li>
          <Link
            to="/register"
            className="rounded bg-blue-800 text-xs flex flex-col justify-center
             items-center transition-all hover:bg-blue-900 focus:outline-none w-14 p-1"
          >
            <span className="material-symbols-outlined text-lg">person</span>
            <span>Sign up</span>
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="rounded bg-blue-800 text-xs flex flex-col justify-center
             items-center transition-all hover:bg-blue-900 focus:outline-none w-14 p-1"
          >
            <span className="material-symbols-outlined text-lg">login</span>
            <span>Log in</span>
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className="rounded bg-blue-800 text-xs flex flex-col justify-center
             items-center transition-all hover:bg-blue-900 focus:outline-none w-14 p-1"
          >
            <span className="material-symbols-outlined text-lg">group</span>
            <span>Users</span>
          </Link>
        </li>
        {user && (
          <li>
            <Link
              to="/chat"
              className="rounded bg-blue-800 text-xs flex flex-col justify-center
             items-center transition-all hover:bg-blue-900 focus:outline-none w-14 p-1"
            >
              <span className="material-symbols-outlined text-lg">forum</span>
              <span>Chat</span>
            </Link>
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
              style={{ width: "2.5rem", height: "2.5rem" }}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
