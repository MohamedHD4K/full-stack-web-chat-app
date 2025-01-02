import { app, api } from "./http";

const get_conversation = (data) => app.get(`${api}/chat`, { params: data });

const ConversationAuth = { get_conversation };
export default ConversationAuth;
