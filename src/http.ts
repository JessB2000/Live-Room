import { app } from "./app";
import http from "http";
import { Server } from "socket.io";


const httpServer = http.createServer(app);

const io = new Server(httpServer);

export {httpServer, io}

