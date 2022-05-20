import express from "express";
import cors from "cors";
import teacherRouter from "./routes/teachers.route.js";
import registerRouter from "./routes/registers.route.js";
import employeeRouter from "./routes/employee.route.js";
import roomRouter from "./routes/rooms.route.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Home");
});

app.use("/teachers", teacherRouter);

app.use("/registers", registerRouter);

app.use("/employees", employeeRouter);

app.use("/rooms", roomRouter);

export default app;
