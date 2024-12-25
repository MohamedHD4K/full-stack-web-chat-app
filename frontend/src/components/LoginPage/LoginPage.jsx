import { useEffect, useState } from "react";
import Input from "../Input";
import { Link } from "react-router-dom";
import UserAuth from "../../../api/userAuth";
import auth from "../../../api/auth";

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
    e.preventDefault()
    try {
      let response = await UserAuth.post_auth(value)
      console.log(response);
      const token = response.data["x-token-auth"]
      auth.setToken(token)
      window.location = "/"
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-gray-100"
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
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
            className="w-full bg-indigo-600 text-white transition-all py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 ">
          Dont have an account?
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none p-2"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
