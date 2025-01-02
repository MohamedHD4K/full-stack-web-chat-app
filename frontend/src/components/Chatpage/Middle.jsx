import { useEffect, useRef } from "react";

const Middle = ({ messages, user, selectedUser }) => {
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      const { lastElementChild } = containerRef.current;
      if (lastElementChild) {
        lastElementChild.scrollIntoView();
      }
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className="p-3 flex flex-col gap-2 overflow-y-scroll dark:bg-gray-800"
      style={{ height: "80vh" }}
    >
      {messages.length === 0 ? (
        <div
          className="flex justify-center items-center text-2xl font-bold text-gray-800 dark:text-gray-300"
          style={{ height: "80vh" }}
        >
          No messages yet.
        </div>
      ) : (
        messages[0]?.messages?.map((message, index) => (
          <div
            ref={containerRef}
            key={index}
            className={`flex ${
              message.sender === user._id ? "justify-start" : "justify-end"
            }`}
          >
            <div>
              <p
                className={`inline-block text text-sm p-3 rounded-xl ${
                  message.sender === user._id
                    ? "bg-gray-300 text-black dark:bg-gray-700 dark:text-white"
                    : "bg-gray-500 text-white dark:bg-gray-900"
                }`}
                style={{
                  maxWidth: "400px",
                  borderTopLeftRadius:
                    message.sender === user._id ? "0" : "16px",
                  borderTopRightRadius:
                    message.sender !== user._id ? "0" : "16px"
                }}
              >
                {message.text || "No content"}
              </p>
              <p
                style={{ fontSize: "11px" }}
                className={`font-medium dark:text-gray-400 ${
                  message.sender === user._id ? "text-right" : "text-left"
                }`}
              >
                {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </p>
            </div>
            {message.sender !== user._id && (
              <img
                src={selectedUser.image || "avatar.png"}
                alt="avatar"
                className="image rounded-full ml-2"
                style={{ width: "2rem", height: "2rem" }}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Middle;
