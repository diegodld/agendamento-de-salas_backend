import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let users = [];
app.get("/", (req, res) => {
  res.send("Home");
});
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

app.listen(4000, () => console.log("servidor rodando em localhost:4000"));
