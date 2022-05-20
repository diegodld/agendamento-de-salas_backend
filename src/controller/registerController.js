import connection from "../database/db.js";

function join(req, res) {
  let sql = ` select id_registro Id, professores.nome Professor, salas.nome Sala, date_format(data_retirada,'%d/%m/%Y às %Hh%i')  Data_solicitação, funcionarios.nome Entregue_por, date_format(data_entrega,'%d/%m/%Y às %Hh%i')  Data_devolução, 
  funcionarios.nome Recebido_por, professores.telefone Contato
  from professores
  inner join registros on professores.id_professor = registros.retirado_por join funcionarios on funcionarios.id_funcionario = registros.entregue_por
  and funcionarios.id_funcionario = registros.recebido_por join salas on salas.id_sala = registros.sala`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    let data = result;
    res.json(data);
  });
}

export default join;
