const fs = require('fs');
const Users = require('../models/users');
const Restaurants = require('../models/restaurants');

exports.puchase = async (req, res, next) => {
    try {
        let purchase_data = [];
        let {user_id, restaurant_id, dishName, restaurantName, transactionAmount, transactionDate} = req.body;
        let userInfo = await Users.getUserbyId(user_id);
        // console.log(user_id, userInfo);
        if (userInfo) {
            newcashBalance = userInfo.cashBalance - transactionAmount;
            newpurchaseHistory = {
                dishName: dishName, 
                restaurantName: restaurantName, 
                transactionAmount: transactionAmount, 
                transactionDate: transactionDate
            }
            const restaurant = await Restaurants.getRestaurantbyId(restaurant_id);
            if (restaurant) {
                let userData = await Users.updateUser(user_id, newcashBalance.toFixed(2), newpurchaseHistory);

                if(userData) {
                    restaurant.cashBalance = restaurant.cashBalance + transactionAmount;
                    restaurant.save();
                }

                return res.status(200).json({
                    status: 'success',
                    userData: userData
                    
                });
            } else {
                return res.status(200).json({
                    status: 'failed',
                    message: 'Cannot find restaurant. Please provide a valide restaurant ID.'
                    
                });
            }
        } else {
            return res.status(200).json({
                status: 'failed',
                message: 'Cannot find user. Please provide a valide user ID.'
                
            });
        }
        
    } catch (error) {
        throw error;
    }

}
