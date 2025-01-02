import axios from "axios";
import auth from "./auth";

axios.defaults.headers.common["x-token-auth"] = auth.getToken() || null;
const api = "http://localhost:3000";

const app = axios;

export { app, api };
