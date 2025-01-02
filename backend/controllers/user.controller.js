import User from "../models/user.model.js";

const post_user = async (req, res) => {
  const { username, password, phone, email, image } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) return res.status(400).send("the username or password wrong");

    if (!username) return res.status(400).send("The username is required");
    if (!email) return res.status(400).send("The email is required");
    if (!password) return res.status(400).send("The password is required");
    if (!phone) return res.status(400).send("The phone number is required");

    user = new User({ username, password, phone, email, image });
    await user.save();
    console.log("User :", user);
    return res.send({
      "x-token-auth": user.getAuthToken()
    });
  } catch (error) {
    res.status(400).send(error.message)
  }
};

const post_auth = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username) return res.status(400).send("the username required");
    if (!password) return res.status(400).send("the password required");

    const user = await User.findOne({ username });
    if (!user) return res.status(401).send("the username or password is wrong");

    const isMatched = await user.checkPassword(password);
    if (!isMatched)
      return res.status(401).send("the username or password is wrong");

    return res.status(200).send({
      "x-token-auth": user.getAuthToken(),
      user
    });
  } catch (error) {
    console.log(error);
  }
};

const get_users = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

const put_user = async (req, res) => {
  const { id, username, email, bio, image, phone } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      { username, email, bio, image, phone },
      {
        new: true,
        upsert: true
      }
    );
    console.log(user);
    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.send("There is sonething is wrong");
  }
};

const delete_user = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const user = await User.findOneAndDelete({ _id: id });
    console.log("Deleted", user);
    return res.send("Deleted");
  } catch (error) {
    console.log(error);
  }
};

const UserAuth = { get_users, post_user, post_auth, put_user, delete_user };

export default UserAuth;
