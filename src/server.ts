import { httpServer } from "./http";
const PORT = 3000;
const server =
    httpServer.listen(PORT, () => console.log(`App listening on the door ${PORT}`));

process.on('SIGINT', () => {
    server.close();
    console.log('Finished app');
});