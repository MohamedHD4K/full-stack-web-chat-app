import Register from "./components/RegisterPage/RegisterPage";
import Home from "./components/HomePage/HomePage";
import Login from "./components/LoginPage/LoginPage";
import Navbar from "./components/Navbar";
import Chat from "./components/Chatpage/ChatPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
