const operation = require('./model');
const async = require('async');
const apiTaskObject = {
    user_list: async (req, res) => {
        try {
            let userRecord = await operation.userList();          
            if (userRecord)
                res.send(userRecord);
        } catch (error) {
            res.send(error);
        }

    },

    add_user: async (req, res) => {
        let data = req.body;
        try {
            let addRecord = await operation.addUser(data);         
            if (addRecord)
                res.send(addRecord);
        } catch (error) {
            res.send(error);
        }

    },

    user_detail: async (req, res) => {
        let id = req.query.id;
        console.log(id)
        try {
            let userRecord = await operation.userDetail(id);      
            if (userRecord)
                res.send(userRecord);
        } catch (error) {
            res.send(error);
        }
    },

    update_detail: async (req, res) => {
        let id = req.query.id;
        let data = req.body;
        try {
            let updateRecord = await operation.updateDetail(id, data);    
            if (updateRecord)
                res.send(updateRecord);
        } catch (error) {
            res.send(error);
        }
    },

    delete_user: async (req, res) => {
        let id = req.query.id;
        try {
            let deleteRecord = await operation.deleteUser(id);      
            if (deleteRecord)
                res.send(deleteRecord);
        } catch (error) {
            res.send(error);
        }
    }

}


module.exports = apiTaskObject;