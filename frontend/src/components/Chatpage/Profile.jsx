const Profile = ({ avatar, username, bio, onAdd , onLogout }) => {
  let items = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item3",
    "item4",
    "item5"
  ];
  return (
    <li
      style={{ height: "92vh", width: "40%" }}
      className="w-full border bg-gray-50 flex flex-col items-center gap-3 px-4"
    >
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
      <img
        src={avatar || "avatar.png"}
        alt="Avatar"
        className="image rounded-full"
        style={{ width: "5rem", height: "5rem" }}
      />
      <p className="font-bold text-lg text-blue-600">
        {username || "Username"}
      </p>
      <p className="text-center text-sm">
        {bio ||
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, exercitationem!"}
      </p>
      <div className="w-full flex flex-col items-center p-1 border rounded overflow-y-scroll">
        <ul className="flex flex-col w-full gap-3 p-2">
          {items.map((item) => (
            <li key={item} className="border rounded p-1 flex gap-3">
              <img
                src={item.img || "avatar.png"}
                alt="item"
                className="image rounded"
                style={{ width: "3rem", height: "3rem" }}
              />
              <div className="flex flex-col gap-1">
                <p
                  className="truncate font-medium text-sm"
                  style={{ maxWidth: "270px" }}
                >
                  {item.img || "ImageName.png"}
                </p>
                <p
                  className="font-normal text-xs truncate"
                  style={{ maxWidth: "270px" }}
                >
                  {item.history || "10:45AM"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={onAdd}
        className="bg-indigo-600 transition-all text-white w-full mt-1 mx-2 p-2 rounded text-sm hover:bg-blue-800"
      >
        Add to Friends
      </button>
      <button
        onClick={onLogout}
        className="bg-red-600 transition-all text-white w-full mb-2 mx-2 p-2 rounded text-sm hover:bg-red-800"
      >
        Logout
      </button>
    </li>
  );
};

export default Profile;
