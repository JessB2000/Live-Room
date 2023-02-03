import { app } from "./app";


const PORT = 3000;

const server =
    app.listen(PORT, () => console.log(`App listening on the door ${PORT}`));


process.on('SIGINT', () => {
    server.close();
    console.log('Finished app');
});