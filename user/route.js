const express = require("express");
const { postUser, getUsers } = require("./controller");
const loginPost = require("./login/login");
const verifyJwt = require("../common/jwt");

const router = express.Router();

router.post("/registration", postUser);
router.post("/login", loginPost);
router.get("/getusers", verifyJwt, getUsers);
module.exports = router;
