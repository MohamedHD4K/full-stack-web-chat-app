import ListItem from "../ListItem";

const Connetions = () => {
  const list = ["item1", "item2", "item3", "item4" , "item1", "item2", "item3", "item4"];

  return (
    <li
      style={{ width: "40%" }}
      className="w-full border bg-gray-50"
    >
      <ListItem user="user" />
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

      <ul style={{ height: "73vh" }} className="overflow-y-scroll">
        <hr />
        {list.map((item, index) => (
          <li className="border-b-2" key={item}>
            <ListItem username={item} alert={index} />
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Connetions;
