const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    id: {
        type: Number
    },
    cashBalance: {
        type: Number
    },
    name: {
        type: String
    },
    purchaseHistory: {
        type: Array,
    }

});


usersSchema.statics.getUserbyId = async function (user_id) {
    try {
        const restaurant = await Users.findOne({ id: user_id });
        // console.log(restaurantsdb);

        return restaurant;

    } catch (err) {
      throw new Error(err)
    }
};

usersSchema.statics.updateUser = async function (user_id, newcashBalance, newpurchaseHistory) {
    try {
        const user = await Users.findOne( { id: user_id } );
        // console.log(user);
        user.cashBalance = newcashBalance;
        user.purchaseHistory.push(newpurchaseHistory);
        user.save();

        return user;

    } catch (err) {
      throw new Error(err)
    }
};

const Users = mongoose.model("users", usersSchema);

module.exports = Users;