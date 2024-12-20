const Middle = ({ avatar }) => {
  let content = [
    "about",
    "content",
    "user data user",
    "Lorem ipsum dolor sit ",
    "user data user",
    "about",
    "content",
    "user data user",
    "Lorem ipsum dolor ",
    "user data user"
  ];

  return (
    <div
      className="p-3 h-full flex flex-col gap-3 overflow-y-scroll"
      style={{ maxHeight: "70vh" }}
    >
      {content.map((item, index) => (
        <div
          key={index}
          className={`flex ${
            item !== "user data user" ? "justify-start" : "justify-end"
          }`}
        >
          <p
            className={`inline-block text-sm p-3 rounded ${
              item !== "user data user"
                ? "bg-gray-300 text-black"
                : "bg-indigo-500 text-white"
            }`}
            style={
              item !== "user data user"
                ? { maxWidth: "400px", borderTopLeftRadius: "0" }
                : { maxWidth: "400px", borderTopRightRadius: "0" }
            }
          >
            {item || "content"}
            <p
              style={{ fontSize: "11px" }}
              className={`font-medium ${
                item !== "user data user" && "flex justify-end"
              }`}
            >
              10:35AM
            </p>
          </p>
          {item === "user data user" && (
            <img
              src={avatar || "avatar.png"}
              alt="avatar"
              className="image rounded-full ml-2"
              style={{ width: "2rem", height: "2rem" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Middle;
