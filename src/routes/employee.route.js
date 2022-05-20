import express from "express";
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
} from "../controller/employeeController.js";

const router = express.Router();

router.post("/", createEmployee);

router.get("/", getEmployees);

router.delete("/:id_funcionario", deleteEmployee);

export default router;
