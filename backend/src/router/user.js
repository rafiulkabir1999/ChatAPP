const express = require("express");
const {
  getAllUser,
  registerUser,
  deleteUser,
} = require("../controller/userController.js");
const userRouter = express.Router();

userRouter.get("/", getAllUser);

// /user
userRouter.post("/", registerUser);
userRouter.delete("/", deleteUser);

module.exports = userRouter;
