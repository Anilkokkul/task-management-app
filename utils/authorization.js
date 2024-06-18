const jwt = require("jsonwebtoken");

exports.isAuth = (req, res, next) => {
  const cookies = req.cookies;
  console.log(cookies);
  if (cookies.accessToken) {
    const obj = jwt.verify(cookies.accessToken, process.env.SECRET_KEY);
    console.log(obj);
    if (!obj.id) {
      res.status(401).json({ message: "Invalid token please try re-login" });
    }
    return next();
  }
  res.status(401).send({
    message: "Unauthorized need to login",
  });
};
