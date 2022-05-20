import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
} from "../controller/roomController.js";

const router = express.Router();

router.get("/", getRooms);

router.post("/", createRoom);

router.delete("/:id_sala", deleteRoom);

export default router;
