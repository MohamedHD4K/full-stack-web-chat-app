import jwt from "jsonwebtoken"

const auth_middlewares = (req, res, next) => {
  const token = req.header("x-token-auth");

  if (!token) {
    return res.status(401).send("Unauthorized, please login first");
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};

export default auth_middlewares
