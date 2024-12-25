import express from "express";
import UserAuth from "../controllers/userController.js";

const router = express.Router();

router.post("/user", UserAuth.post_user);

router.post("/auth", UserAuth.post_auth);

router.get("/users", UserAuth.get_users);

export default router;
