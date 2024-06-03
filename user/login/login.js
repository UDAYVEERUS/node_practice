const { passwordValidate } = require("../../common/password");
const User = require("../../model/userModel");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "itsasecret2341";

const loginPost = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user_response = await User.findOne({
      email: email,
    });
    const passwordComapre = await passwordValidate(
      password,
      user_response.password
    );
    if (!passwordComapre) {
        console.log("Password does not match")
      return res.status(402).json({
        message: "password do not match",
        status: 402,
      });
    }
    const data = {
      user: {
        id: user_response._id,
      },
    };
    const authToken = await jwt.sign(data, JWT_SECRET);
    // console.log("Login Successfully");
    return res.status(201).json({
      message: "Login Successfully",
      token: authToken,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error",
      data: err,
      status: 500,
    });
  }
};

module.exports = loginPost;
