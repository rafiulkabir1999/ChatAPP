const express = require("express");
const userRouter = require("./router/user.js");
const { ConnectMongoDB } = require("./config/bdConfig.js");
const bodyParser = require("body-parser");

const app = express();

// parseapplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//accept application/json
app.use(bodyParser.json());

app.use("/user", userRouter);

app.listen(4000, () => {
  try {
    ConnectMongoDB();
    console.log("server is running on port 3000");
  } catch (error) {}
});
