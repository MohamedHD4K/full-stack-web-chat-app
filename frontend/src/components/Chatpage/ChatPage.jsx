import { useContext, useEffect, useState } from "react";
import Chats from "./Chats";
import Connetions from "./Connetions";
import Profile from "./Profile";
import UserContext from "../../contexts/UserContext";

const ChatPage = () => {
  const { user } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Chat";
  }, []);

  const handleShowUser = (user) => {
    setSelectedUser(user);
  };

  const handleOpen = () => {
    setOpen((pre) => !pre);
  };

  return (
    <ul className="flex w-full dark:bg-gray-900">
      <Connetions user={user} handleShowUser={handleShowUser} />
      {selectedUser ? (
        <Chats className="" selectedUser={selectedUser} onOpen={handleOpen} />
      ) : (
        <div
          className="flex justify-center items-center w-full text-2xl font-bold text-gray-800 dark:text-gray-300"
        >
          select user to start chatting
        </div>
      )}
      {(selectedUser && open) && <Profile user={selectedUser} />}
    </ul>
  );
};

export default ChatPage;
