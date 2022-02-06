const users = require("./routes/users");
const restaurants = require("./routes/restaurants");

const expressRoutes = async (appExpress) => {
  appExpress.use(function (req, res, next) {
    next();
  });
  appExpress.use("/api/users", users);
  appExpress.use("/api/restaurants", restaurants);
};

module.exports = expressRoutes;
