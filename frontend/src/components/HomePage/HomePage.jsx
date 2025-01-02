import { useContext, useEffect, useState } from "react";
import EditProfile from "./EditProfile";
import UserContext from "../../contexts/UserContext";

const HomePage = () => {
  const { user } = useContext(UserContext);
  const [value, setValue] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    image: ""
  });

  const handelChanges = ({ target }) => {
    setValue({ ...value, [target.id]: target.value });
  };

  const handelEdit = () => {};

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="flex justify-center gap-5 w-full relative bg-gray-100 dark:bg-gray-900">
      <EditProfile
        user={user}
        onChange={handelChanges}
        value={value}
        onEdit={handelEdit}
      />
    </div>
  );
};

export default HomePage;
