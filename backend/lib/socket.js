import { Server } from "socket.io";
import http from "http";
import express from "express";
import Conversation from "../models/conversation.model.js"

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"]
  }
});


io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("message", async ({ senderId, receiverId, text }) => {
    try {
      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });

      if (!conversation) {
        conversation = new Conversation({
          participants: [senderId, receiverId],
          messages: [],
        });
      }


      const newMessage = { sender: senderId, text , hasSeen:false };
      conversation.messages.push(newMessage);
      await conversation.save();

      io.to(receiverId).emit("message", newMessage);
    } catch (error) {
      console.error("Error handling message:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

export { io, server, app };
