const Bottom = ({onSend , onImoje , onUploade}) => {
  return (
    <div className="p-3 border-t  bg-gray-50">
      <div className="p-3 flex items-center">
        <span
          style={{
            borderTopLeftRadius: "9999px",
            borderBottomLeftRadius: "9999px"
          }}
          onClick={onImoje}
          className="material-symbols-outlined transition-all text-gray-600  border-l border-y 
            border-gray-300 p-2 px-3 hover:bg-blue-700 hover:text-white cursor-pointer"
        >
          mood
        </span>
        <input
          type="text"
          placeholder="Search Here..."
          className="grow text-sm rounded-r-full border border-gray-300 p-2.5 transition-all"
        />
        <span
          style={{
            borderTopRightRadius: "9999px",
            borderBottomRightRadius: "9999px"
          }}
          onClick={onUploade}
          className="material-symbols-outlined transition-all text-gray-600 border-r border-y 
            border-gray-300 p-2 px-3 hover:bg-blue-700 hover:text-white cursor-pointer"
        >
          attach_file
        </span>
        <span onClick={onSend} className="material-symbols-outlined transition-all text-white p-1 bg-blue-700 ml-3
        text-xl px-2 rounded-full hover:bg-blue-800 cursor-pointer">
          send
        </span>
      </div>
    </div>
  );
};

export default Bottom;
