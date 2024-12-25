import User from "../models/userModel.js";

const post_user = async (req, res) => {
  const { username, password, phone, email, image } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) return res.status(400).send("the username or password wrong");

    user = new User({ username, password, phone, email, image });
    await user.save();
    console.log("User :", user);
    return res.send({
      "x-token-auth": user.getAuthToken()
    });
  } catch (error) {
    console.log("Error :", error);
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

const UserAuth = { get_users, post_user, post_auth };

export default UserAuth;
