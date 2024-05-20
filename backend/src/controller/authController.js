const userModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const authLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      //find the user from database
      const user = await userModel.find({ email: email });
      console.log(user[0]);
      if (user[0]) {
        const match = await bcrypt.compare(password, user[0]?.password);
        if (match) {
          const privateKey = fs.readFileSync(
            "../backend/src/config//private.key",
            "utf-8"
          );
          //   console.log(privateKey);
          //   const token = jwt.sign(user[0], privateKey, {
          //     algorithm: "RS256",
          //   });
          const token = jwt.sign(
            { name: user[0].name, email: user[0].email },
            privateKey
            // { algorithm: "RS256" },
          );
          res.cookie("type", "admin").send({
            name: user[0]?.name,
            email: user[0]?.email,
            token: token,
            type: user[0]?.role,
          });
        } else {
          res.status(401).send("password doesnot match");
        }
      } else {
        res.status(404).send("user not found");
      }
    }
  } catch (error) {
    console.log(error);
    res.send("server error");
  }
};

const authUser = async (req, res) => {
  try {
    const privateKey = fs.readFileSync(
      "../backend/src/config//private.key",
      "utf-8"
    );
    var decoded = jwt.verify(
      req.headers.authorization.split(" ")[1],
      privateKey
    );
    if (decoded) res.send({ name: decoded.name, email: decoded.email });
    else {
      res.status(400).send("something wrong");
    }
  } catch (error) {
    res.send("something went wrong");
  }
};

module.exports = {
  authLogin,
  authUser,
};
