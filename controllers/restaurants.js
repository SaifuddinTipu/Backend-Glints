const mongoose = require('mongoose');
const moment = require('moment');
const Restaurants = require('../models/restaurants');

exports.list_all_restaurants = async (req, res, next) => {
    try {
        let {time} = req.body;

        var dayNo =  moment(time).day();
        var reqtime = moment(time);
        console.log(dayNo, reqtime);
        const restaurants = await Restaurants.getRestaurants(dayNo, reqtime);

        return res.status(200).json({
            status: 'success',
            total: restaurants.length,
            restaurants: restaurants,
        });
    } catch (error) {
        console.log(error);
    }
}
exports.list_top_restaurants = async (req, res, next) => {
    try {
        let {max_numof_restaurants, unit, dish_quantity, min_price, max_price} = req.body;
        if(!unit) {
            return res.status(400).json({
                status: 'failed',
                message: 'Please state a unit e,g. more-than or less-than'
            }); 
        }
        const restaurants = await Restaurants.getTopRestaurants(max_numof_restaurants, unit, dish_quantity, min_price, max_price);

        return res.status(200).json({
            status: 'success',
            total: restaurants.length,
            restaurants: restaurants,
        });

    } catch (error) {
        console.log(error);
    }
}

exports.search_restaurants = async (req, res, next) => {
    try {
        let {name} = req.body;
        const restaurants = await Restaurants.searchRestaurants(name);

        return res.status(200).json({
            status: 'success',
            total: restaurants.length,
            restaurants: restaurants,
        });
    } catch (error) {
        
    }
}