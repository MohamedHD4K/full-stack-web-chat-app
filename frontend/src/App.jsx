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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setUser(auth.getUser() || null);
  }, []);
  

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <div className="flex">
        <Navbar user={user}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-200 p-1 px-2  focus:outline-none rounded text-lg material-symbols-outlined transition-colors"
            style={{ left: "2rem", bottom: "2rem" }}
          >
            {isDarkMode ? "light_mode" : "dark_mode"}
          </button>
        </Navbar>
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
