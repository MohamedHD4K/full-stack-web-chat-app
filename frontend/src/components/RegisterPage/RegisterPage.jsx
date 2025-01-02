import { useEffect, useState } from "react";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import UserAuth from "../../../api/user.auth";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const navigate = useNavigate()
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
      const response = await UserAuth.post_user(value);
      console.log("Response :", response);
      console.log("Data :", value);
      navigate("/login")
    } catch (error) {
      toast.error(error.response.data)
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
          Register
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
          {/* Email */}
          <Input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={value.email}
            onChange={handleChanges}
            title="Email"
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
          {/* Phone Number */}
          <Input
            type="number"
            placeholder="Enter your phone number"
            id="phone"
            value={value.phone}
            onChange={handleChanges}
            title="Phone number"
          />
          {/* Image */}
          <Input
            type="url"
            placeholder="Enter your Avatar image"
            id="image"
            value={value.image}
            onChange={handleChanges}
            title="Avatar Image"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-600 dark:bg-gray-700 text-white transition-all py-2 rounded-md
            hover:bg-gray-800 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?
          <Link
            to="/login"
            className="font-medium text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none p-2"
          >
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
