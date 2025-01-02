const Profile = ({ user }) => {
  let items = ["item1", "item2", "item3", "item4"];

  return (
    <li
      style={{ height: "100vh", width: "20rem" }}
      className="w-full border-l bg-gray-50 dark:bg-gray-900 flex flex-col items-center gap-3 px-4 
      justify-between shadow dark:border-gray-700"
    >
      {/* Search Bar */}
      <div className="p-3 flex items-center">
        <span
          style={{
            borderTopLeftRadius: "9999px",
            borderBottomLeftRadius: "9999px"
          }}
          className="material-symbols-outlined transition-all text-gray-600 dark:text-gray-300 text-lg border-l border-y 
            border-gray-300 dark:border-gray-700 p-1 px-2.5 hover:bg-gray-700 hover:text-white cursor-pointer"
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
      </div>

      {/* User Avatar and Info */}
      <img
        src={user.image || "avatar.png"}
        alt="Avatar"
        className="image rounded-full"
        style={{ width: "5rem", height: "5rem" }}
      />
      <p className="font-bold text-lg text-gray-600 dark:text-gray-300">
        {user.username || "Username"}
      </p>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        {user.bio ||
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, exercitationem!"}
      </p>

      {/* Item List */}
      <div className="w-full flex flex-col items-center p-1 border rounded overflow-y-scroll dark:border-gray-700">
        <ul className="flex flex-col w-full gap-3 p-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="border rounded p-1 flex gap-3 bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                src={item.img || "avatar.png"}
                alt="item"
                className="image rounded"
                style={{ width: "3rem", height: "3rem" }}
              />
              <div className="flex flex-col gap-1">
                <p
                  className="truncate font-medium text-sm text-gray-800 dark:text-gray-300"
                  style={{ maxWidth: "270px" }}
                >
                  {item.img || "ImageName.png"}
                </p>
                <p
                  className="font-normal text-xs truncate text-gray-600 dark:text-gray-400"
                  style={{ maxWidth: "270px" }}
                >
                  {item.history || "10:45AM"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Button */}
      <button className="bg-blue-600 transition-all text-white w-full mx-2 mb-3 p-2
      rounded text-sm hover:bg-blue-800 focus:outline-none flex justify-center items-center gap-3">
        Remove Friend
        <span className="text-sm material-symbols-outlined">do_not_disturb_on</span>
      </button>
    </li>
  );
};

export default Profile;
