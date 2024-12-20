import Chats from "./Chats";
import Connetions from "./Connetions";
import Profile from "./Profile";

const ChatPage = () => {
  return (
    <div>
      <ul className="flex justify-between">
        <Connetions />
        <Chats />
        <Profile />
      </ul>
    </div>
  );
};

export default ChatPage;
