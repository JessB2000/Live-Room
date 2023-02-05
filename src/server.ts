const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
type typeUser = {
    name: string,
    id: string
}
type typeRoom = {
    roomId: string,
    userMaster: typeUser,
    movieId: string,
    usersInvited: typeUser[]
}

const dbRoom: typeRoom[] = [];

app.get("/", (req: any, res: any) => {
    res.sendFile("/home/jessica/Documentos/Live-Room-Back-End/front-end/index.html");
});
app.get("/create", (req: any, res: any) => {
    console.log(`create: ${req.que}`)
    const id_user = req.query.userId;
    const id_movie = req.query.movieId;
    const roomId = Math.random().toString();
    console.log(`create id_user: ${id_user}, id_movie: ${id_movie}`)

    dbRoom.push({
        movieId: id_movie,
        roomId: roomId,
        userMaster: id_user,
        usersInvited: []
    })
    return res.send(roomId).status(200);
})
function addUser(id_user: any, roomId: any) {

}
app.get("/enter", (req: any, res: any) => {
    const id_user = req.query.userId;
    const roomId = req.query.roomId;
     console.log(`create id_user: ${id_user}, roomId: ${roomId}`) 
    addUser(id_user, roomId);
    array.forEach((sc) => {
        sc.emit("newUser", id_user);
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