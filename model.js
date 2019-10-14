const sql = require('./db');
const apiTask = {}
apiTask.userList = () => {
    return new Promise((resolve, reject) => {
        sql.query('select * from  users', (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
apiTask.addUser = (data) => {                                                  //get data(req.body) from  add_student() in app.Controller.js
    return new Promise((resolve, reject) => {
        sql.query('insert into users set ?', data, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve('data inserted successfully');
            }
        });
    });

}

apiTask.userDetail = (id) => {                                                    //get id(req.params.id) from  student_detail() in app.Controller.js
    return new Promise((resolve, reject) => {
        sql.query('select * from  users where id=?', id, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    })
}

apiTask.updateDetail = (id, data, result) => {                                     //get id(req.body.params) and data(req.body) from  update_detail() in app.Controller.js
    return new Promise((resolve, reject) => {
        sql.query('update users set email=? ,phone=?, birthday=? where id=?', [data.email, data.phone, data.birthday, id], (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve('data updated successfully');
            }
        });
    });
}

apiTask.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        sql.query('delete from users where id=?', id, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve('data delete successfully');
            }
        });
    });
}


module.exports = apiTask;