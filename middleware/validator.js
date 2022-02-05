const Joi = require('joi');
const moment = require('moment');

const list_all_restaurants = async (req, res, next) => {
    try {

        let reqtime = moment(req.body.time);

        if(!reqtime.isValid()) {
            return res.status(400).json({
                status: 'failed',
                message: 'Please provide a valid datetime (e,g. 2022-12-30 15:30:00)'
            }); 
        } else {
            // on success replace req.body with validated value and trigger next middleware function
            next();
        }
    } catch (err) {
        next(err)
    }

}
const list_top_restaurants = async (req, res, next) => {
    try {
        const schema = Joi.object({
            max_numof_restaurants: Joi.number().required(), 
            unit: Joi.string().valid('more-than','less-than').required(),
            dish_quantity: Joi.number().required(), 
            min_price: Joi.number().required(), 
            max_price: Joi.number().required()
        });

        const options = {
            abortEarly: true, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        // validate request body against schema
        const { error, value } = schema.validate(req.body, options);

        if (error) {
            // on fail return comma separated errors
            console.log(error.message)
            res.status(400).json({
                status: 'failed',
                message: error.message
            })
        } else {
            // on success replace req.body with validated value and trigger next middleware function
            req.body = value;
            next();
        }
    } catch (err) {
        next(err)
    }

}

const search_restaurants = async (req, res, next) => {
    try {
        const schema = Joi.object({
            name: Joi.number().required()
        });

        const options = {
            abortEarly: true, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        // validate request body against schema
        const { error, value } = schema.validate(req.body, options);

        if (error) {
            // on fail return comma separated errors
            console.log(error.message)
            res.status(400).json({
                status: 'failed',
                message: error.message
            })
        } else {
            // on success replace req.body with validated value and trigger next middleware function
            req.body = value;
            next();
        }
    } catch (err) {
        next(err)
    }

}

const puchase = async (req, res, next) => {
    try {
        const schema = Joi.object({
            user_id: Joi.number().required(), 
            restaurant_id: Joi.string().required(), 
            dishName: Joi.string().required(), 
            restaurantName: Joi.string().required(), 
            transactionAmount: Joi.number().required(), 
            transactionDate: Joi.date().required()
        });

        const options = {
            abortEarly: true, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        // validate request body against schema
        const { error, value } = schema.validate(req.body, options);

        if (error) {
            // on fail return comma separated errors
            console.log(error.message)
            res.status(400).json({
                status: 'failed',
                message: error.message
            })
        } else {
            // on success replace req.body with validated value and trigger next middleware function
            req.body = value;
            next();
        }
    } catch (err) {
        next(err)
    }

}

module.exports = {
    list_all_restaurants,
    list_top_restaurants,
    search_restaurants,
    puchase
}