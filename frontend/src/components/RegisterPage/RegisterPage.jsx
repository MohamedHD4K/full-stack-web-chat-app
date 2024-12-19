import { useState } from "react";
import Input from "../Input";
import { Link } from "react-router-dom";

function Register() {
  const [value, setValue] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    image: "",
  });

  const handelChanges = ({ target }) => {
    setValue({ ...value, [target.id]: target.value });
  };

  return (
    <div
      style={{ height: "92vh" }}
      className="flex min-h-screen items-center justify-center bg-gray-100"
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register
        </h2>
        <form>
          {/* Username */}
          <Input
            type="text"
            placeholder="Enter your username"
            id="username"
            value={value.username}
            onChange={handelChanges}
            title="Username"
          />
          {/* Email */}
          <Input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={value.email}
            onChange={handelChanges}
            title="Email"
          />
          {/* Password */}
          <Input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={value.password}
            onChange={handelChanges}
            title="Password"
          />
          {/* Phone Number */}
          <Input
            type="number"
            placeholder="Enter your phone number"
            id="phone"
            value={value.phone}
            onChange={handelChanges}
            title="Phone number"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white transition-all py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none p-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
