//const Joi = require('joi');
var validate = ((req, res, next) => {

    // require the Joi module
    const Joi = require('joi');

    // fetch the request data
    const data = req.body;
console.log(data);
    // define the validation schema
    const schema = Joi.object().keys({

        // email is required
        // email must be a valid email string
        //email: Joi.string().email().required(),
        email: Joi.string().regex(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/).required(),


        // phone is required
        // and must be a string of the format XXX-XXX-XXXX
        // where X is a digit (0-9)
        phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),

        // birthday is not required
        // birthday must be a valid ISO-8601 date
        // dates before Jan 1, 2014 are not allowed
        birthday: Joi.date().max('1-1-2004').iso(),
        //birthday: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/).required(),

    });

    // validate the request data against the schema
    Joi.validate(data, schema, (err, value) => {

        
        

        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: data
            });
        } else {
            // send a success response if validation passes
            // attach the random ID to the data response
           
            next();
        }

    });

});
module.exports = validate;