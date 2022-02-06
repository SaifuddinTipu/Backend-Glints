const mongoose = require("mongoose");
const moment = require('moment');

const restaurantsSchema = mongoose.Schema({
    cashBalance: {
        type: Number
    },
    menu: {
        type: Array,
    },
    openingHours: {
        type: Array,
    },
    restaurantName: {
        type: String
    }
});

restaurantsSchema.index({ 
    'restaurantName': "text",
    'menu.dishName': "text"
}, 
{
    name: 'SearchRestaurantorDishes', 
    weights: {
        'restaurantName': 10,
        'menu.dishName': 5
    }
});

restaurantsSchema.statics.getRestaurantbyId = async function (restaurant_id) {
    try {
        const restaurant = await Restaurants.findById(restaurant_id);
        // console.log(restaurantsdb);

        return restaurant;

    } catch (err) {
      throw new Error(err)
    }
};

restaurantsSchema.statics.getRestaurants = async function (dayNo, reqtime) {
    try {
        let restaurants = [];
        let weekdayArray = ['Sun','Mon','Tues', 'Weds','Thurs', 'Fri','Sat'];
        const restaurantsdb = await Restaurants.find({'openingHours': {$elemMatch: 
            { 
                day: weekdayArray[dayNo]
            }
        } });
        // console.log(restaurantsdb);
        restaurantsdb.forEach(element => {
            var openAt = moment(element.openingHours[0].openAt, ["h:mm A"]);
            var closeAt = moment(element.openingHours[0].closeAt, ["h:mm A"]);
            openAt = openAt.date(reqtime.date());
            closeAt = closeAt.date(reqtime.date());
            // console.log(element, reqtime, openAt, closeAt);
            if (reqtime >= openAt && reqtime <= closeAt) {
                // console.log(reqtime, openAt, closeAt);
                var obj = {};
                obj['_id'] = element._id;
                obj['restaurantName'] = element.restaurantName;
                restaurants.push(obj);
            }
        });
        return restaurants;

    } catch (err) {
      throw new Error(err)
    }
};

restaurantsSchema.statics.getTopRestaurants = async function (max_numof_restaurants, unit, dish_quantity, min_price, max_price) {
    try {
        let restaurants = [];
        let expression;
        // console.log(typeof Number(min_price));
        if(unit == 'more-than') {
            unit = '>';
            expression = {
                $gt:[{
                    $size:"$menu"
                }, dish_quantity]
            };
        } else if(unit == 'less-than') {
            unit = '<';
            expression = {
                $lt:[{
                    $size:"$menu"
                }, dish_quantity]
            };
        }

        const restaurantsdb = await Restaurants.find(
            { 
                $expr: expression,
                menu: {
                    $elemMatch: {
                        'price': {
                            $gte: Number(min_price),
                            $lte: Number(max_price),
                        }
                    }
                }
            }
        ).limit(max_numof_restaurants);
        // console.log(restaurantsdb);
        restaurantsdb.forEach(element => {
            var obj = {};
            obj['_id'] = element._id;
            obj['restaurantName'] = element.restaurantName;
            restaurants.push(obj);
        });  
        
        return restaurants;

    } catch (err) {
      throw new Error(err)
    }
};


restaurantsSchema.statics.searchRestaurants = async function (name) {
    try {
        let restaurants = [];
        
        const restaurantsdb = await Restaurants.find(
            {
                $text: { $search: name, $caseSensitive: false},
            },
            { score: { $meta: 'textScore' } 
        })
        .sort({ score: { $meta: 'textScore' } });
        // console.log(restaurantsdb);
        restaurantsdb.forEach(element => {
            var obj = {};
            obj['_id'] = element._id;
            obj['restaurantName'] = element.restaurantName;
            obj['menu'] = element.menu;
            restaurants.push(obj);
        }); 
        return restaurants;

    } catch (err) {
      throw new Error(err)
    }
};


const Restaurants = mongoose.model("restaurants", restaurantsSchema);

module.exports = Restaurants;