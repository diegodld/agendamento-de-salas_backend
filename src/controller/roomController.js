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
  let sql = "INSERT INTO salas (nome, id_sala) VALUES (?,?)";
  connection.query(sql, [req.body.nome, req.body.id_sala], (err, result) => {
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

const getRooms = (req, res) => {
  sqlSelect(res);
};

const createRoom = (req, res) => {
  sqlInsert(req, res);
};

const deleteRoom = (req, res) => {
  sqlDelete(req, res);
};

export { getRooms, createRoom, deleteRoom };
