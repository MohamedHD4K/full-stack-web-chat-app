const Bottom = ({ onSend, onImoje, onUploade, onChange, message }) => {
  return (
    <div className="p-3 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="p-2 flex items-center">
        <span
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px"
          }}
          onClick={onImoje}
          className="material-symbols-outlined transition-all text-gray-600 dark:text-gray-300 border-l border-y 
            border-gray-300 dark:border-gray-600 p-2 px-3 hover:bg-gray-700 dark:bg-gray-700
          dark:hover:bg-gray-600 hover:text-white cursor-pointer "
        >
          mood
        </span>
        <input
          onChange={onChange}
          type="text"
          value={message.text}
          placeholder="Search Here..."
          className="grow text-sm rounded-r-full border no-border dark:bg-gray-800 border-indigo-800 dark:border-gray-600
           dark:text-white p-2.5 transition-all"
        />
        <span
          style={{
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px"
          }}
          onClick={onUploade}
          className="material-symbols-outlined transition-all text-gray-600 dark:text-gray-300 border-r border-y 
            border-gray-300 dark:border-gray-600 p-2 px-3 dark:bg-gray-700
          dark:hover:bg-gray-600 hover:bg-gray-700 hover:text-white cursor-pointer"
        >
          attach_file
        </span>
        <span
          onClick={onSend}
          className="material-symbols-outlined transition-all text-white p-1 bg-gray-700 ml-3
          text-xl px-2 rounded-xl hover:bg-gray-800 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600 "
        >
          send
        </span>
      </div>
    </div>
  );
};

export default Bottom;
