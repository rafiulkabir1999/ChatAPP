const express = require("express");
const userRouter = require("./router/user.js");
const authRouter = require("./router/authRouter.js");
const { ConnectMongoDB } = require("./config/bdConfig.js");
const bodyParser = require("body-parser");
const chatRouter = require("./router/chatRouter.js");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
app.use(cors());
// parseapplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//accept application/json
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);
// app.use("/chat", chatRouter);

io.on("connection", (socket) => {
  socket.on("text", ({ room, message }) => {
    io.to(room).emit("message", message);
  });

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(4000, () => {
  try {
    ConnectMongoDB();
    console.log("server is running on port 3000");
  } catch (error) {}
});
