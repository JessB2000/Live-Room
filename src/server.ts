const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
/*type typeUser = {
    name: string,
    id: string
}*/
type typeRoom = {
    nameRoom: string,
    //userMaster: typeUser,
    roomId: string
    //usersInvited: typeUser[]
}

const dbRoom: typeRoom[] = [];

app.get("/", (req: any, res: any) => {
    res.sendFile("/home/jessica/Documentos/Live-Room-Back-End/front-end/index.html");
});
app.get("/create", (req: any, res: any) => {
    const nameRoom = req.query.nameRoom;
    const roomId = Math.random().toString();
    console.log(`create room nameRoom: ${nameRoom}, roomId: ${roomId}`)
    dbRoom.push({
        nameRoom: nameRoom,
        roomId: roomId
    })
    return res.send(roomId).status(200);
})
function deleteRoom(roomId: any){
   
}
app.get("/delete", (req: any, res: any) => {
    const roomId = req.query.roomId;
    console.log(`deleted room roomId: ${roomId}`)
    deleteRoom(roomId);
    array.filter((sc) => {
        sc.emit("removeRoom", roomId);
    })

    return res.send([]).status(200);
})

const array: any[] = []
io.on("connect", (socket: any) => {
    socket.emit("connection", socket.id);
    array.push(socket);
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});