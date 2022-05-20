import connection from "../database/db.js";

const sqlSelect = (res) => {
  let sql = "SELECT * FROM funcionarios ORDER BY nome";
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      let employees = result;
      return res.json(employees);
    }
  });
};

const sqlInsert = (req, res) => {
  let sql = "INSERT INTO funcionarios (nome, telefone) VALUES (?,?)";
  connection.query(sql, [req.body.nome, req.body.telefone], (err, result) => {
    if (err) throw err;
  });
  res.sendStatus(200);
};

const sqlDelete = (req, res) => {
  let sql = `DELETE FROM funcionarios WHERE id_funcionario = ${req.params.id_funcionario}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  res.sendStatus(200);
};

const createEmployee = (req, res) => {
  sqlInsert(req, res);
};

const getEmployees = (req, res) => {
  sqlSelect(res);
};

const deleteEmployee = (req, res) => {
  sqlDelete(req, res);
};
export { createEmployee, getEmployees, deleteEmployee };
