const expess = require("express");
const router = expess.Router();
const crudApi = require('../control.js');

const validate = require('../validation');


router.get('/users/userList', crudApi.user_list)          
router.post('/users/addUser',validate, crudApi.add_user);                          
router.get('/users/userList/:id', crudApi.user_detail)     
router.put('/users/updateUser/:id', crudApi.update_detail)                         
router.delete('/users/deleteUser/:id', crudApi.delete_user);
module.exports = router;