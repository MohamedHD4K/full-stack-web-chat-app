import {app , api} from "./http";

const post_user = (data) => app.post(`${api}/user`, data);

const post_auth = (data) => app.post(`${api}/auth`, data);

const get_users = () => app(`${api}/users`);

const put_user = (data) => app.put(`${api}/user`, data);

const delete_user = (data) => app.delete(`${api}/user/${data}`);

const UserAuth = { post_user, post_auth, get_users, put_user, delete_user };

export default UserAuth;
