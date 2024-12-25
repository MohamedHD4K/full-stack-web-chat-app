import Register from "./components/RegisterPage/RegisterPage";
import Home from "./components/HomePage/HomePage";
import Login from "./components/LoginPage/LoginPage";
import Navbar from "./components/Navbar";
import Chat from "./components/Chatpage/ChatPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import auth from "../api/auth";
import UserContext from "./contexts/UserContext";
import UsersPage from "./components/UsersPage/UsersPage";

function App() {
  const [user, setUser] = useState({
    username: "",
    bio: "",
    email: "",
    image: "avatar.png",
    phone: ""
  });

  useEffect(() => {
    setUser(auth.getUser() || null);
  }, []);

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <div className="flex">
        <Navbar user={user} />
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
