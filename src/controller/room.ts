import { Router } from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../routes/room";

const RoomRouter = Router();

RoomRouter.route('/rooms')
    .get(getRooms);

RoomRouter.route('/rooms/:creator')
    .get(getRoom);

RoomRouter.route('/create')
    .post(createRoom);

RoomRouter.route('/delete/:creator')
    .delete(deleteRoom);

RoomRouter.route('/update/:creator')
    .patch(updateRoom);

export default RoomRouter;