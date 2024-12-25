import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";

const Chats = () => {
  return (
    <li className="flex flex-col justify-between w-full ">
      <Top />
      <Middle />
      <Bottom />
    </li>
  );
};

export default Chats;
