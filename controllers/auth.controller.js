const Users = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//user Registration controller
exports.registerUser = async (req, res) => {
  try {
    const payload = req.body;

    const userExist = await Users.findOne({ email: payload.email }); //check for user already exist
    if (userExist) {
      return res
        .status(400)
        .send({ message: "An account is already registered with your email" });
    }
    const hashedValue = bcrypt.hashSync(payload.password, 10);
    payload.hashedPassword = hashedValue;

    delete payload.password;
    const newUser = new Users(payload);

    newUser
      .save()
      .then((data) => {
        res.status(201).send({ message: "User registered successfully", data });
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error registering user", err: err.message });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};


//user login controller
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await Users.findOne({ email: email }); //check for user already exist

    if (userExist) {
      if (bcrypt.compareSync(password, userExist.hashedPassword)) {
        const token = jwt.sign({ id: userExist._id }, process.env.SECRET_KEY);
        res.cookie("accessToken", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          expires: new Date(Date.now() + 86400000),
        });
        return res.status(200).send({
          message: "User Logged-in Successfully",
        });
      }
      return res.status(400).send({
        message: "Incorrect Password!!",
        password: password,
      });
    }
    return res.status(403).send({
      message: "This email is not registered",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

//user logout controller
exports.logoutUser = (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.status(200).send({
      message: "User Logged-out Successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
