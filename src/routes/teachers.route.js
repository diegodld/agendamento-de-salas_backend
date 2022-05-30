import express from "express";
import {
  getTeachers,
  registerTeacher,
  deleteTeacher,
  updateTeacher,
} from "../controller/teacherController.js";

const router = express.Router();

router.get("/", getTeachers);

router.post("/", registerTeacher);

router.delete("/:id_professor", deleteTeacher);

router.put("/", updateTeacher);

export default router;
