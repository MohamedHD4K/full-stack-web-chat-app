import { useContext, useEffect, useState } from "react";
import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";
import { io } from "socket.io-client";
import UserContext from "../../contexts/UserContext";
import ConversationAuth from "../../../api/conversation.auth";

const socket = io("http://localhost:3000");

const Chats = ({ selectedUser, onOpen }) => {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [type, setSype] = useState(true);
  const [message, setMessage] = useState({
    senderId: user._id,
    receiverId: selectedUser?._id || "",
    text: "",
    url:type
  });
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.text.trim()) {
      const newMessage = { ...message };

      setMessages((prev) => [...prev, newMessage]);

      socket.emit("message", newMessage);

      setMessage((prev) => ({ ...prev, text: "" }));

      await ConversationAuth.get_conversation({
        senderId: user._id,
        receiverId: selectedUser._id
      })
        .then((res) => setMessages(res.data))
        .catch((err) => console.error("Error fetching conversations:", err));
    }
  };

  const handleChanges = ({ target }) => {
    setMessage({
      senderId: user._id,
      receiverId: selectedUser._id,
      text: target.value,
      url : type
    });
  };
console.log(type);
  useEffect(() => {
    if (selectedUser) {
      socket.emit("join", {
        userId: user._id,
        chatWithUserId: selectedUser._id
      });

      socket.on("previousMessages", (data) => {
        setMessages(data);
      });
    }

    return () => {
      socket.off("previousMessages");
    };
  }, [selectedUser, user._id]);

  useEffect(() => {
    ConversationAuth.get_conversation({
      senderId: user._id,
      receiverId: selectedUser._id
    })
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching conversations:", err));
  }, [message, selectedUser._id, user._id]);

  return (
    <li
      className=" flex flex-col justify-between w-full"
      style={{ maxHeight: "100vh" }}
    >
      <Top user={selectedUser} onOpen={onOpen} />
      <Middle user={user} selectedUser={selectedUser} messages={messages} />
      <Bottom
        onUploade={() => setSype(prev => !prev)}
        onChange={handleChanges}
        message={message}
        type={type}
        onSend={handleSendMessage}
      />
    </li>
  );
};

export default Chats;
