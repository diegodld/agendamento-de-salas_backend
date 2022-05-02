import express from "express";
import Teachers from "../controller/teacherController.js";

const router = express.Router();

let teacher = [
  {
    nome: "Matheus",
    telefone: "27 98657855",
  },
];

router.get("/", Teachers.getTeachers);

router.post("/", Teachers.registerTeacher);

export default router;
