import { app } from "./app";
import http from "http";
import { Server } from "socket.io";
import path from "path"; 
import express from "express";

app.use(express.static(path.join(__dirname, "")))

const httpServer = http.createServer(app);

const io = new Server(httpServer);

export {httpServer, io}

