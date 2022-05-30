import express from "express";
import {
  getTeachers,
  registerTeacher,
  deleteTeacher,
  updateTeacher,
  findOneTeacher,
} from "../controller/teacherController.js";

const router = express.Router();

router.get("/", getTeachers);

router.get("/:id_professor", findOneTeacher);

router.post("/", registerTeacher);

router.delete("/:id_professor", deleteTeacher);

router.put("/", updateTeacher);

export default router;
