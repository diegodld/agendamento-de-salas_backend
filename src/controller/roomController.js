import connection from "../database/db.js";

const sqlSelect = (res) => {
  let sql = "SELECT * FROM salas ORDER BY nome";
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      return res.json(result);
    }
  });
};

const sqlInsert = (req, res) => {
  let sql = "INSERT INTO salas (nome, chave) VALUES (?,?)";
  connection.query(sql, [req.body.nome, req.body.chave], (err, result) => {
    if (err) throw err;
  });
  res.sendStatus(200);
};

const sqlDelete = (req, res) => {
  let sql = `DELETE FROM salas WHERE id_sala = ${req.params.id_sala}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  res.sendStatus(200);
};

const sqlUpdate = (req, res) => {
  let sql = `UPDATE salas 
  SET nome = '${req.body.nome}', chave='${req.body.chave}' 
  WHERE id_sala = ${req.body.id_sala}`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ message: "Atualizado com sucesso!", result });
  });
};

const getRooms = (req, res) => {
  sqlSelect(res);
};

const createRoom = (req, res) => {
  sqlInsert(req, res);
};

const updateRoom = (req, res) => {
  sqlUpdate(req, res);
};

const deleteRoom = (req, res) => {
  sqlDelete(req, res);
};

export { getRooms, createRoom, deleteRoom, updateRoom };
