import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import teacherRouter from "./routes/teachers.js";
import registerRouter from "./routes/registers.js";
import "dotenv/config";

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let users = [];
app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/teachers", teacherRouter);

app.use("/registers", registerRouter);

app.post("/cadastrar", (req, res) => {
  console.log("dados recebidos..");
  users.push({
    nome: req.body.nome,
    tel: req.body.telefone,
  });
  res.json({ message: "Ok", dados: users });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(port, () => console.log(`servidor rodando em localhost:${port}`));
