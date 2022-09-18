const express = require(`express`);
const App = express();
const PORT = 5000;
const http = require(`http`).Server(App);
const cors = require(`cors`);
const CLIENT_ORIGIN = `http://localhost:3000`;
const socketIO = require(`socket.io`)(http, {
  cors: {
    origin: CLIENT_ORIGIN,
  },
});

socketIO.on(`connection`, (socket) => {
  writeToConsole(`A user with ${socket.id} ID has connected`);
  socket.on("disconnect", () => writeToConsole("A user has disconnected"));
});
App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use(cors());

App.get(`/api`, (_, res) => res.json({ message: `Hello, I'm on ${PORT}` }));

App.post(`/post`, () => {});

http.listen(PORT, () => writeToConsole(`Server is up and running on ${PORT}`));

function writeToConsole(message = ``) {
  console.log(message);
}
