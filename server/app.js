require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const userController = require("./controller/userController");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
const port = 3000;
var cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/login");
app.post("/login/google", userController.googleLogin);

io.on("connection", (socket) => {
  // console.log('welcome to socket ', socket.id);
  socket.emit("message", "hello dunia ku");

  socket.on("count", (args) => {
    io.emit("result", args);
  });

  if (socket.handshake.auth.username) {
    users.push({ id: socket.id, username: socket.handshake.auth.username });
  }

  socket.emit("online:users", users);

  socket.on("disconnect", () => {
    users = users.filter((item) => item.id !== socket.id);
    socket.emit("online:users", users);
  });

  socket.on("message", (args) => {
    io.emit("new:message", args);
  });

  console.log(users);
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
