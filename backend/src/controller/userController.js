const host = "http://localhost:4000/";
const userModel = require("../model/user.js");
const bcrypt = require("bcrypt");

const getAllUserById = async (req, res) => {
  try {
    const data = await userModel.find({ email: req?.params?.email });

    if (data[0]) {
      res.send({
        message: "user by id Found Succesfully",
        data: data,
      });
    } else {
      res.send({
        message: "user not found with that email",
      });
    }
  } catch (error) {
    throw error;
  }
};
const getAllUser = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const skip = (page - 1) * pageSize;
    const data = await userModel.find().skip(skip).limit(pageSize);
    const totalCount = await userModel.countDocuments(); // Get total count of users
    const totalPages = Math.ceil(totalCount / pageSize);
    //const nextPageLink = true ? `${host}user?page=${currentPage + 1}` : null;
    //console.log(nextPageLink);
    const nextPageLink =
      page < totalPages ? `http://localhost:4000/user?page=${page + 1}` : null;
    const prevPageLink =
      page > 1 ? `http://localhost:4000/user?page=${page - 1}` : null;
    res.json({
      name: "get all user from collection",
      data: data.reverse(),
      info: {
        totalCount,
        currentpage: page,
        pageSize,

        pagination: {
          totalPages,
          nextPageLink,
          prevPageLink,
        },
      },
    });
  } catch (error) {}
};

const registerUser = async (req, res) => {
  let { name, email, password, role, dob, gender } = req.body;
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
          dob: new Date(dob),
          role: role,
        });
        const savedUser = await newUser.save();
        return res.status(200).send("User Successfully registered"); // Return statement added
      });
    } else {
      return res.status(409).send("User already exists with this email"); // Return statement added
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

//updateUser

const updateUser = async (req, res) => {
  try {
    let { name, age, gender, password, email, dob } = req.body;
    const updateData = {
      ...(name && { name }),
      ...(email && { email }),
      ...(age && { age }),
      ...(password && { password }),
      ...(gender && { gender }),
      ...(dob && { dob }),
    };

    try {
      const updatedUser = await userModel.findOneAndUpdate(
        { email: req?.query?.email },
        updateData,
        { new: false }
      );
      if (updatedUser) {
        res.send("User updated successfully");
      } else {
        res.send("User not found");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).send("Internal Server Error");
    }
  } catch (error) {
    throw error;
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
  getAllUserById,
  registerUser,
  deleteUser,
  updateUser,
};
