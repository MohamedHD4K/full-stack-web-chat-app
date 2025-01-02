import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers/router.js";
import cors from "cors";
import { app, server , io } from "./lib/socket.js";

dotenv.config();

const port = process.env.PORT || 3001;
const url = process.env.URL;

app.use(cors());
app.use(router);
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

mongoose
  .connect(url)
  .then(() => console.log("connected"))
  .catch(() => console.log("Err"));

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
