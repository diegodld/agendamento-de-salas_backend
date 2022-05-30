CREATE DATABASE UVC;
USE UVC;
    
CREATE TABLE professores (
id_professor  INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(45),
telefone varchar(15)
);

CREATE TABLE funcionarios (
id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(45)
);

CREATE TABLE salas(
id_sala INT PRIMARY KEY AUTO_INCREMENT,
chave varchar(10),
nome varchar (30)
);

# A tabela "registros" foi criada após a criação das anteriores
CREATE TABLE registros (
id_registro INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
retirado_por INT,
entregue_por INT,
recebido_por INT,
sala INT,
data_retirada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
data_entrega DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

CONSTRAINT fk_professor foreign key (retirado_por) REFERENCES professores (id_professor)  ON DELETE CASCADE
 ON UPDATE CASCADE,
CONSTRAINT fk_funcionario foreign key (entregue_por) REFERENCES funcionarios (id_funcionario)  ON DELETE CASCADE
 ON UPDATE CASCADE,
foreign key (recebido_por) REFERENCES funcionarios (id_funcionario) ON DELETE CASCADE
 ON UPDATE CASCADE,
CONSTRAINT fk_sala foreign key (sala) REFERENCES salas (id_sala)  ON DELETE CASCADE
 ON UPDATE CASCADE
);


