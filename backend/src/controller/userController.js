const userModel = require("../model/user.js");
const bcrypt = require("bcrypt");
const getAllUser = async (req, res) => {
  try {
    const data = await userModel.find();
    res.send({
      name: "get all user from collection",
      data: data,
    });
  } catch (error) {}
};

const registerUser = async (req, res) => {
  try {
    let { name, email, password, confirm_password, gender } = req.body;
    try {
      const check_user = await userModel.findOne({ email: email }); // Finding user by email
      if (!check_user) {
        bcrypt.hash(password, 10, async function (err, hash) {
          if (err) {
            throw err;
          }
          const newUser = new userModel({
            name: name,
            email: email,
            password: hash,
            gender: gender,
          });
          const savedUser = await newUser.save();
          res.send("User registration done");
        });
      } else {
        res.send({
          message: "User already exists with this email",
        });
      }
    } catch (error) {
      // Handle any errors that occur during this process
      console.error("Error occurred:", error);
      res.status(500).send("Internal Server Error");
    }
  } catch (error) {
    // Handle any errors that occur during this process
    console.error("Error occurred:", error);
  }
};

//Delete user by Email
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findOneAndDelete({
      email: req.query.email,
    });
    if (deletedUser) {
      // User found and deleted
      res.send("User deleted successfully");
    } else {
      // No user found with the provided email
      res.send("User not found");
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllUser,
  registerUser,
  deleteUser,
};
