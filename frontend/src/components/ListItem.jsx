const ListItem = ({ alert, onClick, type, user , username }) => {
  
  return (
    <div
      onClick={() => onClick(user)}
      className="flex gap-4 p-3 hover:bg-gray-100 cursor-pointer transition-all"
    >
      <img
        src={user.image || "avatar.png"}
        alt="Avatar"
        className="image rounded-full"
        style={{ width: "3rem" }}
      />
      <div className="flex flex-col w-full justify-between">
        <div className="flex w-full justify-between items-center">
          <p className="font-black text-blue-600">
            {username || "username"}
          </p>
          {type ? (
            <span
              className="material-symbols-outlined text-base text-gray-500 
            hover:bg-gray-600 hover:text-white cursor-pointer px-1 rounded-full"
            >
              edit
            </span>
          ) : (
            <span className="text-xs text-gray-500">{"10:45 AM"}</span>
          )}
        </div>
        <div className="flex w-full justify-between items-center">
          <p
            className="text-xs text-gray-600 truncate"
            style={{ width: "10rem" }}
          >
            {"usernamedadata dwadaw"}
          </p>
          {!type && (
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
