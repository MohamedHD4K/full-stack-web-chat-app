import { useEffect, useState } from "react";
import UserAuth from "../../../api/user.auth";
import { ToastContainer, toast } from "react-toastify";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleInputChange = (e) => {
    const firstChar = e.target.value;
    setSearch(firstChar);

    const filtered = users.filter((user) =>
      user.username.toLowerCase().startsWith(firstChar.toLowerCase().trim())
    );
    setFilteredUsers(filtered);
  };

  const handleDelete = async (id) => {
    try {
      await UserAuth.delete_user(id);
      toast.success("User deleted successfully");

      const response = await UserAuth.get_users();
      setUsers(response.data);
      setFilteredUsers(
        search
          ? response.data.filter((user) =>
              user.username.toLowerCase().startsWith(search.toLowerCase())
            )
          : response.data
      );
    } catch (error) {
      console.error(error);
      toast.error("Error: Could not delete the user");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserAuth.get_users();
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col w-full`}
    >
      {/* Search Input */}
      <div className="p-3 flex items-center">
        <span
          style={{
            borderTopLeftRadius: "9999px",
            borderBottomLeftRadius: "9999px"
          }}
          className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-lg border-l border-y transition-colors
            border-gray-300 dark:border-gray-600 p-1 px-2.5 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white
            cursor-pointer rounded-l-full"
        >
          search
        </span>
        <input
          style={{
            borderTopRightRadius: "9999px",
            borderBottomRightRadius: "9999px",
          }}
          onChange={handleInputChange}
          value={search}
          type="text"
          placeholder="Search by first character..."
          className="grow text-sm rounded-r-full border border-gray-300 dark:border-gray-600 
          bg-white no-border focus-visible:outline-none
          dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors"
        />
      </div>

      {/* Users List */}
      <div className="border dark:border-gray-600 p-2 m-4 gap-3 rounded-lg shadow-md h-full bg-white dark:bg-gray-800">
        <ul
          className="flex flex-wrap gap-3 p-2 overflow-y-scroll"
          style={{ maxHeight: "87vh" }}
        >
          {loading ? (
            <div
              className="flex justify-center items-center text-2xl w-full font-bold"
              style={{ height: "80vh" }}
            >
              Loading...
            </div>
          ) : (
            filteredUsers.map((user) => (
              <li
                key={user._id}
                className="border dark:border-gray-700 rounded shadow flex flex-col gap-3 relative bg-white dark:bg-gray-900"
              >
                {/* Delete Button */}
                <div
                  className="material-symbols-outlined absolute bg-gray-200 dark:bg-gray-700 text-lg px-1 rounded-full dark:text-white
                    text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors hover:bg-gray-300
                    dark:hover:bg-gray-800 cursor-pointer"
                  style={{ right: ".2rem", top: ".2rem" }}
                  onClick={() => handleDelete(user._id)}
                >
                  close
                </div>

                {/* User Avatar */}
                <img
                  src={user.image || "avatar.png"}
                  alt="user"
                  className="image rounded"
                  style={{ width: "10rem", height: "10rem" }}
                />

                {/* User Info */}
                <div className="flex flex-col p-2 gap-2">
                  <p
                    className="truncate font-medium"
                    style={{ maxWidth: "130px" }}
                  >
                    {user.username || "Username"}
                  </p>
                  <p
                    className="font-normal text-gray-800 dark:text-gray-400 text-sm truncate"
                    style={{ maxWidth: "130px" }}
                  >
                    {user.bio || "No bio available"}
                  </p>
                  <button
                    className="bg-gray-700 dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-700 transition-colors flex justify-center 
                      items-center gap-2 text-white p-2 px-3 text-sm rounded"
                  >
                    <span className="material-symbols-outlined text-sm">
                      favorite
                    </span>
                    <span>Add To Friends</span>
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UsersPage;
