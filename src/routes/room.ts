import { Request, Response } from 'express';
import { RoomModel } from '../entity/room';

export async function getRooms(req: Request, res: Response) {
    const room =  await RoomModel.find();
    return (res.json({data:room}));
}

export async function getRoom(req: Request, res: Response) {
    const room = await RoomModel.findOne({creator: req.params._id});
    if (!room) return (res.status(500).json({ msg: "Room not found" }));
    return (res.json({data:room}));
}
export async function createRoom(req: Request, res: Response) {
    const room = await RoomModel.create(req.body);
    if (!room.creator) {
        return (res.status(422).json({ msg: "Creator is required" }));
    }
    if (!room.video) {
        return (res.status(422).json({ msg: "Video is required" }));
    }
    return (res.json({
        error: false,
        msg: "Room created successfully",
        data: room,
    }));
}

export async function deleteRoom(req: Request, res: Response) {
   const room =  await RoomModel.findOneAndDelete({creator:req.params._id});
    if (!room) return (res.status(500).json({ msg: "Room not found" }));
    return (res.json({
        error: false,
        message: "Room deleted successfully"
    }));
}

export async function updateRoom(req: Request, res: Response) {
    await RoomModel.findOneAndUpdate({ creator: req.body.creator }, { $set: { video: req.body.video } });
    try {
        return (res.json({
            error: false,
            message: "Video updated successfully"
        }))
    } catch (error) {
        console.log(error);
    }
}

