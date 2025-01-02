import Conversation from "../models/conversation.model.js";

const get_conversations = async (req, res) => {
  const query = req.query
  try {
    const conversations = await Conversation.find({
      participants: { $all: [query.receiverId, query.senderId] }
    });

    res.status(200).json(conversations);
  } catch (error) {
    console.error("Error fetching conversations:", error);
    res.status(500).json({ error: "Failed to fetch conversations" });
  }
};

const Conversations = { get_conversations };
export default Conversations;
