const ListItem = ({ alert, onClick, type, user, username }) => {
  return (
    <div
      onClick={() => onClick(user)}
      className="flex gap-4 p-3 hover:bg-gray-100 dark:bg-gray-900
      cursor-pointer transition-all dark:hover:bg-gray-700"
    >
      {/* Avatar */}
      <div style={{ width: "4rem", height: "3rem" }}>
      <img
        src={user.image || "avatar.png"}
        alt="Avatar"
        className="image rounded-full"
        style={{ width: "3rem", height: "3rem" }}
      />
      </div>

      {/* User Info */}
      <div className="flex flex-col w-full justify-between">
        <div className="flex w-full justify-between items-center">
          <p className="font-black text-gray-800 dark:text-gray-200">
            {username || "username"}
          </p>
          
          {/* Edit Icon or Time */}
          {type ? (
            <span
              className="material-symbols-outlined text-base text-gray-500 dark:text-gray-300
                hover:bg-gray-600 hover:text-white cursor-pointer px-1 rounded-full"
            >
              edit
            </span>
          ) : (
            <span className="text-xs text-gray-500 dark:text-gray-400">{"10:45 AM"}</span>
          )}
        </div>

        <div className="flex w-full justify-between items-center">
          <p
            className="text-xs text-gray-600 truncate dark:text-gray-400"
            style={{ width: "10rem" }}
          >
            {"usernamedadata dwadaw"}
          </p>

          {/* Alert Badge */}
          {!type && (
            <span className="text-xs text-white rounded-full text-center p-0.5 px-1.5 bg-gray-600 dark:bg-gray-500">
              {alert || "2"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
