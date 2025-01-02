import { useEffect, useState } from "react";
import Input from "../Input";
import { Link } from "react-router-dom";
import UserAuth from "../../../api/user.auth";
import auth from "../../../api/auth";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    image: ""
  });
  
  const handleChanges = ({ target }) => {
    setValue({ ...value, [target.id]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await UserAuth.post_auth(value);
      console.log(response);
      const token = response.data["x-token-auth"];
      auth.setToken(token);

      window.location = "/";
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <Input
            type="text"
            placeholder="Enter your username"
            id="username"
            value={value.username}
            onChange={handleChanges}
            title="Username"
          />
          {/* Password */}
          <Input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={value.password}
            onChange={handleChanges}
            title="Password"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-600 dark:bg-gray-700 text-white transition-all py-2 rounded-md
            hover:bg-gray-800 dark:hover:bg-gray-600 
            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Dont have an account?
          <Link
            to="/register"
            className="font-medium text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none p-2"
          >
            Register
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
