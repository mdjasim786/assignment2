const express = require('express');
const app = express();
const port = 4000;
const routes = require('./routes/routing');
//const sql = require('./db');
const bodyParser = require('body-parser');


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());      
app.use('/adduser', routes);
app.use('/users', routes);


module.exports = app;
app.listen(port,()=>{
    console.log('app is running on port',port);
})
