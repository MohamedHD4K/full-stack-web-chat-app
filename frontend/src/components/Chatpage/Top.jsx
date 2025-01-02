const Top = ({ user, onOpen }) => {
  return (
    <div className="p-3 border-b flex gap-4 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div style={{ width: "3.3rem", height: "3rem" }}>
        <img
          src={user.image || "avatar.png"}
          alt="Avatar"
          className="image rounded-full cursor-pointer"
          onClick={onOpen}
        />
      </div>
      <div className="flex items-center w-full justify-between">
       <div>
       <p
          className="text-gray-800 font-medium cursor-pointer dark:text-gray-200"
          onClick={onOpen}
        >
          {user.username || "Username"}
        </p>
        <p
          className="text-sm text-gray-600 truncate cursor-pointer dark:text-gray-400"
          onClick={onOpen}
        >
          {user.bio || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, exercitatione"}
        </p>
       </div>
        <div className="flex gap-2">
          <span
            className="transition-all material-symbols-outlined text-gray-500 hover:text-gray-800
          dark:text-gray-300 dark:hover:text-gray-400 rounded-full p-1 cursor-pointer"
          >
            search
          </span>
          <span
            className="transition-all material-symbols-outlined text-gray-500 hover:text-gray-800
          dark:text-gray-300 dark:hover:text-gray-400 rounded-full p-1 cursor-pointer"
          >
            notifications
          </span>
          <span
            className="transition-all material-symbols-outlined text-gray-500 hover:text-gray-800
          dark:text-gray-300 dark:hover:text-gray-400 rounded-full p-1 cursor-pointer"
            onClick={onOpen}
          >
            info
          </span>
        </div>
      </div>
    </div>
  );
};

export default Top;
