const ListItem = ({
  avatar,
  username,
  lastMessage,
  alert,
  history,
  onClick,
  onEdit,
  user = null,
  ...res
}) => {
  return (
    <div {...res} onClick={onClick}  className="flex gap-4 p-3">
      <img
        src={avatar || "avatar.png"}
        alt="Avatar"
        className="image rounded-full"
        style={{ width: "3rem" }}
      />
      <div className="flex flex-col w-full justify-between">
        <div className="flex w-full justify-between items-center">
          <p className="font-black text-blue-600">{username || "Name"}</p>
          {user ? (
            <span
            onClick={onEdit}
              className="material-symbols-outlined text-base text-gray-500 
            hover:bg-gray-600 hover:text-white cursor-pointer px-1 rounded-full"
            >
              edit
            </span>
          ) : (
            <span className="text-xs text-gray-500">
              {history || "10:45 AM"}
            </span>
          )}
        </div>
        <div className="flex w-full justify-between items-center">
          <p
            className="text-xs text-gray-600 truncate"
            style={{ width: "10rem" }}
          >
            {lastMessage || "data here is the lastMessage data here is "}
          </p>
          {user ? (
            ""
          ) : (
            <span className="text-xs text-white rounded-full text-center p-0.5 px-1.5 bg-indigo-600">
              {alert || "2"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
