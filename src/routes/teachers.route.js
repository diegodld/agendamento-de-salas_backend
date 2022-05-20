import express from "express";
import {
  getTeachers,
  registerTeacher,
  deleteTeacher,
} from "../controller/teacherController.js";

const router = express.Router();

router.get("/", getTeachers);

router.post("/", registerTeacher);

router.delete("/:id_professor", deleteTeacher);

export default router;
