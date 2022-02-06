const users = require("./routes/users");
const restaurants = require("./routes/restaurants");
const url = 'https://backend-glints.herokuapp.com';
const expressRoutes = async (appExpress) => {
  appExpress.use(function (req, res, next) {
    next();
  });
  appExpress.use(`${url}:${process.env.PORT}/api/users`, users);
  appExpress.use(`${url}:${process.env.PORT}/api/restaurants`, restaurants);
};

module.exports = expressRoutes;
