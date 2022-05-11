import express from "express";
import Teachers from "../controller/teacherController.js";

const router = express.Router();

router.get("/", Teachers.getTeachers);

router.post("/", Teachers.registerTeacher);

router.delete("/:id_professor", Teachers.deleteTeacher);

export default router;
