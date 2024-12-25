import { useContext, useEffect, useState } from "react";
import Chats from "./Chats";
import Connetions from "./Connetions";
import Profile from "./Profile";
import UserContext from "../../contexts/UserContext";

const ChatPage = () => {
  const { user } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    document.title = "Chat";
  }, []);

  const handleShowUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <ul className="flex w-full">
      <Connetions user={user} handleShowUser={handleShowUser} />
      <Chats user={user} />
      {selectedUser && <Profile user={selectedUser} />}
    </ul>
  );
};

export default ChatPage;
