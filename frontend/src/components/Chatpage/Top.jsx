const Top = ({ image, username }) => {
  return (
    <div className="p-3 border-b flex gap-4 shadow  bg-gray-50">
      <div>
        <img
          src={image || "avatar.png"}
          alt="Avatar"
          className="image rounded-full"
          style={{ width: "3rem" }}
        />
      </div>
      <div className="flex items-center w-full justify-between">
        <p className="text-blue-600 font-medium">{username || "Username"}</p>
        <div className="flex gap-2">
          <span
            className="transition-all material-symbols-outlined text-gray-500 
          hover:text-gray-800 rounded-full p-1 cursor-pointer"
          >
            search
          </span>
          <span
            className="transition-all material-symbols-outlined text-gray-500 
          hover:text-gray-800 rounded-full p-1 cursor-pointer"
          >
            favorite
          </span>
          <span
            className="transition-all material-symbols-outlined text-gray-500 
          hover:text-gray-800 rounded-full p-1 cursor-pointer"
          >
            notifications
          </span>
        </div>
      </div>
    </div>
  );
};

export default Top;
