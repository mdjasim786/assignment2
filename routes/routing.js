const expess = require("express");
const router = expess.Router();
const apiTaskList = require('../control.js');

const validate = require('../validation');


router.route('/').get(apiTaskList.user_list)          
    .post(validate, apiTaskList.add_user);                          
router.route('/:id').get(apiTaskList.user_detail)     
    .put(apiTaskList.update_detail)                         
    .delete(apiTaskList.delete_user);
module.exports = router;