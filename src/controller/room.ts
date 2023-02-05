import { Router } from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../routes/room";

const RoomRouter = Router();

RoomRouter.route('/rooms')
    .get(getRooms);

RoomRouter.route('/rooms/:_id')
    .get(getRoom);

RoomRouter.route('/create')
    .post(createRoom);

RoomRouter.route('/delete/:video')
    .delete(deleteRoom);

RoomRouter.route('/update/:_id')
    .patch(updateRoom);

export default RoomRouter;