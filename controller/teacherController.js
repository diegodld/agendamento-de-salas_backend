import connection from "../database/db.js";

async function getTeachers(req, res) {
  connection.connect();
  let sql = "SELECT * FROM professores";
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      let teachers = result;
      res.json(teachers);
    }
  });
}

async function registerTeacher(req, res) {
  connection.connect();
  let sql = "INSERT INTO professores (nome, telefone) VALUES (?,?)";

  connection.query(sql, [req.body.nome, req.body.telefone], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}
export default { getTeachers, registerTeacher };
