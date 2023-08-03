const router = require('express-promise-router')();
const usersController = require('../controllers/users.controllers');

//Definindo as rotas do CRUD - 'usuarios':
 

// Rota responsável por listar todos os 'usuários': (GET): localhost:3000/api/usuarios
router.get('/usuarios', usersController.listAllUsers);

//  Rota responsável por lista usuários por ID (GET): localhost:3000/api/usuarios
router.get('/usuarios/:id', usersController.findUserById);

// Rota responsável por lista usuários por Login (GET): localhost:3000/api/usuarios
router.get('/usuario/:login', usersController.findUserByLogin);

// Rota responsável por atualizar 'Usuário' pelo 'login': (PUT): localhost: 3000/api/usuario/:login
router.put('/usuario/:login', usersController.updateUserByLogin);

// Rota responsável por criar um novo 'Usuário': (POST): localhost:3000/api/usuarios
router.post('/usuarios', usersController.createUsuario);
 
// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
router.delete('/usuario/:login', usersController.deleteUserByLogin);

module.exports = router;