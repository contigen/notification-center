const express = require(`express`);
const App = express();
const PORT = 5000;
const http = require(`http`).Server(App);
const cors = require(`cors`);
const CLIENT_ORIGIN = `http://localhost:3000`;
const fs = require(`fs`);
const socketIO = require(`socket.io`)(http, {
  cors: {
    origin: CLIENT_ORIGIN,
  },
});

let posts = readDataFromFile();

function writeDataToFile(postData) {
  try {
    const oldUsersData = readDataFromFile();
    const newUsersData = [postData, ...oldUsersData];
    // overwrite existing file content
    fs.appendFileSync(`users.json`, JSON.stringify(newUsersData), {
      encoding: `utf-8`,
      flag: `w`,
    });
  } catch (err) {
    console.error(err);
  }
}
function readDataFromFile() {
  try {
    const readData = fs.readFileSync(`users.json`);
    return JSON.parse(readData);
  } catch (err) {
    console.error(err);
  }
}
socketIO.on(`connection`, (socket) => {
  writeToConsole(`A user with ${socket.id} ID has connected`);

  socket.emit(`onLoad`, posts);
  socket.on(`newPostEvt`, (newPost) => {
    posts.unshift(newPost);
    writeDataToFile(newPost);
    posts = readDataFromFile();
    socket.emit(`postsEvt`, posts);
  });
  socket.on(`likedPostEvt`, (postID) => {
    increasePostLike(postID);
    socket.emit(`postsEvt`, posts);
  });
  socket.on("disconnect", () => socket.disconnect());
});
App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use(cors());

App.get(`/api`, (_, res) => res.json({ message: `Hello, I'm on ${PORT}` }));

http.listen(PORT, () => writeToConsole(`Server is up and running on ${PORT}`));

function writeToConsole(message = ``) {
  console.log(message);
}
function getLikedPost(postID) {
  return posts.find((post) => post.id === postID);
}
function increasePostLike(postID) {
  const likedPost = getLikedPost(postID);
  if (likedPost) likedPost.likes++;
}
