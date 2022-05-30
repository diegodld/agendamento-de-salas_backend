import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  updateRoom,
} from "../controller/roomController.js";

const router = express.Router();

router.get("/", getRooms);

router.post("/", createRoom);

router.delete("/:id_sala", deleteRoom);

router.put("/", updateRoom);

export default router;
