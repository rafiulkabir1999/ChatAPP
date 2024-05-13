const express = require("express");
const {
  getAllUser,
  getAllUserById,
  registerUser,
  deleteUser,
  updateUser,
} = require("../controller/userController.js");
const userRouter = express.Router();

userRouter
  .route("/")
  .get(getAllUser)
  .post(registerUser)
  .delete(deleteUser)
  .put(updateUser);

userRouter.get("/:email", getAllUserById);

// userRouter.get("/", getAllUser);

// // /user
// userRouter.post("/", registerUser);
// userRouter.delete("/", deleteUser);
// userRouter.put("/", deleteUser);

module.exports = userRouter;
