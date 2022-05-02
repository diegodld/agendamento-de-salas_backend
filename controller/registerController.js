import connection from "../database/db.js";

function join(req, res) {
  let sql = ` select id_registro Id, professores.nome Professor, salas.nome Sala, data_retirada Data_solicitacao, funcionarios.nome Entregue_por,  data_entrega Data_devolucao, 
    funcionarios.nome Recebido_por, professores.telefone Contato
    from professores
    inner join registros on professores.id_professor = registros.retirado_por join funcionarios on funcionarios.id_funcionario = registros.entregue_por
    and funcionarios.id_funcionario = registros.recebido_por and professores.id_professor = registros.telefone join salas on salas.id_sala = registros.sala`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    let data = result;
    res.json(data);
  });
}

export default join;
