import express from "express";
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  findOneEmployee,
  updateEmployee,
} from "../controller/employeeController.js";

const router = express.Router();

router.post("/", createEmployee);

router.get("/", getEmployees);

router.get("/:id_funcionario", findOneEmployee);

router.put("/", updateEmployee);

router.delete("/:id_funcionario", deleteEmployee);

export default router;
