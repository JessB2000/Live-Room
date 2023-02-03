import { Router } from "express";
import { createRoom, deleteRoom, updateRoom } from "../routes/room";

const RoomRouter = Router();

RoomRouter.route('/create')
    .post(createRoom);

RoomRouter.route('/delete/:creator')
    .delete(deleteRoom);

RoomRouter.route('/update/:creator')
    .patch(updateRoom);

export default RoomRouter;