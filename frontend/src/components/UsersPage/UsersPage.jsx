import { useEffect, useState } from "react";
import UserAuth from "../../../api/userAuth";

const UsersPage = ({ onClose = () => alert("delete") }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className="bg-gray-100 flex flex-col w-full">
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
      </div>
      <div className="border p-2 m-4 gap-3 rounded-lg shadow-md h-full bg-white">
        <ul
          className="flex w-full gap-3 p-2 overflow-y-scroll"
          style={{ maxHeight: "87vh" }}
        >
          {loading ? (
            users.map((user, index) => (
              <li
                key={index}
                className="border rounded shadow flex flex-col gap-3 relative"
              >
                <div
                  className="material-symbols-outlined absolute bg-gray-200 text-lg px-1 rounded-full 
                  text-gray-500 hover:text-gray-600 transition-all hover:bg-gray-300 cursor-pointer"
                  style={{ right: ".2rem" }}
                  onClick={onClose}
                >
                  close
                </div>
                <img
                  src={user.image || "avatar.png"}
                  alt="user"
                  className="image rounded"
                  style={{ width: "12rem", height: "12rem" }}
                />
                <div className="flex flex-col p-2 gap-2">
                  <p
                    className="truncate font-medium "
                    style={{ maxWidth: "160px" }}
                  >
                    {user.username || "username"}
                  </p>
                  <p
                    className="font-normal text-gray-800 text-sm  truncate"
                    style={{ maxWidth: "160px" }}
                  >
                    {user.bio || "there is no bio here "}
                  </p>
                  <div>
                    <button className="bg-purple-700 hover:bg-purple-800 transition-all flex justify-center 
                    items-center gap-2 text-white p-2 px-3 text-sm rounded ">
                      <span className="material-symbols-outlined text-sm">
                        favorite
                      </span>
                      <span>Add To Friends</span>
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div
              className="flex justify-center items-center text-2xl w-full font-bold"
              style={{ height: "80vh" }}
            >
              Loading...
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
