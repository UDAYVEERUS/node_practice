const { passwordGenerate } = require("../common/password");
const User = require("../model/userModel");

const postUser = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;
    const passwordHash = await passwordGenerate(password);

    const user_response = await User.create({
      name,
      email,
      password: passwordHash,
      phone,
    });
    if (user_response) {
      console.log("registered successfully");
      return res.status(201).json({
        message: "User Registered successfuly",
        data: user_response,
        status: 201,
      });
    }
    return res.status(402).json({
      message: "please fill all the details",
      status: 402,
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

const getUsers = async (req, res, next) => {
  try {
    const user_response = await User.find({});
    if (user_response) {
      console.log("Users fetched successfully");
      return res.status(201).json({
        message: "Users fetched successfully",
        data: user_response,
        status: 201,
      });
    }
    return res.status(201).json({
      message: "Unable to fetch users",
      status: 402,
    });
  } catch (Err) {
    console.log(Err);
    return res.status(500).json({
      message: "server error",
      data: Err,
      status: 500,
    });
  }
};

module.exports = { postUser, getUsers };
