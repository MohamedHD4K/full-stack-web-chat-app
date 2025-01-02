import express from "express";
import UserAuth from "../controllers/user.controller.js";
import middlewares from "../middlewares/auth.middlewares.js";
import Conversations from "../controllers/conversations.controller.js";

const router = express.Router();

router.post("/user", UserAuth.post_user);

router.post("/auth", UserAuth.post_auth);

router.get("/users", UserAuth.get_users);

router.put("/user", middlewares, UserAuth.put_user);

router.delete("/user/:id", UserAuth.delete_user);

router.get("/chat", Conversations.get_conversations);

export default router;
