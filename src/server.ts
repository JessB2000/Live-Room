import express from "express"
import http from "http"; 
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server);
import { RoomModel } from "./entity/room";
import {dbConnection} from "./config/db"
import RoomRouter from "./controller/room";
import { deleteRoom } from "./routes/room";
const dbRoom = RoomModel;

app.get("/", (req: any, res: any) => {
    res.sendFile("/home/jessica/Documentos/Live-Room-Back-End/front-end/index.html");
});
app.get("/create", (req: any, res: any) => {
    const nameRoom = req.query.nameRoom;
    const linkVideo = req.query.linkVideo; 
    const roomId = Math.random().toString();
    console.log(`create room nameRoom: ${nameRoom}, roomId: ${roomId}`)
    dbRoom.create({
        idRoom: roomId, 
        creator: nameRoom,
        video: linkVideo
    })
    return res.send({roomId:roomId}).status(200);
})

app.get("/enter", async (req: any, res: any) => {
    const roomId = req.query.roomId;
    const room =  await dbRoom.collection.findOne({idRoom : roomId})
    console.log(room);
    if (room != null){
        return res.json(room).status(200);
    }
    else{
        return res.json().status(404);
    }
})

function removeRoom(roomId: any){
    dbRoom.collection.deleteOne({idRoom : roomId})
}
app.get("/delete", (req: any, res: any) => {
    const roomId = req.query.roomId;
    console.log(`deleted room roomId: ${roomId}`)
    removeRoom(roomId);
    array.forEach((sc) => {
        sc.emit("removeRoom", roomId);
    })
   
})

const array: any[] = []
io.on("connect", (socket: any) => {
    socket.emit("connection", socket.id);
    array.push(socket);
   
});
dbConnection(); 

app.use('/room', RoomRouter);
app.use('/', (req:any, res:any) => res.send('Video room api'));

server.listen(3000, () => {
    console.log("listening on *:3000");
});