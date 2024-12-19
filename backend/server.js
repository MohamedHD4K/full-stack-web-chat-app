import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers/router.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
const url = process.env.URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

mongoose
  .connect(url)
  .then(() => console.log("connected"))
  .catch(() => console.log("Err"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
