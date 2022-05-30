import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  updateRoom,
  findOneRoom,
} from "../controller/roomController.js";

const router = express.Router();

router.get("/", getRooms);

router.get("/:id_sala", findOneRoom);

router.post("/", createRoom);

router.delete("/:id_sala", deleteRoom);

router.put("/", updateRoom);

export default router;
