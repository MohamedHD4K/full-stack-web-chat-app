const ChatPage = () => {
  const list = ["item1", "item2", "item3", "item4"];

  return (
    <div>
      <ul className="flex justify-between">
        <li style={{ height: "92vh" , width:"50%"}} className="w-full bg-yellow-300">
        <div className="bg-blue-800 border-b-2 border-x-indigo-800-600 p-3 ">The title</div>
          <ul style={{ maxHeight: "85vh"}} className="overflow-y-scroll">
            {list.map((item) => (
              <li
                className="bg-orange-500 border-b-2 border-red-600 p-3"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </li>
        <li style={{ height: "92vh"  }} className="w-full">
          second
        </li>
        <li style={{ height: "92vh",  width:"50%" }} className="w-full">
          therd
        </li>
      </ul>
    </div>
  );
};

export default ChatPage;
