import { useContext, useEffect, useState } from "react";
import Input from "../Input";
import UserAuth from "../../../api/user.auth";
import UserContext from "../../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";

const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [value, setValue] = useState({
    username: "",
    bio: "",
    email: "",
    image: "",
    phone: "",
    id: ""
  });

  const handleChanges = ({ target }) => {
    setValue({ ...value, [target.id]: target.value });
  };

  useEffect(() => {
    user &&
      setValue({
        username: user.username,
        bio: user.bio,
        email: user.email,
        image: user.image,
        phone: user.phone,
        id: user._id
      });
  }, [user]);

  const handleUpdate = async () => {
    try {
      let response = await UserAuth.put_user(value);
      setUser(response.data);
      toast.success("Updated")
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div
      style={{ width: "40%" }}
      className="border p-4 m-4 flex flex-col gap-3 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-col gap-3">
        <img
          src={value.image || "avatar.png"}
          alt="Avatar"
          className="image mx-auto rounded-full"
          style={{ width: "10rem", height: "10rem" }}
        />
        <p
          className="p-1 text-sm px-4 shadow-lg rounded-full mx-auto border
          border-gray-800 bg-white dark:bg-gray-900 dark:text-white"
          style={{ transform: "translateY(-30px)" }}
        >
          {value.username || "Username"}
        </p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <Input
            type="text"
            onChange={handleChanges}
            title="Username"
            id="username"
            placeholder="Enter New Username"
            value={value.username}
            className="dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          />
          <Input
            type="text"
            onChange={handleChanges}
            id="bio"
            title="Bio"
            placeholder="Enter New Bio"
            value={value.bio}
            className="dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          />
          <Input
            type="email"
            onChange={handleChanges}
            id="email"
            title="Email"
            placeholder="Enter New Email"
            value={value.email}
            className="dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          />
          <Input
            type="url"
            onChange={handleChanges}
            id="image"
            title="Image"
            placeholder="Enter New Image"
            value={value.image}
            className="dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          />
          <Input
            type="number"
            onChange={handleChanges}
            id="phone"
            title="Phone Number"
            placeholder="Enter New Phone Number"
            value={value.phone}
            className="dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="bg-indigo-600 text-white p-2 px-4 rounded transition-all hover:bg-blue-900 dark:bg-indigo-800
           dark:hover:bg-indigo-700"
        >
          Edit Profile
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditProfile;
