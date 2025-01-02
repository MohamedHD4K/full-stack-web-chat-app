import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  hasSeen: { type: Boolean },
  timestamp: { type: Date, default: Date.now },
});

const conversationSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  ],
  messages: [messageSchema]
});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
