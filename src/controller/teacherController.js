import connection from "../database/db.js";

const sqlSelect = (res) => {
  let sql = "SELECT * FROM professores ORDER BY nome";
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      let teachers = result;
      return res.json(teachers);
    }
  });
};

const sqlInsert = (req, res) => {
  let sql = "INSERT INTO professores (nome, telefone) VALUES (?,?)";
  connection.query(sql, [req.body.nome, req.body.telefone], (err, result) => {
    if (err) throw err;
  });
  res.sendStatus(200);
};

const sqlDelete = (req, res) => {
  let sql = `DELETE FROM professores WHERE id_professor = ${req.params.id_professor}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  res.sendStatus(200);
};

const sqlUpdate = (req, res) => {
  let sql = `UPDATE professores 
  SET nome = '${req.body.nome}', telefone='${req.body.telefone}' 
  WHERE id_professor = ${req.body.id_professor}`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ message: "Atualizado com sucesso!", result });
  });
};

function getTeachers(req, res) {
  return sqlSelect(res);
}

function registerTeacher(req, res) {
  return sqlInsert(req, res);
}

function updateTeacher(req, res) {
  return sqlUpdate(req, res);
}

function deleteTeacher(req, res) {
  return sqlDelete(req, res);
}

export { getTeachers, registerTeacher, updateTeacher, deleteTeacher };
