const socket = io(); // usuário se conecta a aplicação

const urlSearch = new URLSearchParams(window.location.search); //informações que o usuário irá receber
const username = urlSearch.get("nameC"); // nome
const myRoom = urlSearch.get("linkV") // link do vídeo

// emit => emitir iformação

// on => escutando alguma informação



const room = {
    roomId: "12012",
    userMaster: "1720",
    movieId: "2520",
    timeMovie: "2000",
    usersInvited: [
        {
            id: "1724",
        },
    ],
};

const newRoom = {
    roomId: "120120",
    userMaster: "17200",
    movieId: "https://www.youtube.com/embed/qQeGOVQIZQQ",
    timeMovie: "20000",
    usersInvited: [
        {
            id: "17240",
        },
    ],
};

const setMovie = (link) => {
    document.getElementById("video").setAttribute("src", link);
};

const setTimeMovie = () => { };

const addUser = (user) => {
    const li = document.createElement("li");
    li.innerHTML = `Usuário: ${user}`
    li.setAttribute("id", user);
    document.getElementById("users").appendChild(li);
};

const removeUser = (user) => {
   // document.getElementById(user).remove(); 
 };

const updateRoom = (room, newRoom) => {
    newRoom.movieId != room.movieId && setMovie(newRoom.movieId);

    newRoom.timeMovie != room.timeMovie && setTimeMovie(newRoom.timeMovie);

    room.usersInvited.forEach((user) => {
        if (newRoom.usersInvited.find((us) => us.id == user.id) == null) {
            removeUser(user.id);
        }
    });

    newRoom.usersInvited.forEach((user) => {
        if (room.usersInvited.find((us) => us.id == user.id) == null) {
            addUser(user.id);
        }
    });
};

updateRoom(room, newRoom); 