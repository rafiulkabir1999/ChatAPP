const express = require("express");
const { authLogin, authUser } = require("../controller/authController.js");

const authRouter = express.Router();

authRouter.route("/").get(authUser).post(authLogin);
//  .ge('/' , authLogin)

module.exports = authRouter;
