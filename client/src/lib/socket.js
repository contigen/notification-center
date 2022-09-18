import socketIO from "socket.io-client";

const SERVER_ORIGIN = `http://localhost:5000`;
export const socket = socketIO.connect(SERVER_ORIGIN);
