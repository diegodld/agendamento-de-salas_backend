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

const sqlSelectOne = (req, res) => {
  let sql = `SELECT * FROM funcionarios WHERE id_funcionario =${req.params.id_funcionario} `;
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
    res.send({ message: "Adicionado com sucesso!", result });
  });
};

const sqlDelete = (req, res) => {
  let sql = `DELETE FROM funcionarios WHERE id_funcionario = ${req.params.id_funcionario}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ message: "Deletado com sucesso!", result });
  });
};

const sqlUpdate = (req, res) => {
  let sql = `UPDATE funcionarios 
  SET nome = '${req.body.nome}', telefone='${req.body.telefone}' 
  WHERE id_funcionario = ${req.body.id_funcionario}`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ message: "Atualizado com sucesso!", result });
  });
};

const createEmployee = (req, res) => {
  sqlInsert(req, res);
};

const getEmployees = (req, res) => {
  sqlSelect(res);
};

const updateEmployee = (req, res) => {
  sqlUpdate(req, res);
};

const deleteEmployee = (req, res) => {
  sqlDelete(req, res);
};

const findOneEmployee = (req, res) => {
  sqlSelectOne(req, res);
};
export {
  createEmployee,
  getEmployees,
  deleteEmployee,
  findOneEmployee,
  updateEmployee,
};
