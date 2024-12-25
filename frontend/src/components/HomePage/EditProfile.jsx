import { useEffect, useState } from "react";
import Input from "../Input";

const EditProfile = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    username: "",
    bio: "",
    email: "",
    image: ""
  });

  const handleChanges = ({ target }) => {
    setValue({ ...value, [target.id]: target.value });
  };

  const handleEdit = () => {};

  useEffect(() => {
    !user ? setLoading(true) : setLoading(false);
    user &&
      setValue({
        username: user.username,
        bio: user.bio,
        email: user.email,
        image: user.image
      });
  }, [user]);

  return (
    <div
      style={{ width:"40%"}}
      className="border  p-4 m-4 flex flex-col gap-3 rounded-lg shadow-md bg-white"
    >
      <div className="flex flex-col gap-3">
        <img
          src={value.image || "avatar.png"}
          alt="Avatar"
          className="image mx-auto rounded-full"
          style={{ width: "10rem", height: "10rem" }}
        />
        <p
          className="p-1 text-sm px-4 shadow-lg rounded-full mx-auto border border-gray-800  bg-white"
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
          />
          <Input
            type="text"
            onChange={handleChanges}
            id="bio"
            title="Bio"
            placeholder="Enter New Bio"
            value={value.bio}
          />
          <Input
            type="email"
            onChange={handleChanges}
            id="email"
            title="Email"
            placeholder="Enter New Email"
            value={value.email}
          />
          <Input
            type="Url"
            onChange={handleChanges}
            id="image"
            title="Image"
            placeholder="Enter New Image"
            value={value.image}
          />
        </div>
        <button
          onClick={handleEdit}
          className="bg-indigo-600 text-white p-2 px-4 rounded transition-all hover:bg-blue-900"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
