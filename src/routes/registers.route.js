import express from "express";
import register from "../controller/registerController.js";

const router = express.Router();

router.get("/", register);

export default router;
