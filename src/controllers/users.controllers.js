const { parse } = require('dotenv');
const db = require('../config/database');
 

//  Método responsável por listar todos os 'Products':
exports.listAllUsers = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM USUARIOS',
  );
  res.status(200).send(response.rows);
};

// Método responsável por selecionar 'Usuário' pelo 'Id':
exports.findUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query(
    'SELECT * FROM usuarios WHERE id = $1',
    [userId],
  );
  res.status(200).send(response.rows);
};
 
// Método responsável por selecionar 'Usuário' pelo 'Login':
exports.findUserByLogin = async (req, res) => {
  const userLogin = (req.params.login);
  const response = await db.query(
    'SELECT * FROM usuarios WHERE login = $1',
    [userLogin],
  );
  res.status(200).send(response.rows);
};

// Método responsável por Alterar dados do 'Usuário': pelo login
exports.updateUserByLogin = async (req, res) => {
  const userLogin = (req.params.login);
  const {login, senha } = req.body;
  
  const response = await db.query(
    'UPDATE usuarios SET login = $1, senha = $2 WHERE login = $3',
    [ login, senha, userLogin],
  );

  res.status(200).send({ message: 'Usuário Atualizado com sucesso!' });
};

// Método responsável por criar um novo 'Product':
exports.createUsuario = async (req, res) => {
  const { id, login, senha } = req.body;
  const response = await db.query(
    'INSERT INTO usuarios (id, login, senha) VALUES ($1, $2, $3)',
    [id, login, senha],
  );

  res.status(201).send({
    message: 'Usuário cadastrado com sucesso!',
    body: {
      usuario: { id, login, senha },
    },
  });
};

// ==> Método responsável por excluir um 'Usuário' pelo 'login':
exports.deleteUserByLogin = async (req, res) => {
  const userLogin = (req.params.login);
  await db.query('DELETE FROM usuarios WHERE login = $1', 
  [userLogin,]);


  res.status(200).send({ message: 'Usuário deletado com sucesso!', userLogin });
};
