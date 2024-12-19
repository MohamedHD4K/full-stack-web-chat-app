const get_user = (res, req) => {
  req.send("server");
};

const post_user = (res, req) => {
  res.send("server");
};

export { get_user, post_user };
