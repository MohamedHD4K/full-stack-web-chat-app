import { useEffect, useState } from "react";
import ListItem from "../ListItem";
import UserAuth from "../../../api/user.auth";

const Connections = ({ user, handleShowUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  let currentUser = user;

  useEffect(() => {
    try {
      const response = UserAuth.get_users();
      response.then((res) => {
        setUsers(res.data);
        setLoading(true);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <li
      style={{ height: "100vh", width: "20rem" }}
      className="w-full border-r dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow"
    >
      {/* Current User */}
      <ListItem type="user" username={user.username} user={user} />

      {/* Search Bar */}
      <div className="p-3 flex items-center">
        <span
          style={{
            borderTopLeftRadius: "9999px",
            borderBottomLeftRadius: "9999px"
          }}
          className="material-symbols-outlined transition-all text-gray-600 dark:text-gray-300 text-lg 
            border-l border-y border-gray-300 dark:border-gray-700 p-1 px-2.5 hover:bg-gray-700 hover:text-white cursor-pointer"
        >
          search
        </span>
        <input
          style={{
            borderTopRightRadius: "9999px",
            borderBottomRightRadius: "9999px"
          }}
          type="text"
          placeholder="Search Here..."
          className="grow text-sm rounded-r-full border border-gray-300 dark:border-gray-700 
            bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-300 transition-all"
        />
        <button
          className="material-symbols-outlined ml-2 text-white text-sm bg-gray-700 p-1 px-2
        hover:bg-gray-800 transition-all rounded"
          style={{ bottom: "1rem", right: "2rem" }}
        >
          add
        </button>
      </div>

      {/* Users List */}
      <ul style={{ height: "81vh" }} className="overflow-y-scroll">
        <hr className="border-gray-300 dark:border-gray-700" />
        {loading ? (
          users.map((user, index) => (
            <li
              className="border-b-2 bg-white dark:bg-gray-800 dark:border-gray-700"
              key={user._id}
            >
              <ListItem
                user={user}
                username={
                  user.username === currentUser.username ? "You" : user.username
                }
                alert={index}
                onClick={handleShowUser}
              />
            </li>
          ))
        ) : (
          <div
            className="flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-gray-300"
            style={{ height: "80vh" }}
          >
            Loading...
          </div>
        )}
      </ul>
    </li>
  );
};

export default Connections;
