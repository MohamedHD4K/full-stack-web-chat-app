import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";

const Chats = () => {
  return (
    <li style={{ height: "92vh", width: "100%" }} className="w-full flex flex-col justify-between">
      <Top />
      <Middle />
      <Bottom />
    </li>
  );
};

export default Chats;
