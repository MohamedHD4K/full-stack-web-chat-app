import { useEffect, useState } from "react";
import ListItem from "../ListItem";
import UserAuth from "../../../api/userAuth";

const Connetions = ({ user, handleShowUser }) => {
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
      className="w-full border bg-gray-50 shadow"
    >
      <ListItem type="user" username={user.username} user={user} />
      <div className="p-3 flex items-center">
        <span
          style={{
            borderTopLeftRadius: "9999px",
            borderBottomLeftRadius: "9999px"
          }}
          className="material-symbols-outlined transition-all text-gray-600 text-lg border-l border-y 
            border-gray-300 p-1 px-2.5 hover:bg-blue-700 hover:text-white cursor-pointer"
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
          className="grow text-sm rounded-r-full border border-gray-300 transition-all"
        />
        <button
          className="material-symbols-outlined ml-2 text-white text-sm bg-blue-700 p-1 px-2
        hover:bg-blue-800 transition-all rounded"
          style={{ bottom: "1rem", right: "2rem" }}
        >
          add
        </button>
      </div>
      <ul style={{ height: "81vh" }} className="overflow-y-scroll">
        <hr />
        {loading ? (
          users.map((user, index) => (
            <li className="border-b-2 bg-white" key={user._id}>
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
            className="flex justify-center items-center text-2xl font-bold"
            style={{ height: "80vh" }}
          >
            Loading...
          </div>
        )}
      </ul>
    </li>
  );
};

export default Connetions;
