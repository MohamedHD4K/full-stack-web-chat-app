import { jwtDecode } from "jwt-decode";

const key = "x-token-auth";

const setToken = (token) => localStorage.setItem(key, token);
const getToken = () => localStorage.getItem(key);
const removeToken = () => localStorage.removeItem(key);
const getUser = () => {
  let token = getToken(key);
  return token && jwtDecode(token);
};
    
const auth = { setToken, getToken, removeToken , getUser };

export default auth;
