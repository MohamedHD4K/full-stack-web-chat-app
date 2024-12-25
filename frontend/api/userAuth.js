import axios from "axios";

const api = "http://localhost:3000";

const post_user = (data) => axios.post(`${api}/user`, data);

const post_auth = (data) => axios.post(`${api}/auth`, data);

const get_users = () => axios(`${api}/users`)

const UserAuth = { post_user , post_auth , get_users };

export default UserAuth;